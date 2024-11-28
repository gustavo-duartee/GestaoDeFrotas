using DriveSync.Model;
using DriveSync.Service;
using DriveSync.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DriveSync.Controllers
{
    //[Authorize("Authorize")]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAuthenticate _authentication;

        public AccountController(IConfiguration configuration, IAuthenticate authentication)
        {
            _configuration = configuration ??
                throw new ArgumentNullException(nameof(configuration));

            _authentication = authentication ??
                throw new ArgumentNullException(nameof(authentication));
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult> CreateUser([FromBody] RegisterModel model)
        {
            if (model.Senha != model.ConfirmaSenha)
            {
                ModelState.AddModelError("ConfirmaSenha", "As senhas não conferem");
                return BadRequest(ModelState);
            }

            var result = await _authentication.RegisterUser(model.Email, model.Senha, model.Nome, model.Telefone, model.Cargo);

            if (result)
            {
                return Ok(new { Message = $"Usuário {model.Nome} criado com sucesso" });
            }
            else
            {
                ModelState.AddModelError("CriarUsuario", "Registro inválido.");
                return BadRequest(ModelState);
            }
        }

        [HttpPost("LoginUser")]
        public async Task<ActionResult<UserToken>> Login([FromBody] LoginModel userInfo)
        {
            var result = await _authentication.Authenticate(userInfo.Email, userInfo.Senha);

            if (result)
            {
                return GenerateToken(userInfo);
            }
            else
            {
                ModelState.AddModelError("LoginUser", "Login inválido.");
                return BadRequest(ModelState);
            }
        }

        private ActionResult<UserToken> GenerateToken(LoginModel userInfo)
        {
            var claims = new[]
            {
                new Claim("email", userInfo.Email),
                new Claim("meuToken", "token DriveSync"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:key"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddHours(8);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: expiration,
                signingCredentials: creds);

            return new UserToken()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration,
            };
        }

        [HttpGet("GetUser/{userId}")]
        public async Task<ActionResult<ApplicationUser>> GetUserById(string userId)
        {
            var user = await _authentication.GetUserByIdAsync(userId);

            if (user == null)
            {
                return NotFound(new { Message = "Usuário não encontrado." });
            }

            return Ok(user);
        }

        [HttpGet("GetAllUsers")]
        public async Task<ActionResult<List<ApplicationUser>>> GetAllUsers()
        {
            var users = await _authentication.GetAllUsersAsync();
            return Ok(users);
        }

        [HttpGet("GetUserByEmail/{email}")]
        public async Task<ActionResult<ApplicationUser>> GetUserByEmail(string email)
        {
            var user = await _authentication.GetUserByEmailAsync(email);  // Alteração aqui
            if (user == null)
            {
                return NotFound(new { Message = "Usuário não encontrado." });
            }

            return Ok(new
            {
                user.Id,
                user.Email,
                user.Nome,
                user.Telefone,
                user.Cargo,
            });
        }
        [HttpDelete("Delete/{userId}")]
        public async Task<ActionResult> DeleteUser(string userId)
        {
            // Verifica se o usuário existe
            var user = await _authentication.GetUserByIdAsync(userId);

            if (user == null)
            {
                return NotFound(new { Message = "Usuário não encontrado." });
            }

            // Chama o método DeleteUser para deletar o usuário
            var result = await _authentication.DeleteUser(userId); // Chama o método DeleteUser

            if (result)
            {
                return Ok(new { Message = "Usuário deletado com sucesso." });
            }
            else
            {
                return BadRequest(new { Message = "Erro ao deletar o usuário." });
            }
        }




    }
}

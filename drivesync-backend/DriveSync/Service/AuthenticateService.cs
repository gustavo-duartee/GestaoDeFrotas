using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using DriveSync.Model; // Certifique-se de importar o namespace do ApplicationUser

namespace DriveSync.Service
{
    public class AuthenticateService : IAuthenticate
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthenticateService(SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        // Método para autenticar o usuário
        public async Task<bool> Authenticate(string email, string senha)
        {
            var result = await _signInManager.PasswordSignInAsync(email, senha, false, lockoutOnFailure: false);
            return result.Succeeded;
        }

        // Método para fazer logout do usuário
        public async Task Logout()
        {
            await _signInManager.SignOutAsync();
        }

        // Método para registrar um novo usuário
        public async Task<bool> RegisterUser(string email, string senha, string nome, string telefone, string cargo)
        {
            var appUser = new ApplicationUser
            {
                UserName = email,
                Email = email,
                Nome = nome,
                Telefone = telefone,
                Cargo = cargo
            };

            var result = await _userManager.CreateAsync(appUser, senha);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(appUser, isPersistent: false);
            }

            return result.Succeeded;
        }

        public async Task<ApplicationUser> GetUserByIdAsync(string userId)
        {
            return await _userManager.FindByIdAsync(userId);
        }

        public async Task<List<ApplicationUser>> GetAllUsersAsync()
        {
            return await _userManager.Users.ToListAsync();
        }

        public async Task<ApplicationUser> GetUserByEmailAsync(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            return user;
        }

    }
}

using DriveSync.Model;
using DriveSync.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace DriveSync.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class EmpresasController : ControllerBase 
    {
        private readonly ILogger<EmpresasController> _logger;

        private IEmpresaService _empresaService;

        public EmpresasController(IEmpresaService empresaSerice)
        {
            _empresaService = empresaSerice;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Empresa>>> GetEmpresas()
        {
            try
            {
                var empresa = await _empresaService.GetEmpresas();
                return Ok(empresa);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Erro ao obter empresas");
            }
        }
        [HttpGet("EmpresaPorCnpj")]
        public async Task<ActionResult<IAsyncEnumerable<Empresa>>> GetEmpresasByCNPJ([FromQuery] string cnpj)
        {
            try
            {
                var empresas = await _empresaService.GetEmpresasByCNPJ(cnpj);

                if (empresas.Count() == 0)
                {
                    return NotFound($"Não existem Empresas com o critério {cnpj}");
                }
                return Ok(empresas);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Erro ao obter empresa");
            }
        }
        [HttpGet("{id:int}", Name = "GetEmpresa")]
        public async Task<ActionResult<IAsyncEnumerable<Empresa>>> GetEmpresa(int id)
        {
            try
            {
                var empresa = await _empresaService.GetEmpresa(id);
                if (empresa == null)
                {
                    return NotFound($"Não existe uma empresa com o id = {id}");
                }
                return Ok(empresa);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpPost]
        public async Task<ActionResult> Create (Empresa empresa)
        {
            try
            {
                await _empresaService.CreateEmpresa(empresa);
                return CreatedAtRoute(nameof(GetEmpresa), new { Id = empresa.id }, empresa);

            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Edit(int id, [FromBody] Empresa empresa)
        {
            try
            {
                if (empresa.id == id)
                {
                    await _empresaService.UpdateEmpresa(empresa);
                    return Ok($"Empresa com o id={id} foi atualizado com sucesso");
                }
                return BadRequest("Dados inconsistentes");
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete (int id)
        {
            try
            {
                var empresa = await _empresaService.GetEmpresa(id);
                if(empresa != null)
                {
                    await _empresaService.DeleteEmpresa(empresa);
                    return Ok($"Empresa de id={id} foi excluido com sucesso");
                }
                return NotFound($"Empresa com id={id} não encontrado");
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

    }
}

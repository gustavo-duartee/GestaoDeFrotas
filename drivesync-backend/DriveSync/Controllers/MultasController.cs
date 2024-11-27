using DriveSync.Model;
using DriveSync.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DriveSync.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class MultasController : ControllerBase
    {
        private readonly ILogger<MultasController> _logger;

        private IMultaService _multaService;
        public MultasController(IMultaService multaService)
        {
            _multaService = multaService;
        }
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Multa>>> GetMultas()
        {
            try
            {
                var multas = await _multaService.GetMultas();
                return Ok(multas);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Erro ao obter multas");
            }
        }
        [HttpGet("MultaPorCodigo")]
        public async Task<ActionResult<IAsyncEnumerable<Multa>>> GetMultasByCodInfracao([FromQuery] string codigo)
        {
            try
            {
                var multas = await _multaService.GetMultasByCodInfracao(codigo);
                if(multas.Count() == 0)
                {
                    return NotFound($"Não existem veiculos com o critério {codigo}");
                }
                return Ok(multas);  
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Erro ao obter multa");
            }
        }
        [HttpGet("{id:int}", Name = "GetMulta")]
        public async Task<ActionResult<IAsyncEnumerable<Multa>>> GetMulta(int id)
        {
            try
            {
                var multa = await _multaService.GetMulta(id);
                if(multa == null)
                {
                    return NotFound($"Não existe uma multa com o id={id}");
                }
                return Ok(multa);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult> Create (Multa multa)
        {
            try
            {
                await _multaService.CreateMulta(multa);
                return CreatedAtRoute(nameof(GetMulta), new { Id = multa.id }, multa);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpPut("{id:int}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult> Edit(int id, [FromBody] Multa multa)
        {
            try
            {
                if(multa.id == id)
                {
                    await _multaService.UpdateMulta(multa);
                    return Ok($"Multa com id={id} foi atualizado com sucesso");
                }
                return BadRequest("Dados inconsistentes");
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpDelete("{id:int}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult> Delete (int id)
        {
            try
            {
                var multa = await _multaService.GetMulta(id);
                if(multa != null)
                {
                    await _multaService.DeleteMulta(multa);
                    return Ok($"Multa de id={id} foi excluído com sucesso");
                }
                return NotFound($"<ulta com id={id} não encontrado");
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
    }
}

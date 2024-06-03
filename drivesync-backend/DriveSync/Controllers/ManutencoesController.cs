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
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    public class ManutencoesController : ControllerBase
    {
        private readonly ILogger<ManutencoesController> _logger;

        private IManutencaoService _manutencaoService;

        public ManutencoesController(IManutencaoService manutencaoService)
        {
            _manutencaoService = manutencaoService;
        }
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IAsyncEnumerable<Manutencao>>> GetManutencoes()
        {
            try
            {
                var manutencao = await _manutencaoService.GetManutencoes();
                return Ok(manutencao);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter manutenções.");
            }
        }
        [HttpGet("{id:int}", Name = "GetManutencao")]
        public async Task<ActionResult<Manutencao>> GetManutencao(int id)
        {
            try
            {
                var manutencao = await _manutencaoService.GetManutencaoByID(id);

                if (manutencao == null)
                {
                    return NotFound($"Não existe manutenção com id = {id}");
                }
                return Ok(manutencao);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpPost]
        public async Task<ActionResult> Create(Manutencao manutencao)
        {
            try
            {
                await _manutencaoService.CreateManutencao(manutencao);
                return CreatedAtRoute(nameof(GetManutencao), new { id = manutencao.Id }, manutencao);
            }
            catch
            {
                return BadRequest("Request Invalido");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Edit(int id, [FromBody] Manutencao manutencao)
        {
            try
            {
                if (manutencao.Id == id)
                {
                    await _manutencaoService.UpdateManutencao(manutencao);
                    return Ok($"Manutenção com id = {id} foi atualizado com sucesso");
                }
                else
                {
                    return BadRequest("Dados Inconsistentes.");
                }
            }
            catch
            {
                return BadRequest("Request inválido.");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var manutencao = await _manutencaoService.GetManutencaoByID(id);
                if(manutencao != null)
                {
                    await _manutencaoService.DeleteManutencao(manutencao);
                    return Ok($"Manutenção de id = {id} foi excluido com sucesso.");
                }
                else
                {
                    return NotFound($"Manutenção com id {id} não encontrado.");
                }
            }
            catch
            {
                return BadRequest("Request inválido.");
            }
        }
       
    }


}

using Gestao_de_frotasAPI.Models;
using Gestao_de_frotasAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gestao_de_frotasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Produces("application/json")]
    public class VeiculosController : ControllerBase
    {
        private IVeiculoService _veiculoService;

        public VeiculosController(IVeiculoService veiculoService)
        {
            _veiculoService = veiculoService;
        }
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IAsyncEnumerable<VEICULO>>> GetVeiculos()
        {
            try
            {
                var veiculo = await _veiculoService.GetVeiculos();
                return Ok(veiculo);
            }
            catch
            {
                //return BadRequest("Request inválido");
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter veículos");
            }
        }
        [HttpGet("ModeloPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<VEICULO>>>
            GetVeiculosByModelo([FromQuery] string modelo)
        {
            try
            {
                var veiculo = await _veiculoService.GetVeiculosByModelo(modelo);
                if (veiculo.Count() == 0)
                {
                    return NotFound($"Não existem veículos com o critério {modelo}");
                }
                return Ok(veiculo);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpGet("{id:int}", Name= "GetVeiculo")]
        public async Task<ActionResult<VEICULO>> GetVeiculo(int id)
        {
            try
            {
                var veiculo = await _veiculoService.GetVEICULO(id);
                if (veiculo == null)
                {
                    return NotFound($"Não existe veiculo com id = {id}");
                }
                return Ok(veiculo);
            }
            catch 
            {
                return BadRequest("Request inválido");
            }

        }
        [HttpPost]
        public async Task<ActionResult> Create(VEICULO veiculo)
        {
            try
            {
                await _veiculoService.CreateVeiculo(veiculo);
                return CreatedAtRoute(nameof(GetVeiculo), new { id = veiculo.ID }, veiculo);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Edit(int id, [FromBody] VEICULO veiculo)
        {
            try
            {
                if(veiculo.ID == id)
                {
                    await _veiculoService.UpdateVeiculo(veiculo);
                    return Ok($"Veículo com o id = {id} foi atualizado com sucesso");
                }
                else
                {
                    return BadRequest("Dados inconsistentes");
                }
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var veiculo = await _veiculoService.GetVEICULO(id);
                if(veiculo != null)
                {
                    await _veiculoService.DeleteVeiculo(veiculo);
                    return Ok($"Veículo de id = {id} foi excluído com sucesso");
                }
                else
                {
                    return NotFound($"Veículo com id = {id} não entrado");
                }
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
    }
}
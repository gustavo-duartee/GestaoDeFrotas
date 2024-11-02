using DriveSync.Model;
using DriveSync.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DriveSync.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class VeiculosController : ControllerBase
    {
        private readonly ILogger<VeiculosController> _logger;
        private IVeiculoService _veiculoService;

        public VeiculosController(IVeiculoService veiculoService)
        {
            _veiculoService = veiculoService;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Veiculo>>> GetVeiculos()
        {
            try
            {
                var veiculos = await _veiculoService.GetVeiculos();
                return Ok(veiculos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }



        [HttpGet("VeiculoPorPlaca")]
        public async Task<ActionResult<IAsyncEnumerable<Veiculo>>> GetVeiculosByPlaca([FromQuery] string placa)
        {
            try
            {
                var veiculos = await _veiculoService.GetVeiculosByPlaca(placa);
                if (veiculos.Count() == 0)
                {
                    return NotFound($"Não existem veiculos com o critério {placa}");

                }
                return Ok(veiculos);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Erro ao obter veiculo");
            }
        }

        [HttpGet("{id:int}", Name = "GetVeiculo")]
        public async Task<ActionResult<Veiculo>> GetVeiculo(int id)
        {
            try
            {
                var veiculo = await _veiculoService.GetVeiculo(id);
                if (veiculo == null)
                {
                    return NotFound($"Não existe um veículo com o id={id}");
                }
                return Ok(veiculo);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Erro ao obter veículo");
                return BadRequest("Request inválido");
            }
        }

        [HttpPost]
        public async Task<ActionResult> Create(Veiculo veiculo)
        {
            try
            {
                await _veiculoService.CreateVeiculo(veiculo);
                return CreatedAtRoute(nameof(GetVeiculo), new { Id = veiculo.id }, veiculo);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Erro ao criar veículo");
                return BadRequest("Request inválido");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Edit(int id, [FromBody] Veiculo veiculo)
        {
            try
            {
                if (veiculo.id == id)
                {
                    await _veiculoService.UpdateVeiculo(veiculo);
                    return Ok($"Veículo com id={id} foi atualizado com sucesso");
                }
                return BadRequest("Dados inconsistentes");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Erro ao atualizar veículo");
                return BadRequest("Request inválido");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var veiculo = await _veiculoService.GetVeiculo(id);
                if (veiculo != null)
                {
                    await _veiculoService.DeleteVeiculo(veiculo);
                    return Ok($"Veículo de id={id} foi excluído com sucesso");
                }
                return NotFound($"Veículo com id={id} não encontrado");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Erro ao excluir veículo");
                return BadRequest("Request inválido");
            }
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using DriveSync.Service;
using DriveSync.Model;
using System.Threading.Tasks;

namespace DriveSync.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ViagensController : ControllerBase
    {
        private readonly IViagemService _viagemService;

        public ViagensController(IViagemService viagemService)
        {
            _viagemService = viagemService;
        }

        [HttpPost]
        public async Task<IActionResult> IniciarViagem([FromBody] Viagem viagem) // Alterado para usar Viagem diretamente
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Verifique explicitamente se DiagnosticoInicio não é nulo
            if (viagem.dataInicio == default)
            {
                return BadRequest("Diagnóstico de início não pode ser nulo.");
            }

            var viagemCriada = await _viagemService.IniciarViagemAsync(viagem);

            return CreatedAtAction(nameof(IniciarViagem), new { id = viagemCriada.id }, viagemCriada);
        }

        [HttpPut("EncerrarViagem/{id}")]
        public async Task<IActionResult> EncerrarViagem(int id, [FromBody] Viagem viagemEncerramento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Verifique a assinatura do método no serviço
            var viagemEncerrada = await _viagemService.EncerrarViagemAsync(id, viagemEncerramento);

            if (viagemEncerrada == null)
            {
                return NotFound($"Viagem com id={id} não encontrada ou já encerrada.");
            }

            return Ok(viagemEncerrada); // Retorna a viagem com os dados atualizados
        }

        [HttpGet]
        public async Task<IActionResult> ListarViagens()
        {
            var viagens = await _viagemService.ListarViagensAsync();
            return Ok(viagens);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObterViagem(int id)
        {
            var viagem = await _viagemService.ObterViagemPorIdAsync(id);
            if (viagem == null)
            {
                return NotFound();
            }
            return Ok(viagem);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
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
        private readonly IHubContext<ViagensHub> _hubContext;

        public ViagensController(IViagemService viagemService, IHubContext<ViagensHub> hubContext)
        {
            _viagemService = viagemService;
            _hubContext = hubContext;
        }

        [HttpPost]
        public async Task<IActionResult> IniciarViagem([FromBody] Viagem viagem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (viagem.dataInicio == default)
            {
                return BadRequest("Diagnóstico de início não pode ser nulo.");
            }

            var viagemCriada = await _viagemService.IniciarViagemAsync(viagem);

            // Envia a viagem criada via SignalR para todos os clientes
            await _hubContext.Clients.All.SendAsync("AtualizarViagens", viagemCriada);

            return CreatedAtAction(nameof(IniciarViagem), new { id = viagemCriada.id }, viagemCriada);
        }

        [HttpPut("EncerrarViagem/{id}")]
        public async Task<IActionResult> EncerrarViagem(int id, [FromBody] Viagem viagemEncerramento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var viagemEncerrada = await _viagemService.EncerrarViagemAsync(id, viagemEncerramento);

            if (viagemEncerrada == null)
            {
                return NotFound($"Viagem com id={id} não encontrada ou já encerrada.");
            }

            // Envia a viagem encerrada via SignalR para todos os clientes
            await _hubContext.Clients.All.SendAsync("AtualizarViagens", viagemEncerrada);

            return Ok(viagemEncerrada);
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

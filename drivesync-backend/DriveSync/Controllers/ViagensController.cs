using Microsoft.AspNetCore.Mvc;
using DriveSync.Service;
using DriveSync.Dtos;
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
        public async Task<IActionResult> IniciarViagem([FromBody] ViagemDto viagemDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var viagem = await _viagemService.IniciarViagemAsync(viagemDto);

            return CreatedAtAction(nameof(IniciarViagem), new { id = viagem.Id }, viagem);
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

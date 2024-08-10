using DriveSync.Context;
using DriveSync.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DriveSync.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ViagensController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ViagensController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("iniciar")]
        public async Task<IActionResult> IniciarViagem([FromBody] Viagem viagem)
        {
            viagem.Id = Guid.NewGuid();
            viagem.DataInicio = DateTime.UtcNow;
            viagem.Ativa = true;
            _context.Viagens.Add(viagem);
            await _context.SaveChangesAsync();
            return Ok(viagem);
        }

        [HttpPost("encerrar/{id}")]
        public async Task<IActionResult> EncerrarViagem(Guid id, [FromBody] Viagem viagemAtualizada)
        {
            var viagem = await _context.Viagens.FindAsync(id);
            if (viagem == null)
            {
                return NotFound();
            }

            viagem.DataFim = DateTime.UtcNow;
            viagem.LocalFim = viagemAtualizada.LocalFim;
            viagem.Distancia = viagemAtualizada.Distancia;
            viagem.Duracao = viagemAtualizada.Duracao;
            viagem.Notas = viagemAtualizada.Notas;
            viagem.Ativa = false;

            _context.Viagens.Update(viagem);
            await _context.SaveChangesAsync();
            return Ok(viagem);
        }
    }

}

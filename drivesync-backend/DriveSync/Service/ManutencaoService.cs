using DriveSync.Context;
using DriveSync.Model;
using Microsoft.EntityFrameworkCore;

namespace DriveSync.Service
{
    public class ManutencaoService : IManutencaoService
    {
        private readonly AppDbContext _context;

        public ManutencaoService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Manutencao>> GetManutencoes()
        {
            try
            {
                return await _context.Manutencoes.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<Manutencao> GetManutencaoByID(int id)
        {
            var manutencao = await _context.Manutencoes.FindAsync(id);
            return manutencao;
        }

        public async Task CreateManutencao(Manutencao manutencao)
        {
            _context.Manutencoes.Add(manutencao);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateManutencao(Manutencao manutencao)
        {
            _context.Entry(manutencao).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteManutencao(Manutencao manutencao)
        {
            _context.Manutencoes.Remove(manutencao);
            await _context.SaveChangesAsync();
        }

    }
}

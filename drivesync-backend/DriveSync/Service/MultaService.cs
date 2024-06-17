using DriveSync.Context;
using DriveSync.Model;
using Microsoft.EntityFrameworkCore;

namespace DriveSync.Service
{
    public class MultaService : IMultaService
    {
        private readonly AppDbContext _context;
        public MultaService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Multa>> GetMultas()
        {
            try
            {
                return await _context.Multas.ToListAsync();
            }
            catch
            {
                throw;
            }
            //try
            //{
            //    return await _context.Multas.Include(v => v.Veiculoid).ToListAsync();
            //}
            //catch
            //{
            //    throw;
            //}
        }
        public async Task<IEnumerable<Multa>> GetMultasByCodInfracao(string codigo)
        {
            IEnumerable<Multa> multas;
            if (!string.IsNullOrWhiteSpace(codigo))
            {
                multas = await _context.Multas.Where(n => n.Codigo.Contains(codigo)).ToListAsync();
            }
            else
            {
                multas = await GetMultas();
            }
            return multas;
        }
        public async Task<Multa> GetMulta(int id)
        {
            var multa = await _context.Multas.FindAsync(id);
            return multa;
        }
        public async Task CreateMulta(Multa multa)
        {
            _context.Multas.Add(multa);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateMulta(Multa multa)
        {
            _context.Entry(multa).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task DeleteMulta(Multa multa)
        {
            _context.Multas.Remove(multa);
            await _context.SaveChangesAsync();
        }
    }
}

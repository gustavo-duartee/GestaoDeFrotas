using Gestao_de_frotasAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace Gestao_de_frotasAPI.Services
{
    public class VeiculosService : IVeiculoService
    {
        private readonly GESTAO_FROTASContext _context;

        public VeiculosService(GESTAO_FROTASContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<VEICULO>> GetVeiculos()
        {
            try
            {
                return await _context.VEICULOs.ToListAsync();
            }
            catch 
            {
                throw;
            }
            
        }
        public async Task<IEnumerable<VEICULO>> GetVeiculosByModelo(string modelo)
        {
            IEnumerable<VEICULO> veiculos;
            if(!string.IsNullOrWhiteSpace(modelo)) 
            {
                veiculos = await _context.VEICULOs.Where(n => n.MODELO.Contains(modelo)).ToListAsync();
            }
            else
            {
                veiculos = await GetVeiculos();
            }
            return veiculos;
        }
        public async Task<VEICULO> GetVEICULO(int id)
        {
            var veiculo = await _context.VEICULOs.FindAsync(id);
            return veiculo;
        }
        public async Task CreateVeiculo(VEICULO veiculo)
        {
            _context.VEICULOs.Add(veiculo);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateVeiculo(VEICULO veiculo)
        {
            _context.Entry(veiculo).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task DeleteVeiculo(VEICULO veiculo)
        {
            _context.VEICULOs.Remove(veiculo);
            await _context.SaveChangesAsync();
        }
    }
}

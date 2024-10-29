using DriveSync.Context;
using DriveSync.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DriveSync.Service
{
    public class VeiculosService : IVeiculoService
    {
        private readonly AppDbContext _context;
        public VeiculosService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Veiculo>> GetVeiculos()
        {
            try
            {
                return await _context.Veiculos.Include(v => v.Manutencoes).ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao buscar veículos", ex);
            }
        }

        public async Task<IEnumerable<Veiculo>> GetVeiculosByPlaca(string placa)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(placa))
                {
                    return await _context.Veiculos
                        .Where(n => n.Placa.Contains(placa))
                        .Include(v => v.Manutencoes)
                        .ToListAsync();
                }
                else
                {
                    return await GetVeiculos();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao buscar veículos por placa", ex);
            }
        }

        public async Task<Veiculo> GetVeiculo(int id)
        {
            try
            {
                return await _context.Veiculos
                    .Include(v => v.Manutencoes)
                    .FirstOrDefaultAsync(e => e.Id == id);
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao buscar veículo com id {id}", ex);
            }
        }

        public async Task CreateVeiculo(Veiculo veiculo)
        {
            try
            {
                await _context.Veiculos.AddAsync(veiculo);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao criar veículo", ex);
            }
        }

        public async Task UpdateVeiculo(Veiculo veiculo)
        {
            try
            {
                var existingVeiculo = await GetVeiculo(veiculo.Id);
                if (existingVeiculo == null)
                {
                    throw new Exception("Veículo não encontrado");
                }

                _context.Entry(veiculo).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao atualizar veículo", ex);
            }
        }

        public async Task DeleteVeiculo(Veiculo veiculo)
        {
            try
            {
                var existingVeiculo = await GetVeiculo(veiculo.Id);
                if (existingVeiculo == null)
                {
                    throw new Exception("Veículo não encontrado");
                }

                _context.Veiculos.Remove(existingVeiculo);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao excluir veículo", ex);
            }
        }
    }
}

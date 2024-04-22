﻿using DriveSync.Context;
using DriveSync.Model;
using Microsoft.EntityFrameworkCore;

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
                return await _context.Veiculos.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<Veiculo>> GetVeiculosByPlaca(string placa)
        {
           IEnumerable<Veiculo> veiculos;
            if(!string.IsNullOrWhiteSpace(placa))
            {
                veiculos = await _context.Veiculos.Where(n=> n.placa.Contains(placa)).ToListAsync();
            }
            else
            {
                veiculos = await GetVeiculos();
            }
            return veiculos;
        }
        public async Task<Veiculo> GetVeiculo(int id)
        {
            var veiculo = await _context.Veiculos.FindAsync(id);
            return veiculo;
        }
        public async Task CreateVeiculo(Veiculo veiculo)
        {
            _context.Veiculos.Add(veiculo);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateVeiculo(Veiculo veiculo)
        {
            _context.Entry(veiculo).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task DeleteVeiculo(Veiculo veiculo)
        {
            _context.Veiculos.Remove(veiculo);
            await _context.SaveChangesAsync();

        }
        
    }
}
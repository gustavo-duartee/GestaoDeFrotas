using DriveSync.Context;
using DriveSync.Model;
using Microsoft.EntityFrameworkCore;

namespace DriveSync.Service
{
    public class EmpresaService : IEmpresaService
    {
        private readonly AppDbContext _context;
        public EmpresaService(AppDbContext context)
        {
            _context = context;
        }          
        public async Task<IEnumerable<Empresa>> GetEmpresas()
        {
            try
            {
                return await _context.Empresas.ToListAsync();
            }
            catch
            {
                throw;
            }
        }
        public async Task<IEnumerable<Empresa>> GetEmpresasByCNPJ(string cnpj)
        {
            IEnumerable<Empresa> empresas;
            if (!string.IsNullOrWhiteSpace(cnpj))
            {
                empresas = await _context.Empresas.Where(n=> n.cnpj.Contains(cnpj)).ToListAsync();
            }
            else
            {
                empresas = await GetEmpresas();
            }
            return empresas;
        }
        public async Task<Empresa> GetEmpresa(int id)
        {
            var empresa = await _context.Empresas.FindAsync(id);
            return empresa;
        }
        public async Task CreateEmpresa(Empresa empresa)
        {
            _context.Empresas.Add(empresa);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateEmpresa(Empresa empresa)
        {
            _context.Entry(empresa).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task DeleteEmpresa(Empresa empresa)
        {
            _context.Empresas.Remove(empresa);
            await _context.SaveChangesAsync();
        }

    }
}

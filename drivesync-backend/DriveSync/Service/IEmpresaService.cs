using DriveSync.Model;

namespace DriveSync.Service
{
    public interface IEmpresaService
    {
        Task<IEnumerable<Empresa>> GetEmpresas();
        Task<Empresa> GetEmpresa(int id);
        Task<IEnumerable<Empresa>> GetEmpresasByCNPJ(string cnpj);
        Task CreateEmpresa(Empresa empresa);
        Task UpdateEmpresa(Empresa empresa);
        Task DeleteEmpresa(Empresa empresa);
    }
}

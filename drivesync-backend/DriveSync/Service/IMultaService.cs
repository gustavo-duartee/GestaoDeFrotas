using Microsoft.AspNetCore.Mvc;
using DriveSync.Model;

namespace DriveSync.Service
{
    public interface IMultaService
    {
        Task<IEnumerable<Multa>> GetMultas();
        Task<Multa> GetMulta(int id);
        Task<IEnumerable<Multa>> GetMultasByCodInfracao(string codigo);
        Task CreateMulta(Multa multa);
        Task UpdateMulta(Multa multa);
        Task DeleteMulta(Multa multa);

    }
}

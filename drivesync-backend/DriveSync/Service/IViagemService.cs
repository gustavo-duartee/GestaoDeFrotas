using DriveSync.Model;
using DriveSync.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DriveSync.Service
{
    public interface IViagemService
    {
        Task<Viagem> IniciarViagemAsync(ViagemDto viagemDto);
        Task<IEnumerable<Viagem>> ListarViagensAsync();
        Task<Viagem> ObterViagemPorIdAsync(int id);
        // Outros métodos que possam ser necessários, como EncerrarViagemAsync
    }
}

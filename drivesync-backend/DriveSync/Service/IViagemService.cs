using DriveSync.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DriveSync.Service
{
    public interface IViagemService
    {
        Task<Viagem> IniciarViagemAsync(Viagem viagem); // Alterado para receber a model Viagem
        Task<IEnumerable<Viagem>> ListarViagensAsync();
        Task<Viagem> ObterViagemPorIdAsync(int id);
        Task<Viagem> EncerrarViagemAsync(int viagemId, Viagem viagemEncerramento); // Alterado para receber a model Viagem
    }
}
using Gestao_de_frotasAPI.Models;

namespace Gestao_de_frotasAPI.Services
{
    public interface IVeiculoService
    {
        Task<IEnumerable<VEICULO>> GetVeiculos();
        Task<VEICULO> GetVEICULO(int id);
        Task<IEnumerable<VEICULO>> GetVeiculosByModelo(string modelo);
        Task CreateVeiculo(VEICULO veiculo);
        Task UpdateVeiculo(VEICULO veiculo);
        Task DeleteVeiculo(VEICULO veiculo);

    }
}

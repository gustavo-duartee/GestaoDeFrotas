using DriveSync.Model;

namespace DriveSync.Service
{
    public interface IManutencaoService
    {
        Task<IEnumerable<Manutencao>> GetManutencoes();
        Task<Manutencao> GetManutencaoByID(int id);
        Task CreateManutencao(Manutencao manutencao);
        Task UpdateManutencao(Manutencao manutencao);
        Task DeleteManutencao(Manutencao manutencao);
    }
}

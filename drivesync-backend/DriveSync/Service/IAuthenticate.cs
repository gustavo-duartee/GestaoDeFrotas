namespace DriveSync.Service
{
    public interface IAuthenticate
    {
        Task<bool> Authenticate(string email, string senha);
        Task<bool> RegisterUser(string email, string senha, string nome, string cargo, string telefone);
        Task Logout();
    }
}

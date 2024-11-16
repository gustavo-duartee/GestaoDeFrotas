using DriveSync.Model;
using Microsoft.AspNetCore.SignalR;

namespace DriveSync.Controllers
{
    public class ViagensHub : Hub
    {
        public async Task AtualizarViagens(Viagem viagem)
        {
            await Clients.All.SendAsync("AtualizarViagens", viagem);
        }
    }
}

using Gestao_de_frotasAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace Gestao_de_frotasAPI.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        //public DbSet<Veiculo> Veiculos { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using DriveSync.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace DriveSync.Context
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        { 

        }

        public DbSet<Veiculo> Veiculos { get; set; }
        public DbSet<Empresa> Empresas { get; set; }
        public DbSet<Multa> Multas { get; set; }
        public DbSet<Manutencao> Manutencoes { get; set; }
        public DbSet<Viagem> Viagens { get; set; }
        public DbSet<Checklists> Checklists { get; set; }

    }
}



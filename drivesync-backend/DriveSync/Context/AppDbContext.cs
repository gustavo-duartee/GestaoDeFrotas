using Microsoft.EntityFrameworkCore;
using DriveSync.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Design;
using DriveSync.Migrations;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace DriveSync.Context
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
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



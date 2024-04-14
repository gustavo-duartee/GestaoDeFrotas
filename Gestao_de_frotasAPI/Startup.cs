using Gestao_de_frotasAPI.Context;
using Microsoft.EntityFrameworkCore;

using Gestao_de_frotasAPI.Services;
using Gestao_de_frotasAPI.Models;

namespace Gestao_de_frotasAPI
{
    public class Startup
    {
        public Startup(IConfiguration Configuration)
        {
            Configuration = Configuration;
        }
        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<GESTAO_FROTASContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
           
            services.AddScoped<IVeiculoService, VeiculosService>(); 

            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
        }
        public void Configure(WebApplication app, IWebHostEnvironment environment)
        {

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors(options =>
            {
                options.WithOrigins("https://localhost:3000");
                options.AllowAnyMethod();
                options.AllowAnyHeader();
            });

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();
        }
    }
}

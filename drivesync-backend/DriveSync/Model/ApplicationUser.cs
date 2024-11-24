using Microsoft.AspNetCore.Identity;

namespace DriveSync.Model
{
    public class ApplicationUser : IdentityUser
    {
        public string Nome { get; set; }
        public string Cargo { get; set; }
        public string Telefone { get; set; }
    }
}

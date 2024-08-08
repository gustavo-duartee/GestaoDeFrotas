using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    [Table("Usuarios")]
    public class Usuario
    {
        public int id { get; set; }

        [Required]
        [StringLength(200)]
        public string nome { get; set; }

        [Required]
        [StringLength(256)]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [StringLength(256)]
        public string senha { get; set; }

        public int idRole { get; set; }
        public int idEmpresa { get; set;}
        
        public ICollection<Viagem> viagens { get; } = new List<Viagem>(); 
    }
}

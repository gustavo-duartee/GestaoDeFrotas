using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    [Table("Planos")]
    public class Plano
    {
        public int id { get; set; }

        [Required]
        [StringLength(20)]
        public string titulo { get; set; }
        
        [Required]
        [StringLength(200)]
        public string descricao { get; set; }

        [Required]
        [StringLength(200)]
        public string endereco { get; set; }

        [Required]
        public int limite_veiculos { get; set; }

        [Required]
        public int limite_usuarios { get; set; }

        public Assinatura assinatura { get; set; } = null
    }
}
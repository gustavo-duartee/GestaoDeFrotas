using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{

    [Table("Viagens")]
    public class Viagem
    {
        public int id { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime? data { get; set; }

        [Required]
        public float km_inicial { get; set;}
    
        [Required]
        public float km_final { get; set;}

        [Required]
        [StringLength(5)]
        public int qtd_passageiros { get; set;}

        [Required]
        [StringLength(200)]
        public string observacao { get; set; }

        [Required]
        [StringLength(100)]
        public string combustivel_gasto { get; set; }

        [Required]
        public int idVeivulo { get; set; }

        [Required]
        public int idUsuario { get; set; }
    }
    
}
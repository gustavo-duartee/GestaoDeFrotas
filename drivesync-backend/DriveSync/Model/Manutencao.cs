using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    [Table("Manutencao")]
    public class Manutencao
    {
        public int Id { get; set; }
        
        /*[Required]
        public int id_veiculo { get; set; }*/
        
        [Required]
        public DateTime? dt_manutencao { get; set; }

        [Required]
        public DateTime? dt_prox_manutencao { get; set; }
        
        [Required]
        public string tp_manutencao { get; set; }
        
        [Required]
        public string veiculo { get; set; }
        
        [Required]
        [StringLength(100)]
        public string servico { get; set; }
        
        [Required]
        public float valor { get; set; }
        
        [Required]
        [StringLength(1000)]
        public string descricao { get; set; }

        public int veiculoId { get; set; } // Required foreign key property
        public Veiculo veiculo { get; set; } = null!; // Required reference navigation to principal
        
/*      [Required]
        [StringLength(1000)]
        public string pecas_trocadas { get; set; }*/


        
    }
}

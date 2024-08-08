using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    [Table("Manutencoes")]
    public class Manutencao
    {
        public int Id { get; set; }
        
        [Required]
        [DataType(DataType.Date)]
        public DateTime? dt_manutencao { get; set; }

        [Required]
        [DataType(DataType.Date)]
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

        public int idVeiculo { get; set; }        
    }
}

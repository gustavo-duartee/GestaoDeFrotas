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
        [StringLength(20)]
        public string fornecedor { get; set; }
        [Required]
        public float valor { get; set; }
        [Required]
        [StringLength(1000)]
        public string descricao { get; set; }
        [Required]
        [StringLength(1000)]
        public string pecas_trocadas { get; set; }
        [Required]
        public ICollection<Veiculo> id_veiculo { get; set; }

        
    }
}

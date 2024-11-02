using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{

    [Table("Veiculos")]
    public class Veiculo
    {
        public int id { get; set; }
        [Required]
        [StringLength(80)]
        public string marca { get; set; }
        [Required]
        [StringLength(80)]
        public string modelo { get; set; }
        [Required]
        public int? ano { get; set; }
        [Required]
        [StringLength(80)]
        public string placa { get; set; }
        [Required]
        public int? quilometragem { get; set; }
        [Required]
        [StringLength(80)]
        public string tp_combustivel { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime? dt_aquisicao { get; set; }
        public string status { get; set; }
        public string cap_passageiros { get; set; }
        public string categoria { get; set; }
        [StringLength(12)]
        public string nmr_chassi { get; set; }
        public string renavam { get; set; }
        public string cor { get; set; }
        public ICollection<Manutencao> manutencoes { get; } = new List<Manutencao>();
    }
}

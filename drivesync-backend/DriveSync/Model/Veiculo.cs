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
        [StringLength(80)]
        public int? ano { get; set; }
        [Required]
        [StringLength(80)]
        public string placa { get; set; }
        [Required]
        [StringLength(80)]
        public int? quilometragem { get; set; }
        [Required]
        [StringLength(80)]
        public string tp_combustivel { get; set; }
        [StringLength(80)]
        public string dt_aquisicao { get; set; }
        public string status { get; set; }
    }
}

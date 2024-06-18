using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    [Table("Multas")]
    public class Multa
    {
        public int id { get; set; }
        //[Required]
        //public int IdVeiculo { get; set; }
        [Required]
        public int idviagem { get; set; }
        [Required]
        [StringLength(20)]
        public string codigo { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime? dtmulta { get; set; }
        [Required]
        [StringLength(50)]
        public string tpinfracao { get; set; }
        [Required]
        public decimal valor { get; set; }
        [Required]
        public int ptscarteira { get; set; }
        [Required]
        [StringLength(200)]
        public string descricao { get; set; }
        public int veiculoid { get; set; }  
    }
}

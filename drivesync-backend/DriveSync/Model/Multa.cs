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
        public int IdViagem { get; set; }
        [Required]
        [StringLength(20)]
        public string Codigo { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime? DtMulta { get; set; }
        [Required]
        [StringLength(50)]
        public string TpInfracao { get; set; }
        [Required]
        public decimal Valor { get; set; }
        [Required]
        public int PtsCarteira { get; set; }
        [Required]
        [StringLength(200)]
        public string Descricao { get; set; }
        public int Veiculoid { get; set; }  
    }
}

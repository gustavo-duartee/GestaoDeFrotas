using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    [Table("Empresas")]
    public class Empresa
    {
        public int id { get; set; }
        [Required]
        [StringLength(200)]
        public string nome { get; set; }
        [Required]
        [StringLength(20)]
        public string cnpj { get; set; }
        [Required]
        [StringLength(200)]
        public string endereco { get; set; }
        [Required]
        [StringLength(200)]
        [EmailAddress]
        public string email { get; set; }
        [Required]
        [StringLength(20)]
        public string telefone { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime? data_cadastro { get; set; }
        
    }
}

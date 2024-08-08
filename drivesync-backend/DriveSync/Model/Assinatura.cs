using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    [Table("Assinaturas")]
    public class Assinatura
    {
        public int id { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime? inicio { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime? vencimento { get; set; }

        public int idPlano { get; set; }

        public ICollection<Empresa> empresas { get; } = new List<Empresa>();
    }
}
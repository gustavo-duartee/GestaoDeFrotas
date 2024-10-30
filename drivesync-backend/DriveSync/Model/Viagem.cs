using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    public class Viagem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string MotoristaId { get; set; }

        [Required]
        public int VeiculoId { get; set; }
        public virtual Veiculo Veiculo { get; set; }

        [Required]
        public DateTime DataInicio { get; set; }

        public DateTime? DataEncerramento { get; set; } // Novo campo para data de encerramento

        public string? Localizacao { get; set; }

        [Required]
        public string Status { get; set; } = "Em_andamento";

        public int ChecklistId { get; set; }
        public virtual Checklists Checklist { get; set; }

        public string? Observacoes { get; set; }
    }

    public class Checklists
    {
        public int Id { get; set; }
        public bool Freios { get; set; }
        public bool Pneus { get; set; }
        public bool Luzes { get; set; }
        public bool Combustivel { get; set; }
        public bool Equipamentos { get; set; }
        public bool Estepe { get; set; }
        public bool Extintor { get; set; }
    }
}

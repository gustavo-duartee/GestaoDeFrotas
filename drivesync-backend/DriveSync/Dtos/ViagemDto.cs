using DriveSync.Model;

namespace DriveSync.Dtos
{
    public class ViagemDto
    {
        public string MotoristaId { get; set; }
        public int VeiculoId { get; set; }
        public string Localizacao { get; set; }
        public Checklists Checklist { get; set; }
        public string? Observacoes { get; set; }
    }
}

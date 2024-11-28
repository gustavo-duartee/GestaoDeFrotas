using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    public class Viagem
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string motoristaId { get; set; }

        [Required]
        public int? veiculoId { get; set; }
        public virtual Veiculo? veiculo { get; set; }


        [Required]
        public StatusViagem? status { get; set; } = StatusViagem.emAndamento;

        public int? checklistId { get; set; }
        public virtual Checklists? checklist { get; set; }

        public DateTime? dataInicio { get; set; }
        public string? localizacaoInicio { get; set; }
        public string? observacoesInicio { get; set; }
        public double? nivelCombustivelInicio { get; set; }
        public bool? statusControleEmissaoInicio { get; set; }
        public bool? monitorCatalisadorInicio { get; set; }
        public bool? monitorSensor02Inicio { get; set; }
        public double? temperaturaSensor02Inicio { get; set; }
        public double? temperaturaTransmissaoInicio { get; set; }
        public string? statusTransmissaoInicio { get; set; }
        public string? codigoFalhaInicio { get; set; }
        public bool? statusMonitoresEmissaoInicio { get; set; }
        public double? voltagemBateriaInicio { get; set; }


        public DateTime? dataEncerramento { get; set; }
        public string? localizacaoEncerramento { get; set; }
        public string? observacoesEncerramento { get; set; }
        public double? nivelCombustivelEncerramento { get; set; }
        public bool? statusControleEmissaoEncerramento { get; set; }
        public bool? monitorCatalisadorEncerramento { get; set; }
        public bool? monitorSensor02Encerramento { get; set; }
        public double? temperaturaSensor02Encerramento { get; set; }
        public double? temperaturaTransmissaoEncerramento { get; set; }
        public string? statusTransmissaoEncerramento { get; set; }
        public string? codigoFalhaEncerramento { get; set; }
        public bool? statusMonitoresEmissaoEncerramento { get; set; }
        public double? voltagemBateriaEncerramento { get; set; }
    }

    public enum StatusViagem
    {
        emAndamento,
        encerrada
    }

    public class Checklists
    {
        [Key]
        public int? id { get; set; }
        public bool? freios { get; set; }
        public bool? pneus { get; set; }
        public bool? luzes { get; set; }
        public bool? combustivel { get; set; }
        public bool? equipamentos { get; set; }
        public bool? estepe { get; set; }
        public bool? extintor { get; set; }
    }
}
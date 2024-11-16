using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class UpdateModelViagemData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Viagens_Checklists_ChecklistId",
                table: "Viagens");

            migrationBuilder.DropForeignKey(
                name: "FK_Viagens_Veiculos_VeiculoId",
                table: "Viagens");

            migrationBuilder.RenameColumn(
                name: "VoltagemBateriaInicio",
                table: "Viagens",
                newName: "voltagemBateriaInicio");

            migrationBuilder.RenameColumn(
                name: "VoltagemBateriaEncerramento",
                table: "Viagens",
                newName: "voltagemBateriaEncerramento");

            migrationBuilder.RenameColumn(
                name: "VeiculoId",
                table: "Viagens",
                newName: "veiculoId");

            migrationBuilder.RenameColumn(
                name: "TemperaturaTransmissaoInicio",
                table: "Viagens",
                newName: "temperaturaTransmissaoInicio");

            migrationBuilder.RenameColumn(
                name: "TemperaturaTransmissaoEncerramento",
                table: "Viagens",
                newName: "temperaturaTransmissaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "TemperaturaSensor02Inicio",
                table: "Viagens",
                newName: "temperaturaSensor02Inicio");

            migrationBuilder.RenameColumn(
                name: "TemperaturaSensor02Encerramento",
                table: "Viagens",
                newName: "temperaturaSensor02Encerramento");

            migrationBuilder.RenameColumn(
                name: "StatusTransmissaoInicio",
                table: "Viagens",
                newName: "statusTransmissaoInicio");

            migrationBuilder.RenameColumn(
                name: "StatusTransmissaoEncerramento",
                table: "Viagens",
                newName: "statusTransmissaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "StatusMonitoresEmissaoInicio",
                table: "Viagens",
                newName: "statusMonitoresEmissaoInicio");

            migrationBuilder.RenameColumn(
                name: "StatusMonitoresEmissaoEncerramento",
                table: "Viagens",
                newName: "statusMonitoresEmissaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "StatusControleEmissaoInicio",
                table: "Viagens",
                newName: "statusControleEmissaoInicio");

            migrationBuilder.RenameColumn(
                name: "StatusControleEmissaoEncerramento",
                table: "Viagens",
                newName: "statusControleEmissaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Viagens",
                newName: "status");

            migrationBuilder.RenameColumn(
                name: "ObservacoesInicio",
                table: "Viagens",
                newName: "observacoesInicio");

            migrationBuilder.RenameColumn(
                name: "ObservacoesEncerramento",
                table: "Viagens",
                newName: "observacoesEncerramento");

            migrationBuilder.RenameColumn(
                name: "NivelCombustivelInicio",
                table: "Viagens",
                newName: "nivelCombustivelInicio");

            migrationBuilder.RenameColumn(
                name: "NivelCombustivelEncerramento",
                table: "Viagens",
                newName: "nivelCombustivelEncerramento");

            migrationBuilder.RenameColumn(
                name: "MotoristaId",
                table: "Viagens",
                newName: "motoristaId");

            migrationBuilder.RenameColumn(
                name: "MonitorSensor02Inicio",
                table: "Viagens",
                newName: "monitorSensor02Inicio");

            migrationBuilder.RenameColumn(
                name: "MonitorSensor02Encerramento",
                table: "Viagens",
                newName: "monitorSensor02Encerramento");

            migrationBuilder.RenameColumn(
                name: "MonitorCatalisadorInicio",
                table: "Viagens",
                newName: "monitorCatalisadorInicio");

            migrationBuilder.RenameColumn(
                name: "MonitorCatalisadorEncerramento",
                table: "Viagens",
                newName: "monitorCatalisadorEncerramento");

            migrationBuilder.RenameColumn(
                name: "LocalizacaoInicio",
                table: "Viagens",
                newName: "localizacaoInicio");

            migrationBuilder.RenameColumn(
                name: "LocalizacaoEncerramento",
                table: "Viagens",
                newName: "localizacaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "DataInicio",
                table: "Viagens",
                newName: "dataInicio");

            migrationBuilder.RenameColumn(
                name: "DataHoraDiagnosticoInicio",
                table: "Viagens",
                newName: "dataHoraDiagnosticoInicio");

            migrationBuilder.RenameColumn(
                name: "DataHoraDiagnosticoEncerramento",
                table: "Viagens",
                newName: "dataHoraDiagnosticoEncerramento");

            migrationBuilder.RenameColumn(
                name: "DataEncerramento",
                table: "Viagens",
                newName: "dataEncerramento");

            migrationBuilder.RenameColumn(
                name: "CodigoFalhaInicio",
                table: "Viagens",
                newName: "codigoFalhaInicio");

            migrationBuilder.RenameColumn(
                name: "CodigoFalhaEncerramento",
                table: "Viagens",
                newName: "codigoFalhaEncerramento");

            migrationBuilder.RenameColumn(
                name: "ChecklistId",
                table: "Viagens",
                newName: "checklistId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Viagens",
                newName: "id");

            migrationBuilder.RenameIndex(
                name: "IX_Viagens_VeiculoId",
                table: "Viagens",
                newName: "IX_Viagens_veiculoId");

            migrationBuilder.RenameIndex(
                name: "IX_Viagens_ChecklistId",
                table: "Viagens",
                newName: "IX_Viagens_checklistId");

            migrationBuilder.RenameColumn(
                name: "Pneus",
                table: "Checklists",
                newName: "pneus");

            migrationBuilder.RenameColumn(
                name: "Luzes",
                table: "Checklists",
                newName: "luzes");

            migrationBuilder.RenameColumn(
                name: "Freios",
                table: "Checklists",
                newName: "freios");

            migrationBuilder.RenameColumn(
                name: "Extintor",
                table: "Checklists",
                newName: "extintor");

            migrationBuilder.RenameColumn(
                name: "Estepe",
                table: "Checklists",
                newName: "estepe");

            migrationBuilder.RenameColumn(
                name: "Equipamentos",
                table: "Checklists",
                newName: "equipamentos");

            migrationBuilder.RenameColumn(
                name: "Combustivel",
                table: "Checklists",
                newName: "combustivel");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Checklists",
                newName: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Viagens_Checklists_checklistId",
                table: "Viagens",
                column: "checklistId",
                principalTable: "Checklists",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Viagens_Veiculos_veiculoId",
                table: "Viagens",
                column: "veiculoId",
                principalTable: "Veiculos",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Viagens_Checklists_checklistId",
                table: "Viagens");

            migrationBuilder.DropForeignKey(
                name: "FK_Viagens_Veiculos_veiculoId",
                table: "Viagens");

            migrationBuilder.RenameColumn(
                name: "voltagemBateriaInicio",
                table: "Viagens",
                newName: "VoltagemBateriaInicio");

            migrationBuilder.RenameColumn(
                name: "voltagemBateriaEncerramento",
                table: "Viagens",
                newName: "VoltagemBateriaEncerramento");

            migrationBuilder.RenameColumn(
                name: "veiculoId",
                table: "Viagens",
                newName: "VeiculoId");

            migrationBuilder.RenameColumn(
                name: "temperaturaTransmissaoInicio",
                table: "Viagens",
                newName: "TemperaturaTransmissaoInicio");

            migrationBuilder.RenameColumn(
                name: "temperaturaTransmissaoEncerramento",
                table: "Viagens",
                newName: "TemperaturaTransmissaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "temperaturaSensor02Inicio",
                table: "Viagens",
                newName: "TemperaturaSensor02Inicio");

            migrationBuilder.RenameColumn(
                name: "temperaturaSensor02Encerramento",
                table: "Viagens",
                newName: "TemperaturaSensor02Encerramento");

            migrationBuilder.RenameColumn(
                name: "statusTransmissaoInicio",
                table: "Viagens",
                newName: "StatusTransmissaoInicio");

            migrationBuilder.RenameColumn(
                name: "statusTransmissaoEncerramento",
                table: "Viagens",
                newName: "StatusTransmissaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "statusMonitoresEmissaoInicio",
                table: "Viagens",
                newName: "StatusMonitoresEmissaoInicio");

            migrationBuilder.RenameColumn(
                name: "statusMonitoresEmissaoEncerramento",
                table: "Viagens",
                newName: "StatusMonitoresEmissaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "statusControleEmissaoInicio",
                table: "Viagens",
                newName: "StatusControleEmissaoInicio");

            migrationBuilder.RenameColumn(
                name: "statusControleEmissaoEncerramento",
                table: "Viagens",
                newName: "StatusControleEmissaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "status",
                table: "Viagens",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "observacoesInicio",
                table: "Viagens",
                newName: "ObservacoesInicio");

            migrationBuilder.RenameColumn(
                name: "observacoesEncerramento",
                table: "Viagens",
                newName: "ObservacoesEncerramento");

            migrationBuilder.RenameColumn(
                name: "nivelCombustivelInicio",
                table: "Viagens",
                newName: "NivelCombustivelInicio");

            migrationBuilder.RenameColumn(
                name: "nivelCombustivelEncerramento",
                table: "Viagens",
                newName: "NivelCombustivelEncerramento");

            migrationBuilder.RenameColumn(
                name: "motoristaId",
                table: "Viagens",
                newName: "MotoristaId");

            migrationBuilder.RenameColumn(
                name: "monitorSensor02Inicio",
                table: "Viagens",
                newName: "MonitorSensor02Inicio");

            migrationBuilder.RenameColumn(
                name: "monitorSensor02Encerramento",
                table: "Viagens",
                newName: "MonitorSensor02Encerramento");

            migrationBuilder.RenameColumn(
                name: "monitorCatalisadorInicio",
                table: "Viagens",
                newName: "MonitorCatalisadorInicio");

            migrationBuilder.RenameColumn(
                name: "monitorCatalisadorEncerramento",
                table: "Viagens",
                newName: "MonitorCatalisadorEncerramento");

            migrationBuilder.RenameColumn(
                name: "localizacaoInicio",
                table: "Viagens",
                newName: "LocalizacaoInicio");

            migrationBuilder.RenameColumn(
                name: "localizacaoEncerramento",
                table: "Viagens",
                newName: "LocalizacaoEncerramento");

            migrationBuilder.RenameColumn(
                name: "dataInicio",
                table: "Viagens",
                newName: "DataInicio");

            migrationBuilder.RenameColumn(
                name: "dataHoraDiagnosticoInicio",
                table: "Viagens",
                newName: "DataHoraDiagnosticoInicio");

            migrationBuilder.RenameColumn(
                name: "dataHoraDiagnosticoEncerramento",
                table: "Viagens",
                newName: "DataHoraDiagnosticoEncerramento");

            migrationBuilder.RenameColumn(
                name: "dataEncerramento",
                table: "Viagens",
                newName: "DataEncerramento");

            migrationBuilder.RenameColumn(
                name: "codigoFalhaInicio",
                table: "Viagens",
                newName: "CodigoFalhaInicio");

            migrationBuilder.RenameColumn(
                name: "codigoFalhaEncerramento",
                table: "Viagens",
                newName: "CodigoFalhaEncerramento");

            migrationBuilder.RenameColumn(
                name: "checklistId",
                table: "Viagens",
                newName: "ChecklistId");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Viagens",
                newName: "Id");

            migrationBuilder.RenameIndex(
                name: "IX_Viagens_veiculoId",
                table: "Viagens",
                newName: "IX_Viagens_VeiculoId");

            migrationBuilder.RenameIndex(
                name: "IX_Viagens_checklistId",
                table: "Viagens",
                newName: "IX_Viagens_ChecklistId");

            migrationBuilder.RenameColumn(
                name: "pneus",
                table: "Checklists",
                newName: "Pneus");

            migrationBuilder.RenameColumn(
                name: "luzes",
                table: "Checklists",
                newName: "Luzes");

            migrationBuilder.RenameColumn(
                name: "freios",
                table: "Checklists",
                newName: "Freios");

            migrationBuilder.RenameColumn(
                name: "extintor",
                table: "Checklists",
                newName: "Extintor");

            migrationBuilder.RenameColumn(
                name: "estepe",
                table: "Checklists",
                newName: "Estepe");

            migrationBuilder.RenameColumn(
                name: "equipamentos",
                table: "Checklists",
                newName: "Equipamentos");

            migrationBuilder.RenameColumn(
                name: "combustivel",
                table: "Checklists",
                newName: "Combustivel");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Checklists",
                newName: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Viagens_Checklists_ChecklistId",
                table: "Viagens",
                column: "ChecklistId",
                principalTable: "Checklists",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Viagens_Veiculos_VeiculoId",
                table: "Viagens",
                column: "VeiculoId",
                principalTable: "Veiculos",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

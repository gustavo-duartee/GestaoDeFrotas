using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class UpdateViagemModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Viagens_DiagnosticosEncerramento_DiagnosticoEncerramentoId",
                table: "Viagens");

            migrationBuilder.DropForeignKey(
                name: "FK_Viagens_DiagnosticosInicio_DiagnosticoInicioId",
                table: "Viagens");

            migrationBuilder.DropTable(
                name: "DiagnosticosEncerramento");

            migrationBuilder.DropTable(
                name: "DiagnosticosInicio");

            migrationBuilder.DropIndex(
                name: "IX_Viagens_DiagnosticoEncerramentoId",
                table: "Viagens");

            migrationBuilder.DropIndex(
                name: "IX_Viagens_DiagnosticoInicioId",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "DiagnosticoEncerramentoId",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "DiagnosticoInicioId",
                table: "Viagens");

            migrationBuilder.AlterColumn<string>(
                name: "ObservacoesInicio",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "LocalizacaoInicio",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CodigoFalhaEncerramento",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CodigoFalhaInicio",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataHoraDiagnosticoEncerramento",
                table: "Viagens",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DataHoraDiagnosticoInicio",
                table: "Viagens",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "MonitorCatalisadorEncerramento",
                table: "Viagens",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "MonitorCatalisadorInicio",
                table: "Viagens",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "MonitorSensor02Encerramento",
                table: "Viagens",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "MonitorSensor02Inicio",
                table: "Viagens",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<double>(
                name: "NivelCombustivelEncerramento",
                table: "Viagens",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "NivelCombustivelInicio",
                table: "Viagens",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<bool>(
                name: "StatusControleEmissaoEncerramento",
                table: "Viagens",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "StatusControleEmissaoInicio",
                table: "Viagens",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "StatusMonitoresEmissaoEncerramento",
                table: "Viagens",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "StatusMonitoresEmissaoInicio",
                table: "Viagens",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "StatusTransmissaoEncerramento",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StatusTransmissaoInicio",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "TemperaturaSensor02Encerramento",
                table: "Viagens",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "TemperaturaSensor02Inicio",
                table: "Viagens",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "TemperaturaTransmissaoEncerramento",
                table: "Viagens",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "TemperaturaTransmissaoInicio",
                table: "Viagens",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "VoltagemBateriaEncerramento",
                table: "Viagens",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "VoltagemBateriaInicio",
                table: "Viagens",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodigoFalhaEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "CodigoFalhaInicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "DataHoraDiagnosticoEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "DataHoraDiagnosticoInicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "MonitorCatalisadorEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "MonitorCatalisadorInicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "MonitorSensor02Encerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "MonitorSensor02Inicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "NivelCombustivelEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "NivelCombustivelInicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "StatusControleEmissaoEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "StatusControleEmissaoInicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "StatusMonitoresEmissaoEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "StatusMonitoresEmissaoInicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "StatusTransmissaoEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "StatusTransmissaoInicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "TemperaturaSensor02Encerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "TemperaturaSensor02Inicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "TemperaturaTransmissaoEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "TemperaturaTransmissaoInicio",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "VoltagemBateriaEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "VoltagemBateriaInicio",
                table: "Viagens");

            migrationBuilder.AlterColumn<string>(
                name: "ObservacoesInicio",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "LocalizacaoInicio",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "DiagnosticoEncerramentoId",
                table: "Viagens",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DiagnosticoInicioId",
                table: "Viagens",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DiagnosticosEncerramento",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CodigoFalhaEncerramento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataHoraDiagnosticoEncerramento = table.Column<DateTime>(type: "datetime2", nullable: true),
                    MonitorCatalisadorEncerramento = table.Column<bool>(type: "bit", nullable: true),
                    MonitorSensor02Encerramento = table.Column<bool>(type: "bit", nullable: true),
                    NivelCombustivelEncerramento = table.Column<double>(type: "float", nullable: true),
                    StatusControleEmissaoEncerramento = table.Column<bool>(type: "bit", nullable: true),
                    StatusMonitoresEmissaoEncerramento = table.Column<bool>(type: "bit", nullable: true),
                    StatusTransmissaoEncerramento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TemperaturaSensor02Encerramento = table.Column<double>(type: "float", nullable: true),
                    TemperaturaTransmissaoEncerramento = table.Column<double>(type: "float", nullable: true),
                    VoltagemBateriaEncerramento = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiagnosticosEncerramento", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DiagnosticosInicio",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CodigoFalhaInicio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataHoraDiagnosticoInicio = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MonitorCatalisadorInicio = table.Column<bool>(type: "bit", nullable: false),
                    MonitorSensor02Inicio = table.Column<bool>(type: "bit", nullable: false),
                    NivelCombustivelInicio = table.Column<double>(type: "float", nullable: false),
                    StatusControleEmissaoInicio = table.Column<bool>(type: "bit", nullable: false),
                    StatusMonitoresEmissaoInicio = table.Column<bool>(type: "bit", nullable: false),
                    StatusTransmissaoInicio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TemperaturaSensor02Inicio = table.Column<double>(type: "float", nullable: false),
                    TemperaturaTransmissaoInicio = table.Column<double>(type: "float", nullable: false),
                    VoltagemBateriaInicio = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiagnosticosInicio", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Viagens_DiagnosticoEncerramentoId",
                table: "Viagens",
                column: "DiagnosticoEncerramentoId");

            migrationBuilder.CreateIndex(
                name: "IX_Viagens_DiagnosticoInicioId",
                table: "Viagens",
                column: "DiagnosticoInicioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Viagens_DiagnosticosEncerramento_DiagnosticoEncerramentoId",
                table: "Viagens",
                column: "DiagnosticoEncerramentoId",
                principalTable: "DiagnosticosEncerramento",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Viagens_DiagnosticosInicio_DiagnosticoInicioId",
                table: "Viagens",
                column: "DiagnosticoInicioId",
                principalTable: "DiagnosticosInicio",
                principalColumn: "Id");
        }
    }
}

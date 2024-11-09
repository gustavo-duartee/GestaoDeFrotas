using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Viagens_Checklists_ChecklistId",
                table: "Viagens");

            migrationBuilder.RenameColumn(
                name: "Observacoes",
                table: "Viagens",
                newName: "ObservacoesInicio");

            migrationBuilder.RenameColumn(
                name: "Localizacao",
                table: "Viagens",
                newName: "ObservacoesEncerramento");

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "Viagens",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<int>(
                name: "ChecklistId",
                table: "Viagens",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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

            migrationBuilder.AddColumn<string>(
                name: "LocalizacaoEncerramento",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LocalizacaoInicio",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DiagnosticosEncerramento",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NivelCombustivelEncerramento = table.Column<double>(type: "float", nullable: false),
                    StatusControleEmissaoEncerramento = table.Column<bool>(type: "bit", nullable: false),
                    MonitorCatalisadorEncerramento = table.Column<bool>(type: "bit", nullable: false),
                    MonitorSensor02Encerramento = table.Column<bool>(type: "bit", nullable: false),
                    TemperaturaSensor02Encerramento = table.Column<double>(type: "float", nullable: false),
                    TemperaturaTransmissaoEncerramento = table.Column<double>(type: "float", nullable: false),
                    StatusTransmissaoEncerramento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CodigoFalhaEncerramento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StatusMonitoresEmissaoEncerramento = table.Column<bool>(type: "bit", nullable: false),
                    VoltagemBateriaEncerramento = table.Column<double>(type: "float", nullable: false),
                    DataHoraDiagnosticoEncerramento = table.Column<DateTime>(type: "datetime2", nullable: false)
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
                    NivelCombustivelInicio = table.Column<double>(type: "float", nullable: false),
                    StatusControleEmissaoInicio = table.Column<bool>(type: "bit", nullable: false),
                    MonitorCatalisadorInicio = table.Column<bool>(type: "bit", nullable: false),
                    MonitorSensor02Inicio = table.Column<bool>(type: "bit", nullable: false),
                    TemperaturaSensor02Inicio = table.Column<double>(type: "float", nullable: false),
                    TemperaturaTransmissaoInicio = table.Column<double>(type: "float", nullable: false),
                    StatusTransmissaoInicio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CodigoFalhaInicio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StatusMonitoresEmissaoInicio = table.Column<bool>(type: "bit", nullable: false),
                    VoltagemBateriaInicio = table.Column<double>(type: "float", nullable: false),
                    DataHoraDiagnosticoInicio = table.Column<DateTime>(type: "datetime2", nullable: false)
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
                name: "FK_Viagens_Checklists_ChecklistId",
                table: "Viagens",
                column: "ChecklistId",
                principalTable: "Checklists",
                principalColumn: "Id");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Viagens_Checklists_ChecklistId",
                table: "Viagens");

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

            migrationBuilder.DropColumn(
                name: "LocalizacaoEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "LocalizacaoInicio",
                table: "Viagens");

            migrationBuilder.RenameColumn(
                name: "ObservacoesInicio",
                table: "Viagens",
                newName: "Observacoes");

            migrationBuilder.RenameColumn(
                name: "ObservacoesEncerramento",
                table: "Viagens",
                newName: "Localizacao");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Viagens",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ChecklistId",
                table: "Viagens",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Viagens_Checklists_ChecklistId",
                table: "Viagens",
                column: "ChecklistId",
                principalTable: "Checklists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

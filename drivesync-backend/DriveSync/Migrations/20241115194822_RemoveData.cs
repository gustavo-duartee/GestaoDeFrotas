using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class RemoveData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dataHoraDiagnosticoEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "dataHoraDiagnosticoInicio",
                table: "Viagens");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "dataHoraDiagnosticoEncerramento",
                table: "Viagens",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "dataHoraDiagnosticoInicio",
                table: "Viagens",
                type: "datetime2",
                nullable: true);
        }
    }
}

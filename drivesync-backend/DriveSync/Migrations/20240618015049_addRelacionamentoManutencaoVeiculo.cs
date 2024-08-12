using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class addRelacionamentoManutencaoVeiculo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "dt_prox_manutencao",
                table: "Manutencao",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "veiculoId",
                table: "Manutencao",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Manutencao_veiculoId",
                table: "Manutencao",
                column: "veiculoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Manutencao_Veiculos_veiculoId",
                table: "Manutencao",
                column: "veiculoId",
                principalTable: "Veiculos",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Manutencao_Veiculos_veiculoId",
                table: "Manutencao");

            migrationBuilder.DropIndex(
                name: "IX_Manutencao_veiculoId",
                table: "Manutencao");

            migrationBuilder.DropColumn(
                name: "dt_prox_manutencao",
                table: "Manutencao");

            migrationBuilder.DropColumn(
                name: "veiculoId",
                table: "Manutencao");
        }
    }
}

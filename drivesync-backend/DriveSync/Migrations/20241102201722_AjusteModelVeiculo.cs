using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AjusteModelVeiculo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TpCombustivel",
                table: "Veiculos",
                newName: "tpCombustivel");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Veiculos",
                newName: "status");

            migrationBuilder.RenameColumn(
                name: "Renavam",
                table: "Veiculos",
                newName: "renavam");

            migrationBuilder.RenameColumn(
                name: "Quilometragem",
                table: "Veiculos",
                newName: "quilometragem");

            migrationBuilder.RenameColumn(
                name: "Placa",
                table: "Veiculos",
                newName: "placa");

            migrationBuilder.RenameColumn(
                name: "NmrChassi",
                table: "Veiculos",
                newName: "nmrChassi");

            migrationBuilder.RenameColumn(
                name: "Modelo",
                table: "Veiculos",
                newName: "modelo");

            migrationBuilder.RenameColumn(
                name: "Marca",
                table: "Veiculos",
                newName: "marca");

            migrationBuilder.RenameColumn(
                name: "DtAquisicao",
                table: "Veiculos",
                newName: "dtAquisicao");

            migrationBuilder.RenameColumn(
                name: "Cor",
                table: "Veiculos",
                newName: "cor");

            migrationBuilder.RenameColumn(
                name: "Categoria",
                table: "Veiculos",
                newName: "categoria");

            migrationBuilder.RenameColumn(
                name: "CapPassageiros",
                table: "Veiculos",
                newName: "capPassageiros");

            migrationBuilder.RenameColumn(
                name: "Ano",
                table: "Veiculos",
                newName: "ano");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Veiculos",
                newName: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "tpCombustivel",
                table: "Veiculos",
                newName: "TpCombustivel");

            migrationBuilder.RenameColumn(
                name: "status",
                table: "Veiculos",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "renavam",
                table: "Veiculos",
                newName: "Renavam");

            migrationBuilder.RenameColumn(
                name: "quilometragem",
                table: "Veiculos",
                newName: "Quilometragem");

            migrationBuilder.RenameColumn(
                name: "placa",
                table: "Veiculos",
                newName: "Placa");

            migrationBuilder.RenameColumn(
                name: "nmrChassi",
                table: "Veiculos",
                newName: "NmrChassi");

            migrationBuilder.RenameColumn(
                name: "modelo",
                table: "Veiculos",
                newName: "Modelo");

            migrationBuilder.RenameColumn(
                name: "marca",
                table: "Veiculos",
                newName: "Marca");

            migrationBuilder.RenameColumn(
                name: "dtAquisicao",
                table: "Veiculos",
                newName: "DtAquisicao");

            migrationBuilder.RenameColumn(
                name: "cor",
                table: "Veiculos",
                newName: "Cor");

            migrationBuilder.RenameColumn(
                name: "categoria",
                table: "Veiculos",
                newName: "Categoria");

            migrationBuilder.RenameColumn(
                name: "capPassageiros",
                table: "Veiculos",
                newName: "CapPassageiros");

            migrationBuilder.RenameColumn(
                name: "ano",
                table: "Veiculos",
                newName: "Ano");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Veiculos",
                newName: "Id");
        }
    }
}

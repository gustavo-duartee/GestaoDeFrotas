using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AjusteModelVeiculo2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "capPassageiros",
                table: "Veiculos");

            migrationBuilder.RenameColumn(
                name: "tpCombustivel",
                table: "Veiculos",
                newName: "tp_combustivel");

            migrationBuilder.RenameColumn(
                name: "nmrChassi",
                table: "Veiculos",
                newName: "nmr_chassi");

            migrationBuilder.RenameColumn(
                name: "dtAquisicao",
                table: "Veiculos",
                newName: "dt_aquisicao");

            migrationBuilder.AddColumn<string>(
                name: "cap_passageiros",
                table: "Veiculos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cap_passageiros",
                table: "Veiculos");

            migrationBuilder.RenameColumn(
                name: "tp_combustivel",
                table: "Veiculos",
                newName: "tpCombustivel");

            migrationBuilder.RenameColumn(
                name: "nmr_chassi",
                table: "Veiculos",
                newName: "nmrChassi");

            migrationBuilder.RenameColumn(
                name: "dt_aquisicao",
                table: "Veiculos",
                newName: "dtAquisicao");

            migrationBuilder.AddColumn<int>(
                name: "capPassageiros",
                table: "Veiculos",
                type: "int",
                nullable: true);
        }
    }
}

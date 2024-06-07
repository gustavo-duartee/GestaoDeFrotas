using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class editManutencao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "fornecedor",
                table: "Manutencao");

            migrationBuilder.DropColumn(
                name: "pecas_trocadas",
                table: "Manutencao");

            migrationBuilder.AddColumn<string>(
                name: "servico",
                table: "Manutencao",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "veiculo",
                table: "Manutencao",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "servico",
                table: "Manutencao");

            migrationBuilder.DropColumn(
                name: "veiculo",
                table: "Manutencao");

            migrationBuilder.AddColumn<string>(
                name: "fornecedor",
                table: "Manutencao",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "pecas_trocadas",
                table: "Manutencao",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: false,
                defaultValue: "");
        }
    }
}

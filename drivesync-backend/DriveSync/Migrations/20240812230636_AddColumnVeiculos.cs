using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AddColumnVeiculos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "cap_passageiros",
                table: "Veiculos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "categoria",
                table: "Veiculos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "cor",
                table: "Veiculos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "nmr_chassi",
                table: "Veiculos",
                type: "nvarchar(12)",
                maxLength: 12,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "renavam",
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

            migrationBuilder.DropColumn(
                name: "categoria",
                table: "Veiculos");

            migrationBuilder.DropColumn(
                name: "cor",
                table: "Veiculos");

            migrationBuilder.DropColumn(
                name: "nmr_chassi",
                table: "Veiculos");

            migrationBuilder.DropColumn(
                name: "renavam",
                table: "Veiculos");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AjusteList : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Multas_Veiculos_Veiculoid",
                table: "Multas");

            migrationBuilder.DropIndex(
                name: "IX_Multas_Veiculoid",
                table: "Multas");

            migrationBuilder.DropColumn(
                name: "IdVeiculo",
                table: "Multas");

            migrationBuilder.AlterColumn<int>(
                name: "Veiculoid",
                table: "Multas",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Veiculoid",
                table: "Multas",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "IdVeiculo",
                table: "Multas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Multas_Veiculoid",
                table: "Multas",
                column: "Veiculoid");

            migrationBuilder.AddForeignKey(
                name: "FK_Multas_Veiculos_Veiculoid",
                table: "Multas",
                column: "Veiculoid",
                principalTable: "Veiculos",
                principalColumn: "id");
        }
    }
}

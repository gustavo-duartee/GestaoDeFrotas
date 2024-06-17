using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class ListVeiculos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Multas",
                newName: "id");

            migrationBuilder.AddColumn<int>(
                name: "Veiculoid",
                table: "Multas",
                type: "int",
                nullable: true);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Multas_Veiculos_Veiculoid",
                table: "Multas");

            migrationBuilder.DropIndex(
                name: "IX_Multas_Veiculoid",
                table: "Multas");

            migrationBuilder.DropColumn(
                name: "Veiculoid",
                table: "Multas");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Multas",
                newName: "Id");
        }
    }
}

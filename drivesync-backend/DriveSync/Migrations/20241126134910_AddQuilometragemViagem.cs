using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AddQuilometragemViagem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "quilometragemEncerramento",
                table: "Viagens",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "quilometragemInicio",
                table: "Viagens",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "quilometragemEncerramento",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "quilometragemInicio",
                table: "Viagens");
        }
    }
}

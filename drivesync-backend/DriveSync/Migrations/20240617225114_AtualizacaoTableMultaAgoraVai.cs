using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AtualizacaoTableMultaAgoraVai : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ptsCarteira",
                table: "Multas",
                newName: "ptscarteira");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ptscarteira",
                table: "Multas",
                newName: "ptsCarteira");
        }
    }
}

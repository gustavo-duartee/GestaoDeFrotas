using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AtualizacaoTableMulta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Veiculoid",
                table: "Multas",
                newName: "veiculoid");

            migrationBuilder.RenameColumn(
                name: "Valor",
                table: "Multas",
                newName: "valor");

            migrationBuilder.RenameColumn(
                name: "TpInfracao",
                table: "Multas",
                newName: "tpinfracao");

            migrationBuilder.RenameColumn(
                name: "PtsCarteira",
                table: "Multas",
                newName: "ptsCarteira");

            migrationBuilder.RenameColumn(
                name: "IdViagem",
                table: "Multas",
                newName: "idviagem");

            migrationBuilder.RenameColumn(
                name: "DtMulta",
                table: "Multas",
                newName: "dtmulta");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Multas",
                newName: "descricao");

            migrationBuilder.RenameColumn(
                name: "Codigo",
                table: "Multas",
                newName: "codigo");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "veiculoid",
                table: "Multas",
                newName: "Veiculoid");

            migrationBuilder.RenameColumn(
                name: "valor",
                table: "Multas",
                newName: "Valor");

            migrationBuilder.RenameColumn(
                name: "tpinfracao",
                table: "Multas",
                newName: "TpInfracao");

            migrationBuilder.RenameColumn(
                name: "ptsCarteira",
                table: "Multas",
                newName: "PtsCarteira");

            migrationBuilder.RenameColumn(
                name: "idviagem",
                table: "Multas",
                newName: "IdViagem");

            migrationBuilder.RenameColumn(
                name: "dtmulta",
                table: "Multas",
                newName: "DtMulta");

            migrationBuilder.RenameColumn(
                name: "descricao",
                table: "Multas",
                newName: "Descricao");

            migrationBuilder.RenameColumn(
                name: "codigo",
                table: "Multas",
                newName: "Codigo");
        }
    }
}

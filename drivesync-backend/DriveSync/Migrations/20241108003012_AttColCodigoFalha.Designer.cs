﻿// <auto-generated />
using System;
using DriveSync.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DriveSync.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20241108003012_AttColCodigoFalha")]
    partial class AttColCodigoFalha
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("DriveSync.Model.Checklists", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("Combustivel")
                        .HasColumnType("bit");

                    b.Property<bool>("Equipamentos")
                        .HasColumnType("bit");

                    b.Property<bool>("Estepe")
                        .HasColumnType("bit");

                    b.Property<bool>("Extintor")
                        .HasColumnType("bit");

                    b.Property<bool>("Freios")
                        .HasColumnType("bit");

                    b.Property<bool>("Luzes")
                        .HasColumnType("bit");

                    b.Property<bool>("Pneus")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Checklists");
                });

            modelBuilder.Entity("DriveSync.Model.DiagnosticosEncerramento", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CodigoFalhaEncerramento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DataHoraDiagnosticoEncerramento")
                        .HasColumnType("datetime2");

                    b.Property<bool>("MonitorCatalisadorEncerramento")
                        .HasColumnType("bit");

                    b.Property<bool>("MonitorSensor02Encerramento")
                        .HasColumnType("bit");

                    b.Property<double>("NivelCombustivelEncerramento")
                        .HasColumnType("float");

                    b.Property<bool>("StatusControleEmissaoEncerramento")
                        .HasColumnType("bit");

                    b.Property<bool>("StatusMonitoresEmissaoEncerramento")
                        .HasColumnType("bit");

                    b.Property<string>("StatusTransmissaoEncerramento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("TemperaturaSensor02Encerramento")
                        .HasColumnType("float");

                    b.Property<double>("TemperaturaTransmissaoEncerramento")
                        .HasColumnType("float");

                    b.Property<double>("VoltagemBateriaEncerramento")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("DiagnosticosEncerramento");
                });

            modelBuilder.Entity("DriveSync.Model.DiagnosticosInicio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CodigoFalhaInicio")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DataHoraDiagnosticoInicio")
                        .HasColumnType("datetime2");

                    b.Property<bool>("MonitorCatalisadorInicio")
                        .HasColumnType("bit");

                    b.Property<bool>("MonitorSensor02Inicio")
                        .HasColumnType("bit");

                    b.Property<double>("NivelCombustivelInicio")
                        .HasColumnType("float");

                    b.Property<bool>("StatusControleEmissaoInicio")
                        .HasColumnType("bit");

                    b.Property<bool>("StatusMonitoresEmissaoInicio")
                        .HasColumnType("bit");

                    b.Property<string>("StatusTransmissaoInicio")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("TemperaturaSensor02Inicio")
                        .HasColumnType("float");

                    b.Property<double>("TemperaturaTransmissaoInicio")
                        .HasColumnType("float");

                    b.Property<double>("VoltagemBateriaInicio")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("DiagnosticosInicio");
                });

            modelBuilder.Entity("DriveSync.Model.Empresa", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("cnpj")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<DateTime?>("data_cadastro")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("endereco")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("nome")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("telefone")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("id");

                    b.ToTable("Empresas");
                });

            modelBuilder.Entity("DriveSync.Model.Manutencao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("descricao")
                        .IsRequired()
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)");

                    b.Property<DateTime?>("dt_manutencao")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("dt_prox_manutencao")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<string>("servico")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("tp_manutencao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("valor")
                        .HasColumnType("real");

                    b.Property<string>("veiculo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("veiculoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("veiculoId");

                    b.ToTable("Manutencao");
                });

            modelBuilder.Entity("DriveSync.Model.Multa", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("codigo")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("descricao")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<DateTime?>("dtmulta")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<int>("idviagem")
                        .HasColumnType("int");

                    b.Property<int>("ptscarteira")
                        .HasColumnType("int");

                    b.Property<string>("tpinfracao")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<decimal>("valor")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("veiculoid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("Multas");
                });

            modelBuilder.Entity("DriveSync.Model.Veiculo", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<int?>("ano")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<string>("cap_passageiros")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("categoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("cor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("dt_aquisicao")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<string>("marca")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.Property<string>("modelo")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.Property<string>("nmr_chassi")
                        .IsRequired()
                        .HasMaxLength(12)
                        .HasColumnType("nvarchar(12)");

                    b.Property<string>("placa")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.Property<int?>("quilometragem")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<string>("renavam")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tp_combustivel")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.HasKey("id");

                    b.ToTable("Veiculos");
                });

            modelBuilder.Entity("DriveSync.Model.Viagem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("ChecklistId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("DataEncerramento")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DataInicio")
                        .HasColumnType("datetime2");

                    b.Property<int?>("DiagnosticoEncerramentoId")
                        .HasColumnType("int");

                    b.Property<int?>("DiagnosticoInicioId")
                        .HasColumnType("int");

                    b.Property<string>("LocalizacaoEncerramento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LocalizacaoInicio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotoristaId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ObservacoesEncerramento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ObservacoesInicio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("VeiculoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ChecklistId");

                    b.HasIndex("DiagnosticoEncerramentoId");

                    b.HasIndex("DiagnosticoInicioId");

                    b.HasIndex("VeiculoId");

                    b.ToTable("Viagens");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("DriveSync.Model.Manutencao", b =>
                {
                    b.HasOne("DriveSync.Model.Veiculo", null)
                        .WithMany("manutencoes")
                        .HasForeignKey("veiculoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DriveSync.Model.Viagem", b =>
                {
                    b.HasOne("DriveSync.Model.Checklists", "Checklist")
                        .WithMany()
                        .HasForeignKey("ChecklistId");

                    b.HasOne("DriveSync.Model.DiagnosticosEncerramento", "DiagnosticoEncerramento")
                        .WithMany()
                        .HasForeignKey("DiagnosticoEncerramentoId");

                    b.HasOne("DriveSync.Model.DiagnosticosInicio", "DiagnosticoInicio")
                        .WithMany()
                        .HasForeignKey("DiagnosticoInicioId");

                    b.HasOne("DriveSync.Model.Veiculo", "Veiculo")
                        .WithMany()
                        .HasForeignKey("VeiculoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Checklist");

                    b.Navigation("DiagnosticoEncerramento");

                    b.Navigation("DiagnosticoInicio");

                    b.Navigation("Veiculo");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DriveSync.Model.Veiculo", b =>
                {
                    b.Navigation("manutencoes");
                });
#pragma warning restore 612, 618
        }
    }
}

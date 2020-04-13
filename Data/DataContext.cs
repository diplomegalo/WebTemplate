// <copyright file="DataContext.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Linq;
    using System.Reflection;

    using Data.Models;

    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// This class defines the data context of the application.
    /// </summary>
    public class DataContext : DbContext
    {
        /// <summary>
        /// Gets or sets the Vegetables data.
        /// </summary>
        public DbSet<Recipe> Recipes { get; set; }

        /// <inheritdoc />
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(
                "Filename=../Data/web-template.sqlite",
                options => options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName));
            base.OnConfiguring(optionsBuilder);
        }

        /// <inheritdoc />
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Recipe>()
                .ToTable("Recipes")
                .HasKey(e => e.Id);

            modelBuilder.Entity<Ingredient>()
                .ToTable("Ingredient")
                .HasKey(e => e.Id);

            base.OnModelCreating(modelBuilder);
        }
    }
}
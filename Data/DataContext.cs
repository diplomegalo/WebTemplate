// <copyright file="DataContext.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Linq;
    using System.Reflection;

    using Data.Entities;

    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;

    /// <summary>
    /// This class defines the data context of the application.
    /// </summary>
    public class DataContext : DbContext
    {
        /// <summary>
        /// The logger factory.
        /// </summary>
        private static readonly ILoggerFactory ContextLoggerFactory =
            LoggerFactory.Create(builder => builder.AddConsole());

        /// <summary>
        /// Gets or sets the Ingredients data.
        /// </summary>
        public DbSet<Ingredient> Ingredients { get; set; }

        /// <summary>
        /// Gets or sets the join RecipeIngredients data.
        /// </summary>
        public DbSet<RecipeIngredient> RecipeIngredients { get; set; }

        /// <summary>
        /// Gets or sets the Vegetables data.
        /// </summary>
        public DbSet<Recipe> Recipes { get; set; }

        /// <inheritdoc />
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // TODO : find a way to use logger factory only when in dev.
            optionsBuilder
                .UseLoggerFactory(ContextLoggerFactory)
                .EnableSensitiveDataLogging()
                .UseSqlite(
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
                .ToTable("Ingredients")
                .HasKey(e => e.Id);

            modelBuilder.Entity<RecipeIngredient>()
                .ToTable("RecipeIngredient")
                .HasKey(e => new { e.RecipeId, e.IngredientId });

            modelBuilder.Entity<RecipeIngredient>()
                .HasOne(ri => ri.Recipe)
                .WithMany(r => r.RecipeIngredients)
                .HasForeignKey(r => r.RecipeId);

            modelBuilder.Entity<RecipeIngredient>()
                .HasOne(ri => ri.Ingredient)
                .WithMany(i => i.RecipeIngredients)
                .HasForeignKey(ri => ri.IngredientId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
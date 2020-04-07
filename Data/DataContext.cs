using System.Net.Mail;
using System.Reflection;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    /// <summary>
    /// This class defines the data context of the application.
    /// </summary>
    public class DataContext : DbContext
    {   
        /// <summary>
        /// Gets or sets the Vegetables <see cref="DbSet"/>.
        /// </summary>    
        public DbSet<Recipe> Recipes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=../Data/web-template.sqlite",
                options => options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName));
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Recipe>()
                .ToTable("Recipes")
                .HasKey(e => e.Id);
            base.OnModelCreating(modelBuilder);
        }
    }
}
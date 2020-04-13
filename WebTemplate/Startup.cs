// <copyright file="Startup.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace WebTemplate
{
    using System;
    using System.Linq;

    using AutoMapper;

    using Data;

    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;

    /// <summary>
    /// This class defines the startup methods.
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        /// <param name="app">The application builder.</param>
        /// <param name="env">The web host environment.</param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseEndpoints(endpoint => endpoint.MapControllers());

            app.UseSpaStaticFiles();
            app.UseSpa(spa => spa.Options.SourcePath = "app/dist/");
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940.
        /// </summary>
        /// <param name="services">The service container.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            // Data
            services.AddDbContext<DataContext>();
            services.AddScoped<IRecipeRepository, RecipeRepository>();
            services.AddAutoMapper(
                cfg => cfg.AddMaps(typeof(DataModelMapping), typeof(WebModelMapping)),
                typeof(Startup));

            // Controller
            services.AddControllers();
            services.AddSpaStaticFiles(configuration => configuration.RootPath = "app/dist/");
        }
    }
}
// <copyright file="Startup.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Web
{
    using System;
    using System.Linq;
    using AutoMapper;
    using Business;
    using Data;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Versioning;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Dto = Common.DTO;
    using Entity = Data.Entities;
    using Model = Web.Models;
    using ModelV1 = Web.Models.V1;

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
            services.AddScoped<IIngredientRepository, IngredientRepository>();

            // Business
            services.AddScoped<IRecipeDomain, RecipeDomain>();
            services.AddScoped<Business.V1.IRecipeDomain, Business.V1.RecipeDomain>();

            services.AddAutoMapper(
                cfg => cfg.AddMaps(
                    typeof(Entity.Mapping), 
                    typeof(Model.Mapping), 
                    typeof(ModelV1.Mapping)), 
                typeof(Startup));

            // Controller
            services.AddControllers();
            services.AddSpaStaticFiles(configuration => configuration.RootPath = "app/dist/");

            services.AddApiVersioning(opt =>
            {
                opt.ReportApiVersions = true;
                opt.AssumeDefaultVersionWhenUnspecified = true;
                opt.DefaultApiVersion = ApiVersion.Parse("2.0");
                opt.ApiVersionReader = ApiVersionReader.Combine(
                    new QueryStringApiVersionReader("v"),
                    new HeaderApiVersionReader("X-Version"));
            });
        }
    }
}
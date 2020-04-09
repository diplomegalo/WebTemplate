// <copyright file="Program.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace WebTemplate
{
    using System;
    using System.Linq;

    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Hosting;

    /// <summary>
    /// This class defines the entry points of the application.
    /// </summary>
    public static class Program
    {
        /// <summary>
        /// The main method is call first at runtime.
        /// </summary>
        /// <param name="args">Arguments passed to the method.</param>
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        private static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
        }
    }
}
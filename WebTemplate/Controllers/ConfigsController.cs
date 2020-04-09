// <copyright file="ConfigsController.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace WebTemplate.Controllers
{
    using System;
    using System.Linq;

    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// This class defines <see cref="Controller" /> for config.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class ConfigsController : ControllerBase
    {
        /// <summary>
        /// Sends an Http code 200.
        /// </summary>
        /// <returns>Returns an Http code 200.</returns>
        [Route("check-is-up")]
        public IActionResult CheckIsUpAndRunning()
        {
            return this.Ok("Api is up and running");
        }

        /// <summary>
        /// Sends an Http error 500.
        /// </summary>
        /// <returns>Returns an Http error 500.</returns>
        [Route("send-error")]
        public IActionResult SendError()
        {
            return this.StatusCode(500, "Send error");
        }
    }
}
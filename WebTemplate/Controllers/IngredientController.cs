// <copyright file="IngredientController.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace WebTemplate.Controllers
{
    using System;
    using System.Linq;

    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// This controller manage the ingredient entity.
    /// </summary>
    [ApiController]
    [Route("api/recipe/{id}/ingredient")]
    public class IngredientController : ControllerBase
    {
    }
}
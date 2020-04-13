// <copyright file="RecipeController.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace WebTemplate.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Data;

    using Microsoft.AspNetCore.Mvc;

    using WebTemplate.Models;

    /// <summary>
    /// This controller defines operation for the <see cref="Recipe" /> model.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeRepository recipeRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeController"/> class.
        /// </summary>
        public RecipeController(IRecipeRepository recipeRepository)
        {
            this.recipeRepository = recipeRepository;
        }

        public ActionResult<IEnumerable<Recipe>> Get() => 
            this.Ok(this.recipeRepository.GetAll());
    }
}
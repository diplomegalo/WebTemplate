// <copyright file="RecipeController.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace WebTemplate.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using AutoMapper;

    using Data;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Routing;

    using DtoModel = Model.DTO;
    using WebModel = WebTemplate.Models;

    /// <summary>
    /// This controller defines operation for the <see cref="WebModel.Recipe" /> model.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly LinkGenerator linkGenerator;
        private readonly IMapper mapper;
        private readonly IRecipeRepository recipeRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeController"/> class.
        /// </summary>
        /// <param name="recipeRepository">The recipes repository.</param>
        /// <param name="mapper">The mapper object.</param>
        /// <param name="linkGenerator">The link generator.</param>
        public RecipeController(IRecipeRepository recipeRepository, IMapper mapper, LinkGenerator linkGenerator)
        {
            this.recipeRepository = recipeRepository;
            this.mapper = mapper;
            this.linkGenerator = linkGenerator;
        }

        /// <summary>
        /// Gets all recipes.
        /// </summary>
        /// <returns>Returns the list of all recipes.</returns>
        [HttpGet]
        public ActionResult<IEnumerable<WebModel.Recipe>> Get() => this.Ok(this.recipeRepository.GetAll().Select(s => this.mapper.Map<WebModel.Recipe>(s)));

        /// <summary>
        /// Gets the recipes by the defines identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns>Returns the recipe with <paramref name="id"/> as identifier.</returns>
        [HttpGet("id")]
        public ActionResult<WebModel.Recipe> Get(int id) => this.Ok(this.mapper.Map<WebModel.Recipe>(this.recipeRepository.GetById(id)));

        /// <summary>
        /// Saves a a new recipes.
        /// </summary>
        /// <param name="recipe">The recipes to save.</param>
        /// <returns>Returns the identifier.</returns>
        [HttpPost]
        public ActionResult<WebModel.Recipe> Post(WebModel.Recipe recipe)
        {
            recipe.Id = this.recipeRepository.Save(this.mapper.Map<DtoModel.Recipe>(recipe));
            return this.Created(this.linkGenerator.GetPathByAction("Get", "Recipe", new { id = recipe.Id }), recipe);
        }
    }
}
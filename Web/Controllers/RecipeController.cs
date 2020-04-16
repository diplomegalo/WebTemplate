// <copyright file="RecipeController.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using AutoMapper;

    using Business;

    using Common.Exceptions;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Routing;

    using Web.Models;

    using DtoModel = Common.DTO;
    using WebModel = Web.Models;

    /// <summary>
    /// This controller defines operation for the <see cref="Recipe" /> model.
    /// </summary>
    [ApiController]
    [ApiVersion("2.0")]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly LinkGenerator linkGenerator;
        private readonly IMapper mapper;
        private readonly IRecipeDomain recipeDomain;

        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeController"/> class.
        /// </summary>
        /// <param name="recipeDomain">The recipe domain.</param>
        /// <param name="mapper">The mapper object.</param>
        /// <param name="linkGenerator">The link generator.</param>
        public RecipeController(IRecipeDomain recipeDomain, IMapper mapper, LinkGenerator linkGenerator)
        {
            this.recipeDomain = recipeDomain;
            this.mapper = mapper;
            this.linkGenerator = linkGenerator;
        }

        /// <summary>
        /// Removes the recipe with the defined id from storage.
        /// </summary>
        /// <param name="id">The identifier of the recipe.</param>
        /// <returns>Returns the operation <see cref="IActionResult"/>.</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                this.recipeDomain.Remove(id);
            }
            catch (EntityNotFoundException e)
            {
                return this.NotFound(e.Message);
            }

            return this.Ok();
        }

        /// <summary>
        /// Gets all recipes.
        /// </summary>
        /// <returns>Returns the list of all recipes.</returns>
        [HttpGet]
        public ActionResult<IEnumerable<Recipe>> Get() => this.Ok(this.mapper.Map<IEnumerable<Recipe>>(this.recipeDomain.RetrieveList()));

        /// <summary>
        /// Gets the recipes by the defines identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns>Returns the recipe with <paramref name="id"/> as identifier.</returns>
        [HttpGet("{id}")]
        public ActionResult<Recipe> Get(int id)
        {
            var result = this.recipeDomain.Retrieve(id);
            if (result == null)
            {
                return this.NotFound($"Unable to retrieve the recipe with identifier: {id}.");
            }

            return this.mapper.Map<Recipe>(result);
        }

        /// <summary>
        /// Saves a a new recipes.
        /// </summary>
        /// <param name="recipe">The recipes to save.</param>
        /// <returns>Returns the identifier.</returns>
        [HttpPost]
        public ActionResult<Recipe> Post(Recipe recipe) =>
            this.Created(
                this.linkGenerator.GetPathByAction("Get", "Recipe", new { id = recipe.Id }),
                this.recipeDomain.Register(this.mapper.Map<DtoModel.Recipe>(recipe)));

        /// <summary>
        /// Update the current recipe by the updated recipe.
        /// </summary>
        /// <param name="recipe">The recipe updated state.</param>
        /// <returns>Returns the new state of the recipe.</returns>
        [HttpPut]
        public ActionResult<Recipe> Put(Recipe recipe)
        {
            try
            {
                return this.mapper.Map<Recipe>(
                    this.recipeDomain.Register(this.mapper.Map<DtoModel.Recipe>(recipe)));
            }

            // TODO : catch and manage exception into configuration services.
            catch (EntityNotFoundException e)
            {
                return this.NotFound(e.Message);
            }
        }
    }
}
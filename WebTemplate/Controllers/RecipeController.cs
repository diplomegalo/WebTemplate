// <copyright file="RecipeController.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace WebTemplate.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using AutoMapper;

    using Business;

    using Common.Exceptions;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Routing;

    using DtoModel = Common.DTO;
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
        [HttpDelete("{id}")]
        public void Delete(int id) => this.recipeDomain.Remove(id);

        /// <summary>
        /// Gets all recipes.
        /// </summary>
        /// <returns>Returns the list of all recipes.</returns>
        [HttpGet]
        public ActionResult<IEnumerable<WebModel.Recipe>> Get() => this.Ok(this.recipeDomain.RetrieveList().Select(s => this.mapper.Map<WebModel.Recipe>(s)));

        /// <summary>
        /// Gets the recipes by the defines identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns>Returns the recipe with <paramref name="id"/> as identifier.</returns>
        [HttpGet("{id}")]
        public ActionResult<WebModel.Recipe> Get(int id) => this.mapper.Map<WebModel.Recipe>(this.recipeDomain.Retrieve(id));

        /// <summary>
        /// Saves a a new recipes.
        /// </summary>
        /// <param name="recipe">The recipes to save.</param>
        /// <returns>Returns the identifier.</returns>
        [HttpPost]
        public ActionResult<WebModel.Recipe> Post(WebModel.Recipe recipe) =>
            this.Created(
                this.linkGenerator.GetPathByAction("Get", "Recipe", new { id = recipe.Id }),
                this.recipeDomain.Register(this.mapper.Map<DtoModel.Recipe>(recipe)));

        /// <summary>
        /// Update the current recipe by the updated recipe.
        /// </summary>
        /// <param name="recipe">The recipe updated state.</param>
        /// <returns>Returns the new state of the recipe.</returns>
        [HttpPut]
        public ActionResult<WebModel.Recipe> Put(WebModel.Recipe recipe)
        {
            try
            {
                return this.mapper.Map<WebModel.Recipe>(
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
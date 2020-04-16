// <copyright file="IngredientController.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Web.Controllers
{
    using System;
    using System.Linq;
    using AutoMapper;
    using Business;
    using Microsoft.AspNetCore.Mvc;
    using Web.Models;
    using DtoModel = Common.DTO;
    using WebModel = Web.Models;

    /// <summary>
    /// This controller manage the ingredient entity.
    /// </summary>
    [ApiController]
    [Route("api/recipe/{id}/ingredient")]
    public class IngredientController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IRecipeDomain recipeDomain;

        /// <summary>
        /// Initializes a new instance of the <see cref="IngredientController"/> class.
        /// </summary>
        /// <param name="recipeDomain">The recipe domain.</param>
        /// <param name="mapper">The mapper object.</param>
        public IngredientController(IRecipeDomain recipeDomain, IMapper mapper)
        {
            this.recipeDomain = recipeDomain;
            this.mapper = mapper;
        }

        /// <summary>
        /// Adds an ingredient to a recipe.
        /// </summary>
        /// <param name="id">The recipe identifier.</param>
        /// <param name="ingredient">The ingredient to add to recipe.</param>
        /// <returns>Returns the action result.</returns>
        [HttpPut]
        public IActionResult Put(int id, Ingredient ingredient)
        {
            try
            {
                this.recipeDomain.AddIngredient(id, this.mapper.Map<DtoModel.Ingredient>(ingredient));
                return this.Ok();
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
    }
}
// <copyright file="RecipeController.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Web.Controllers.V1
{
    using System;
    using System.Linq;
    using AutoMapper;
    using Business.V1;
    using Microsoft.AspNetCore.Mvc;
    using WebModel = Web.Models.V1;

    /// <summary>
    /// This controller defines operation for the <see cref="WebModel.Recipe" /> model.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IRecipeDomain recipeDomain;

        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeController"/> class.
        /// </summary>
        /// <param name="recipeDomain">The recipe domain.</param>
        /// <param name="mapper">The mapper object.</param>
        public RecipeController(IRecipeDomain recipeDomain, IMapper mapper)
        {
            this.recipeDomain = recipeDomain;
            this.mapper = mapper;
        }

        /// <summary>
        /// Gets the recipes by the defines identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns>Returns the recipe with <paramref name="id"/> as identifier.</returns>
        [HttpGet("{id}")]
        public ActionResult<WebModel.Recipe> Get(int id)
        {
            var result = this.recipeDomain.Retrieve(id);
            if (result == null)
            {
                return this.NotFound($"Unable to retrieve the recipe with identifier: {id}.");
            }

            return this.mapper.Map<WebModel.Recipe>(result);
        }
    }
}
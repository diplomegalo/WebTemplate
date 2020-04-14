﻿// <copyright file="IngredientController.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace WebTemplate.Controllers
{
    using System;
    using System.Linq;

    using AutoMapper;

    using Business;

    using Microsoft.AspNetCore.Mvc;

    using DtoModel = Model.DTO;
    using WebModel = WebTemplate.Models;

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
        [HttpPut]
        public void Put(int id, WebModel.Ingredient ingredient) => this.recipeDomain.AddIngredient(id, this.mapper.Map<DtoModel.Ingredient>(ingredient));
    }
}
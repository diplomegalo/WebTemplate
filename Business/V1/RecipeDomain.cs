// <copyright file="RecipeDomain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business.V1
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Common.DTO;

    using Data;

    /// <summary>
    /// This class defines the recipe domain.
    /// </summary>
    public class RecipeDomain : Domain<IRecipeRepository, Recipe, int>, IRecipeDomain
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeDomain"/> class.
        /// </summary>
        /// <param name="recipeRepository">The recipe repository.</param>
        public RecipeDomain(
            IRecipeRepository recipeRepository)
            : base(recipeRepository)
        {
        }

        /// <summary>
        /// Retrieves the recipe with the defined id.
        /// </summary>
        /// <param name="id">The recipe identifier.</param>
        /// <returns>Returns the recipe with the defined id.</returns>
        public override Recipe Retrieve(int id) => this.Repository.GetById(id);

        /// <summary>
        /// Retrieves the list of recipes.
        /// </summary>
        /// <returns>Returns the list of recipes.</returns>
        public IEnumerable<Recipe> RetrieveList() => this.Repository.GetAll();
    }
}
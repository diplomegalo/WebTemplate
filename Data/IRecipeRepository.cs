// <copyright file="IRecipeRepository.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Dto = Common.DTO;
    using Entity = Data.Entities;

    /// <summary>
    /// This interface defines methods for the recipe data.
    /// </summary>
    public interface IRecipeRepository : IRepository<Entity.Recipe, Dto.Recipe, int>
    {
        /// <summary>
        /// Gets the list of recipes with ingredients.
        /// </summary>
        /// <returns>Returns the list of recipes with ingredients.</returns>
        IEnumerable<Dto.Recipe> GetAllWithIngredients();

        /// <summary>
        /// Gets recipe with the defined id including ingredients.
        /// </summary>
        /// <param name="id">The recipe identifier.</param>
        /// <returns>Returns the recipe with the defined identifier including ingredients.</returns>
        Dto.Recipe GetByIdWithIngredients(int id);

        /// <summary>
        /// Join a recipe with an ingredient.
        /// </summary>
        /// <param name="recipeId">The recipe identifier.</param>
        /// <param name="ingredientId">The ingredient identifier.</param>
        void Join(int recipeId, int ingredientId);
    }
}
// <copyright file="RecipeIngredient.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data.Entities
{
    using System;
    using System.Linq;

    /// <summary>
    /// This class defines the join between <see cref="Recipe"/> and <see cref="Ingredient"/>.
    /// </summary>
    public class RecipeIngredient
    {
        /// <summary>
        /// Gets or sets the ingredient.
        /// </summary>
        public Ingredient Ingredient { get; set; }

        /// <summary>
        /// Gets or sets the ingredient identifier.
        /// </summary>
        public int IngredientId { get; set; }

        /// <summary>
        /// Gets or sets the recipe.
        /// </summary>
        public Recipe Recipe { get; set; }

        /// <summary>
        /// Gets or sets the recipe identifier.
        /// </summary>
        public int RecipeId { get; set; }
    }
}
// <copyright file="Recipe.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Common.DTO
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// This class defines the <see cref="Recipe" /> model.
    /// </summary>
    public class Recipe : ObjectModel<Recipe, int>
    {
        /// <summary>
        /// Gets or sets the description.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets the list of ingredients.
        /// </summary>
        public IEnumerable<Ingredient> Ingredients { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }
    }
}
// <copyright file="Ingredient.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Common.DTO
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// This class defines the ingredient model.
    /// </summary>
    public class Ingredient : ObjectModel<Ingredient, int>
    {
        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the list of recipes.
        /// </summary>
        public IEnumerable<Recipe> Recipes { get; set; }
    }
}
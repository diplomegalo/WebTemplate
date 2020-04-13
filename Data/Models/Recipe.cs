// <copyright file="Recipe.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data.Models
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    using Model;

    /// <summary>
    /// This class defines the <see cref="Recipe"/> model.
    /// </summary>
    public class Recipe : EntityBase<Recipe, int>
    {
        /// <summary>
        /// Gets or sets the description.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the list of ingredients.
        /// </summary>
        public IEnumerable<Ingredient> Ingredients { get; set; }
    }
}
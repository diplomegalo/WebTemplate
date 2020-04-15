// <copyright file="Recipe.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data.Entities
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Common;

    /// <summary>
    /// This class defines the <see cref="Recipe"/> model.
    /// </summary>
    public class Recipe : ObjectModel<Recipe, int>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Recipe"/> class.
        /// </summary>
        public Recipe()
        {
            this.RecipeIngredients = new HashSet<RecipeIngredient>();
        }

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
        public ICollection<RecipeIngredient> RecipeIngredients { get; set; }
    }
}
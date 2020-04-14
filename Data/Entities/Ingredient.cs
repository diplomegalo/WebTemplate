// <copyright file="Ingredient.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data.Entities
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Model;

    /// <summary>
    /// This class defines the ingredient data model.
    /// </summary>
    public class Ingredient : ObjectModel<Ingredient, int>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Ingredient"/> class.
        /// </summary>
        public Ingredient()
        {
            this.RecipeIngredients = new HashSet<RecipeIngredient>();
        }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the list of recipes.
        /// </summary>
        public ICollection<RecipeIngredient> RecipeIngredients { get; set; }
    }
}
// <copyright file="Recipe.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Web.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;

    /// <summary>
    /// This class defines the <see cref="Recipe" />.
    /// </summary>
    public class Recipe
    {
        /// <summary>
        /// Gets or sets the description.
        /// </summary>
        [StringLength(160)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the list of ingredients.
        /// </summary>
        public IEnumerable<Ingredient> Ingredients { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        [Required]
        public string Name { get; set; }
    }
}
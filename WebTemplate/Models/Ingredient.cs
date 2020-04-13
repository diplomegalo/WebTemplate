// <copyright file="Ingredient.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace WebTemplate.Models
{
    using System;
    using System.Linq;

    /// <summary>
    /// This class defines the ingredient model.
    /// </summary>
    public class Ingredient
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }
    }
}
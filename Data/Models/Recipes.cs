// <copyright file="Recipes.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data.Models
{
    using System;

    using Model;

    /// <summary>
    /// This class defines the <see cref="Recipes"/> model.
    /// </summary>
    public class Recipes : EntityBase<Recipes, int>
    {
        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the description.
        /// </summary>
        public string Description { get; set; }
    }
}
// <copyright file="Ingredient.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data.Models
{
    using System;
    using System.Linq;

    using Model;

    /// <summary>
    /// This class defines the ingredient data model.
    /// </summary>
    public class Ingredient : EntityBase<Ingredient, int>
    {
        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }
    }
}
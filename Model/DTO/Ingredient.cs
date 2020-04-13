// <copyright file="Ingredient.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Model.DTO
{
    /// <summary>
    /// This class defines the ingredient model.
    /// </summary>
    public class Ingredient : EntityBase<Ingredient, int>
    {
        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }
    }
}
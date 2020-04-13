// <copyright file="Ingredient.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data.Models
{
    using Model;

    /// <summary>
    /// This class defines the ingredient data model.
    /// </summary>
    public class Ingredient: EntityBase<Ingredient, int>
    {
        public string Name { get; set; }
    }
}
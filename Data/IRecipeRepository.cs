// <copyright file="IRecipeRepository.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data
{
    using Data.Models;

    using Model.DTO;

    /// <summary>
    /// This interface defines methods for the <see cref="Recipe"/> data.
    /// </summary>
    public interface IRecipeRepository : IRepositoryBase<Recipes, Recipe, int>
    {
    }
}
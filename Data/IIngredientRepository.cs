// <copyright file="IIngredientRepository.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data
{
    using System;
    using System.Linq;

    using Dto = Common.DTO;
    using Entity = Data.Entities;

    /// <summary>
    /// This interface defines the ingredient repository.
    /// </summary>
    public interface IIngredientRepository : IRepository<Entity.Ingredient, Dto.Ingredient, int>
    {
        /// <summary>
        /// Gets ingredient by name.
        /// </summary>
        /// <param name="name">The name of the ingredient.</param>
        /// <returns>Returns the ingredient with the define name.</returns>
        public Dto.Ingredient GetByName(string name);
    }
}
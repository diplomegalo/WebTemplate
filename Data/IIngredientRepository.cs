// <copyright file="IIngredientRepository.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data
{
    using System;
    using System.Linq;

    using DataModel = Data.Models;
    using DtoModel = Model.DTO;

    /// <summary>
    /// This interface defines the ingredient repository.
    /// </summary>
    public interface IIngredientRepository : IRepositoryBase<DataModel.Ingredient, DtoModel.Ingredient, int>
    {
    }
}
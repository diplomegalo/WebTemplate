// <copyright file="IRecipeRepository.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data
{
    using System;
    using System.Linq;

    using DataModel = Data.Entities;
    using DtoModel = Model.DTO;

    /// <summary>
    /// This interface defines methods for the recipe data.
    /// </summary>
    public interface IRecipeRepository : IRepositoryBase<DataModel.Recipe, DtoModel.Recipe, int>
    {
    }
}
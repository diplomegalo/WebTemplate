// <copyright file="IRecipeRepository.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data
{
    using System;
    using System.Linq;

    using DataModel = Data.Models;
    using DtoModel = Model.DTO;

    /// <summary>
    /// This interface defines methods for the <see cref="Model.DTO.Recipe"/> data.
    /// </summary>
    public interface IRecipeRepository : IRepositoryBase<DataModel.Recipe, DtoModel.Recipe, int>
    {
    }
}
// <copyright file="IIngredientDomain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System;
    using System.Linq;

    using Model.DTO;

    /// <summary>
    /// This interface defines the ingredient domain.
    /// </summary>
    public interface IIngredientDomain : IDomainBase<Ingredient, int>
    {
    }
}
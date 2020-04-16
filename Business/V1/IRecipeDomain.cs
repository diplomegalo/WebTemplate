// <copyright file="IRecipeDomain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business.V1
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Common.DTO;

    /// <summary>
    /// This class defines the recipe domain methods.
    /// </summary>
    public interface IRecipeDomain : IDomain<Recipe, int>
    {
        /// <summary>
        /// Retrieves the list of recipe.
        /// </summary>
        /// <returns>Returns the list of recipe.</returns>
        IEnumerable<Recipe> RetrieveList();
    }
}
// <copyright file="IRecipeDomain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System.Collections.Generic;

    using Model.DTO;

    /// <summary>
    /// This class defines the recipe domain methods.
    /// </summary>
    public interface IRecipeDomain : IDomainBase<Recipe, int>
    {
        /// <summary>
        /// Retrives the list of recipe.
        /// </summary>
        /// <returns>Returns the list of recipe.</returns>
        IEnumerable<Recipe> RetrieveList();
    }
}
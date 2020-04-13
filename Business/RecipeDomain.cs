// <copyright file="RecipeDomain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System.Collections.Generic;

    using Data;

    using Model.DTO;

    /// <summary>
    /// This class defines the recipe domain.
    /// </summary>
    public class RecipeDomain : DomainBase<Recipe, int>, IRecipeDomain
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeDomain"/> class.
        /// </summary>
        /// <param name="repository">The recipe repository.</param>
        public RecipeDomain(IRecipeRepository repository)
            : base(repository)
        {
        }

        /// <summary>
        /// Retrieves the list of recipes.
        /// </summary>
        /// <returns>Returns the list of recipes.</returns>
        public IEnumerable<Recipe> RetrieveList() => this.Repository.GetAll();
    }
}
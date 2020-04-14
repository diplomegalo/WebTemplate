// <copyright file="IngredientDomain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System;
    using System.Linq;

    using Data;

    using Model.DTO;

    /// <summary>
    /// This class defines the ingredient domain.
    /// </summary>
    public class IngredientDomain : DomainBase<Ingredient, int>, IIngredientDomain
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="IngredientDomain"/> class.
        /// </summary>
        /// <param name="repository">The ingredient repository.</param>
        public IngredientDomain(IIngredientRepository repository)
            : base(repository)
        {
        }
    }
}
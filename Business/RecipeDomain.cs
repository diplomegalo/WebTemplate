// <copyright file="RecipeDomain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Data;

    using Model.DTO;
    using Model.Exceptions;

    /// <summary>
    /// This class defines the recipe domain.
    /// </summary>
    public class RecipeDomain : DomainBase<Recipe, int>, IRecipeDomain
    {
        private readonly IIngredientRepository ingredientRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeDomain"/> class.
        /// </summary>
        /// <param name="repository">The recipe repository.</param>
        /// <param name="ingredientRepository">The ingredient repository.</param>
        public RecipeDomain(IRecipeRepository repository, IIngredientRepository ingredientRepository)
            : base(repository)
        {
            this.ingredientRepository = ingredientRepository;
        }

        /// <inheritdoc/>
        public void AddIngredient(int id, Ingredient ingredient)
        {
            if (ingredient == null)
            {
                throw new ArgumentNullException(nameof(ingredient));
            }

            var dbIngredient = ingredient.IsTransient ? this.ingredientRepository.GetBy(e => e.Name == ingredient.Name).SingleOrDefault() : this.ingredientRepository.GetById(ingredient.Id);

            if (dbIngredient == null)
            {
                if (!ingredient.IsTransient)
                {
                    throw new EntityNotFoundException(typeof(Ingredient).Name, ingredient.Id);
                }

                dbIngredient = ingredient;
                dbIngredient.Id = this.ingredientRepository.Save(ingredient);
            }

            var dbRecipe = this.Repository.GetById(id);

            if (dbRecipe == null)
            {
                throw new EntityNotFoundException(typeof(Recipe).Name, id);
            }

            dbRecipe.Ingredients = new List<Ingredient>(dbRecipe.Ingredients.ToList()) { dbIngredient };
            this.Repository.Update(dbRecipe);
        }

        /// <summary>
        /// Retrieves the list of recipes.
        /// </summary>
        /// <returns>Returns the list of recipes.</returns>
        public IEnumerable<Recipe> RetrieveList() => this.Repository.GetAll();
    }
}
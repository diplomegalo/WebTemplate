// <copyright file="RecipeDomain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Common.DTO;
    using Common.Exceptions;

    using Data;

    /// <summary>
    /// This class defines the recipe domain.
    /// </summary>
    public class RecipeDomain : Domain<IRecipeRepository, Recipe, int>, IRecipeDomain
    {
        private readonly IIngredientRepository ingredientRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeDomain"/> class.
        /// </summary>
        /// <param name="recipeRepository">The recipe repository.</param>
        /// <param name="ingredientRepository">The ingredient repository.</param>
        public RecipeDomain(
            IRecipeRepository recipeRepository,
            IIngredientRepository ingredientRepository)
            : base(recipeRepository)
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

            var dbIngredient = ingredient.IsTransient ? this.ingredientRepository.GetByName(ingredient.Name) : this.ingredientRepository.GetById(ingredient.Id);

            if (dbIngredient == null)
            {
                if (!ingredient.IsTransient)
                {
                    throw new EntityNotFoundException(typeof(Ingredient).Name, ingredient.Id);
                }

                dbIngredient = ingredient;
                dbIngredient.Id = this.ingredientRepository.Save(ingredient);
            }

            var dbRecipe = this.Repository.GetById(id, r => r.RecipeIngredients);
            if (dbRecipe == null)
            {
                throw new EntityNotFoundException(typeof(Recipe).Name, id);
            }

            if (dbRecipe.Ingredients.Any(s => s.Id == dbIngredient.Id))
            {
                throw new AlreadyExistingEntityException($"The recipe {dbRecipe.Name} already contains {dbIngredient.Name}.");
            }

            this.Repository.Join(dbRecipe.Id, dbIngredient.Id);
        }

        /// <summary>
        /// Retrieves the recipe with the defined id.
        /// </summary>
        /// <param name="id">The recipe identifier.</param>
        /// <returns>Returns the recipe with the defined id.</returns>
        public override Recipe Retrieve(int id) => this.Repository.GetWithIngredients(id);

        /// <summary>
        /// Retrieves the list of recipes.
        /// </summary>
        /// <returns>Returns the list of recipes.</returns>
        public IEnumerable<Recipe> RetrieveList() => this.Repository.GetAllWithIngredients();
    }
}
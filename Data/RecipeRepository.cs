// <copyright file="RecipeRepository.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using AutoMapper;

    using Dto = Common.DTO;
    using Entity = Data.Entities;

    /// <summary>
    /// This class defines the methods to manage storage of recipe model.
    /// </summary>
    public class RecipeRepository : Repository<Entity.Recipe, Dto.Recipe, int>, IRecipeRepository
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RecipeRepository"/> class.
        /// </summary>
        /// <param name="dbContext">The context.</param>
        /// <param name="mapper">The mapper object.</param>
        public RecipeRepository(DataContext dbContext, IMapper mapper)
            : base(dbContext, mapper)
        {
        }

        /// <inheritdoc/>
        public IEnumerable<Dto.Recipe> GetAllWithIngredients() => this.GetAll(e => e.RecipeIngredients);

        /// <inheritdoc/>
        public Dto.Recipe GetWithIngredients(int id) => this.GetById(id, recipe => recipe.RecipeIngredients);

        /// <inheritdoc/>
        public void Join(int recipeId, int ingredientId)
        {
            this.DbContext.RecipeIngredients.Add(new Entity.RecipeIngredient() { RecipeId = recipeId, IngredientId = ingredientId });
            this.DbContext.SaveChanges();
        }
    }
}
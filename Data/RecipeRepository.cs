// <copyright file="RecipeRepository.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using AutoMapper;

    using Microsoft.EntityFrameworkCore;

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
        public IEnumerable<Dto.Recipe> GetAllWithIngredients() =>
            this.Mapper.Map<IEnumerable<Dto.Recipe>>(this.DbContext.Recipes
                .Include(r => r.RecipeIngredients)
                .ThenInclude(ri => ri.Ingredient)
                .AsNoTracking()
                .AsEnumerable());

        /// <inheritdoc/>
        public Dto.Recipe GetByIdWithIngredients(int id) =>
            this.Mapper.Map<Dto.Recipe>(this.DbContext.Recipes
                .Include(r => r.RecipeIngredients)
                .ThenInclude(ri => ri.Ingredient)
                .AsNoTracking()
                .SingleOrDefault(s => s.Id.Equals(id)));

        /// <inheritdoc/>
        public void Join(int recipeId, int ingredientId)
        {
            this.DbContext.RecipeIngredients.Add(new Entity.RecipeIngredient() { RecipeId = recipeId, IngredientId = ingredientId });
            this.DbContext.SaveChanges();
        }
    }
}
// <copyright file="IngredientRepository.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data
{
    using System;
    using System.Linq;

    using AutoMapper;

    using DataModel = Data.Models;
    using DtoModel = Model.DTO;

    /// <summary>
    /// This class defines the ingredient repository.
    /// </summary>
    public class IngredientRepository : RepositoryBase<DataModel.Ingredient, DtoModel.Ingredient, int>, IIngredientRepository
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="IngredientRepository"/> class.
        /// </summary>
        /// <param name="dbContext">The db context.</param>
        /// <param name="mapper">The mapper object.</param>
        public IngredientRepository(DataContext dbContext, IMapper mapper)
            : base(dbContext, mapper)
        {
        }
    }
}
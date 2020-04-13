// <copyright file="RecipeRepository.cs" company="Delsoft">
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
    /// This class defines the methods to manage storage of <see cref="Model.DTO.Recipe"/> model.
    /// </summary>
    public class RecipeRepository : RepositoryBase<DataModel.Recipe, DtoModel.Recipe, int>, IRecipeRepository
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
    }
}
// <copyright file="DataModelMapping.cs" company="Delsoft">
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
    /// This class defines the model mapping.
    /// </summary>
    public class DataModelMapping : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataModelMapping"/> class.
        /// </summary>
        public DataModelMapping()
        {
            this.CreateMap<DataModel.Recipe, DtoModel.Recipe>()
                .ReverseMap();

            this.CreateMap<DataModel.Ingredient, DtoModel.Ingredient>()
                .ReverseMap();
        }
    }
}
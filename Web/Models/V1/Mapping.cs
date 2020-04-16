// <copyright file="Mapping.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Web.Models.V1
{
    using System;
    using System.Linq;

    using AutoMapper;

    using DtoModel = Common.DTO;
    using WebModel = Web.Models;

    /// <summary>
    /// This class defines the mapping between web model and dto.
    /// </summary>
    public class Mapping : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Mapping"/> class.
        /// </summary>
        public Mapping()
        {
            this.CreateMap<DtoModel.Recipe, Recipe>()
                .ReverseMap();
        }
    }
}
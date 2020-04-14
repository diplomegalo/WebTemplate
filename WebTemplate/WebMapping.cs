// <copyright file="WebMapping.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace WebTemplate
{
    using System;
    using System.Linq;

    using AutoMapper;

    using DtoModel = Model.DTO;
    using WebModel = WebTemplate.Models;

    /// <summary>
    /// This class defines the mapping between web model and dto.
    /// </summary>
    public class WebMapping : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="WebMapping"/> class.
        /// </summary>
        public WebMapping()
        {
            this.CreateMap<DtoModel.Recipe, WebModel.Recipe>()
                .ReverseMap();

            this.CreateMap<DtoModel.Ingredient, WebModel.Ingredient>()
                .ReverseMap();
        }
    }
}
// <copyright file="ViewModelMapping.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace WebTemplate
{
    using AutoMapper;
    using DtoModel = Model.DTO;
    using WebModel = WebTemplate.Models;

    /// <summary>
    /// This class defines the mapping between web model and dto.
    /// </summary>
    public class WebModelMapping : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="WebModelMapping"/> class.
        /// </summary>
        public WebModelMapping()
        {
            this.CreateMap<DtoModel.Recipe, WebModel.Recipe>()
                .ReverseMap();
        }
    }
}
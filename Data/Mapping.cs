// <copyright file="Mapping.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Data
{
    using System;
    using System.Linq;

    using AutoMapper;

    using Dto = Common.DTO;
    using Entity = Data.Entities;

    /// <summary>
    /// This class defines the model mapping.
    /// </summary>
    public class Mapping : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Mapping"/> class.
        /// </summary>
        public Mapping()
        {
            this.CreateMap<Entity.Recipe, Dto.Recipe>()
                .ForMember(dest => dest.Ingredients, opt => opt.MapFrom(src => src.RecipeIngredients.Select(s => s.Ingredient).ToList()))
                .ReverseMap();

            this.CreateMap<Dto.Recipe, Entity.Recipe>()
                .ForMember(dest => dest.RecipeIngredients, opt => opt.MapFrom(src => src.Ingredients))
                .AfterMap((dto, entity) =>
                {
                    foreach (var item in entity.RecipeIngredients)
                    {
                        item.RecipeId = entity.Id;
                        item.Recipe = entity;
                    }
                });

            this.CreateMap<Dto.Ingredient, Entity.RecipeIngredient>()
                .ForMember(dest => dest.IngredientId, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Ingredient, opt => opt.MapFrom(src => src));

            this.CreateMap<Dto.Ingredient, Entity.Ingredient>();

            this.CreateMap<Entity.Ingredient, Dto.Ingredient>()
                .ForMember(dest => dest.Recipes, opt => opt.MapFrom(src => src.RecipeIngredients.Select(s => s.Recipe).ToList()))
                .ReverseMap();
        }
    }
}
// <copyright file="RepositoryBase.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using AutoMapper;

    using Microsoft.EntityFrameworkCore;

    using Model;

    /// <summary>
    /// This class defines the <see cref="RepositoryBase{TDataModel, TDto, TKey}" />.
    /// </summary>
    /// <typeparam name="TDataModel">The type of the data model.</typeparam>
    /// <typeparam name="TDto">The type of the entity.</typeparam>
    /// <typeparam name="TKey">The type of the entity id.</typeparam>
    public abstract class RepositoryBase<TDataModel, TDto, TKey> : IRepositoryBase<TDataModel, TDto, TKey>
        where TDto : EntityBase<TDto, TKey>
        where TDataModel : EntityBase<TDataModel, TKey>
    {
        private readonly DataContext dbContext;
        private readonly IMapper mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="RepositoryBase{TDataModel, TDto, TKey}" /> class.
        /// </summary>
        /// <param name="dbContext">The Entity Framework context.</param>
        /// <param name="mapper">The mapper object.</param>
        protected RepositoryBase(DataContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        /// <inheritdoc />
        public void Delete(TKey id)
        {
            var entity = this.dbContext.Set<TDataModel>().Find(id);
            this.dbContext.Remove(entity);
        }

        /// <inheritdoc />
        public IEnumerable<TDto> GetAll() =>
            this.dbContext.Set<TDataModel>()
                .ToList()
                .Select(s => this.mapper.Map<TDto>(s));

        /// <inheritdoc />
        public IEnumerable<TDto> GetBy(Func<TDataModel, bool> predicate) =>
            this.dbContext.Set<TDataModel>()
                .Where(predicate)
                .Select(s => this.mapper.Map<TDto>(s));

        /// <inheritdoc />
        public TDto GetById(TKey id) => this.mapper.Map<TDto>(this.dbContext.Set<TDataModel>().Find(id));

        /// <inheritdoc />
        public TKey Save(TDto entity)
        {
            entity.CreationDate = DateTime.Now;
            return this.dbContext.Add(entity).Entity.Id;
        }

        /// <inheritdoc />
        public void Update(TDto entity)
        {
            entity.UpdateDate = DateTime.Now;

            var actual = this.dbContext.Set<TDto>().Find(entity.Id);
            this.dbContext.Entry(actual).CurrentValues.SetValues(entity);
        }
    }
}
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
    using Model.Exceptions;

    /// <summary>
    /// This class defines the base implementation for repositories.
    /// </summary>
    /// <typeparam name="TEntity">The type of the entity model.</typeparam>
    /// <typeparam name="TDto">The type of the data transfer object model.</typeparam>
    /// <typeparam name="TKey">The type of the identifier.</typeparam>
    public abstract class RepositoryBase<TEntity, TDto, TKey> : IRepositoryBase<TEntity, TDto, TKey>
        where TDto : ObjectModel<TDto, TKey>
        where TEntity : ObjectModel<TEntity, TKey>
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
            var entity = this.dbContext.Set<TEntity>().Find(id);
            if (entity == null)
            {
                throw new EntityNotFoundException(typeof(TEntity).Name, id);
            }

            this.dbContext.Remove(entity);
            this.dbContext.SaveChanges();
        }

        /// <inheritdoc />
        public IEnumerable<TDto> GetAll() =>
            this.dbContext.Set<TEntity>()
                .AsNoTracking()
                .Select(s => this.mapper.Map<TDto>(s))
                .AsEnumerable();

        /// <inheritdoc />
        public IEnumerable<TDto> GetBy(Func<TEntity, bool> predicate) =>
            this.dbContext.Set<TEntity>()
                .AsNoTracking()
                .AsEnumerable()
                .Where(predicate)
                .Select(s => this.mapper.Map<TDto>(s));

        /// <inheritdoc />
        public TDto GetById(TKey id) => this.mapper.Map<TDto>(this.dbContext.Set<TEntity>().AsNoTracking().SingleOrDefault(s => s.Id.Equals(id)));

        /// <inheritdoc />
        public TKey Save(TDto entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            entity.CreationDate = DateTime.Now;

            var result = this.dbContext.Add(this.mapper.Map<TEntity>(entity));
            this.dbContext.SaveChanges();

            return (TKey)result.CurrentValues["Id"];
        }

        /// <inheritdoc />
        public void Update(TDto entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            entity.UpdateDate = DateTime.Now;
            var actual = this.dbContext.Set<TEntity>().SingleOrDefault(s => s.Id.Equals(entity.Id));
            if (actual == null)
            {
                throw new EntityNotFoundException(typeof(TEntity).Name, entity.Id);
            }

            this.mapper.Map(entity, actual);
            this.dbContext.SaveChanges();
        }
    }
}
// <copyright file="Repository.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;

    using AutoMapper;

    using Common;
    using Common.Exceptions;

    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// This class defines the base implementation for repositories.
    /// </summary>
    /// <typeparam name="TEntity">The type of the entity model.</typeparam>
    /// <typeparam name="TDto">The type of the data transfer object model.</typeparam>
    /// <typeparam name="TKey">The type of the identifier.</typeparam>
    public abstract class Repository<TEntity, TDto, TKey> : IRepository<TEntity, TDto, TKey>
        where TDto : ObjectModel<TDto, TKey>
        where TEntity : ObjectModel<TEntity, TKey>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Repository{TEntity,TDto,TKey}" /> class.
        /// </summary>
        /// <param name="dbContext">The Entity Framework context.</param>
        /// <param name="mapper">The mapper object.</param>
        protected Repository(DataContext dbContext, IMapper mapper)
        {
            this.DbContext = dbContext;
            this.Mapper = mapper;
        }

        /// <summary>
        /// Gets the current <see cref="DbContext"/>.
        /// </summary>
        protected DataContext DbContext { get; }

        /// <summary>
        /// Gets the mapper object.
        /// </summary>
        protected IMapper Mapper { get; }

        /// <inheritdoc />
        public void Delete(TKey id)
        {
            var entity = this.DbContext.Set<TEntity>().Find(id);
            if (entity == null)
            {
                throw new EntityNotFoundException(typeof(TEntity).Name, id);
            }

            this.DbContext.Remove(entity);
            this.DbContext.SaveChanges();
        }

        /// <inheritdoc />
        public IEnumerable<TDto> GetAll() =>
            this.DbContext.Set<TEntity>()
                .AsNoTracking()
                .AsEnumerable()
                .Select(s => this.Mapper.Map<TDto>(s));

        /// <inheritdoc/>
        public IEnumerable<TDto> GetAll<TProperty>(Expression<Func<TEntity, TProperty>> include) =>
            this.DbContext.Set<TEntity>()
                .Include(include)
                .AsNoTracking()
                .AsEnumerable()
                .Select(s => this.Mapper.Map<TDto>(s));

        /// <inheritdoc />
        public IEnumerable<TDto> GetBy(Func<TEntity, bool> predicate)
        {
            var test = this.DbContext.Set<TEntity>()
                .AsNoTracking()
                .AsEnumerable()
                .Where(predicate)
                .ToList();

            var map = this.Mapper.Map<IEnumerable<TDto>>(test);

            return map;
        }

        /// <inheritdoc/>
        public TDto GetById<TProperty>(TKey id, Expression<Func<TEntity, TProperty>> include)
        {
            var test = this.DbContext.Set<TEntity>()
                .Include(include)
                .SingleOrDefault(s => s.Id.Equals(id));

            var map = this.Mapper.Map<TDto>(test);

            return map;
        }

        /// <inheritdoc />
        public TDto GetById(TKey id) => this.Mapper.Map<TDto>(this.DbContext.Set<TEntity>().AsNoTracking().SingleOrDefault(s => s.Id.Equals(id)));

        /// <inheritdoc />
        public TKey Save(TDto entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            entity.CreationDate = DateTime.Now;

            var result = this.DbContext.Add((object)this.Mapper.Map<TEntity>(entity));
            this.DbContext.SaveChanges();

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

            var actual = this.DbContext.Set<TEntity>()
                .AsQueryable()
                .SingleOrDefault(s => s.Id.Equals(entity.Id));
            if (actual == null)
            {
                throw new EntityNotFoundException(typeof(TEntity).Name, entity.Id);
            }

            this.DbContext.Entry(actual).CurrentValues.SetValues(entity);
            this.DbContext.SaveChanges();
        }
    }
}
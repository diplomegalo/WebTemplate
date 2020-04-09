// <copyright file="RepositoryBase.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Data.Models;

    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// This class defines the <see cref="RepositoryBase{TEntity,TKey}" />.
    /// </summary>
    /// <typeparam name="TEntity">The type of the entity.</typeparam>
    /// <typeparam name="TKey">The type of the entity id.</typeparam>
    public abstract class RepositoryBase<TEntity, TKey> : IRepositoryBase<TEntity, TKey>
        where TEntity : EntityBase<TEntity, TKey>
    {
        private readonly DbContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="RepositoryBase{TEntity, TKey}" /> class.
        /// </summary>
        /// <param name="context">The Entity Framework context.</param>
        protected RepositoryBase(DbContext context)
        {
            this.context = context;
        }

        /// <inheritdoc />
        public void Delete(TKey id)
        {
            var entity = this.context.Set<TEntity>().Find(id);
            this.context.Remove(entity);
        }

        /// <inheritdoc />
        public IEnumerable<TEntity> GetAll()
        {
            return this.context.Set<TEntity>();
        }

        /// <inheritdoc />
        public IEnumerable<TEntity> GetBy(Func<TEntity, bool> predicate)
        {
            return this.context.Set<TEntity>().Where(predicate).ToList();
        }

        /// <inheritdoc />
        public TEntity GetById(TKey id)
        {
            return this.context.Set<TEntity>().Find(id);
        }

        /// <inheritdoc />
        public TKey Save(TEntity entity)
        {
            entity.CreationDate = DateTime.Now;
            return this.context.Add(entity).Entity.Id;
        }

        /// <inheritdoc />
        public void Update(TEntity entity)
        {
            entity.UpdateDate = DateTime.Now;

            var actual = this.context.Set<TEntity>().Find(entity.Id);
            this.context.Entry(actual).CurrentValues.SetValues(entity);
        }
    }
}
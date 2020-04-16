// <copyright file="Domain.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System;
    using System.Linq;

    using Common;

    using Data;

    /// <summary>
    /// This class defines the base domain methods.
    /// </summary>
    /// <typeparam name="TRepository">The type of the repository.</typeparam>
    /// <typeparam name="TEntity">The type of entity manage by the domain.</typeparam>
    /// <typeparam name="TKey">The type of the identifier.</typeparam>
    public abstract class Domain<TRepository, TEntity, TKey> : IDomain<TEntity, TKey>
        where TEntity : ObjectModel<TEntity, TKey>
        where TRepository : IRepository<TEntity, TKey>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Domain{TRepository,TEntity,TKey}"/> class.
        /// </summary>
        /// <param name="repository">The repository.</param>
        protected Domain(TRepository repository)
        {
            this.Repository = repository;
        }

        /// <summary>
        /// Gets the Repository.
        /// </summary>
        protected TRepository Repository { get; }

        /// <inheritdoc/>
        public virtual TEntity Register(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(nameof(entity));
            }

            if (entity.IsTransient)
            {
                entity.Id = this.Repository.Save(entity);
            }
            else
            {
                this.Repository.Update(entity);
            }

            return this.Repository.GetById(entity.Id);
        }

        /// <inheritdoc/>
        public virtual void Remove(TKey id)
        {
            if (id == null)
            {
                throw new ArgumentNullException(nameof(id));
            }

            this.Repository.Delete(id);
        }

        /// <inheritdoc/>
        public virtual TEntity Retrieve(TKey id) => this.Repository.GetById(id);
    }
}
// <copyright file="DomainBase.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System;
    using System.Linq;

    using Data;

    using Model;

    /// <summary>
    /// This class defines the base domain methods.
    /// </summary>
    /// <typeparam name="TEntity">The type of entity manage by the domain.</typeparam>
    /// <typeparam name="TKey">The type of the identifier.</typeparam>
    public abstract class DomainBase<TEntity, TKey> : IDomainBase<TEntity, TKey>
        where TEntity : EntityBase<TEntity, TKey>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DomainBase{TEntity, TKey}"/> class.
        /// </summary>
        /// <param name="repository">The repository.</param>
        protected DomainBase(IRepositoryBase<TEntity, TKey> repository)
        {
            this.Repository = repository;
        }

        /// <summary>
        /// Gets the Repository.
        /// </summary>
        protected IRepositoryBase<TEntity, TKey> Repository { get; }

        /// <inheritdoc/>
        public TEntity Register(TEntity entity)
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

            return entity;
        }

        /// <inheritdoc/>
        public void Remove(TKey id)
        {
            if (id == null)
            {
                throw new ArgumentNullException(nameof(id));
            }

            this.Repository.Delete(id);
        }

        /// <inheritdoc/>
        public TEntity Retrieve(TKey id) => this.Repository.GetById(id);
    }
}
// <copyright file="IRepositoryBase.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Data.Models;

    /// <summary>
    /// This interface defines the <see cref="IRepositoryBase{TEntity,TKey}" />.
    /// </summary>
    /// <typeparam name="TEntity">The type of the entity.</typeparam>
    /// <typeparam name="TKey">The type of the entity id.</typeparam>
    public interface IRepositoryBase<TEntity, TKey>
        where TEntity : EntityBase<TEntity, TKey>
    {
        /// <summary>
        /// Deletes the entity matching the identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        void Delete(TKey id);

        /// <summary>
        /// Gets all entity.
        /// </summary>
        /// <returns>Returns a <see cref="IEnumerable{TEntity}" />.</returns>
        IEnumerable<TEntity> GetAll();

        /// <summary>
        /// Gets the list of entity matching filters.
        /// </summary>
        /// <param name="predicate">The filters.</param>
        /// <returns>Returns the <see cref="IEnumerable{TEntity}" /> filters by <paramref name="predicate" />.</returns>
        IEnumerable<TEntity> GetBy(Func<TEntity, bool> predicate);

        /// <summary>
        /// Gets the entity matching the identifier.
        /// </summary>
        /// <param name="id">The entity identifier.</param>
        /// <returns>Returns the entity having the identifier equals to <paramref name="id" /> value.</returns>
        TEntity GetById(TKey id);

        /// <summary>
        /// Saves a new records of entity.
        /// </summary>
        /// <param name="entity">The new entity.</param>
        /// <returns>Returns the identifier recorded from storage.</returns>
        TKey Save(TEntity entity);

        /// <summary>
        /// Updates the entity.
        /// </summary>
        /// <param name="entity">The entity to update.</param>
        void Update(TEntity entity);
    }
}
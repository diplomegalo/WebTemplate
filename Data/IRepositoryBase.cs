// <copyright file="IRepositoryBase.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Model;

    /// <summary>
    /// This interface defines the base for <see cref="IRepositoryBase{TDto, TKey}"/>.
    /// </summary>
    /// <typeparam name="TDto">The type of the entity.</typeparam>
    /// <typeparam name="TKey">The type of the identifier.</typeparam>
    public interface IRepositoryBase<TDto, TKey>
        where TDto : EntityBase<TDto, TKey>
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
        IEnumerable<TDto> GetAll();

        /// <summary>
        /// Gets the entity matching the identifier.
        /// </summary>
        /// <param name="id">The entity identifier.</param>
        /// <returns>Returns the entity having the identifier equals to <paramref name="id" /> value.</returns>
        TDto GetById(TKey id);

        /// <summary>
        /// Saves a new records of entity.
        /// </summary>
        /// <param name="entity">The new entity.</param>
        /// <returns>Returns the identifier recorded from storage.</returns>
        TKey Save(TDto entity);

        /// <summary>
        /// Updates the entity.
        /// </summary>
        /// <param name="entity">The entity to update.</param>
        void Update(TDto entity);
    }

    /// <summary>
    /// This interface defines the <see cref="IRepositoryBase{TDataModel, TDto, TKey}" />.
    /// </summary>
    /// <typeparam name="TDataModel">The type representing the data model.</typeparam>
    /// <typeparam name="TDto">The type representing the data transfer object model.</typeparam>
    /// <typeparam name="TKey">The type of the entity identifier.</typeparam>
    public interface IRepositoryBase<TDataModel, TDto, TKey> : IRepositoryBase<TDto, TKey>
        where TDto : EntityBase<TDto, TKey>
        where TDataModel : EntityBase<TDataModel, TKey>
    {
        /// <summary>
        /// Gets the list of entity matching filters.
        /// </summary>
        /// <param name="predicate">The filters to apply to the query
        /// .</param>
        /// <returns>Returns the <see cref="IEnumerable{TEntity}" /> filters by <paramref name="predicate" />.</returns>
        IEnumerable<TDto> GetBy(Func<TDataModel, bool> predicate);
    }
}
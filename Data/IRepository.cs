// <copyright file="IRepository.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;

    using Common;

    /// <summary>
    /// This interface defines the repository.
    /// </summary>
    /// <typeparam name="TDto">The type of the data transfer object model.</typeparam>
    /// <typeparam name="TKey">The type of the identifier.</typeparam>
    public interface IRepository<TDto, TKey>
        where TDto : ObjectModel<TDto, TKey>
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
    /// This interface defines the repository/>.
    /// </summary>
    /// <typeparam name="TEntity">The type representing the entity model.</typeparam>
    /// <typeparam name="TDto">The type representing the data transfer object model.</typeparam>
    /// <typeparam name="TKey">The type of the entity identifier.</typeparam>
    public interface IRepository<TEntity, TDto, TKey> : IRepository<TDto, TKey>
        where TDto : ObjectModel<TDto, TKey>
        where TEntity : ObjectModel<TEntity, TKey>
    {
        /// <summary>
        /// Gets the list of entity including defined join entity.
        /// </summary>
        /// <param name="include">The join entity.</param>
        /// <typeparam name="TProperty">The type of include property.</typeparam>
        /// <returns>Returns the list of entity including defined join entity.</returns>
        IEnumerable<TDto> GetAll<TProperty>(Expression<Func<TEntity, TProperty>> include);

        /// <summary>
        /// Gets the list of entity matching filters.
        /// </summary>
        /// <param name="predicate">The filters to apply to the query
        /// .</param>
        /// <returns>Returns the <see cref="IEnumerable{TEntity}" /> filters by <paramref name="predicate" />.</returns>
        IEnumerable<TDto> GetBy(Func<TEntity, bool> predicate);

        /// <summary>
        /// Gets the entity with the defined identifier.
        /// </summary>
        /// <param name="id">The entity identifier.</param>
        /// <param name="includes">The property to includes in returns.</param>
        /// <typeparam name="TProperty">The type of property to include.</typeparam>
        /// <returns>Returns the entity with the defined identifier.</returns>
        TDto GetById<TProperty>(TKey id, Expression<Func<TEntity, TProperty>> includes);
    }
}
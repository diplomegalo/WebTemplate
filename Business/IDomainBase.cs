// <copyright file="IDomainBase.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System;
    using System.Linq;

    using Model;

    /// <summary>
    /// This interface defines the base domain methods.
    /// </summary>
    /// <typeparam name="TEntity">The type of the entity manage by the domain.</typeparam>
    /// <typeparam name="TKey">The type of the entity identifier.</typeparam>
    public interface IDomainBase<TEntity, TKey>
        where TEntity : EntityBase<TEntity, TKey>
    {
        /// <summary>
        /// Registers the defines entity.
        /// </summary>
        /// <param name="entity">The entity to register.</param>
        /// <returns>Returns the new state of the entity.</returns>
        /// <remarks>If the entity already exists, it will be updated.</remarks>
        TEntity Register(TEntity entity);

        /// <summary>
        /// Removes the entity by the defined identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        void Remove(TKey id);

        /// <summary>
        /// Retrieves the entity by id.
        /// </summary>
        /// <param name="id">The entity identifier.</param>
        /// <returns>Returns the entity with the identifier defines by <paramref name="id"/>.</returns>
        TEntity Retrieve(TKey id);
    }
}
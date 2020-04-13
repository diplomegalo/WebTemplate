// <copyright file="EntityBase.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Model
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// This class defines <see cref="EntityBase{TEntity,TKey}" />.
    /// </summary>
    /// <typeparam name="TEntity">The type of the entity.</typeparam>
    /// <typeparam name="TKey">The type of the <see cref="EntityBase{TEntity,TKey}.Id" />.</typeparam>
    public abstract class EntityBase<TEntity, TKey> : IEquatable<TEntity>
        where TEntity : EntityBase<TEntity, TKey>
    {
        private int hashcode;

        /// <summary>
        /// Gets or sets the creation date.
        /// </summary>
        /// <value>The creation date.</value>
        public DateTime CreationDate { get; set; }

        /// <summary>
        /// Gets or sets the creation user.
        /// </summary>
        /// <value>The creation user.</value>
        public string CreationUser { get; set; }

        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>The identifier.</value>
        /// <remarks>This property hides the base <see cref="EntityBase{TEntity,TKey}.Id" /> property.</remarks>
        public TKey Id { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is deleted.
        /// </summary>
        /// <value><c>true</c> if this instance is deleted; otherwise, <c>false</c>.</value>
        public bool IsDeleted { get; set; }

        /// <summary>
        /// Gets or sets the update date.
        /// </summary>
        /// <value>The update date.</value>
        public DateTime? UpdateDate { get; set; }

        /// <summary>
        /// Gets or sets the update user.
        /// </summary>
        /// <value>The update user.</value>
        public string UpdateUser { get; set; }

        /// <summary>
        /// Gets a value indicating whether this instance is transient.
        /// </summary>
        /// <value><c>true</c> if this instance is transient; otherwise, <c>false</c>.</value>
        public bool IsTransient =>
            (typeof(TKey).IsValueType && this.Id.Equals(default(TKey))) ||
            (!typeof(TKey).IsValueType && ReferenceEquals(this.Id, null));

        /// <summary>
        /// Implements the operator ==.
        /// </summary>
        /// <param name="a">The left operand.</param>
        /// <param name="b">The right operand.</param>
        /// <returns>The result of the operator.</returns>
        public static bool operator ==(EntityBase<TEntity, TKey> a, EntityBase<TEntity, TKey> b)
        {
            return ReferenceEquals(a, b) || a?.Equals(b) == true;
        }

        /// <summary>
        /// Implements the operator !=.
        /// </summary>
        /// <param name="a">The left operand.</param>
        /// <param name="b">The right operand.</param>
        /// <returns>The result of the operator.</returns>
        public static bool operator !=(EntityBase<TEntity, TKey> a, EntityBase<TEntity, TKey> b)
        {
            return !(a == b);
        }

        /// <inheritdoc />
        public bool Equals(TEntity other)
        {
            return other != null &&
                   !this.IsTransient &&
                   !other.IsTransient &&
                   EqualityComparer<TKey>.Default.Equals(this.Id, other.Id);
        }

        /// <inheritdoc />
        public override bool Equals(object obj)
        {
            return obj != null && obj is TEntity entity && this.Id.Equals(entity);
        }

        /// <inheritdoc />
        public override int GetHashCode()
        {
            if (this.hashcode == default)
            {
                this.hashcode = HashCode.Combine(this.Id);
            }

            return this.hashcode;
        }
    }
}
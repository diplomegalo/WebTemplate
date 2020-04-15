// <copyright file="ObjectModel.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Common
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// This class defines the base implementation for models.
    /// </summary>
    /// <typeparam name="T">The type of the model.</typeparam>
    /// <typeparam name="TKey">The type of the identifier.</typeparam>
    public abstract class ObjectModel<T, TKey> : IEquatable<T>
        where T : ObjectModel<T, TKey>
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
        /// <remarks>This property hides the base <see cref="ObjectModel{TEntity,TKey}.Id" /> property.</remarks>
        public TKey Id { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is deleted.
        /// </summary>
        /// <value><c>true</c> if this instance is deleted; otherwise, <c>false</c>.</value>
        public bool IsDeleted { get; set; }

        /// <summary>
        /// Gets a value indicating whether this instance is transient.
        /// </summary>
        /// <value><c>true</c> if this instance is transient; otherwise, <c>false</c>.</value>
        public bool IsTransient =>
            (typeof(TKey).IsValueType && this.Id.Equals(default(TKey))) ||
            (!typeof(TKey).IsValueType && ReferenceEquals(this.Id, null));

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
        /// Implements the operator ==.
        /// </summary>
        /// <param name="a">The left operand.</param>
        /// <param name="b">The right operand.</param>
        /// <returns>The result of the operator.</returns>
        public static bool operator ==(ObjectModel<T, TKey> a, ObjectModel<T, TKey> b)
        {
            return ReferenceEquals(a, b) || a?.Equals(b) == true;
        }

        /// <summary>
        /// Implements the operator !=.
        /// </summary>
        /// <param name="a">The left operand.</param>
        /// <param name="b">The right operand.</param>
        /// <returns>The result of the operator.</returns>
        public static bool operator !=(ObjectModel<T, TKey> a, ObjectModel<T, TKey> b)
        {
            return !(a == b);
        }

        /// <inheritdoc />
        public bool Equals(T other)
        {
            return other != null &&
                   !this.IsTransient &&
                   !other.IsTransient &&
                   EqualityComparer<TKey>.Default.Equals(this.Id, other.Id);
        }

        /// <inheritdoc />
        public override bool Equals(object obj)
        {
            return obj != null && obj is T entity && this.Id.Equals(entity);
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
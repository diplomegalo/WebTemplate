// <copyright file="EntityNotFoundException.cs" company="Delsoft">
//  Copyright (c) Delsoft. All rights reserved.
//  </copyright>

namespace Common.Exceptions
{
    using System;
    using System.Linq;

    /// <summary>
    /// This class defines the exception that occurs when entity is not found.
    /// </summary>
    public class EntityNotFoundException : ApplicationException
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityNotFoundException"/> class.
        /// </summary>
        /// <param name="message">The error message.</param>
        public EntityNotFoundException(string message)
            : base(message)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EntityNotFoundException"/> class.
        /// </summary>
        /// <param name="entityType">The type of the entity </param>
        /// <param name="identifier">The entity identifier.</param>
        public EntityNotFoundException(string entityType, object identifier)
            : base($"Unable to retrieve the {entityType} with identifier: {identifier}")
        {
        }
    }
}
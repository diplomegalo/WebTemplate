// <copyright file="AlreadyExistingEntityException.cs" company="Delsoft">
// Copyright (c) Delsoft. All rights reserved.
// </copyright>

namespace Common.Exceptions
{
    using System;
    using System.Linq;

    public class AlreadyExistingEntityException : Exception
    {
        public AlreadyExistingEntityException(string message)
            : base(message)
        {
        }
    }
}
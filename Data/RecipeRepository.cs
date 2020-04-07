using System.Collections.Generic;
using Data.Models;

namespace Data
{
    /// <summary>
    /// This class defines the vegetable repository.
    /// </summary>
    public class RecipeRepository : IRecipeRepository
    {
        private readonly DataContext _dbContext;

        /// <summary>
        /// Creates a new instance of <see cref="RecipeRepository"/>.
        /// </summary>
        /// <param name="dbContext"></param>
        public RecipeRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Recipe GetById(long id)
        {
            return _dbContext.Recipes.Find(id);
        }

        public IEnumerable<Recipe> GetAll()
        {
            return _dbContext.Recipes;
        }

        public int Save(Recipe recipe)
        {
            return _dbContext.Recipes.Add(recipe).Entity.Id;
        }

        public void Update(Recipe recipe)
        {
            _dbContext.Recipes.Update(recipe);
            _dbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            var recipe = _dbContext.Recipes.Find(id);
            _dbContext.Recipes.Remove(recipe);
            _dbContext.SaveChanges();
        }
    }
}
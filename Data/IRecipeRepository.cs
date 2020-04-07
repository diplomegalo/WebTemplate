using System.Collections.Generic;
using System.Threading;
using Data.Models;

namespace Data
{
    public interface IRecipeRepository
    {
        Recipe GetById(long id);
        
        IEnumerable<Recipe> GetAll();

        int Save(Recipe recipe);
        
        void Update(Recipe recipe);
        
        void Delete(long id);
    }
}
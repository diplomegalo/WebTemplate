using System.Collections.Generic;
using Data;
using Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebTemplate.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeRepository _recipeRepository;

        public RecipeController(IRecipeRepository recipeRepository)
        {
            _recipeRepository = recipeRepository;
        }
        
        public IEnumerable<Recipe> Get()
        {
            return this._recipeRepository.GetAll();
        }
    }
}
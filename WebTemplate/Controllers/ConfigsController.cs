using Microsoft.AspNetCore.Mvc;

namespace WebTemplate.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConfigsController : ControllerBase
    {
        [Route("check-is-up")]
        public IActionResult CheckIsUpAndRunning()
        {
            return Ok("Api is up and running");
        }

        [Route("send-error")]
        public IActionResult SendError()
        {
            return StatusCode(500, "Send error");
        }
    }
}
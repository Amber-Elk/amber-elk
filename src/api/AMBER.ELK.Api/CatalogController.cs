using Microsoft.AspNetCore.Mvc;
using AMBER.ELK.Domain.Catalog;

namespace AMBER.ELK.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CatalogController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetItems()
        {
            return Ok("Hello World!");
        }
    }
}
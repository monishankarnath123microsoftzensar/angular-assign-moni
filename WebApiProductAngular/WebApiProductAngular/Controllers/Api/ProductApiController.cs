using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiProductAngular.Models;

namespace WebApiProductAngular.Controllers.Api
{
    public class ProductApiController : ApiController
    {
        private readonly ApplicationDbContext _context;
        public ProductApiController()
        {
            _context = new ApplicationDbContext();
        }
        public IHttpActionResult GetProduct()
        {
            var product = _context.Products.ToList();
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
        public IHttpActionResult GetProduct(int id)
        {
            var product = _context.Products.SingleOrDefault(c => c.productId == id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }
        //Post /api/customerapi
        [HttpPost]
        public IHttpActionResult CreateProduct(Products products)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Model data is invalid");
            }

            _context.Products.Add(products);
            _context.SaveChanges();
            return Ok(products);
        }
        //Put /api/customerapi/1
        [HttpPut]
        public IHttpActionResult UpdateProduct(int id, Products products)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Model data is invalid");
            }
            var proInDb = _context.Products.SingleOrDefault(c => c.productId == id);
            if (proInDb == null)
            {
                return NotFound();
            }

            proInDb.productName = products.productName;
            proInDb.productCode = products.productCode;
            proInDb.releaseDate = products.releaseDate;
            proInDb.description = products.description;
            proInDb.price = products.price;
            proInDb.starRating = products.starRating;
            proInDb.imageUrl = products.imageUrl;

            _context.SaveChanges();
            return Ok();
        }
        //Delete /api/customerapi/1

        public IHttpActionResult DeleteProduct(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Not a Valid Customer id");
            }
            var proInDb = _context.Products.SingleOrDefault(c => c.productId == id);
            if (proInDb == null)
            {
                //throw new HttpResponseException(HttpStatusCode.NotFound);
                return NotFound();
            }

            _context.Products.Remove(proInDb);
            _context.SaveChanges();
            return Ok();
        }
        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }
    }
}

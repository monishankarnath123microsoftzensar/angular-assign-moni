using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiWeightAngular.Models;

namespace WebApiWeightAngular.Controllers.Api
{
    public class WeightApiController : ApiController
    {
        private readonly WeightDbContext _context;
        public WeightApiController()
        {
            _context = new WeightDbContext();
        }
        public IHttpActionResult GetValue()
        {
            var value = _context.Entries.ToList();
            if (value == null)
            {
                return NotFound();
            }
            return Ok(value);
        }
        public IHttpActionResult GetValue(int id)
        {
            var value = _context.Entries.SingleOrDefault(c => c.id == id);
            if (value == null)
            {
                return NotFound();
            }

            return Ok(value);
        }
        //Post /api/customerapi
        [HttpPost]
        public IHttpActionResult CreateData(Entry entry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Model data is invalid");
            }

            _context.Entries.Add(entry);
            _context.SaveChanges();
            return Ok(entry);
        }
        //Put /api/customerapi/1
        [HttpPut]
        public IHttpActionResult UpdateData(int id, Entry entry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Model data is invalid");
            }
            var proInDb = _context.Entries.SingleOrDefault(c => c.id == id);
            if (proInDb == null)
            {
                return NotFound();
            }

            proInDb.date = entry.date;
            proInDb.weight = entry.weight;
            proInDb.bodyfat = entry.bodyfat;

            _context.SaveChanges();
            return Ok();
        }
        //Delete /api/customerapi/1

        public IHttpActionResult DeleteData(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Not a Valid Customer id");
            }
            var proInDb = _context.Entries.SingleOrDefault(c => c.id == id);
            if (proInDb == null)
            {
                return NotFound();
            }

            _context.Entries.Remove(proInDb);
            _context.SaveChanges();
            return Ok();
        }
        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }
    }
}

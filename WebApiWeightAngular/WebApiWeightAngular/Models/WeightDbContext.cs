using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApiWeightAngular.Models
{
    public class WeightDbContext : DbContext
    {
        public DbSet<Entry> Entries { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
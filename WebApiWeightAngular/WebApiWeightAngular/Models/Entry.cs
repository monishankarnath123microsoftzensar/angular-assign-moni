using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApiWeightAngular.Models
{
    public class Entry
    {
        [Key]
        public int id { get; set; }
        public int weight { get; set; }
        public string date { get; set; }
        public double bodyfat { get; set; }
    }
}
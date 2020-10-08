using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApiProductAngular.Models
{
    public class Products
    {
        [Key]
        public int productId { get; set; }
        public string productName { get; set; }
        public string productCode { get; set; }
        public string releaseDate { get; set; }
        public string description { get; set; }
        public string imageUrl { get; set; }
        public double price { get; set; }
        public double starRating { get; set; }
    }
}
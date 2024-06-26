using System.ComponentModel.DataAnnotations;

namespace MoneyGer.Server.Models
{
    public class Sales
    {
        [Key]
        public int Id { get; set; }
        public string Company{ get; set;} = null!;
        public string Date{ get; set;} = null!; 
        public float Profit{ get; set;}
        public float Revenue {get;set;}
        public float? Expenses {get;set;}
    }
} 
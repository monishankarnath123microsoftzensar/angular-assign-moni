namespace WebApiWeightAngular.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        commenter = c.String(),
                        comment = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Entries",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        weight = c.Int(nullable: false),
                        date = c.String(),
                        bodyfat = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Entries");
            DropTable("dbo.Comments");
        }
    }
}

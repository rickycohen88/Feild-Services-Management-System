const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/materialTracker",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

const marketSeeds = [
    {
        name:"Market1",
        manager:"Manager1",
        scheduler:"Scheduler1",
        climbers:[],
        teams:[],
        tickets:[]
    },
    {
        name:"Market2",
        manager:"Manager2",
        scheduler:"Scheduler1",
        climbers:[],
        teams:[],
        tickets:[]
    },
    {
        name:"Market3",
        manager:"Manager3",
        scheduler:"Scheduler2",
        climbers:[],
        teams:[],
        tickets:[]
    },
];

const userSeeds = [
    {
      firstName:"newbie",
      lastName:"won",
      email:"newbie.won@email.com",
      role:"TT1",
      password:"123ABC!@#",
      address:{
          street:"123 street",
          street2:"",
          city:"City",
          state:"ST",
          zip:"12345"
      },
      phone:"123456789",
      pto:[],
      consumables:[]
    },
    {
        firstName:"Scheduler",
        lastName:"won",
        email:"Scheduler.won@email.com",
        role:"Scheduler",
        password:"123ABC!@#",
        address:{
            street:"456 Street",
            street2:"",
            city:"city",
            state:"ST",
            zip:"54321"
        },
        phone:"123456789",
        pto:[],
        consumables:[]
      },
      {
        firstName:"Manager",
        lastName:"Won",
        email:"manager.won@email.com",
        role:"Manager",
        password:"",
        address:{
            street:"",
            street2:"",
            city:"",
            state:"",
            zip:""
        },
        phone:"",
        pto:[],
        consumables:[]
      },
];

const consumableSeeds = [
     {
         name:"8Ft DinMale" ,
         description: "LDF4-50 DIN MALE to DIN MALE",
         partNumber: "L4A-DMDM-8-P-SGW",
         quantityOnHand:"8" ,
         minQuantity:"3" , 
         chatImn: "191500",
         chatSap: "35192",
         greybarNumber: "25940664",
     },
     {
        name: "800-1900 rrh sfp",
        description:"RRH SFP CPRI OPTIC MODULE " ,
        partNumber: "0609-001430",
        quantityOnHand:"6" ,
        minQuantity:"3" , 
        chatImn:"11009" ,
        chatSap:"35464" ,
        greybarNumber: "NA",

    },
    {
        name: "800-1900 DU sfp",
        description:"DU SFP OPTIC MODULE" ,
        partNumber: "RBT125LELC51",
        quantityOnHand:"5" ,
        minQuantity:"3" , 
        chatImn:"10983" ,
        chatSap:"35032" ,
        greybarNumber: "NA",

    },{
        name: "cat5e cable",
        description:"1000' Spool Black Shielded" ,
        partNumber: "7919A 0101000",
        quantityOnHand:"700" ,
        minQuantity:"350" , 
        chatImn:"NA" ,
        chatSap:"NA" ,
        greybarNumber: "22065172",

    },
];

const ticketSeeds = [
    {
        smrtNumber:"",
        siteID:"",
        towerOwner:"",
        contactNumber:"",
        priority:"",
        issue:"",
        rmaS:[
            {
                tms:"",
                confirmationNumber:"",
                authorizationNumber:"",
                rmaReturned:false,
                dateStaged:Date.now
            },
        ],
        rmaReturned:false,
    },
    {
        smrtNumber:"",
        siteID:"",
        towerOwner:"",
        contactNumber:"",
        priority:"",
        issue:"",
        rmaS:[
            {
                tms:"",
                confirmationNumber:"",
                authorizationNumber:"",
                rmaReturned:false,
                dateStaged:Date.now
            },
        ],
        rmaReturned:false,
    },
    {
        smrtNumber:"",
        siteID:"",
        towerOwner:"",
        contactNumber:"",
        priority:"",
        issue:"",
        rmaS:[
            {
                tms:"",
                confirmationNumber:"",
                authorizationNumber:"",
                rmaReturned:false,
                dateStaged:Date.now
            },
        ],
        rmaReturned:false,
    },
    {
        smrtNumber:"",
        siteID:"",
        towerOwner:"",
        contactNumber:"",
        priority:"",
        issue:"",
        rmaS:[
            {
                tms:"",
                confirmationNumber:"",
                authorizationNumber:"",
                rmaReturned:false,
                dateStaged:Date.now
            },
        ],
        rmaReturned:false,
    },
]

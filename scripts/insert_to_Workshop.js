const Workshop = require("../models/ws.model");




// place your data here

var data = [
    
    // {
    //     name : "Machine learning",
    //     date : "18/1/2020 - 19/1/2020",
    //     price : "700",
    //     branch : "CS",
    //     content : "This is a two day workshop where you will learn the basics of ml. The session would be a hands on session perfect for beginners. Industry experts handpicked by iit Bombay would ensure an enlightening experience for the students. Furthermore it also provides an opportunity to enter a national level competition and win exciting prizes.",
    //     label : "coding",
    //     contact:[
    //                 { 
    //                     name:"Harsha Salim",
    //                     phone:"7902834880"
    //                 },

    //                 { 
    //                     name:"Aswathy R Ullas",
    //                     phone:"7902467340"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail image name
    //     details:"w_machine",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://test.instamojo.com/api/1.1/payment-requests/"	


    // },
    // {
    //     name : "Artificial Neural Network",
    //     date : "1/2/2020 - 2/2/2020",
    //     price : "1400",
    //     branch : "IT",
    //     content : "An insight to the computing systems that are vaguely inspired by the biological neural networks that constitute our brains. Get started with the Neural Network Toolbox, work on some of the brain patterns, explore computing through the various softwares like MATLAB and get acquainted with the world of fuzzy logics, neuron perceptrons, time series' functions etc. A journey through the neurons in our brain to the neurons in a computer. ",
    //     label : "coding",
    //     contact:[
    //                 { 
    //                     name:"Parvathi",
    //                     phone:"8287601553"
    //                 },

    //                 { 
    //                     name:"Rizwan",
    //                     phone:"7012806994"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_artificial",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://test.instamojo.com/api/1.1/payment-requests/"    


    // },
    // {
    //     name : "Advanced Fire fighting",
    //     date : "25/1/2020 - 12/1/2020",
    //     price : "1400",
    //     branch : "SAFETY",
    //     content : "The technology is all in steps of advancement.Every field experiencing it's touch and thus is the scenario in fire fighting too.The modern Fire fighting technology ,it's scope , effectiveness all being described and various existing advanced technologies being demonstrated in this workshop.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Leo",
    //                     phone:"8078367942"
    //                 },

    //                 { 
    //                     name:"Varun",
    //                     phone:"9497788454"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_humanoid",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://test.instamojo.com/api/1.1/payment-requests/"    


    // },
    // {
    //     name : "Ducati",
    //     date : "18/1/2020 ",
    //     price : "800",
    //     branch : "SAFETY",
    //     content : "Ducati is best known for high-performance motorcycles characterized by large-capacity four-stroke, 90° V-twin engines with a desmodromic valve design.Ducati has produced several styles of motorcycle engines, including varying the number of cylinders, type of valve actuation and fuel delivery.In this workshop on Ducati ,we offer a excellent opportunity to learn more about Ducati Motorcycles and the latest technologies used by them.When we say Ducati factory trained, it mean just that!!.So we also offer a rare opportunity to attend a service workshop with Ducati's Two brilliant bikes Multistrada 1260 and Ducati Scrambler.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Vishnu",
    //                     phone:"8075347346"
    //                 },

    //                 { 
    //                     name:"Binniyamin",
    //                     phone:"8547209886"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_ducati",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/workshop-on-ducati/"    


    // },
    // {
    //     name : "Mercedes Benz engine Diagnosis and overhauling",
    //     date : "25/1/2020  - 26/1/2020",
    //     price : "1400",
    //     branch : "SAFETY",
    //     content : "Mercedes-Benz  engine systems are all about performance without compromise, economic efficiency and sustainability. They set worldwide benchmarks for cars, trucks and buses. In addition drivers appreciate the driving dynamics, the high power at low engine speeds, the smooth running characteristic and its powerful engine brake. They are using innovation power to develop environmentally friendly powertrain components and are continuously improving their engines to further reduce fuel consumption and emissions.Dhishna inassociation with IIT Bombay brings you a great opportunity to learn more about Mercedes Benz Engine Design and Analysis . These professionals from Utkraanti will take you for a virtual ride covering all the aspects of the engine.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Namit",
    //                     phone:"7558057426"
    //                 },

    //                 { 
    //                     name:"Harikrishnan",
    //                     phone:"9074567385"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_mercedes",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/mercedes-benz-engine-diagnosis-and-overhauli/"


    // },
    // {
    //     name : "PCB designing",
    //     date : "18/1/2020 - 19/1/2020",
    //     price : "850",
    //     branch : "ec",
    //     content : "Ever tried opening the parts of your favourite remote controlled car while you were a child? Does electronic circuits attract you too?Dhishna in association with Innovians Technologies brings you a two day workshop teaching you to design a PCB board, to discover more about it and make use of it designing smarter systems... Remember the best part is certificate by Technex, IIT Varanasi to each participant.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Sharon",
    //                     phone:"7907101793"
    //                 },

    //                 { 
    //                     name:"Krishna",
    //                     phone:"8281865483"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_pcb",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/pcb-designing-39911/"


    // },
    // {
    //     name : "Fire Safety Robotics",
    //     date : "25/1/2020 - 26/1/2020",
    //     price : "1400",
    //     branch : "safety",
    //     content : "The technology is all in steps of advancement. Every field experiencing it's touch and thus is the scenario in fire fighting too.In the event of a fire breakout, to rescue people and to put out the fire  are forced to use human resources which are not safe. With the advancement of technology especially in Robotics it is very much possible to replace humans with robots for fighting the fire. Dhishna 2020 in association with IIT Bombay presents you a two day workshop on Fire Safety Robotics ",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Leo",
    //                     phone:"8078367942"
    //                 },

    //                 { 
    //                     name:"Varun",
    //                     phone:"9497788454"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_fire_robo",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/fire-safety-robotics/"


    // },
    // {
    //     name : "Artificial Neural Network",
    //     date : "1/2/2020 - 2/2/2020",
    //     price : "1400",
    //     branch : "it",
    //     content : "Neural networks are computing systems with interconnected nodes that work much like neurons in the human brain. Using algorithms, they can recognize hidden patterns and correlations in raw data, cluster and classify it, and – over time – continuously learn and improve.Dhishna 2020 in association with IIT Bombay presents you a two day workshop on Artificial Neural Networks. Moreover, certificate from IIT Bombay will be awarded to each participant.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Rizwan",
    //                     phone:"7012806994"
    //                 },

    //                 { 
    //                     name:"Parvathi",
    //                     phone:"8287601553"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_nueron",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/artificial-neural-network/"


    // },
    // {
    //     name : "Automobile  360",
    //     date : "1/2/2020 - 2/2/2020",
    //     price : "750",
    //     branch : "mec",
    //     content : "Automobiles have always been part of everyone’s life and they always will be. The roar of a great engine, the unity and uniqueness of an automobile’s engineering and coachwork, the history of the company and the car, and of course the sheer beauty of the thing .Dhishna 2020 presents you a great opportunity to study more about automobiles. Kits are provided that includes basic knowledge, calculations and methodologies for step by step designing.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Kevin",
    //                     phone:"9746558149"
    //                 },

    //                 { 
    //                     name:"Akshay",
    //                     phone:"9048123847"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_automobile",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/automobile-360/"

    // },
    // {
    //     name : "Astro Photography",
    //     date : "1/2/2020 - 2/2/2020",
    //     price : "1000",
    //     branch : "mec",
    //     content : "Fascination with the sun, moon, stars and the galaxies visible in the sky. The boundless curiosity about the universe and its origin. Questions about evolution and the possibility of extraterrestrial life. All this has led to quests for the methods and means to observe, capture and quantify the skies above.For all of you drawn to the magic of the night skies, Dhishna 2020 presents to you a golden opportunity! This session will give you a headstart into Astrophotography — a detailed, stellar way of photographing celestial areas of the night sky. Experience a stargazing session where you can mull over the sheer beauty of everything from the moon to the milky way, and better yet, capture it all on screen.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Basil",
    //                     phone:"8304897110"
    //                 },

    //                 { 
    //                     name:"Aparna",
    //                     phone:"8921444192"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_astro",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/astro-photography/"

    // },
    /*   {
        name : "Bamboo and Mud Construction",
        date : "3/2/2020 - 4/2/2020",
        price : "1500",
        branch : "civil",
        content : "From mud we arose, and to it we shall return. Grass as well, in the case of construction. Our habitats have evolved into cold concrete cubicles, in the wake of progress. But now, we come back to more natural spaces that are both aesthetic and warm. Making use of naturally available materials, like bamboo and mud, we move forward into a future of eco - friendly houses that are cost - effective and at the same time sustainable. Dhishna 2020, in association with Habitat Tech Group TVM, brings you a two day workshop on Bamboo and Mud construction in which participants will work in groups to complete various projects involving real bamboo and mud.",
        label : "technical",
        contact:[
                    { 
                        name:"Sahal",
                        phone:"7902702089"
                    },

                    { 
                        name:"Sreejith",
                        phone:"8848766808"
                    }
                ],
        message:" open now",
        isOpen:true,
        //full detail pdf name
        details:"w_bamboo",
        pdfUrl:"",
        // payment url
        url : "https://www.instamojo.com/dhishna2020/bamboo-and-mud-construction/"

    },

    {
        name : "Bridge Design",
        date : "21/2/2020",
        price : "1200",
        branch : "it",
        content : "Bridge Design is a vital topic of study in Civil Engineering. In this workshop, participants will design and fabricate their own bridge. The  bridge model made by participants can take up to 1000 times the  self-weight. The workshop includes  instruction on the key structural components of Structural engineering and bridge construction – beams, arches, trusses, suspensions, and test for  maximum load.",
        label : "technical",
        contact:[
                    { 
                        name:"Vivek",
                        phone:"9496984622"
                    },

                    { 
                        name:"Nimisha",
                        phone:"8330813626"
                    }
                ],
        message:" open now",
        isOpen:true,
        //full detail pdf name
        details:"w_bridge",
        pdfUrl:"",
        // payment url
        url : "https://www.instamojo.com/dhishna2020/bridge-design-241f1/"

    },*/

    // {
    //     name : "Fire Training and CPR",
    //     date : "21/2/2020",
    //     price : "250",
    //     branch : "safety",
    //     content : "Knowing how to act in the event of a fire is an important skill for an citizen to have. The actions of any one person are likely to impact others around them. Fire safety training is about making sure everyone knows what to do in an emergency. Not only is it a smart choice, it is also the law. Also the best way to learn CPR is to attend a CPR class presented by an accredited medical emergency response provider.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Amaldev",
    //                     phone:"8921490115"
    //                 },

    //                 { 
    //                     name:"Fareed",
    //                     phone:"8075727627"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_fire_cpr",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/fire-training-and-cpr/"

    // },
    // {
    //     name : "Six Sense Robotics",
    //     date : "20/2/2020 - 21/2/2020",
    //     price : "1200",
    //     branch : "eee",
    //     content : "Six Sense Technology is a revolutionary way to aggrandize the physical world around us and lets the user to use natural hand gestures to interact with digital information. It involves almost all sections of modern technology. The workshop is a secure platform for students to enter into the field of robotics and work on image processing. It helps the students to learn all the basics and apply them in reality.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Sharath",
    //                     phone:"9447964424"
    //                 },

    //                 { 
    //                     name:"Abhishek",
    //                     phone:"6282190814"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_six",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/six-sense-robotics/"

    // },
    // {
    //     name : "Conceptual Modelling using Generative Design",
    //     date : "20/2/2020",
    //     price : "650",
    //     branch : "civil",
    //     content : "This course is an introduction to visually scripting in Formit using Dynamo.Dynamo let us use computational design and a data-driven process to generate thousands of potential geometries for a building. The idea is to explore as many options as possible without having to manually model each one.It provides participants with an understanding of the conceptual design using Autodesk Formit environment and implementing those concepts in a Building Information Modelling (BIM) workflow.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Naveen",
    //                     phone:"9895721858"
    //                 },

    //                 { 
    //                     name:"Varsha",
    //                     phone:"7356074336"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_conceptual",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/conceptual-modelling-using-generative-design/"

    // },
    //  {
    //     name : "High Powered Rocketry",
    //     date : "20/2/2020 - 21/2/2020",
    //     price : "1300",
    //     branch : "core",
    //     content : "It provides participants with an understanding of the conceptual design using Autodesk Formit environment and implementing those concepts in a Building Information Modelling (BIM) workflow.Dhishna 2020 presents to you a two-day workshop on High powered rocketry. Don't miss the opportunity to spectate the Star - XL Live Rocket Launch.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Rahul",
    //                     phone:"8281752814"
    //                 },

    //                 { 
    //                     name:"Shivam",
    //                     phone:"9567217828"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_rocketry",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/high-powered-rocketry/"

    // },
    // {
    //     name : "Pro-CAD-Er",
    //     date : "20/2/2020",
    //     price : "400",
    //     branch : "mech",
    //     content : "In the real world scenario, engineers are required to have the mastery over a different set of CAD software products. You may have to learn software to meet special requirements of your project. Engineers who have CAD skills are employed in manufacturing industries including automobiles, aeronautical, engineering, heavy industries, locomotives, and marine. With CAD skills, engineers can find employment and increase productivity.Dhishna 2020 in association with SAE_CUSAT is bringing an opportunity to learn the basics of SOLIDWORKS and its simulations.",
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Sanjith",
    //                     phone:"8111948462"
    //                 },

    //                 { 
    //                     name:"Jithin",
    //                     phone:"8086741153"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_procad",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/pro-cad-er/"

    // },
    /* {
        name : "Metro Rail",
        date : "20/2/2020",
        price : "400",
        branch : "mech",
        content : "Have you ever travelled in our Kochi Metro and fascinated about how our metro system works. Perhaps it might be the best opportunity for you. Dhishna 2020 presents to be you a one day interactive session of working of Kochi metro system.The workshop covers about the mechanical system, the electrical and signal processing system of Kochi metro.",
        label : "technical",
        contact:[
                    { 
                        name:"Thejus",
                        phone:"8086023111"
                    },

                    { 
                        name:"Richard",
                        phone:"7025294170"
                    }
                ],
        message:" open now",
        isOpen:true,
        //full detail pdf name
        details:"w_metro",
        pdfUrl:"",
        // payment url
        url : "https://www.instamojo.com/dhishna2020/metro-rail/"

    },
    {
        name : "Internet of Things",
        date : "21/2/2020",
        price : "700",
        branch : "ec",
        content : `Everything that can be automated will be automated"
        One of the most talked about technologies today is the Internet of Things(IoT). It is the beginning of machines taking over the world. Imagine a world in which every device in your home, workplace, car, and city are connected. That is the type of world that the Internet of Things can create, and it is only getting bigger and better.`,
        label : "technical",
        contact:[
                    { 
                        name:"Athul",
                        phone:"7907142802"
                    },
    },*/
    // {
    //     name : "Internet of Things",
    //     date : "21/2/2020",
    //     price : "700",
    //     branch : "ec",
    //     content : `Everything that can be automated will be automated"
    //     One of the most talked about technologies today is the Internet of Things(IoT). It is the beginning of machines taking over the world. Imagine a world in which every device in your home, workplace, car, and city are connected. That is the type of world that the Internet of Things can create, and it is only getting bigger and better.`,
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Athul",
    //                     phone:"7907142802"
    //                 },

    //                 { 
    //                     name:"Fahad",
    //                     phone:"9645508854"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_iot",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/internet-of-things-410d7/"

    // },
    // {
    //     name : "Football Injuries and instant Medical Support",
    //     date : "20/2/2020",
    //     price : "400",
    //     branch : "core",
    //     content : `Students must have an idea about their physical issues caused due to their daily postures while they sleep, use their gadgets and all other postures. It's also necessary to have the idea about a perfect diet that football players and students should follow for fitness maintenance.

    //     The workshop includes a live and practise session exclusively for injuries and instant treatment from Kerala Blasters Medical Support Team (Equipment shall be provided to you). It will also comprise of the idea about a perfect diet exclusively for players.`,
    //     label : "technical",
    //     contact:[
    //                 { 
    //                     name:"Midhun",
    //                     phone:"7592959768"
    //                 },

    //                 { 
    //                     name:"Akshay",
    //                     phone:"6282625326"
    //                 }
    //             ],
    //     message:" open now",
    //     isOpen:true,
    //     //full detail pdf name
    //     details:"w_kinder",
    //     pdfUrl:"",
    //     // payment url
    //     url : "https://www.instamojo.com/dhishna2020/football-injuries-and-instant-medical-suppor/"

    // },
     {
        name : "Brainwave Robotics",
        date : "20/2/2020 - 21/2/2020",
        price : "900",
        branch : "ec",
        content : "Here you will get the opportunity to learn the art of making robots which are controlled by the signals coming from your mind. This workshop teaches you the fundamentals of brainwaves and their applications in today’s world. It will provide guidance in the field of integrating Brainwave technology and Robotics. It also focuses on conceptualization and designing of complex systems in order to harness the power of mind in the form of brainwaves as well as clear the concepts related to embedded systems, artificial intelligence and automation.",
        label : "technical",
        contact:[
                    { 
                        name:"Nikhil",
                        phone:"9877341492"
                    },

                    { 
                        name:"Pratyush",
                        phone:"9608282403"
                    }
                ],
        message:" open now",
        isOpen:true,
        //full detail pdf name
        details:"w_brainwave",
        pdfUrl:"",
        // payment url
        url : "https://www.instamojo.com/dhishna2020/brainwave-robotics-18ef6/"

    }




    
];



var mongoose = require('mongoose');
 
// make a connection
mongoose.connect('mongodb://localhost/dhishna');
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
    
    
    // Workshop.collection.drop();

    // save multiple documents to the collection referenced by  Model
    Workshop.collection.insert(data, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });
    
});

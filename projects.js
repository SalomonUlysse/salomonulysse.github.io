function includeLink(link)
{
    //These three lines do this basically:
    //<script type="text/javascript" src=link></script>
    var include=document.createElement("script");
    include.type="text/javascript";
    include.src=link;
    //This includes actually puts the cdn in the html that calls this file. 
    document.getElementsByTagName("footer")[0].appendChild(include);
}
var gsapLink="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js";

class Project
{
    constructor(projectTitle,projectClass,image,technologiesUsed,projectDescription)
    { 
        this.projectTitle=projectTitle;
        this.projectClass=projectClass;
        this.image=image;
        this.technologiesUsed=technologiesUsed;
        this.projectDescription=projectDescription;
    }//End constructor

}; //End Move defn.

function animate(elem)
{
    gsap.to(elem,gsap.utils.random(5,10),
    {
        y: height,
        ease: "none",
        repeat: -1,
        delay:10
    });


    gsap.to(elem,gsap.utils.random(1,6),
    {
        x: "+=50",
        ease: "power1.inOut",
        repeat: -1,
        yoyo:true
    });

    gsap.to(elem,gsap.utils.random(1,6),
    {
        opacity: "8",
        ease: "power1.inOut",
        repeat: -1,
        yoyo:true
    });
}

function main()
{

    // includeLink(gsapLink);
    // var count=100,
    // particleClass="particle",
    // particleColors=["#ffffff","#000000","#fabc01","#fbca2f"],
    // theme=document.getElementsByClassName("theme")[0],
    // width=theme.offsetWidth,
    // height=theme.offsetHeight,
    // elem;

    //For figuring out gsap

    // for(var i=0;i<count;i++)
    // {
    //     //Create a div
    //     elem=document.createElement("div");
    //     elem.className=particleClass;
    //     theme.appendChild(elem);
    //     gsap.set(elem,
    //     {
    //         x: gsap.utils.random(0,width),
    //         y: gsap.utils.random(0,height)-(height*0.5),
    //         scale: gsap.utils.random(0,5,1),
    //         backgroundColor:gsap.utils.random(particleColors)
    //     });
    //     //animate(elem);

    // }

   

    var projectTitles=
    [
        "DisGen",
        "VST Synthesizer",
        "Pokemon Battle",
        "Guitar Center Web Scraper",
        "Playlist Management/Scraper Tool",
        "CHIP-8 Emulator",
        "Multi-threaded Linux Kernel Mailbox System",
        "Health Monitor GUI/UX",
        "FM Synthesizer",
        "Node.js Group Chat"/*,
        //Maybe turn the Node.js chat into a little social network clone?? Maybe use Django?
        "Multithreaded chat system",
        "NES Emulator"*/
        //Keep this commented until finished.
    ];

    var images=
    [
        "img/disgen.png",
        "img/firstplugin.png",
        "img/pokemon.png",
        "img/scraper.png",
        "img/playlistmanager.png",
        "img/chip8.png",
        "img/mailbox.png",
        "img/monitor.png",
        "img/fm.png",
        "img/nodechat.png",
        "img/cchat.png",
        "img/nes.png"
    ];

    var technologiesUsed=
    [
        /* DisGen*/
        ["HTML/CSS","JavaScript","JSON","MySQL","OpenStreetMap API","Python","React"],
        /*VST Synthesizer*/
        ["C++","JUCE Framework","Maximilian Audio library"],
        /*Pokemon Battle*/
        ["AJAX","Apache","HTML/CSS","JavaScript","JSON","XAMPP","PHP","MySQL/MariaDB"],
        /*Guitar Center Web Scraper*/
        ["Python","BeautifulSoup"],
        /*Playlist Management/Scraper Tool*/
        [/*"*SoundCloud API, YouTube Music API, and other streaming service APIs.",*/"Python","Flask","HTML/CSS","JavaScript","BeautifulSoup","Selenium","Bootstrap"],
        /*CHIP-8 Emulator*/
        ["C++","SDL"],
        /*Multi-threaded Linux Kernel Mailbox System*/
        ["C","POSIX","VirtualBox","Linux"],
        /*Health Monitor GUI/UX*/
        ["Bootstrap","HTML/CSS","JavaScript","JSON","Canvas","jQuery"],
        /*FM Synthesizer*/
        ["C++","OpenFrameWorks","Maximilian Audio library"],
        /*Node.js Group Chat System*/ 
        ["Node.js","Express.js","Socket.io","HTML/CSS","Embedded JavaScript","JavaScript","jQuery"/*,"MySQL"*/],
        /*Multithreaded chat system*/
        ["C","",""],
        /*NES Emulator*/
        ["C","SDL"]


    ];

    var projectClasses=
    [
        "imgdisgen",
        "imgfirstplugin",
        "imgpokemon",
        "imgscraper",
        "imgplaylistmanager",
        "imgchip8",
        "imgmailbox",
        "imgmonitor",
        "imgfm",
        "imgnodechat",
        "imgcchat",
        "imgnes"


    ];

    //This is to be updated by me.
    var numProjects=projectTitles.length;
    var projects=new Array(numProjects);
    var sources="<br><br>Sources/References: <br>";
    var projectDescriptions=
    [
        /*1.*/ "A redistricting application that applies the shortest-splitline algorithm. Made remotely in a group of 6 people.<br>A group member and I implemented the database by parsing large JSON files that fed the openstreetmaps API the coordinates of the states we were working on. ",
        /*2.*/ "A very simple digital synthesizer that applies basic DSP which can be used with a DAW that can run VSTs.",
        /*3.*/ "This is a game made remotely in a team of 5. I implemented the battle system and the database. The database was used for dealing with data before and after a battle. ",
        /*4.*/ "A Guitar Center Web Scraper that displays the prices of any given page.",
        /*5.*/ "An app I made for dynamically scraping any YouTube Music/SoundCloud playlist given to it. This is continually being worked on to have more features and services.",
        /*6.*/ "An emulator for the CHIP-8 interpreter. \nThis is an image of it running a Tetris ROM and my code doing the math behind the scenes to make the emulator work. \nThe top right number in this game is how many lines cleared.<br><br>Sources/References:<br><br><a target=\"_blank\"href=\"https://austinmorlan.com/posts/chip8_emulator/\">Reference 1</a><br><br><a target=\"_blank\"href=\"http://devernay.free.fr/hacks/chip8/C8TECH10.HTM\">Reference 2</a><br><br>",
        /*7.*/ "A multithreaded IPC mailbox system in the Linux kernel. \nThis is an image of me testing the multithreading, I no longer have access to the virtual machine but the code works.",
        /*8.*/ "An interactive GUI/UX for a digital health monitor made remotely in a team of 3. I implemented the overall layout.",
        /*9.*/ "A frequency modulation synthesizer that applies more advanced DSP that may be used with a DAW. More features will be added.",
        /*10.*/ "A chat system made in Node.js. More backend features will be added in the future. "+sources+" <a target =\"blank\" href=\"https://itnext.io/build-a-group-chat-app-in-30-lines-using-node-js-15bfe7a2417b\"><br> Reference 1<br></a>",
        /*11. */"A multithreaded chat system that implements socket logic.",
        /*12.*/"An NES Emulator. <br><br> "+sources+ " <a target=\"_blank\"href=\"https://wiki.nesdev.com/w/index.php/Nesdev\">Reference 1</a> <br><br> <a target=\"_blank\"href=\"https://yizhang82.dev/nes-emu-overview\">Reference 2</a> <br>" 
    ];
    
    for(i=0;i<numProjects;i++)
    {
        projects[i]=new Project(projectTitles[i],projectClasses[i],images[i],technologiesUsed[i],projectDescriptions[i]);
    }
    
    
    //Main HTML loop
    var stringInit="";
    var printProjects;
    var technologiesUsedString=stringInit;
    printProjects=document.getElementById("projects");
    printProjects.innerHTML+=""; //Just initializing

    for(i=0;i<projects.length;i++)
    {
        //So I need to calculate this first, and then make one huge appended string for the HTML.
        for(j=0;j<projects[i].technologiesUsed.length;j++)
        {
            technologiesUsedString+="<div class=\"grid-item\">"+projects[i].technologiesUsed[j]+"</div>";
        
        }
        printProjects.innerHTML+="<project class=\"projectbox\">"+
                "<!-- Tempted to just use OOP and turn each project into an object and use DOM to dynamically get these boxes printed. -->"+
                    "<div class=\"grid-item\">"+projects[i].projectTitle+": "+ "<br><br>"+projects[i].projectDescription+
                    "</div>"+
                        "<img class=\"img\" src=\""+projects[i].image+"\">"
                            +"<br>Technologies applied: <br>" +technologiesUsedString;
                technologiesUsedString=stringInit;            
                printProjects.innerHTML+="</project>";


    }

}
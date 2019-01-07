$( document ).ready(function() {
var questions = {
    question1: {
        text: "Who sang the title song Grease in the 1978 musical motion picture?",
        correctAnswer: "Frankie Valli",
        incorrectAnswers: ["Elvis Presley", "Frank Sinatra", "Olivia Newton-John"],
        gif: "https://thumbs.gfycat.com/DizzyShockedIvorybilledwoodpecker-size_restricted.gif",
    },
    question2: {
        text: "In what city does a Creole lady of the night strut her stuff, according to the original 1974 song Lady Marmalade?",
        correctAnswer: "New Orleans",
        incorrectAnswers: ["New York", "San Francisco", "Chicago"],
        gif: "https://thumbs.gfycat.com/CandidSelfishArcticduck-size_restricted.gif",
    },
    question3: {
        text:"Who is the lead singer for the rock band Guns N Roses?",
        correctAnswer:"Axl Rose",
        incorrectAnswers:["Mick Jagger", "Robert Plant", "Freddie Mercury"],
        gif:"https://thumbs.gfycat.com/BountifulFrailAlleycat-size_restricted.gif",
    },
    question4: {
        text:"How many members were in the American rock band The White Stripes?",
        correctAnswer: "2",
        incorrectAnswers:["3","5","10"],
        gif: "https://thumbs.gfycat.com/ScentedEmotionalBarb-size_restricted.gif",
    },
    question5: {
        text:"Come as You Are, a song by the grunge band Nirvana was released on which album?",
        correctAnswer:"Nevermind",
        incorrectAnswers:["Nevermore", "Smells Like Teen Spirit","Holy Water"],
        gif:"https://thumbs.gfycat.com/SharpEqualGnat-size_restricted.gif",
    },
    question6: {
        text:"Who was the first woman to be inducted into the Rock and Roll Hall of Fame?",
        correctAnswer: "Aretha Franklin",
        incorrectAnswers:["Ella Fitzgerald","Janis Joplin","Patti Smith"],
        gif:"https://thumbs.gfycat.com/AliveAntiqueLabradorretriever-size_restricted.gif",
    },
    question7: {
        text:"What American music duo released the studio album Sounds of Silence in 1966?",
        correctAnswer:"Simon & Garfunkel",
        incorrectAnswers:["The Beatles", "Timon & Pumba","The Everly Brothers"],
        gif:"https://thumbs.gfycat.com/GrizzledKindHadrosaurus-size_restricted.gif",
    },
    question8: {
        text:"What is the stage name of the member of Public Enemy who would later have a reality dating show?",
        correctAnswer:"Flavor Flav",
        incorrectAnswers:["Chuck D","Sammy Sam","DJ Lord"],
        gif:"https://thumbs.gfycat.com/ImmaculateAchingAruanas-size_restricted.gif",
    },
    question9: {
        text:"Who interrupted Taylor Swifts acceptance speech at the 2009 Video Music Awards?",
        correctAnswer:"Kanye West",
        incorrectAnswers: ["Jay Z","Drake","Eminem"],
        gif:"https://thumbs.gfycat.com/ScientificWeakGaur-size_restricted.gif",
    },
    question10: {
        text:"What Broadway musical broke the record for Tony nominations in 2016? (16 nominations)",
        correctAnswer: "Hamilton",
        incorrectAnswers:["Cats","Chicago","The Book of Mormon"],
        gif:"https://thumbs.gfycat.com/PositivePotableKiwi-size_restricted.gif",
    },
    question11: {
        text:"Who is the former drummer for Nirvana that went on to become the frontman for the Foo Fighters?",
        correctAnswer:"David Grohl",
        incorrectAnswers:["Kurt Cobain","David Spade","Joe Rogan"],
        gif:"https://thumbs.gfycat.com/EnviousCornyHoneybadger-size_restricted.gif",
    },
    question12: {
        text:"How old was American musician Jimi Hendrix when he passed away in 1970?",
        correctAnswer: "27",
        incorrectAnswers:["29","35","51"],
        gif:"https://thumbs.gfycat.com/BewitchedOfficialDachshund-size_restricted.gif",
    },
    question13: {
        text:"What was the name of the Eminem single that set the world record in 2013 for the most words used in a song?",
        correctAnswer:"Rap God",
        incorrectAnswers:["Slim Shady","Monster","Killshot"],
        gif:"https://thumbs.gfycat.com/LivelySimilarKingsnake-size_restricted.gif",
    },
    question14: {
        text:"Who played lead guitar for the British rock band Queen?",
        correctAnswer: "Brian May",
        incorrectAnswers:["Jimmy Page","Stevie Ray Vaughn","Jimmy Hendrix"],
        gif:"https://thumbs.gfycat.com/ClutteredDecentAcornwoodpecker-size_restricted.gif",
    },
    question15: {
        text:"K-pop is a genre of music that originated in what country?",
        correctAnswer: "South Korea",
        incorrectAnswers: ["North Korea", "Kazakhstan", "Japan"],
        gif:"https://thumbs.gfycat.com/ConstantFantasticHeron-size_restricted.gif",
    },
    question16: {
        text:"Who is the lead singer for the American rock band Pearl Jam?",
        correctAnswer:"Eddie Vedder",
        incorrectAnswers:["Thom Yorke","Kurt Cobain","Scott Weiland"],
        gif:"https://thumbs.gfycat.com/AdmirableLightheartedEgg-size_restricted.gif",
    },
    question17: {
        text:"What American singer-songwriter wrote and first recorded the song Blue Suede Shoes in 1955?",
        correctAnswer:"Carl Perkins",
        incorrectAnswers:["Elvis Presley", "Johnny Cash","Bobby Darin"],
        gif:"https://thumbs.gfycat.com/MediocreGrizzledGoldfinch-size_restricted.gif",
    },
    question18: {
        text:"Hallelujah is a song written by which Canadian recording artist?",
        correctAnswer: "Leonard Cohen",
        incorrectAnswers:["Jeff Buckley","Elvis Costello","Brian Adams"],
        gif:"https://thumbs.gfycat.com/CalmCapitalFanworms-size_restricted.gif",
    },
    question19: {
        text:"What was the highest selling album of the 1980s in the United States?",
        correctAnswer:"Thriller by Michael Jackson",
        incorrectAnswers:["The Wall by Pink Floyd","Appetite For Destruction by Guns N Roses", "Born in the USA by Bruce Springsteen"],
        gif:"https://thumbs.gfycat.com/MemorableInferiorBlacklemur-size_restricted.gif",
    },
    question20: {
        text:"Which pop star sang the national anthem at the 50th Super Bowl?",
        correctAnswer:"Lady Gaga",
        incorrectAnswers:["Carrie Underwood", "Beyonce", "Katie Perry"],
        gif:"https://thumbs.gfycat.com/VengefulMiserableBushbaby-size_restricted.gif",
    }
}
var questionArray=[questions.question1,questions.question2, questions.question3, questions.question4, questions.question5, questions.question6, questions.question7,questions.question8, questions.question9,questions.question10,questions.question11, questions.question12,questions.question13,questions.question14,questions.question15,questions.question16,questions.question17,questions.question18,questions.question19,questions.question20];

wins=0;
losses=0;


$("#startButton").on("click",function(){
   Game()
})

function Game(){
    randomQuestion = questionArray[Math.floor(Math.random()*questionArray.length)];
   var randomQuestionText=randomQuestion.text;
$("#gameArea").text(randomQuestionText);
$("#gameArea").append("<br><br>");
createOptions();
deleteQuestion();
}


//delete asked question//
function deleteQuestion(){
    
        var value = randomQuestion
        questionArray = questionArray.filter(function(item) { 
            return item !== value;
            
        });
}

function createOptions(){
    var contents = [randomQuestion.correctAnswer, randomQuestion.incorrectAnswers[0], randomQuestion.incorrectAnswers[1],randomQuestion.incorrectAnswers[2]];
   contents= contents.sort(function(a, b){return 0.5 - Math.random()});
 var gameDiv = $("<div>");
 gameDiv.attr("id","answers")
 ///option 1
 var gameDiv1 = $("<div>");
 gameDiv1.text(contents[0]);
 gameDiv1.css({margin:"10px"});
 gameDiv1.attr("id","option1");
 gameDiv.append(gameDiv1);
 //option 2
 var gameDiv2 = $("<div>");
 gameDiv2.css({margin:"10px"});
 gameDiv2.text(contents[1]);
 gameDiv2.attr("id","option2");
 gameDiv.append(gameDiv2);
 //option 3
 var gameDiv3 = $("<div>");
 gameDiv3.text(contents[2]);
 gameDiv3.css({margin:"10px"});
 gameDiv3.attr("id","option3");
 gameDiv.append(gameDiv3);
 //option 4
 var gameDiv4 = $("<div>");
 gameDiv4.css({margin:"10px"});
 gameDiv4.text(contents[3]);
 gameDiv4.attr("id","option4");
 gameDiv.append(gameDiv4);
 $("#gameArea").append(gameDiv);
 clicky();
}
//when user selects a choice//
function clicky(){
    $("#answers").on("click","div",function(){
        var text= $(this).text();
        if(text=== randomQuestion.correctAnswer){
            wins ++;
            $("#gameArea").text("Correct!")
            $("#gameArea").append("<br>" +"<img src=" + randomQuestion.gif +">")
            setTimeout(function(){
            isGameOver();
            }, 3000);
        }
        else {
            losses ++;
            $("#gameArea").text("Wrong! The correct answer is " + randomQuestion.correctAnswer);
            $("#gameArea").append("<br>" + "<img src=" + randomQuestion.gif +">")
            setTimeout(function(){
               isGameOver();
            }, 3000);
        }
    });    
}

function isGameOver(){
if (questionArray.length === 0){
    $("#gameArea").text("Well Done!");
    $("#gameArea").append("<br>" +"Correct Answers: " + wins + "<br>" + "Incorrect Answers: " + losses + "<br>" + "Total Score: " + wins + "/20");
    var btn = $('<button/>', {
        text: 'Play Again',
        id: 'playAgain'
    });
$("#gameArea").append("<br>");
$("#gameArea").append(btn)
playAgain();
}
else{
    Game();
    
}
}

function playAgain(){
    $("#playAgain").on("click", function(){
        questionArray=[questions.question1,questions.question2, questions.question3, questions.question4, questions.question5, questions.question6, questions.question7,questions.question8, questions.question9,questions.question10,questions.question11, questions.question12,questions.question13,questions.question14,questions.question15,questions.question16,questions.question17,questions.question18,questions.question19,questions.question20];
        wins = 0;
        losses= 0;
        Game();
    });
}










//ready closing tag//
});
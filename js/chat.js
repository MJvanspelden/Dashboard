// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}


// Input Time
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}


// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hoe gaat het?"
    let  seccondMessage = "Hoe kan ik je helpen?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '<br>' + seccondMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();


// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    // if (userText == "") {
    //     userText = "I love Code Palace!";
    // }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}


// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


function getBotResponse(input) {
    //rock paper scissors
    if (input == "gaat goed") {
        return "Fijn om te horen.";
    } else if (input == "ik kan jullie FAQ niet vinden") {
        return "Wij hebben eigenlijk geen FAQ in onze website.";
    } else if (input == "oke")
        return "Oke!"

    // Simple responses
    if (input == "hoi") {
        return "Hoi!";
    } else if (input == "tot ziens") {
        return "Tot ziens!";
    } else {
        return "Probeer iets anders te vragen!";
    }
}
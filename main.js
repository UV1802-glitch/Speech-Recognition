x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "The System Can Hear You, pls speak...:)";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech Has Been Recognized To" + content;

    if (content == "circle")
    {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 700);

        document.getElementById("status").innerHTML = "Drawing A Circle";
        draw_circle = "set";
    }

    if (content == "rectangle")
    {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 700);

        document.getElementById("status").innerHTML = "Drawing A Rectangle";
        draw_rect = "set";
    }
}

function setup()
{
    canvas = createCanvas(700, 700)
}

function draw()
{
    if (draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is Drawn..."
        draw_circle = "";
    }

    if (draw_rect == "set")
    {
        radius = Math.floor(Math.random() * 100);
        rectangle(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is Drawn..."
        draw_rect = "";
    }
}
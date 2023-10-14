var points = [];

var coolNumber = 0;

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

//ctx.fillRect(200,200,5,5); 

function addPoint(point)
{
    points.push(point);
    drawPoints();
}

function subPoint()
{
    points.pop();
    drawPoints();
}

function makePoint(x,y,line) //number,number,boolean
{
    return JSON.stringify({
        "x":x,
        "y":y,
        "isLine":line
    });
}

function drawPoints()
{
    ctx.reset();
    /*const image = new Image();
    image.src = "grid.png";
    image.hidden = true;
    image.addEventListener("load", () => {
        ctx.drawImage(image, 0, 0, 400, 400);

        const imageData = ctx.getImageData(0,0,400,400);
        ctx.putImageData(imageData, 0, 0);
    });
    */
    for (i = 0; i < points.length; i++)
    {
        var point = JSON.parse(points[i]);
        var nextPoint = point;
        if (points[i+1] != undefined && points[i+1] != null)
            nextPoint = JSON.parse(points[i+1]);
        //ctx.ellipse(point.x,point.y,20,20,Math.PI / 4,0,2 * Math.PI);
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.fillStyle = "cornflowerblue";
        ctx.roundRect(point.x,point.y,15,15,50);
        if (point.isLine == true)
        {
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x,nextPoint.y);
        }
        ctx.stroke();
    }
}

setInterval(function()
{
    document.getElementById("points").innerHTML =
  "points: " + points;
},1);
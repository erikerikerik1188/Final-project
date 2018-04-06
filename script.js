

var matrix = [
    [1, 7, 1, 0, 6, 0, 6, 5, 0, 5, 1, 5, 0, 5, 1, 0, 1, 3, 0, 1, 1, 3, 1, 1, 1, 0, 0, 4, 0, 0, 0, 1, 1, 1, 0, 1, 5, 8, 0, 5, 0, 0, 0],
    [1, 6, 1, 3, 5, 0, 1, 5, 0, 6, 0, 0, 0, 5, 1, 3, 4, 1, 5, 0, 1, 0, 2, 1, 2, 0, 0, 0, 1, 3, 0, 0, 1, 1, 0, 1, 5, 1, 0, 0, 0, 1, 1],
    [5, 1, 1, 1, 0, 1, 0, 1, 1, 5, 0, 5, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 5, 5, 1, 0, 3, 0, 1, 1, 0, 3, 0, 0, 3, 0, 1, 0, 1, 3, 1, 1],
    [0, 0, 1, 0, 5, 1, 6, 0, 5, 1, 0, 5, 5, 0, 1, 1, 1, 1, 1, 1, 1, 0, 6, 6, 5, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 5, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 6, 0, 0, 0, 0, 3, 3, 5, 5, 1, 3, 0, 0, 0, 4, 0, 5, 0, 0, 0, 7, 0, 1, 1, 0, 0, 0, 0, 0, 1, 7, 1, 5, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 6, 0, , 0, 5, 0, 1, 1, 1, 0, 1, 0, 0, 5, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 5, 0, 5, 0, 0, 1, 0, 5, 1, 0, 6, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 5, 1, 1, 1, 1, 7, 2],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 3, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 3, 0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 3, 1, 1, 0, 1, 0, 1, 3, 1, 1],
    [1, 1, 1, 1, 1, 0, 5, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 7, 2],
    [1, 1, 1, 1, 1, 0, 5, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 2, 0, 0, 1, 5, 0, 1, 0, 1, 0, 0, 6, 0, 5, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 3, 5, 1, 0, 0, 1, 3, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 5, 0, 1, 0, 1, 0, 0, 6, 0, 5, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 7, 1, 5, 1, 0, 1, 1, 1, 7, 2],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 3, 1, 1, 0, 1, 0, 1, 3, 1, 1],
    [0, 0, 1, 0, 0, 1, 5, 0, 0, 0, 1, 0, 0, 6, 0, 5, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 1, 0, 1, 1, 1, 1, 1],
    [0, 2, 1, 1, 5, 0, 6, 0, 5, 5, 0, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 7, 0, 0, 1, 1, 1, 7, 2, 5, 1, 0, 1, 1, 1, 7, 2],
    [1, 1, 1, 1, 1, 0, 5, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 5, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 3, 1, 1],
    [1, 0, 1, 0, 6, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 0, 0, 0, 3, 5, 0, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 5, 1, 1, 1, 1, 7, 2],
    [0, 0, 1, 0, 0, 1, 5, 0, 1, 1, 1, 0, 0, 6, 0, 5, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 7, 1, 5, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 6, 0, 3, 1, 1, 0, 3, 5, 5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 5, 5, 5, 1, 0, 0, 1, 0, 0, 1, 0, 3, 0, 1, 0, 1, 0, 1, 3, 1, 1],
    [1, 1, 0, 6, 0, 0, 0, 0, 3, 3, 5, 4, 0, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 3, 1, 1, 0, 0, 1, 1, 1, 7, 2],
    [0, 0, 1, 0, 5, 0, 6, 0, 5, 5, 0, 5, 5, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 0, 1, 5, 1, 1, 1, 1, 7, 2],
    [1, 1, 1, 1, 1, 0, 5, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [7, 1, 1, 0, 0, 1, 0, 1, 1, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 1, 0, 1, 0, 1, 1, 0, 0, 7, 0, 5, 0, 0, 0, 1, 3, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 3, 3, 1, 0, 1, 1, 1, 1, 7, 2],
    [0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 1, 0, 0, 6, 0, 0, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 1, 5, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 5, 0, 6, 0, 5, 5, 0, 5, 5, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 7, 0, 0, 1, 1, 1, 3, 1, 1, 0, 1, 0, 1, 3, 1, 1],
    [7, 0, 1, 0, 6, 0, 6, 5, 0, 5, 0, 5, 0, 4, 0, 0, 0, 0, 3, 5, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [7, 0, 1, 0, 0, 0, 5, 0, 1, 0, 1, 0, 1, 6, 0, 5, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 0, 5, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 7, 2],
    [0, 0, 1, 0, 0, 1, 5, 0, 1, 0, 0, 0, 0, 6, 0, 5, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 7, 1, 5, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 6, 0, 3, 0, 3, 0, 3, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 0, 0, 0, 1, 1, 0, 1, 1, 3, 0, 1, 0, 1, 1, 1, 1, 7, 2],
    [1, 1, 0, 6, 0, 0, 0, 0, 3, 3, 5, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 7, 0, 5, 4, 8, 1, 1, 1, 1, 1],

];


var side = 15;
var grassArr = [];
var XotakerArr = [];
var GishatichArr = [];
var AmenakerArr = [];
var VorsordArr = [];
var MegakerArr = [];
var exanak = "winter";
var b = 1;
var VirusArr = [];
var KrakArr = [];
//var socket = io.connect();

//function move() {
 //   var elem = document.getElementById("myBar");
 //   var width = 0;
  //  var id = setInterval(frame, 10);
  //  function frame() {
  //      if (width == 100) {
  //          clearInterval(id);
   //     } else {
    //        width++;
   //         elem.style.width = width + '%';
   //     }
  //  }
//}


var myexanak = setInterval(function () { myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

myVar = setInterval(function () {
    if (exanak == "winter") {
        exanak = "spring"
    }
    else if (exanak == "spring") {
        exanak = "summer"
    }
    else if (exanak == "summer") {
        exanak = "autumn"
    }
    else if (exanak == "autumn") {
        exanak = "winter"
    }

}, 5000);


function setup() {

    if (exanak == "winter") {
        frameRate(5)
    }
    else if (exanak == "spring") {
        frameRate(10)

    }
    else if (exanak == "summer") {
        frameRate(15)
    }
    else if (exanak == "autumn") {
        frameRate(7)
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xk = new Xotaker(x, y, 2);
                XotakerArr.push(xk);
            }
            else if (matrix[y][x] == 4) {
                var gsh = new Gishatich(x, y, 4)
                GishatichArr.push(gsh);
            }
            else if (matrix[y][x] == 5) {
                var vrs = new Vorsord(x, y, 5)
                VorsordArr.push(vrs);
            }
            else if (matrix[y][x] == 6) {
                var amn = new Amenaker(x, y, 6)
                AmenakerArr.push(amn);
            }
            else if (matrix[y][x] == 7) {
                var mgk = new Megaker(x, y, 7)
                MegakerArr.push(mgk);
            }
            else if (matrix[y][x] == 8) {
                var vrs = new Virus(x, y, 8)
                VirusArr.push(vrs);
            }
            else if (matrix[y][x] == 9) {
                var krk = new Krak(x, y, 9)
                KrakArr.push(krk);
            }


        }
    }

}




function draw() {
  
   // if (frameCount % 60 == 0) {
    //    var statistics = {
    //        "xotakerneri qanak@-": Xotaker.length,
     //       "Gishatichneir qanak@-": Gishatich.length,
        //"Vorsordneri qanak@-": Vorsord.length,
         //"Amenakerneri qanak@-": Amenaker.length,
         //"Megakerneri qanak@-": Megaker.length,
     //   }
     //   var myJSON = JSON.stringify(statistics);
     //   function handleSumbit(evt) {
     //       socket.emit("send message", myJSON);
     //   }
     //   handleSumbit();
   // }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (exanak == "winter")
                    fill("white")
                if (exanak == "spring")
                    fill(4, 120, 1)
                if (exanak == "summer")
                    fill(4, 215, 1)
                if (exanak == "autumn")
                    fill("orange")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("black");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 6) {
                fill("violet");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                fill(62, 176, 158);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 9) {
                fill("AF1F1F");
                rect(x * side, y * side, side, side);
            }


        }

        myVar = setInterval(function () {
            b++
            if (b > 4) {
                b == 0;
            }
        }, 20000)
        if (b >= 4) {
            createCanvas(matrix[0].length * side, matrix.length * side + x / 2);
            background("red");
            textSize(50);
            text("Game over", 70, 140);
            fill("white");
            textSize(10);
            text("4 Season", 315, 165);
            fill("white")

        }
    }





    for (var i in grassArr) {
        grassArr[i].bazmanal()
    }
    for (var i in XotakerArr) {
        XotakerArr[i].sharjvel()


        XotakerArr[i].utel()


        XotakerArr[i].bazmanal()

        XotakerArr[i].mahanal()
    }

    for (var i in GishatichArr) {
        GishatichArr[i].sharjvel()

        GishatichArr[i].utel()

        GishatichArr[i].bazmanal()

        GishatichArr[i].mahanal()


    }

    for (var i in VorsordArr) {
        VorsordArr[i].sharjvel()

        VorsordArr[i].utel()

        VorsordArr[i].bazmanal()

        VorsordArr[i].mahanal()

    }

    for (var i in AmenakerArr) {
        AmenakerArr[i].sharjvel()

        AmenakerArr[i].utel()
    }
    for (var i in MegakerArr) {
        MegakerArr[i].sharjvel()

        MegakerArr[i].utel()
    }
    for (var i in VirusArr) {
        VirusArr[i].sharjvel()

        VirusArr[i].varakel()

        VirusArr[i].taratvel()

        VirusArr[i].mahanal()
    }
    for (var i in KrakArr) {
        KrakArr[i].sharjvel()

        KrakArr[i].hrdeh()

        KrakArr[i].taratvel()

        KrakArr[i].marel()


    }


}










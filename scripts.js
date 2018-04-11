var i=0;
var image = document.getElementById("image");
var imgs = new Array('images/mesecond.jpg','images/mefirst.jpg','images/methird.jpg', 'images/mefourth.jpg');

function husainov() {
    image.src = imgs[i];
    i++;
    if(i>=imgs.length) {
        i=0;
    }
}
function splitOnDoubleMassive() {
    var text = document.getElementById("text").value;
    var mass = [[]];
    var textmass = [];
    textmass = text.split('\n');
    while(i < textmass.length) {
        mass[i] = textmass[i].split(' ');
        ++i;
    }
    return mass;
}

function splitOnDoubleMassive2() {
    var text = document.getElementById("text2").value;
    var mass = [[]];
    var textmass = [];
    textmass = text.split('\n');
    while(i < textmass.length) {
        mass[i] = textmass[i].split(' ');
        ++i;
    }
    return mass;
}

function transMatrix() {
    A = splitOnDoubleMassive();
    var m = A.length, n = A[0].length, AT = [];
    for (var i = 0; i < n; i++) {
        AT[i] = [];
        for (var j = 0; j < m; j++) AT[i][j] = A[j][i];
    }
    return AT;
}

function printMassive(massive) {
    var text = '';
    for(var i = 0; i < massive.length; ++i) {
        for(var j = 0; j < massive[i].length; ++j) {
            text += massive[i][j];
            text += ' ';
        }
        text += '\n';
    }
    document.getElementById('result').innertext = text;
}

function printNumber(number) {
    var text = '';
    text+=number;
    document.getElementById('result').innertext = text;
}



function determinantMatrix( ) {
    A = splitOnDoubleMassive();
    var N = A.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
    { B[i] = [];
        for (var j = 0; j < N; ++j) B[i][j] = A[i][j];
    }
    for (var i = 0; i < N-1; ++i)
    { var maxN = i, maxValue = Math.abs(B[i][i]);
        for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][i]);
            if (value > maxValue){ maxN = j; maxValue = value; }
        }
        if (maxN > i)
        { var temp = B[i]; B[i] = B[maxN]; B[maxN] = temp;
            ++exchanges;
        }
        else { if (maxValue == 0) return maxValue; }
        var value1 = B[i][i];
        for (var j = i+1; j < N; ++j)
        { var value2 = B[j][i];
            B[j][i] = 0;
            for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[i][k]*value2)/denom;
        }
        denom = value1;
    }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}


function multiplyMatrix()
{
    A = splitOnDoubleMassive();
    B = splitOnDoubleMassive2();

    return B;
}



function transpose(){
    var rows = 3;
    var cols = 3;
    var arr = new Array(rows);
    
    // declare 2D array
    for(let i=0; i<cols; i++)
        arr[i] = new Array(cols);

    // initialize values from user input    
    arr[0][0] = document.getElementById("a00").value;
    arr[0][1] = document.getElementById("a01").value;
    arr[0][2] = document.getElementById("a02").value;
    arr[1][0] = document.getElementById("a10").value;
    arr[1][1] = document.getElementById("a11").value;
    arr[1][2] = document.getElementById("a12").value;
    arr[2][0] = document.getElementById("a20").value;
    arr[2][1] = document.getElementById("a21").value;
    arr[2][2] = document.getElementById("a22").value;

    // do transpose
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
          [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
        }
    }

    let r1 = arr[0][0] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + arr[0][1] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + arr[0][2];
    let r2 = arr[1][0] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + arr[1][1] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + arr[1][2];
    let r3 = arr[2][0] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + arr[2][1] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + arr[2][2];
    
    document.getElementById("row1").textContent = r1;
    document.getElementById("row2").textContent = r2;
    document.getElementById("row3").textContent = r3;
    
}
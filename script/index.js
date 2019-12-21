//畫面按鈕點擊透明度變化
$('#abacus_button td').mousedown(function() {
    $(this).css('opacity', '0.7')
})
$('#abacus_button td').mouseup(function() {
    $(this).css('opacity', '1')
})

//抓取顯示畫面元素 & 創立暫存變數
var show = document.getElementById("show");
var showmin = document.getElementById("showmin");
var z;
var g;
var h;

//點擊數字或符號.
function keynumber(ee) {
    if (show.innerText.substr(0, 1) == "0" && show.innerText.substr(0, 2) !== "0." && ee !== '.') {
        show.innerText = ee;
    } else if (show.innerText.indexOf('.') !== -1 && ee == '.') {
        console.log("輸入值已有小數點 ")
    } else {
        show.innerText = show.innerText + ee;
    }
};

//點擊四則運算符號
function operation(ee) {
    if (show.innerText == "0" && showmin.innerText == "") {
        console.log("開頭請填入數字 ")
    } else if (showmin.innerText == "" && show.innerText !== "0") {
        showmin.innerText = show.innerText + ee;
        z = show.innerText;
        show.innerText = "0";
        g = showmin.innerText;
    } else if (showmin.innerText !== "" && show.innerText == "0") {
        showmin.innerText = z + ee;
        g = showmin.innerText;
    } else if (showmin.innerText !== "" && show.innerText !== "") {
        g = parseFloat(eval(showmin.innerText + show.innerText).toFixed(10));
        showmin.innerText = g + ee;
        z = g;
        show.innerText = "0";
    }
};

//點擊符號=
function settlement() {
    if (showmin.innerText !== "") {
        h = showmin.innerText.substr(showmin.innerText.length - 1, 1) + show.innerText;
        show.innerText = parseFloat(eval(showmin.innerText + show.innerText).toFixed(10));
        showmin.innerText = "";
    } else {
        show.innerText = parseFloat(eval(show.innerText + h).toFixed(10));
    }
}

//點擊符號AC
function showclear() {
    show.innerText = "0";
    showmin.innerText = "";
}

//點擊符號Del
function showdel() {
    if (show.innerText.length == 1) {
        show.innerText = '0';
    } else {
        show.innerText = show.innerText.substr(0, show.innerText.length - 1);
    }
}
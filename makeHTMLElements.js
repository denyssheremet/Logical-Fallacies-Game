function makeDiv(divName, appendTo) {
    let div = document.createElement("div");
    div.id = divName;
    div.className = divName;
    document.getElementById(appendTo).appendChild(div);
}

function makeH1(innerHTML, appendTo, id = "") {
    let h2 = document.createElement("h1");
    h2.innerHTML = innerHTML;
    h2.id = id;
    document.getElementById(appendTo).appendChild(h2);
}

function makeH2(innerHTML, appendTo, id = "") {
    let h2 = document.createElement("h2");
    h2.innerHTML = innerHTML;
    h2.id = id;
    document.getElementById(appendTo).appendChild(h2);
}

function makeH3(innerHTML, appendTo, id = "") {
    let h3 = document.createElement("h3");
    h3.innerHTML = innerHTML;
    h3.id = id;
    document.getElementById(appendTo).appendChild(h3);
}

function makeP(innerHTML, appendTo, id = "") {
    let pre = document.createElement("PRE");
    let h3 = document.createElement("P");
    pre.innerHTML = h3;
    h3.innerHTML = innerHTML;
    h3.id = id;
    document.getElementById(appendTo).appendChild(h3);
}

function makeAnswerButton(name, className, appendTo, func) {
    let btn = document.createElement("button");
    btn.id = "answer:" + name;
    btn.innerHTML = name;
    btn.className = "answerButton answer:" + className;
    btn.onclick = func;
    document.getElementById(appendTo).appendChild(btn);
}

function makeNextSlideButton(func, text, idText) {
    let btn = document.createElement("button");
    btn.id = "answer:" + idText;
    btn.innerHTML = text;
    btn.className = "answerButton nextslidebutton answer:Continue";
    btn.onclick = func;
    document.getElementById("bottomDiv").appendChild(btn);
}

function makeTextArea(id, appendTo, placeholder = "", small = false) {
    let ta = document.createElement("textarea");
    ta.id = id;
    ta.style.margin = "5px";
    ta.placeholder = placeholder;
    if (small) {
        ta.style.minHeight = "0px";
    }
    document.getElementById(appendTo).appendChild(ta);

};
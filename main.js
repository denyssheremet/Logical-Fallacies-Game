
var activeMetaPrograms = "all";

var mcd;
var question;
var ie;
var reg;


function answerChosen(answer) {
    if (!question.checkAnswer(answer)) {
        switch (question.wrong) {
            case 0: alert("Are you sure??");
                question.wrong += 1;
                break;
            default: alert("Your answer: " + answer + "\nCorrect answer: " + question.answer);
                question.wrong = 0;
                chooseSentence();
                break;
        }
    } else {
        question.wrong = 0;
        revealAnswer();
        hideAnswerbuttons();
        // showButton("answer:Continue");
        showButton("answer:NextQuestion");

    };
};

function hideAnswerbuttons() {
    let ansButt = document.getElementsByClassName("answerButton");
    for (let i = 0; i < ansButt.length; i++) {
        ansButt[i].style.display = "none";
    }
}

function chooseSentence() {
    ie = reg.getNext()
    if (ie.ieType === "final") {
        if (mcd.chosenCategory === "Level 4") {
            question.setSentence("Congratulations!! You've Finished This Game!!!");
            hideAnswerbuttons();
            showButton("answer:Home");
        } else {
            question.setSentence("Congratulations!! You've Finished This Level!!!");
            hideAnswerbuttons();
            showButton("answer:NextLevel");
        }

    } else {
        question.setSentence(ie.yes);
        question.setAnswer(ie.subCategory);
    }

};

function selectMappings(choice, explanation = false) {
    if (explanation) {
        let allAnswerButtons = document.getElementsByClassName("answerButton");

        //make all answer buttons invisible
        for (let i = 0; i < allAnswerButtons.length; i++) {
            allAnswerButtons[i].style.display = "none";
        }
        document.getElementById("answer:Continue").style.display = "block";
        return;
    }
    mcd.chosenCategory = choice;

    // make buttons selected or unselected
    let allAnswerButtons = document.getElementsByClassName("answerButton");
    let selectedAnswerButtons = document.getElementsByClassName("answer:" + mcd.chosenCategory);

    //make all answer buttons invisible
    for (let i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].style.display = "none";
    }
    //make the selected answer buttons visible again
    for (let i = 0; i < selectedAnswerButtons.length; i++) {
        selectedAnswerButtons[i].style.display = "block";
    }

    if (document.getElementById("revealedAnswer") !== null) {
        document.getElementById("revealedAnswer").remove();
    }
    chooseSentence();
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function randFromList(listFrom, amount) {
    const shuffled = shuffle(listFrom);

    while (shuffled.length < amount) {
        shuffled.push("");
    }

    return shuffled.slice(0, amount);
};

function showButton(name) {
    toggleVisibility("answer:Continue", 0);
    toggleVisibility("answer:LetsGo", 0);
    toggleVisibility("answer:Reveal", 0);
    toggleVisibility("answer:NextSlide", 0);
    if (document.getElementById(name) !== null) {
        console.log("yes")
        toggleVisibility(name, 1);
    }
    else {
        console.log(name);
        console.log(document.getElementById(name))
    }
}

function nextExplanationSentence(ieg) {
    ie = ieg.getNext();

    while (document.getElementById("revealedAnswer") !== null) {
        document.getElementById("revealedAnswer").remove();
    }

    // if last 
    if (ie === null || ie.ieType === "final") {
        startMultipleChoiceTrainer(ieg.level);
    }

    // if next Subcategory
    else if (ie.ieType === "explanation") {

        if (document.getElementById("answer:Continue") !== null) {
            showButton("answer:NextSlide");
        }
        question.setSentence("");
        if (document.getElementById("subCategory") !== null) {
            document.getElementById("subCategory").remove();
        }
        makeH1(ie.yes, "topDiv", "subCategory");

    }
    // if slide
    else if (ie.ieType === "slide") {
        if (document.getElementById("answer:Continue") !== null) {
            showButton("answer:LetsGo");

        }
        question.setSentence("");
        if (document.getElementById("subCategory") !== null) {
            document.getElementById("subCategory").remove();
        }
        makeH1(ie.yes, "topDiv", "subCategory");
    }

    else { // if normal
        question.setSentence(ie.yes);
        showButton("answer:Reveal");
    }

}

function nextLevel(level) {
    switch (level) {
        case "Level 1":
            return "Level 2";
        case "Level 2":
            return "Level 3";
        case "Level 3":
            return "Level 4";
    }
}

function revealAnswer() {
    if (ie.ieType === "explanation") {
        for (let i = 0; i < ie.q.length; i++) {
            makeP(ie.q[i], "topDiv", "revealedAnswer")
        }
    } else {
        makeH3(ie.q, "topDiv", "revealedAnswer");
    }
    showButton("answer:Continue");

}

// starts Introduction
function startIntroduction(level = "Level 1") {
    clearIndex();

    toggleVisibility("levels", 1);
    toggleVisibility("homepage", 0);

    clearIndex();
    document.getElementById("title").innerHTML = "Tell Me More: Introduction";
    question = new Question();
    question.clear();

    mcd = new MultipleChoiceDict(metaModelSentences);
    mcd.chosenCategory = level;

    let ieg = new IntroductionExampleGiver(mcd, level);

    nextExplanationSentence(ieg);

    makeNextSlideButton(function () { nextExplanationSentence(ieg) }, "Got It!", "Continue");
    makeNextSlideButton(function () { nextExplanationSentence(ieg) }, "Let's Go!!!", "LetsGo");
    makeNextSlideButton(function () { revealAnswer() }, "Reveal Question...", "Reveal");
    makeNextSlideButton(function () { revealAnswer() }, "Show Explanation...", "NextSlide");
    showButton("answer:LetsGo");

};



// starts Meta Model Trainer 1
function startMultipleChoiceTrainer(level = "Level 1") {

    toggleVisibility("levels", 1);
    toggleVisibility("homepage", 0);



    clearIndex();
    document.getElementById("title").innerHTML = "Tell Me More! v9.3";
    question = new Question();
    question.clear();


    mcd = new MultipleChoiceDict(metaModelSentences);
    mcd.chosenCategory = level;

    reg = new RealExampleGiver(mcd, level);

    // // Make Answer Buttons
    for (let i = 0; i < mcd.getCategoryKeys().length; i++) {
        let category = mcd.getCategoryKeys()[i];
        makeDiv(category + "Buttons", "bottomDiv", category);

        // generate answer buttons
        for (let j = 0; j < mcd.getSubCategoryKeys(category).length; j++) {
            let subCategory = mcd.getSubCategoryKeys(category)[j];
            makeAnswerButton(subCategory, category, category + "Buttons", function () {
                answerChosen(subCategory);
            });
        }
    }

    makeH1("Now It's Your Turn...", "topDiv", "subCategory");

    makeNextSlideButton(function () { selectMappings(level) }, "Easy! Next!", "NextQuestion");
    makeNextSlideButton(function () { startIntroduction(nextLevel(level)) }, "Go To Next Level!", "NextLevel");
    makeNextSlideButton(function () { goToHomepage() }, "This is the best!", "Home");

    selectMappings(mcd.chosenCategory);


};

// Clears index.html so another Trainer can be started.
function clearIndex() {
    document.getElementById("topDiv").innerHTML = "";
    document.getElementById("bottomDiv").innerHTML = "";
    document.getElementById("bottomDiv").style.display = "block";
    document.getElementById("bottomDiv").style.margin = "0px";
    document.getElementById("title").innerHTML = "";
    if (mcd != null) {
        mcd.chosenCategory = "Level 1";
    }
};


function toggleVisibility(id, value = -1) {
    var x = document.getElementById(id);
    if (x === null) {
        return;
    }
    if (value === 0) {
        x.style.display = "none";
    } else if (value === 1) {
        x.style.display = "block";
    } else {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}



function goToHomepage() {

    toggleVisibility("levels", 0);
    toggleVisibility("homepage", 1);

}


// start everything up
window.addEventListener("load", function () {
    // document.getElementById("homepage").toggleVisibility;

    toggleVisibility("homepage", 1);
    toggleVisibility("levels", 0);


    MultipleChoiceDict.formatDict(metaModelSentences);

    // clearIndex();
    question = new Question()

});

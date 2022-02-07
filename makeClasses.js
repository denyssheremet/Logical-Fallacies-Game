function shuffle1(array) {
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

class IntroductionExample {
    constructor(subCategory, yes, q, ieType) {
        this.subCategory = subCategory;
        this.yes = yes;
        this.q = q;
        this.ieType = ieType;
    }
}

class IntroductionExampleGiver {
    constructor(mcd, level) {
        this.level = level;
        this.counter = 0;
        this.mcd = mcd;
        this.list = [];

        for (let j = 0; j < 3; j++) {
            this.list.push(new IntroductionExample("", "Round " + (j + 1) + "/3...", "", "slide"));

            for (let i = 0; i < this.mcd.getSubCategoryKeys(level).length; i++) {
                let subCat = this.mcd.getSubCategoryKeys(level)[i];
                this.list.push(new IntroductionExample(subCat, subCat, mcd.getExplanation(level, subCat), "explanation"))

                let ys = mcd.getYesList(level, subCat)
                let qs = mcd.getQList(level, subCat)

                for (let k = 0; k < 3; k++) {
                    this.list.push(new IntroductionExample(subCat, ys[j * 3 + k], qs[j * 3 + k], "normal"))
                    if (j == 2 && k == 2) {
                        k++;
                        this.list.push(new IntroductionExample(subCat, ys[j * 3 + k], qs[j * 3 + k], "normal"))
                    }
                }
            }
        }
        this.list.push(new IntroductionExample("", "Now It's Your Turn...", "", "slide"));
        this.list.push(new IntroductionExample("", "", "", "final"));
    }

    getNext() {
        return this.list[this.counter++];
    }

}


class RealExampleGiver {
    constructor(mcd, level) {
        this.level = level;
        this.counter = 0;
        this.mcd = mcd;
        this.list = [];

        for (let i = 0; i < mcd.getSubCategoryKeys(level).length; i++) {
            let subCat = mcd.getSubCategoryKeys(level)[i];
            for (let j = 0; j < 10; j++) {
                this.list.push(
                    new IntroductionExample(subCat,
                        mcd.getExamplesList(level, subCat)[j],
                        mcd.getQuestionsList(level, subCat)[j],
                        "normal"
                    )
                )
            }
        }
        this.list = shuffle1(this.list);
        this.list.push(new IntroductionExample("", "", "", "final"));
        console.log(this.list);


    }

    getNext() {
        return this.list[this.counter++];
    }

}


class Question {
    constructor() {
        this.id = "sentence";
        this.wrong = 0;
        makeH2("", "topDiv", this.id);
    }

    checkAnswer(answer) {
        return answer === this.answer;
    }

    setAnswer(answer) {
        this.answer = answer;
    }

    setSentence(sentence) {
        this.sentence = sentence;

        document.getElementById("sentence").remove();
        makeH2(this.sentence, "topDiv", "sentence");
    }

    clear() {
        this.setAnswer("");
        this.setSentence("");
    }

    chooseNextQuestion() {
        let example = mcd.randExample();
        this.setSentence(example.example);
        this.setAnswer(example.subCategory);
    }
}

class Dropdown {
    constructor(id, contentId) {
        this.id = id;
        this.contentId = contentId;
        this.isVisible = true;
        this.isOpen = false;
    }

    toggleVisibility(open = null) {
        if (open == true || (open === null && !this.isVisible)) {
            document.getElementById(this.id).style.display = "block";
            this.isVisible = true;
        } else {
            document.getElementById(this.id).style.display = "none";
            this.isVisible = false;
        }
    }

    toggleOpen() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            document.getElementById(this.contentId).style.display = "block";
        } else {
            document.getElementById(this.contentId).style.display = "none";
        }
    }

    clearContent() {
        document.getElementById(this.contentId).innerHTML = "";
    }

}

class Sentence {
    constructor(category, subCategory, example) {
        this.category = category;
        this.subCategory = subCategory;
        this.example = example;
    }
}

class MultipleChoiceDict {
    constructor(dict) {
        this.dict = dict;                       // the dictionary
        this.chosenCategory = this.getCategoryKeys()[0];
    }

    getCategoryKeys() {
        return Object.keys(this.dict);
    }

    getSubCategoryKeys(category) {
        return Object.keys(this.dict[category]);
    }

    getExamplesList(category, subCategory) {
        return this.dict[category][subCategory].examples;
    }

    getYesList(category, subCategory) {
        return this.dict[category][subCategory].yes;
    }

    getQList(category, subCategory) {
        return this.dict[category][subCategory].q;
    }

    getQuestionsList(category, subCategory) {
        return this.dict[category][subCategory].questions;
    }

    getExplanation(category, subCategory) {
        return this.dict[category][subCategory].explanation;
    }

    randCategory() {
        return randFromList(this.getCategoryKeys(), 1)[0];
    }

    randSubCategory(category = null) {
        if (category) {
            return randFromList(this.getSubCategoryKeys(category), 1)[0];
        }
        return this.randSubCategory(this.randCategory());
    }

    randExample(category = null, subCategory = null) {
        if (category) {
            if (subCategory) {
                let example = randFromList(this.dict[category][subCategory].examples, 1)[0];
                return new Sentence(category, subCategory, example);
            }
            return this.randExample(category, this.randSubCategory(category));
        }
        return this.randExample(this.chosenCategory);
    }

    randSubCategories(amount) {
        let randCat = this.randCategory();
        return randFromList(this.getSubCategoryKeys(randCat), amount);
    }

    static formatDict(dict) {
        // Turn sentence strings into arrays
        for (var [k1, v1] of Object.entries(dict)) {
            for (var [key, value] of Object.entries(dict[k1])) {
                dict[k1][key].examples = value.examples.split("\n").slice(1, -1);
                dict[k1][key].questions = value.questions.split("\n").slice(1, -1);
                dict[k1][key].yes = value.yes.split("\n").slice(1, -1);
                dict[k1][key].q = value.q.split("\n").slice(1, -1);
                dict[k1][key].explanation = value.explanation.split("\n").slice(1, -1);
                // Trim spaces around sentences
                for (let i = 0; i < dict[k1][key].examples.length; i++) {
                    dict[k1][key].examples[i] = dict[k1][key].examples[i].replace('•', '').trim();
                    dict[k1][key].questions[i] = dict[k1][key].questions[i].replace('•', '').trim();
                }
                for (let i = 0; i < dict[k1][key].yes.length; i++) {
                    dict[k1][key].yes[i] = dict[k1][key].yes[i].replace('•', '').trim();
                    dict[k1][key].q[i] = dict[k1][key].q[i].replace('•', '').trim();
                }
                for (let i = 0; i < dict[k1][key].explanation.length; i++) {
                    dict[k1][key].explanation[i] = dict[k1][key].explanation[i].replace('•', '').trim();
                }
            }
        }
    }
}
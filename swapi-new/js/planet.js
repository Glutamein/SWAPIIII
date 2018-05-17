function youRight() {
    console.log("You Right!")
}
window.onload = function () {
    var data;
    var type;
    var id_num;
    var url;
    var step;
    var answers = [];
    var holder = [];
    var request;

    function question() {
        var qNum = Math.floor((Math.random() * 61) + 1);
        findData("planets", qNum);
    }
    question();


    function loadingness() {
        var qType = Math.floor(Math.random() * 2);
        var words = document.getElementById("quest");
        var ans = document.getElementById("ans");
        var ans2 = document.getElementById("ans2");
        // var button = document.createElement("button");
        var ans3 = document.getElementById("ans3");
        var ans4 = document.getElementById("ans4");
        var people = Math.floor(Math.random() * 87);
        var planets = Math.floor(Math.random() * 61);
        // console.log(species);
        switch (qType) {
            case 0:
                answers = ["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader", "Leia Organa", "Owen Lars", "Beru Whitesun Lars", "R5-D4", "Biggs Darklighter",
                    "Obi-Wan Kenobi", "Anakin Skywalker", "Wilhuff Tarkin", "Chewbacca", "Han Solo", "Greedo", "Jabba Desilijic Tiure", "Wedge Antilles",
                    "Jek Tono Porkins", "Yoda", "Palpatine", "Boba Fett", "IG-88", "Bossk", "Lando Calrissian", "Lobot", "Ackbar", "Mon Mothma", "Arvel Crynyd",
                    "Wicket Systri Warrick", "Nien Nunb", "Qui-Gon Jinn", "Nute Gunray", "Finis Valorum", "Padme Amidala", "Jar Jar Binks", "Roos Tarpals",
                    "Rugor Nass", "Ric Olie", "Watto", "Sebulba", "Quarsh Panaka", "Shmi Skywalker", "Darth Maul", "Bib Fortuna", "Ayla Secura", "Ratts Tyerell",
                    "Dud Bolt", "Gasgano", "Ben Quadinaros", "Mace Windu", "Ki-Adi-Mundi", "Kit Fisto", "Eeth Koth", "Adi Gallia", "Saesee Tiin", "Yarael Poof",
                    "Plo Koon", "Mas Amedda", "Gregar Typho", "Corde", "Cliegg Lars", "Poggle the Lesser", "Luminara Unduli", "Barriss Offee", "Dorme", "Dooku",
                    "Bail Prestor Organa", "Jango Fett", "Zam Wesell", "Dexter Jettster", "Lama Su", "Taun We", "Jocasta Nu", "R4-P17", "Wat Tambor", "San Hill",
                    "Shaak Ti", "Grievous", "Tarfful", "Raymus Antilles", "Sly Moore", "Tion Medon", "Finn", "Rey", "Poe Dameron", "BB8", "Captain Phasma",];
                words.innerHTML = "<div>Who lives on " + holder[0].name + "?</div>";
                ans.innerHTML = "<button>" + answers[people] + "</button>";
                ans2.innerHTML = "<button onclick='youRight()'>" + holder[1].name + "</button>";
                ans3.innerHTML = "<button>" + answers[people + 4] + "</button>";
                ans4.innerHTML = "<button>" + answers[people - 5] + "</button>";
                break;
            case 1:
                answers = ["Tatooine", "Alderaan", "Yavin IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo", "Coruscant", "Kamino", "Geonosis", "Utapau",
                    "Mustafar", "Kashyyyk", "Polis Massa", "Mygeeto", "Felucia", "Cato Neimoidia", "Saleucami", "Stewjon", "Eriadu", "Corellia",
                    "Rodia", "Nal Hutta", "Dantooine", "Bestine IV", "Ord Mantell", "unknown", "Trandosha", "Socorro", "Mon Cala", "Chandrila",
                    "Sullust", "Toydaria", "Malastare", "Dathomir", "Ryloth", "Aleen Minor", "Vulpter", "Troiken", "Tund", "Haruun Kal", "Cerea",
                    "Glee Anselm", "Iridonia", "Tholoth", "Iktotch", "Quermia", "Dorin", "Champala", "Mirial", "Serenno", "Concord Dawn", "Zolan",
                    "Ojom", "Skako", "Muunilinst", "Shili", "Kalee", "Umbara", "Jakku"];
                words.innerHTML = "<div>In which film is " + holder[0].name + " a setting?</div>";
                ans.innerHTML = "<button>" + answers[planets] + "</button>";
                ans2.innerHTML = "<button onclick='youRight()'>" + holder[2].name + "</button>";
                ans3.innerHTML = "<button>" + answers[planets + 4] + "</button>";
                ans4.innerHTML = "<button>" + answers[planets - 5] + "</button>";
                break;
        }
    }


    function findData(type, num) {
        url = 'https://swapi.co/api/' + type + '/' + num;
        step = 1;
        loadData(url);
    }

    function home() {
        var home = document.getElementById()
    }

    function loadData(url) {
        request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = loadComplete;
        request.send();
    }

    function loadComplete(evt) {
        data = JSON.parse(request.responseText);
        console.log(data);
        holder.push(data);
        if (step == 1) {
            loadData(data.residents[0]);
        }
        if (step == 2) {
            loadData(data.films[0]);
        }
        if (step == 3) {
            console.log(holder);
            loadingness();
        }
        step++;
    }

    function triviaHandler() {
        var text = this.responceText;
        console.log(JSON.parse(text));
    }
}
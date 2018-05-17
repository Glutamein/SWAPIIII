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
        var qNum = Math.floor((Math.random() * 88) + 1);
        findData("people", qNum);
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
        var species = Math.floor(Math.random() * 37);
        var planets = Math.floor(Math.random() * 61);
        console.log(species);
        switch (qType) {
            case 0:
                answers = ["Hoomen", "Droid", "Wookie", "Rodian", "Hutt", "Yoda's species"
                    , "Trandoshan", "Mon Calamari", "Ewok", "Sullustan", "Neimodian", "Gungan", "Toydarian", "Dug"
                    , "Twi'lek", "Aleena", "Vulptereen", "Xexto", "Toong", "Cerean", "Nautolan", "Zabrak", "Tholothian"
                    , "Iktotchi", "Quermian", "Kel Dor", "Chagrian", "Geonosian", "Mirialan", "Clawdite", "Besalisk", "Kaminoan"
                    , "Skakoan", "Muun", "Togruta", "Kaleesh", "Pau'an"];
                words.innerHTML = "<div>What species is " + holder[0].name + "?</div>";
                ans.innerHTML = "<button>" + answers[species] + "</button>";
                ans2.innerHTML = "<button onclick='youRight()'>" + holder[1].name + "</button>";
                ans3.innerHTML = "<button>" + answers[species + 4] + "</button>";
                ans4.innerHTML = "<button>" + answers[species - 5] + "</button>";
                break;
            case 1:
                answers = ["Tatooine", "Alderaan", "Yavin IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo", "Coruscant", "Kamino", "Geonosis", "Utapau",
                    "Mustafar", "Kashyyyk", "Polis Massa", "Mygeeto", "Felucia", "Cato Neimoidia", "Saleucami", "Stewjon", "Eriadu", "Corellia",
                    "Rodia", "Nal Hutta", "Dantooine", "Bestine IV", "Ord Mantell", "unknown", "Trandosha", "Socorro", "Mon Cala", "Chandrila",
                    "Sullust", "Toydaria", "Malastare", "Dathomir", "Ryloth", "Aleen Minor", "Vulpter", "Troiken", "Tund", "Haruun Kal", "Cerea",
                    "Glee Anselm", "Iridonia", "Tholoth", "Iktotch", "Quermia", "Dorin", "Champala", "Mirial", "Serenno", "Concord Dawn", "Zolan",
                    "Ojom", "Skako", "Muunilinst", "Shili", "Kalee", "Umbara", "Jakku"];
                words.innerHTML = "<div>Where is " + holder[0].name + " from?</div>";
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
        console.log(data.name);
        holder.push(data);
        if (step == 1) {
            loadData(data.species);
            // answers();
        }
        if (step == 2) {
            loadData(data.homeworld);
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
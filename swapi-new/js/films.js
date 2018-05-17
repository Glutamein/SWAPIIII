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
        var qNum = Math.floor((Math.random() * 7) + 1);
        findData("films", qNum);
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
        var episode = Math.floor(Math.random() * 7);
        var species = Math.floor(Math.random() * 37);
        // console.log(species);
        switch (qType) {
            case 0:
                answers = [1, 2, 3, 4, 5, 6, 7];
                words.innerHTML = "<div>What film number is " + holder[0].title + "?</div>";
                ans.innerHTML = "<button>" + answers[episode] + "</button>";
                ans2.innerHTML = "<button onclick='youRight()'>" + holder[0].episode_id + "</button>";
                ans3.innerHTML = "<button>" + answers[episode + 2] + "</button>";
                ans4.innerHTML = "<button>" + answers[episode - 1] + "</button>";
                break;
            case 1:
                answers = ["Hoomen", "Droid", "Wookie", "Rodian", "Hutt", "Yoda's species"
                    , "Trandoshan", "Mon Calamari", "Ewok", "Sullustan", "Neimodian", "Gungan", "Toydarian", "Dug"
                    , "Twi'lek", "Aleena", "Vulptereen", "Xexto", "Toong", "Cerean", "Nautolan", "Zabrak", "Tholothian"
                    , "Iktotchi", "Quermian", "Kel Dor", "Chagrian", "Geonosian", "Mirialan", "Clawdite", "Besalisk", "Kaminoan"
                    , "Skakoan", "Muun", "Togruta", "Kaleesh", "Pau'an"];
                words.innerHTML = "<div>What species is in " + holder[0].title + "?</div>";
                ans.innerHTML = "<button>" + answers[species] + "</button>";
                ans2.innerHTML = "<button onclick='youRight()'>" + holder[1].name + "</button>";
                ans3.innerHTML = "<button>" + answers[species + 4] + "</button>";
                ans4.innerHTML = "<button>" + answers[species - 5] + "</button>";
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
            loadData(data.species[0]);
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
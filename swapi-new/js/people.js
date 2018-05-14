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

    function youRight() {
        console.log("You Right!")
    }

    function loadingness() {
        var qType = Math.floor(Math.random());
        var words = document.getElementById("quest");
        var ans = document.getElementById("ans");
        var ans2 = document.getElementById("butt2");
        // var button = document.createElement("button");
        var ans3 = document.getElementById("ans3");
        var ans4 = document.getElementById("ans4");
        var species = Math.floor(Math.random() * 37);
        console.log(species);
        switch (qType) {
            case 0:
                answers = ["Hoomen", "Droid", "Wookie", "Rodian", "Hutt", "Yoda's species"
                    , "Trandoshan", "Mon Calamari", "Ewok", "Sullustan", "Neimodian", "Gungan", "Toydarian", "Dug"
                    , "Twi'lek", "Aleena", "Vulptereen", "Xexto", "Toong", "Cerean", "Nautolan", "Zabrak", "Tholothian"
                    , "Iktotchi", "Quermian", "Kel Dor", "Chagrian", "Geonosian", "Mirialan", "Clawdite", "Besalisk", "Kaminoan"
                    , "Skakoan", "Muun", "Togruta", "Kaleesh", "Pau'an"];
                words.innerHTML = "<div>What species is " + holder[0].name + "?</div>";
                break;
            case 1:
                words.innerHTML = "<div>Where is " + holder[0].name + " from?</div>";
                break;

        }
        ans.innerHTML = "<button>" + answers[species] + "</button>";
        ans3.innerHTML = "<button>" + answers[species + 4] + "</button>";
        ans4.innerHTML = "<button>" + answers[species - 5] + "</button>";
        // button.innerHTML = holder[1].name;
        // button.setAttribute("onClick", youRight());
        ans2.innerHTML = holder[1].name;
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
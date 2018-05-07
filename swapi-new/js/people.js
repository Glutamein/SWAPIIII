window.onload = function () {
    var data;
    var type;
    var id_num;
    var url;
    var step;
    var holder = [];
    var request;

    function question() {
        var qNum = Math.floor((Math.random() * 88) + 1);
        var qType = Math.floor(Math.random() * 5);
        findData(qNum);
        // switch (qType) {
        //     case 0:
        // var words = document.getElementById("quest");
        // words.innerHTML = "<div>What species is" + holder[1].name + "?</div>";
        // }

    }
    question();

    function loadingness() {
        var words = document.getElementById("quest");
        words.innerHTML = "<div>What species is " + holder[0].name + "?</div>";
    }

    function findData(num) {
        url = 'https://swapi.co/api/people/' + num;
        // step = 1;
        loadData(url);
    }

    function person() {

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
        loadingness();
        if (step == 1) {
            loadData(data.species);
        }
        if (step == 2) {
            loadData(data.homeworld);
        }
        if (step == 3) {
            console.log(holder);
        }
        step++;

    }

    function triviaHandler() {
        var text = this.responceText;
        console.log(JSON.parse(text));
    }
}
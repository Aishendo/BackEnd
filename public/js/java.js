function getOption() {
    selectElement = document.querySelector('#games');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;

}
function movie(){
    selectElement = document.querySelector('#movie');
    movie = selectElement.value;
    document.querySelector('.movie').textContent = movie;
}

function myFunction() {
    window.open("https://store.steampowered.com/search/?tags="+output+"%2C"+movie, "_top");
}

function showgame(){

    if (output==599&&movie==19) {
        window.open("exp","_top")
    }
    else if (output==599&&movie==1684) {
        window.open("exp","_top")
    }
    else if (output==599&&movie==5984) {
        window.open("exp.html","_top")
    }
    else if (output==599&&movie==21) {
        window.open("exp.html","_top")
    }
    else if (output==1774&&movie==19) {
        window.open("exp.html","_top")
    }
    else if (output==1774&&movie==1684) {
        window.open("exp.html","_top")
    }
    else if (output==1774&&movie==5984) {
        window.open("exp.html","_top")
    }
    else if (output==1774&&movie==21) {
        window.open("exp.html","_top")
    }
    else if (output==122&&movie==1684) {
        window.open("exp.html","_top")
    }
    else if (output==122&&movie==5984) {
        window.open("exp.html","_top")
    }
    else if (output==122&&movie==21) {
        window.open("exp.html","_top")
    }
    else if (output==122&&movie==19) {
        window.open("exp.html","_top")
    }
    else if (output==1667&&movie==1684) {
        window.open("exp.html","_top")
    }
    else if (output==1667&&movie==5984) {
        window.open("exp.html","_top")
    }
    else if (output==1667&&movie==21) {
        window.open("exp.html","_top")
    }
    else if (output==1667&&movie==19) {
        window.open("exp.html","_top")
    }
}
function image(){
    $(document).ready( function() {
        var url=$("#imagesss").val();
        console.log(url);
        var audioUrl = '"'+ url+  '"';
        console.log(audioUrl);
        $('#icon').attr('src', url);
    })
}

function close_window(){
    window.close();
}
$("#search123").click(function(){

    const string= $( "#search").val();
    const stringwithout=string.split(' ').join('+');
    window.open("https://store.steampowered.com/search/?term="+stringwithout,"_top");
});
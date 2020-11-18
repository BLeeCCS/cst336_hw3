$(document).ready (function(){
    $("#ID").on("change", async function () {
        var ID = $("#ID").val();
        var url = `https://rickandmortyapi.com/api/character/${ID}`;
        var response = await fetch(url);
        var data = await response.json();
        
        if (ID > 627 || ID < 1) {
            $("#error").text("ID input error!!!");
        } else {
            $("#error").text("");
            $("#image").css("background-image", `url("${data.image}")`);
            $("#name").text("Name: " + data.name);
            $("#gender").text("Gender: " + data.gender);
            $("#status").text("Status: " + data.status);
            $("#species").text("Species: " + data.species);
            $("#origin").text("Origin: " + data.origin.name);   
        }
    })
})
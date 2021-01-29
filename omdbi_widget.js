console.log("inside fucntions.js");
errorMessage = document.getElementById("errorMessage");
chatText = "chatTranscript.lines";
console.log(chatText);

var updateCallback = function(data){
    value = data.newValue;
    line = value[value.length -1];
    movieName = line.text;
    if (line.source.toLowerCase()==="visitor"){
        url = "https://www.omdbapi.com?t="+movieName+"&apikey=2fe69b04";
        fetch(url)
                .then(function(response){
                    
                    return response.json();
                }
                ).then(function(res){
                    document.getElementById("Title").innerHTML = res.Title;
                    document.getElementById("Year").innerHTML = res.Year;
                    document.getElementById("Rated").innerHTML = res.Rated;
                    document.getElementById("Actors").innerHTML = res.Actors;

                }).catch(function(error){
                    console.log("Error Message : "+error);
                })
    }
};

var notifyWhenDone = function(error) {
    if (err){
        console.log("inside notifyWhenDone function : "+err);
    }
    var chatText = "chatTranscript.lines";
    errorMessage.innerHTML = "Unable to return a movie";
};

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(chatText, updateCallback, notifyWhenDone);

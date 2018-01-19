
var url = "https://speech.platform.bing.com/speech/recognition/conversation/cognitiveservices/v1?language=pt-BR&format=simple"

var headers = {
    "Ocp-Apim-Subscription-Key":"dd32435150304cf0863b99cc3f16e702",
    "Content-type":"audio/wav; codec=audio/pcm; samplerate=16000",
    "Transfer-Encoding":"chunked"
}








var body = {

}
var pathAudio = "C:\Users\Hackstefanini\Downloads\rada.wav";
function loadAudio(path){

}

var init = {
    method: 'POST',
    headers: headers,
    body:  loadAudio(pathAudio)//somthing
}

//   C:\Users\Hackstefanini\Downloads\rada.wav
//--------------------------------------------------------------------------
//Authorization 

//https://api.cognitive.microsoft.com/sts/v1.0/issueToken

headers = {
    "Ocp-Apim-Subscription-Key":"56376473abaf4ae6a774bd87df21031a"
}

//----------------------------------------------



//var msg = new SpeechSynthesisUtterance('Hello World');
//window.speechSynthesis.speak(msg);
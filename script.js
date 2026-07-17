const audio = document.getElementById("audio");
const play = document.getElementById("play");
const volume = document.getElementById("volume");

const song = document.getElementById("song");
const artist = document.getElementById("artist");

const cover = document.getElementById("cover");

let playing = false;

play.onclick = () => {

if(!playing){

audio.play();

play.innerHTML='<i class="fa-solid fa-pause"></i>';

playing=true;

}else{

audio.pause();

play.innerHTML='<i class="fa-solid fa-play"></i>';

playing=false;

}

};

volume.oninput=()=>{

audio.volume=volume.value;

};

setInterval(()=>{

if(typeof sonic_data!=="undefined"){

if(sonic_data.songtitle){

song.innerHTML=sonic_data.songtitle;

}

if(sonic_data.artist){

artist.innerHTML=sonic_data.artist;

}

}

},1000);

function actualizarHistorial(){

if(typeof sonic_data==="undefined") return;

if(!sonic_data.history) return;

const h=sonic_data.history;

for(let i=0;i<5;i++){

const caja=document.getElementById("history"+(i+1));

if(caja && h[i]){

caja.innerHTML="🎵 "+h[i];

}

}

}

setInterval(actualizarHistorial,2000);

function portada(){

if(typeof sonic_data==="undefined") return;

let artista=artist.innerHTML;

let tema=song.innerHTML;

if(artista==""||tema=="") return;

cover.src="https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=YOUR_API_KEY&artist="+encodeURIComponent(artista)+"&track="+encodeURIComponent(tema);

}

setInterval(portada,5000);

audio.addEventListener("play",()=>{

document.querySelector(".equalizer").style.opacity=1;

});

audio.addEventListener("pause",()=>{

document.querySelector(".equalizer").style.opacity=.3;

});

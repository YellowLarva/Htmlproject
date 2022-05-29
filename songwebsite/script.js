console.log("Welcome Navneet");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');

let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Harrdy Sandhu - Kya Baat Ay ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tamma Tamma Again ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    {songName: "Dhat Teri Ki", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"  },
    {songName: "High Rated Gabru", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    {songName: "Ek Kahani ", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dard E Disco", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    {songName: "Badri Ki Dulhania ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Dance Like", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "ISHQ MUBARAK", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"  },
    {songName: "Abhi Toh Party Shuru Hui Hai", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"  },
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Listen to Event for seekbar
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
    // console.log(progress);
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// container play/ pause button
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        makeAllPlays();
    }
})


//Handle next play button
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})


//Handle Previous play button
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})


// // Function to getDecimalPoint
// function getDecimalPart(num) {
//     if (Number.isInteger(num)) {
//       return 0;
//     }
  
//     const decimalStr = num.toString().split('.')[1];
//     return Number(decimalStr);
// }

// var au = document.createElement('audio');

// function getsongduration(num){
//     au.src = `songs/${num}.mp3`;
//     // var hum = 0;
//     au.addEventListener('loadedmetadata', function(){
//         var totaltime = au.duration;
//         var totaldeci = totaltime/60;
//         var min = Math.trunc(totaldeci);
//         var decse = getDecimalPart(totaldeci.toFixed(2));
//         var ms = min.toString();
//         var ss = decse.toString();        
//         hum = ms+":"+ss;
//         // var output = document.getElementsByClassName(`${num}`);
//         document.getElementsByClassName("c1").innerHTML = hum;
//         console.log(hum);
//     },false);
// }

// function getsongdone(){
//     // for ( let i =0; i < songs.length; i++){
//         // getsongduration(i+1);
//         getsongduration(6);
//     // }
// }

// // window.onload = getsongdone()
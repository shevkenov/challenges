const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

const playList = [
    {
        id: 1,
        name: 'Eagle Fly Free',
        path: './play-list/Helloween - Eagle Fly Free.mp3'
    },
    {
        id: 2,
        name: 'How many tears',
        path: './play-list/Helloween - How many tears.mp3'
    },
    {
        id: 3,
        name: 'March of Time',
        path: './play-list/Helloween - March of Time.mp3'
    }
]

//audio.src = playList[1].src;
//console.log(audio);

let songPlaying = false;

function playSong() {
    songPlaying = true;
    audio.play();
    play.classList.add('active');
    play.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
}

function pauseSong() {
    songPlaying = false;
    audio.pause();
    play.classList.remove('active');
    play.innerHTML = ' <ion-icon name="play-outline"></ion-icon>'
}

play.addEventListener('click', () => {
    if(songPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

prev.addEventListener('click', () => {
    i--;
    if(i < 0){
        i = playList.length-1;    
    }
    loadSong(playList[i]);

    playSong();
})

next.addEventListener('click', () => {
    i++;
    if(i > playList.length-1){
        i = 0;
    }
    loadSong(playList[i])

    playSong();
})

function loadSong(song) {
    title.textContent = song.name;
    audio.src = song.path;
}

let i = 0;
loadSong(playList[i]);
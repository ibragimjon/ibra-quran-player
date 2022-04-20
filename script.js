const container = document.querySelector('.container')
const cover = document.getElementById('cover')
const title = document.getElementById('title')
const start = document.getElementById('start')
const end = document.getElementById('end')
const progressContainer = document.getElementById('progress-container')
const progresss = document.getElementById('progress')
const audio = document.getElementById('audio')


const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

// music names

const songs = [
    'Surah Abasa',
    'Surah Al-Fatihah',
    'Surah Al-Infitar',
    'Surah At-Takwir'
]

let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song){
    title.textContent = song
    audio.src = `surahs/${song}.mp3`
    cover.src = `images/${song}.jpg`
}


function playSong(){
    container.classList.add('play')
    playBtn.innerHTML = `<i class="fas fa-pause"> </i>`
    audio.play()
}



function pauseSong(){
    container.classList.remove('play')
    playBtn.innerHTML = `<i class="fas fa-play"> </i>`
    audio.pause()
}


function nextMusic() {
    songIndex++
    if(songIndex > songs.length - 1){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    audio.play()
}

// setProgress

function progress(e){
    const duration = e.srcElement.duration
    const curTime = e.srcElement.currentTime
    const presentageWidht = (curTime / duration) * 100
    progresss.style.width = `${presentageWidht}%`
}


function prevMusic() {
    songIndex--
    if(songIndex > 0 ){
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    audio.play()
}

function setProgress (e){
    const width = this.clientWidth
    const widthX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (widthX / width) * duration
}


playBtn.addEventListener('click', function() {
    const isPlaying = container.classList.contains('play')

    if(isPlaying){
        pauseSong()
    } else {
        playSong()
    }
})

nextBtn.addEventListener('click', nextMusic)
prevBtn.addEventListener('click', prevMusic)

audio.addEventListener('timeupdate', progress)
progressContainer.addEventListener('click', setProgress)
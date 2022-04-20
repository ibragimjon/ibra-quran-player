const container = document.querySelector('.container')
const cover = document.getElementById('cover')
const title = document.getElementById('title')
const start = document.getElementById('start')
const end = document.getElementById('end')
const progressContainer = document.getElementById('progress-container')
const progresss = document.getElementById('progress')
const audio = document.getElementById('audio')
const volume = document.getElementById('volume')

const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

audio.valume = 1
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


    // end

    let endMinutes = Math.floor(duration / 60)
    let endSeconds =  Math.floor(duration % 60)

    end.textContent = `${endMinutes}:${(endSeconds = endSeconds < 10 ? '0'+endSeconds : endSeconds)}`

    // start

    let startMinutes = Math.floor(curTime / 60)
    let startSeconds =  Math.floor(curTime % 60)

    start.textContent = `${startMinutes = startMinutes  < 10 ? '0' + startMinutes :startMinutes }:${(startSeconds = startSeconds < 10 ? '0'+startSeconds : endSeconds)}`
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

function changeVolume() {
    const valumeMusic =  +volume.value / + volume.max
    audio.valumeMusic
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
audio.addEventListener('ended', nextMusic)
audio.addEventListener('timeupdate', progress)
volume.addEventListener('input', changeVolume)
progressContainer.addEventListener('click', setProgress)

import player from './index.js';

export default {
    get() {
        this.cover = document.querySelector('#cover');
        this.playPause = document.querySelector('#play');
        this.after = document.querySelector('#next');
        this.before = document.querySelector('#before');
        this.artist = document.querySelector('#artist');
        this.title = document.querySelector('#title');

    },
    createAudio(audio) {
        this.audio = new Audio(audio);
    },
    content() {
        this.currentAudio = this.audioData[this.index];
        this.cover.style.background = `url(${this.currentAudio.cover}) no-repeat center center / cover`;
        this.artist.innerText = this.currentAudio.artist;
        this.title.innerText = this.currentAudio.title;
    }
}
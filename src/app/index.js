import { path } from "./utils/path.js"
import data from './data/index.js';
import playerElements from './playerElements.js';

const player = {
    index: 0,
    audioData: data,

    start() {
        playerElements.get.call(this);
        playerElements.content.call(this);
        playerElements.createAudio.call(this, path(this.currentAudio.file));
        this.audio.play()

        this.after.onclick = () => this.next();
        this.before.onclick = () => this.back();
        this.playPause.onclick = () => this.togglePlayPause();
        this.audio.onended = () => this.next();

    },

    back() {
        this.audio.pause();
        this.index--;
        if (this.index < 0) {
            this.index = this.audioData.length - 1;
        }
        this.audio.pause();
        this.playPause.setAttribute('class', 'fa fa-pause fa-2x');
        this.start();
    },

    next() {
        this.index++;
        if (this.index == this.audioData.length) {
            this.index = 0;
        };
        this.audio.pause();
        this.playPause.setAttribute('class', 'fa fa-pause fa-2x');
        this.start();
    },

    play() {
        this.audio.play();
        this.isPlaying = true;
    },

    pause() {
        this.audio.pause();
        this.isPlaying = false;
    },

    togglePlayPause() {
        if (this.isPlaying) {
            this.playPause.setAttribute('class', 'fa fa-play fa-2x');
            this.pause();
        } else {
            this.playPause.setAttribute('class', 'fa fa-pause fa-2x');
            this.play();
        }
    }

}


window.onload = () => player.start();

export default player;
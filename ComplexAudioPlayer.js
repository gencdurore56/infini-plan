/**
 * Filename: ComplexAudioPlayer.js
 * Content: A complex audio player with advanced features and interactive user interface.
 * Author: John Doe
 * Date: 2022-10-01
 */

// Constants
const AUDIO_FILES = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3"
];

// Classes
class AudioPlayer {
  constructor() {
    this.currentSong = 0;
    this.isPlaying = false;
  }

  play() {
    this.isPlaying = true;
    console.log("Playing: " + AUDIO_FILES[this.currentSong]);
  }

  pause() {
    this.isPlaying = false;
    console.log("Paused: " + AUDIO_FILES[this.currentSong]);
  }

  next() {
    this.currentSong = (this.currentSong + 1) % AUDIO_FILES.length;
    console.log("Next Song: " + AUDIO_FILES[this.currentSong]);
  }

  previous() {
    this.currentSong = (this.currentSong - 1 + AUDIO_FILES.length) % AUDIO_FILES.length;
    console.log("Previous Song: " + AUDIO_FILES[this.currentSong]);
  }

  shuffle() {
    const shuffledSongs = AUDIO_FILES.slice();
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
    }
    console.log("Shuffled Songs: " + shuffledSongs.join(", "));
  }
}

class AudioPlayerUI {
  constructor(player) {
    this.player = player;
    this.playButton = document.getElementById("play-button");
    this.pauseButton = document.getElementById("pause-button");
    this.nextButton = document.getElementById("next-button");
    this.previousButton = document.getElementById("previous-button");
    this.shuffleButton = document.getElementById("shuffle-button");

    this.playButton.addEventListener("click", () => this.player.play());
    this.pauseButton.addEventListener("click", () => this.player.pause());
    this.nextButton.addEventListener("click", () => this.player.next());
    this.previousButton.addEventListener("click", () => this.player.previous());
    this.shuffleButton.addEventListener("click", () => this.player.shuffle());
  }
}

// Usage
const player = new AudioPlayer();
const ui = new AudioPlayerUI(player);
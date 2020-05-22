export default class API {

  constructor(artist, song) {
    this.artist = artist;
    this.song = song;
  }

  async getLyrics() {
    const results = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);
    const response = await results.json();
    return response;
  }

}
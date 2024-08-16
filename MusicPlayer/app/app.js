document.addEventListener("DOMContentLoaded", () => {
    fetch('./music_list.json')
        .then(response => response.json())
        .then(data => {
            const musicfiles = data.musicfiles;
            let currentSongIndex = 0;

            const audio = new Audio();
            const cover = document.getElementById("cover");
            const songName = document.getElementById("song_name");
            const artist = document.getElementById("artist");
            const playBtn = document.getElementById('play_btn');
            const pauseBtn = document.getElementById('pause_btn');
            const nextBtn = document.getElementById('next_btn');
            const prevBtn = document.getElementById('previous_btn');
            const minutesPassed = document.querySelector('.minutes_passed');
            const totalMinutes = document.querySelector('.total_minutes')
            const bar = document.querySelector('.bar');

            function loadingSong(index) {
                const song = musicfiles[index];
                audio.src = song.song;
                cover.src = song.cover;
                songName.textContent = song.name;
                artist.textContent = song.artist;
            }

            // resetting time display
            minutesPassed.textContent = "--:--";
            totalMinutes.textContent = "--:--";
            bar.style.width = "0%";

            // update time when metadata is loaded
            audio.addEventListener("loadedmetadata", () => {
                totalMinutes.textContent = formatTime(audio.duration);
            })

            function playSong () {
                audio.play();
                playBtn.src = "./assets/img/pause-fill.svg";
            }

            function pauseSong () {
                audio.pause();
                playBtn.src = "./assets/img/Play_fill.svg";
            }

            // updating progress
            function updateProgress () {
                const currentTime = audio.currentTime;
                const duration = audio.duration;

                //updating time display
                minutesPassed.textContent = formatTime(currentTime);

                // progress bar
                if (duration > 0) {
                    const progress =  (currentTime/duration) *100;
                    bar.style.width = `${progress}%`;
                }

            }

            // progress time
            function formatTime(time) {
                const minutes = Math.floor(time/60);
                const seconds = Math.floor(time % 60);

                return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }


            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    playSong()
                } else {
                    pauseSong();
                }
            })

            prevBtn.addEventListener ('click', () => {
                currentSongIndex = (currentSongIndex === 0) ? musicfiles.length-1 : currentSongIndex -1;
                loadingSong(currentSongIndex);
                playSong();
            })

            nextBtn.addEventListener ('click', () => {
                currentSongIndex = (currentSongIndex === musicfiles.length-1) ? 0 : currentSongIndex + 1;
                loadingSong(currentSongIndex);
                playSong();
            })

            audio.addEventListener('timeupdate', updateProgress);

            audio.addEventListener('ended', () => {
                nextBtn.click();
            })


            loadingSong(currentSongIndex);

           
        })



        .catch(error => console.error("Error loading music files: ", error));
        
})


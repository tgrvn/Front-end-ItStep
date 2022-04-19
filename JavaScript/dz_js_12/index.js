document.addEventListener('DOMContentLoaded', function (event) {
  const tracks = [
    './audio/audio-1.m4a',
    './audio/audio-2.m4a',
    './audio/audio-3.m4a',
    './audio/audio-4.m4a',
    './audio/audio-5.m4a',
    './audio/audio-6.m4a',
    './audio/audio-7.m4a',
    './audio/audio-8.m4a',
    './audio/audio-9.m4a',
    './audio/audio-10.m4a',
  ];

  const images = [
    './img/img-1.jpg',
    './img/img-2.jpg',
    './img/img-3.jpg',
    './img/img-4.jpg',
    './img/img-5.jpg',
    './img/img-6.jpg',
    './img/img-7.jpg',
    './img/img-8.jpg',
    './img/img-9.jpg',
    './img/img-10.jpg',
  ];

  const allSongs = document.querySelector('.songs');
  const audio = document.createElement('audio');
  const source = document.createElement('source');
  source.setAttribute('src', `./audio/audio-1.m4a`);
  audio.append(source);
  document.body.append(audio);
  const tracksChoose = document.querySelectorAll('.songs > div');
  const audioImg = document.querySelector('.audio > img');
  const allAudioName = document.querySelectorAll('.songs > div > p');
  const audioName = document.querySelector('.audio-name');
  audioName.textContent = 'Naruto Shippuden - Samidare (ksolis Trap Remix)';
  const durationLine = document.querySelector('.range > [type="range"]');

  allSongs.addEventListener('click', (event) =>
    handlerChooseTrack(
      event,
      tracksChoose,
      tracks,
      audio,
      source,
      play,
      audioImg,
      audioName,
      allAudioName,
      durationLine
    )
  );

  const buttons = document.querySelectorAll('.btns > div');
  const btns = document.querySelector('.btns');
  const play = buttons[1];
  const prev = buttons[0];
  const next = buttons[2];

  btns.addEventListener('click', (event) =>
    handlerPreviousNext(event, prev, next, audio, tracks, source, images, audioImg)
  );

  play.addEventListener('click', (event) =>
    handlerPlayPause(event, play, audio, durationLine)
  );

  const volume = document.querySelector('.volume > [type="range"]');

  volume.addEventListener('input', (event) =>
    handlerChangeVolume(event, audio)
  );

  const mute = document.querySelector('.volume > img');

  mute.addEventListener('click', (event) =>
    handlerMute(event, audio, volume, mute)
  );

  durationLine.style.width = '1150px';
  const printCurTime = document.querySelector('.current-time');

  audio.addEventListener('timeupdate', (event) =>
    handlerDuration(event, durationLine, audio, printCurTime)
  );
});

function handlerChooseTrack(
  { target },
  tracksChoose,
  tracks,
  audio,
  source,
  play,
  audioImg,
  audioName,
  allAudioName,
  durationLine
) {
  tracksChoose.forEach((song, sIndex) => {
    if (song === target) {
      tracks.forEach((track, tIndex) => {
        if (tIndex === sIndex) {
          audio.pause();
          source.setAttribute('src', `./audio/audio-${tIndex + 1}.m4a`);
          audio.load();
          audioImg.removeAttribute('src');
          audioImg.setAttribute('src', `./img/img-${tIndex + 1}.jpg`);
          audioName.textContent = `${allAudioName[tIndex].textContent}`;
          audio.play();
          play.classList.remove('play');
          play.classList.add('pause');
        }
      });
    }
  });
}

let playCount = 0;
function handlerPlayPause(event, play, audio, durationLine) {
  if (playCount === 0) {
    playCount++;
    audio.play();
    play.classList.remove('play');
    play.classList.add('pause');
    durationLine.setAttribute('max', `${audio.duration}`);
  } else if (playCount > 0) {
    audio.pause();
    playCount = 0;
    play.classList.remove('pause');
    play.classList.add('play');
  }
}

function handlerChangeVolume({ target: { value } }, audio) {
  audio.volume = value / 100;
}

let volumeCount = 0;
function handlerMute(event, audio, volume, mute) {
  if (volumeCount === 0) {
    volumeCount++;
    audio.volume = 0;
    volume.value = 0;
    mute.removeAttribute('src');
    mute.setAttribute('src', './img/mute.svg');
  } else if (volumeCount > 0) {
    audio.volume = 0.5;
    volume.value = 50;
    volumeCount = 0;
    mute.removeAttribute('src');
    mute.setAttribute('src', './img/unmute.svg');
  }
}

function handlerDuration(event, durationLine, audio, printCurTime) {
  durationLine.setAttribute('max', `${audio.duration}`);
  let min = Math.floor((audio.currentTime / 60) % 60);
  let sec = Math.floor(audio.currentTime % 60);
  durationLine.value = 0;
  durationLine.value = audio.currentTime;

  printCurTime.textContent = `${min < 10 ? '0' + min : min}:${
    sec < 10 ? '0' + sec : sec
  }`;

  durationLine.addEventListener('change', handlerSkip);

  function handlerSkip(event) {
    audio.currentTime = durationLine.value;
  }
}

let prevCount = 0;

function handlerPreviousNext({ target }, prev, next, audio, tracks, source, images, audioImg) {
  if (prevCount <= 0) {
    prevCount = 1;
  } else if (prevCount >= 9) {
    prevCount = 1;
  } else if (prevCount === 0) {
    prevCount = 1;
  }

  if (target === prev && prevCount >= 0) {
    audio.pause();
    prevCount--;
    console.log(prevCount);
    source.removeAttribute('src');
    source.setAttribute('src', `${tracks[prevCount]}`);
    audioImg.removeAttribute('src');
    audioImg.setAttribute('src', `${images[prevCount]}`);
    console.log(audioImg);
    audio.load();
    audio.play();
    console.log(source);
  } else if (target === next && prevCount >= 0) {
    audio.pause();
    prevCount++;
    console.log(prevCount);
    source.removeAttribute('src');
    source.setAttribute('src', `${tracks[prevCount]}`);
    audioImg.removeAttribute('src');
    audioImg.setAttribute('src', `${images[prevCount]}`);
    console.log(audioImg);
    audio.load();
    audio.play();
    console.log(source);
  }
}

export const audioWrapper = (function () {
  let audio: HTMLAudioElement = null;
  let path: string = '';

  const init = (audioFilePath: string) => {
    path = audioFilePath;
  };

  const isPaused = () => {
    if (!!audio) {
      return audio.paused;
    }

    return true;
  };

  const play = () => {
    tryInstantiate();
    audio.currentTime = 0;
    audio.play();
  };

  const stop = () => {
    tryInstantiate();
    audio.pause();
  };

  const tryInstantiate = () => {
    if (!audio) {
      audio = new Audio(path);
      audio.loop = true;
    }
  };

  return (audioFilePath: string) => {
    init(audioFilePath);
    return { isPaused, play, stop };
  };
}());

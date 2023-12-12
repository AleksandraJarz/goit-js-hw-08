import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//inicjalizacja odtwarzacza vimeo
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//funkcja zapisująca aktualny czas odtwarzania
function getCurrentTime(data) {
  const currentTime = data;
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}
//śledzenie zdarzenia timeupdate - aktualizacji czasu odtwarzania
player.on('timeupdate', throttle(getCurrentTime, 1000));

//wznaweianie odtwarzania od ostatnio zapisanego momentu
window.addEventListener('DOMContentLoaded', () => {
  try {
    const savedTime = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    ).seconds;
    console.log(savedTime);
    player.setCurrentTime(savedTime);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
});

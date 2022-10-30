// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selector = document.getElementById('horn-select');
  selector.addEventListener('change', function() {
    let option = selector.value;
    //alert(option);
    if (option == 'air-horn') {
      document.querySelector('img').src = 'assets/images/air-horn.svg';
      document.querySelector('audio').src = 'assets/audio/air-horn.mp3';
    } else if (option == 'party-horn') {
      document.querySelector('img').src = 'assets/images/party-horn.svg';
      document.querySelector('audio').src = 'assets/audio/party-horn.mp3';
    } else if (option == 'car-horn') {
      document.querySelector('img').src = 'assets/images/car-horn.svg';
      document.querySelector('audio').src = 'assets/audio/car-horn.mp3';
    }
  })

  const volume_slider = document.getElementById('volume');

  const sound = document.querySelector('button');
  sound.addEventListener('click', function() {
    let option = selector.value;
    let music = null;
    if (option == 'air-horn') {
      music = new Audio('assets/audio/air-horn.mp3');
    } else if (option == 'party-horn') {
      music = new Audio('assets/audio/party-horn.mp3');
    } else if (option == 'car-horn') {
      music = new Audio('assets/audio/car-horn.mp3');
    }
    // const volume_controls = document.getElementsByClassName("img")[1];
    // volume_controls.addEventListener('input', function() {
    //   alert(volume_controls.src);
    // })
    let volval = volume_slider.value;
    if (volval == 0) {

    }
    music.volume = volval/100;

    music.play();
  }) 



  // const sound = document.querySelector('button');
  // sound.addEventListener('click', function() {
  //   let option = selector.value;
  //   alert(option)
  // })

}
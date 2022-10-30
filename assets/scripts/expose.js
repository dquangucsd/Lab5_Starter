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

    const sound = document.querySelector('button');
    sound.addEventListener('click', function() {
      let option = selector.value;
      if (option == 'air-horn') {
        new Audio('assets/audio/air-horn.mp3').play();
      } else if (option == 'party-horn') {
        new Audio('assets/audio/party-horn.mp3').play();
      } else if (option == 'car-horn') {
        new Audio('assets/audio/car-horn.mp3').play();
      }
    })
  }) 


  // const sound = document.querySelector('button');
  // sound.addEventListener('click', function() {
  //   let option = selector.value;
  //   alert(option)
  // })

}
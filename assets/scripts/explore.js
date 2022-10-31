// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;

  //const inputForm = document.querySelector('form');
  const talkButton = document.querySelector('button');
  const inputTxt = document.getElementById('text-to-speak');
  const voiceSelect = document.querySelector('select');
  // const pitch = document.querySelector('#pitch');
  // const pitchValue = document.querySelector('.pitch-value');
  // const rate = document.querySelector('#rate');
  // const rateValue = document.querySelector('.rate-value');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  //inputForm.onsubmit = (event) => {
  talkButton.addEventListener('click', function() {
    event.preventDefault();

    //alert(inputTxt.value);


    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    //utterThis.rate = rate.value;
    synth.speak(utterThis);

  })

};



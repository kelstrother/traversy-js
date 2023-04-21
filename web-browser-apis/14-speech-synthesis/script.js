const synth = window.speechSynthesis;
const voiceSelect = document.getElementById("voice-select");
let voices;
function addVoicesToSelect() {
   voices = synth.getVoices();
  for (voice in voices) {
    const option = document.createElement("option");
    option.textContent = `${voices[voice].name}`;

    if (voices[voice].default) {
      option.textContent += " -DEFAULT";
    }
    option.setAttribute("data-lang", voices[voice].lang);
    option.setAttribute("data-name", voices[voice].name);
    voiceSelect.appendChild(option);
  }
}
function onSubmit(e) {
  e.preventDefault();
  
  const textInput = document.getElementById("text-input");
  // console.log(textInput.value);
  const utterThis = new SpeechSynthesisUtterance(textInput.value);

  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (voice in voices) {
    if (voices[voice].name === selectedOption) {
      utterThis.voice = voices[voice];
    }
  }

  synth.speak(utterThis);
}

addVoicesToSelect();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = addVoicesToSelect;
}

document.getElementById("form").addEventListener("submit", onSubmit);

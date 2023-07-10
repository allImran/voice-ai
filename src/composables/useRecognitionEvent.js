export const useRecognitionEvent = (recognition,controls) => {

    const  {
        bg,
        diagnostic,
        speech,
        isListening,
        conversations,
        startListening
    } = controls

    recognition.onaudiostart = () => isListening.value = true

    recognition.onaudioend = () => isListening.value = false

    recognition.onresult = (event) => {
        console.log(event.results)
        const color = event.results[0][0].transcript;
        diagnostic.textContent = `Result received: ${color}.`;
        bg.style.backgroundColor = color;
        console.log(`Confidence: ${event.results[0][0].confidence}`);
    };

    recognition.onnomatch = (event) => {
        diagnostic.textContent = "I didn't recognize that color.";
    };

    recognition.onerror = (event) => {
        diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
    };
}
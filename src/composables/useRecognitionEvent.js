export const useRecognitionEvent = (recognition, controls) => {

    const {
        diagnostic,
        speech,
        isListening,
        conversations,
        startListening
    } = controls

    recognition.onaudiostart = () => isListening.value = true

    recognition.onaudioend = () => isListening.value = false

    recognition.onresult = (event) => handleResults(event.results)

    const handleResults = (results) => {
        const text = Array.from(results)
            .map(item => item[0])
            .map(item => item.transcript)
            .join(' ')
        speech.value = text || ''
    }

    recognition.onnomatch = (event) => {
        diagnostic.textContent = "I didn't recognize that color.";
    };

    recognition.onerror = (event) => {
        diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
    };
}
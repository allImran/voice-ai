export const useRecognitionEvent = (recognition, controls) => {

    const {
        diagnostic,
        speech,
        isListening,
        conversations,
        startListening,
        isFinished
    } = controls

    recognition.onaudiostart = () => isListening.value = true

    recognition.onaudioend = () => {
        isListening.value = false
    }

    recognition.onresult = (event) => handleResults(event.results)

    const handleResults = (results) => {
        const text = Array.from(results)
            .map(item => item[0])
            .map(item => item.transcript)
            .join(' ')
        speech.value += text || ''

        checkInstructions(speech.value)
    }

    const checkInstructions = (text) => {
        if (text.toLowerCase().includes('hello alpha')) {
            isFinished.value = false
            speech.value = ''
            recognition.stop()
            
            conversations.value.push({
                type: 'user',
                text
            })

            conversations.value.push({
                type: 'assistant',
                text: 'How can I help you?'
            })

            setTimeout(() => {
                startListening()
            }, 900);
        }
    }

    recognition.onnomatch = (event) => {
        diagnostic.textContent = "I didn't recognize that color.";
    };

    recognition.onerror = (event) => {
        diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
    };
}
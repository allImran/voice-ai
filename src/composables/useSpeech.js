import { ref, onMounted } from 'vue'
import useGrammar from './useGrammar'
import useRecognition from './useRecognition'
import { useRecognitionEvent } from './useRecognitionEvent'

export const useSpeech = () => {
    const isListening = ref(false)
    const speech = ref('')
    const conversations = ref('')

    const { speechRecognitionList } = useGrammar()
    const { recognition } = useRecognition()
    recognition.grammars = speechRecognitionList;

    const startListening = () => {
        recognition.start();
    }
    const stopListening = (clear=false) => {
        isListening.value = false
        if(clear) {
            speech.value = ''
        }
    }

    onMounted(() => {
        const diagnostic = document.querySelector(".output");
        const bg = document.querySelector(".body");
        const hints = document.querySelector(".hints");

        hints.innerHTML = `Tap or click then say a color to change the background color of the app`;

        useRecognitionEvent(recognition, {
            bg,
            diagnostic,
            isListening,
            speech,
            conversations,
            startListening
        })

        document.body.onclick = () => {
            startListening();
        };
    })

    return {
        isListening
    }
}
import { ref, onMounted } from 'vue'
import useRecognition from './useRecognition'
import useGrammar from './useGrammar'
import { useRecognitionEvent } from './useRecognitionEvent'

export const useSpeech = () => {
    const isListening = ref(false)
    const speech = ref('')
    const conversations = ref('')
    const inputArea = ref(null)

    const getInputArea = (dom) => inputArea.value = dom
    const { speechRecognitionList } = useGrammar()
    const { recognition } = useRecognition()
    recognition.grammars = speechRecognitionList

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

        useRecognitionEvent(recognition, {
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
        isListening,
        getInputArea,
        speech
    }
}
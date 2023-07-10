const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

const colors = [
    "abdul",
    "nitai",
    "amar",
    "nama",
    "black",
    "blue",
    "brown",
    "chocolate",
    "coral" /* … */,
];

export default function useGrammar() {
    const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
        " | "
    )};`;

    const speechRecognitionList = new SpeechGrammarList();

    speechRecognitionList.addFromString(grammar, 1);

    return {
        speechRecognitionList
    }
}
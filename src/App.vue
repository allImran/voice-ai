<script setup>
import { useSpeech } from '@/composables/useSpeech.js'

import RecordingSection from './components/RecordingSection.vue';
import InputArea from './components/InputArea.vue';
import ConversationArea from './components/ConversationArea.vue';

const {
  isListening,
  speech,
  getInputArea,
  conversations
} = useSpeech()
</script>

<template>
 <div style="height: 100vh;" class="body">
  <RecordingSection :isListening="isListening" />
  <h1>Speech color changer</h1>
  <p>Tap/click then say a color to change the background color of the app.</p>
  <InputArea :text="speech" :ref="getInputArea"/>
  <ConversationArea :conversations="conversations"/>
  <div>
    <p class="output"><em>…diagnostic messages</em></p>
  </div>
 </div>
</template>
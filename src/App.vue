<script setup>
import { useSpeech } from '@/composables/useSpeech.js'

import RecordingSection from './components/RecordingSection.vue';

const {
  isListening
} = useSpeech()
</script>

<template>
 <div style="height: 100vh; background-color: gray;" class="body">
  <RecordingSection :isListening="isListening" />
  <h1>Speech color changer</h1>
  <p>Tap/click then say a color to change the background color of the app.</p>
  <div class="hints"></div>
  <div>
    <p class="output"><em>…diagnostic messages</em></p>
  </div>
 </div>
</template>
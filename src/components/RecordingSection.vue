<script setup>
import IconMicrophone from '@/components/icons/IconMicrophone.vue'

const props = defineProps({
    isListening: Boolean
})
</script>

<template>
    <div class="recording">
        <IconMicrophone
            :style="{color: isListening? 'green' : 'black'}"
            class="mike"
        />
    </div>
</template>

<style scoped>
.recording{
    display: flex;
    justify-content: center;
    align-items: center;
}

.mike{
    height: 100px;
}
</style>

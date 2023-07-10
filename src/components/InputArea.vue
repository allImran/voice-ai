<script setup>
defineProps({
    text: String
})
</script>

<template>
    <div class="input-area">
        {{ text }}
    </div>
</template>

<style scoped>
.input-area{
    background-color: gray;
    padding: 10px;
}
</style>

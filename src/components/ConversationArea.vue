<script setup>
    defineProps({
        conversations: Array
    })
</script>

<template>
<div class="conversations-area">
    <div
        v-for="(item, i) in conversations"
        :key="i" class="conversations"
        :style="{
            backgroundColor: item.type == 'user' ? '' : '#f5f5f5'
        }"
    >
        {{  item.text }}
    </div>
</div>
</template>

<style scoped>
.conversations-area{
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 5px;
}

.conversations{
    padding: 5px;
    border-radius: 5px;
}
</style>
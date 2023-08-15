<template>
    <select v-bind:value="modelValue" @change="changeOption($event.target.value)">
        <option selected disabled value="">Выберите из списка</option>
        <option v-for="option in options" :key="option.value" :value="option.title">
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeOption(option) {
            this.$emit('update:modelValue', option) // Emit 'update:modelValue' event
        },
    },
}
</script>

<style></style>

<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>

<style lang="scss">
.input {
    box-shadow: none;
    outline: none;
    border-radius: 4px;
    padding: 11px 0;
    margin: 0 25px 0 5px;
    caret-color: #38ac5a;
    &::placeholder {
        opacity: 0.5;
    }
}
</style>

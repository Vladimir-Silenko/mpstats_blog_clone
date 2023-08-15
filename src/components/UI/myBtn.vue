<template>
    <button class="my_btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-btn',
}
</script>

<style>
.my_btn {
    outline: none;
    border-radius: 4px;
    border: none;
    margin: 5px;
    padding: 12px;
    background: #38ac5a;
    cursor: pointer;
    color: #fff;
}
</style>

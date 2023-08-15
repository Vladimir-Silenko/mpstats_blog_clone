<template>
    <div class="modal" v-if="show" @click="closeModal">
        <div @click.stop class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: { type: Boolean, default: false },
    },
    methods: {
        closeModal() {
            this.$emit('update:show', false)
        },
    },
}
</script>

<style>
.modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal__content {
    margin: 0;
    height: 300px;
    width: 250px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

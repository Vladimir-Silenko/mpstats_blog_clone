<template>
    <div>
        <form @submit.prevent>
            <h3 style="text-align: center">добавить пост</h3>
            <my-input v-model="post.title" class="input" placeholder="название поста" type="text" />
            <my-input v-model="post.body" class="input" placeholder="описание" type="text" />
            <my-btn @click="createPost" class="add_btn">Добавить пост</my-btn>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                body: '',
                title: '',
            },
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.$emit('close')
            this.post = {
                title: '',
                body: '',
            }
        },
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>

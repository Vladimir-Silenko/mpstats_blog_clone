<template>
    <div class="container" v-if="posts.length > 0">
        <transition-group name="post-list">
            <post-item
                class="post"
                v-for="post in posts"
                :key="post.id"
                :post="post"
                @remove="$emit('remove', post)" />
        </transition-group>
    </div>
    <div v-else style="color: red">
        <h3>post-list is empty</h3>
    </div>
</template>

<script>
import PostItem from './PostItem.vue'
components: {
    PostItem
}
export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    margin-left: 10px;
}
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(-130px);
}
.post-list-move {
    transition: transform 0.5s ease;
}
</style>

<template>
    <div>
        <post-banner :photoUrl="photoUrl" :title="fullPost.title" />
        <p>{{ fullPost.body }}</p>
    </div>
</template>

<script>
import axios from 'axios'
import postBanner from '@/components/UI/postBanner.vue'
export default {
    components: { postBanner },
    data() {
        return {
            fullPost: { id: 1 },
            photoUrl: '',
        }
    },
    methods: {
        async getFullPost(id) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            this.fullPost = response.data
            console.log(this.fullPost)
        },
        async getPostPhoto(id) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
            this.photos = response.data
            this.photoUrl = response.data[this.$route.params.id].url
        },
    },
    mounted() {
        this.getFullPost(this.$route.params.id)
        this.getPostPhoto()
    },
}
</script>

<style></style>

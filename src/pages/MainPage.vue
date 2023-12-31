<template>
    <main>
        <CategoryPage
            :breadcrumbs="breadcrumbs"
            :title="catTitle"
            :description="catDesc"
            :imgSrc="imgSrc" />
        <div class="post-container">
            <div class="app__buttons">
                <my-btn @click="openModal">Cоздать пост</my-btn>
                <my-select class="select" :options="sortOptions" v-model="selectedOption" />
            </div>
            <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
            <div v-else-if="isPostLoading">загрузка...</div>
            <my-pagination
                v-model="currentPage"
                :current="currentPage"
                :totalPages="totalPages"
                @update:current="handlePageChange" />
            <my-dialog @click="closeModal" :show="showModal">
                <Post-form @close="closeModal" @create="createPost" />
            </my-dialog>
        </div>
        <most-popular />
    </main>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Header from '@/components/Header.vue'
import CategoryPage from '@/components/CategoryPage.vue'
import SideBar from '@/components/SideBar.vue'
import MostPopular from '@/components/MostPopular.vue'
import Footer from '@/components/Footer.vue'
import FullPost from '@/pages/FullPost.vue'
import axios from 'axios'
export default {
    components: {
        PostForm,
        PostList,
        Header,
        CategoryPage,
        SideBar,
        MostPopular,
        Footer,
        FullPost,
    },
    props: {
        searchValue: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            breadcrumbs: [
                { title: 'Главная', link: '/' },
                { title: 'Главная', link: '/' },
            ],
            modValue: '',
            showModal: false,
            body: '',
            title: '',
            posts: [],
            isPostLoading: true,
            limit: 9,
            currentPage: 1,
            totalPages: 0,
            selectedOption: '',
            sortOptions: [
                { title: 'title', name: 'По названию' },
                { title: 'body', name: 'По описанию' },
            ],
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id)
        },
        closeModal() {
            this.showModal = false
        },
        openModal() {
            this.showModal = true
        },
        async fetchPosts() {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.currentPage}`,
            )
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            this.posts = response.data
            response.status === 200 ? (this.isPostLoading = false) : (this.isPostLoading = true)
        },
        handlePageChange(newPage) {
            this.currentPage = newPage
            this.fetchPosts()
        },
    },
    mounted() {
        this.fetchPosts()
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedOption]?.localeCompare(post2[this.selectedOption])
            })
        },

        sortedAndSearchedPosts() {
            return this.sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(this.searchValue.toLowerCase()),
            )
        },
    },
}
</script>

<style lang="scss">
@mixin app-input {
    border: 1px solid #38ac5a;
    border-radius: 4px;
    height: 40px;
}
:-webkit-scrollbar {
    width: 0;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
.app {
    color: #3f4651;
    .wrapper {
        max-width: 1192px;
        margin: 0 auto;
        padding: 10px;
        padding-top: 120px;
        z-index: 3;
        display: grid;
        grid-template-columns: 1.2fr 5fr;
        column-gap: 10px;
        main {
            grid-row: 1;
            display: grid;
            grid-template-columns: 6fr 1.5fr;
            grid-column-start: 2;
            grid-column-gap: 20px;
            -ms-grid-column-align: end;
        }
    }
}
.app__buttons {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input {
        @include app-input();
        padding: 10px;
    }
    .select {
        @include app-input();
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: 10px 15px;
        outline: none;
        color: #3f465175;
    }
}
.post-container {
    grid-column-start: 1;
}
.scrollUpBtn {
    position: fixed;
    bottom: 120px;
    right: 32px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #38ac5a;
    border: none;
    cursor: pointer;
    z-index: 10;
    opacity: 0.8;
}
@keyframes fadeOut {
    from {
        opacity: 0.8;
    }
    to {
        opacity: 0;
        visibility: hidden;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        visibility: hidden;
    }
    to {
        opacity: 0.8;
    }
}

.hidden {
    opacity: 1;
    animation: fadeOut 0.5s ease forwards;
}

.visible {
    visibility: visible;
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
}
</style>

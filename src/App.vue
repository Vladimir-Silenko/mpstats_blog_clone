<template>
    <div class="app">
        <div class="wrapper">
            <Header />
            <side-bar></side-bar>
            <main>
                <CategoryPage />
                <div class="post-container">
                    <!-- <div class="app__buttons">
                    <my-btn @click="openModal">Cоздать пост</my-btn>
                    <my-input
                        v-model="searchValue"
                        class="input"
                        placeholder="Поиск поста"
                        type="text" />
                    <my-select :options="sortOptions" v-model="selectedOption" />
                </div> -->
                    <post-list
                        v-if="!isPostLoading"
                        :posts="sortedAndSearchedPosts"
                        @remove="removePost" />
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
            <div class="sidebar"></div>
        </div>
        <Footer />
        <button v-bind:class="{ visible: isScrolled }" @click="scrollUp" class="scrollUpBtn hidden">
            <img :src="whiteArrow" alt="" />
        </button>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import Header from './components/Header.vue'
import CategoryPage from './components/CategoryPage.vue'
import SideBar from './components/SideBar.vue'
import MostPopular from './components/MostPopular.vue'
import Footer from './components/Footer.vue'
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
    },
    data() {
        return {
            isScrolled: false,
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
            searchValue: '',
            sortOptions: [
                { title: 'title', name: 'По-названию' },
                { title: 'body', name: 'По-описанию' },
            ],
            whiteArrow: require('./assets/arrow_up_icon.png'),
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
            console.log('fetchPosts called with currentPage:', this.currentPage)
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
        scrollUp() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 0
            console.log('work')
        },
    },
    mounted() {
        this.fetchPosts()
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
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
::-webkit-scrollbar {
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

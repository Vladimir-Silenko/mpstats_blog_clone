<template></template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Header from '@/components/Header.vue'
import CategoryPage from '@/components/CategoryPage.vue'
import SideBar from '@/components/SideBar.vue'
import MostPopular from '@/components/MostPopular.vue'
import Footer from '@/components/Footer.vue'
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
    props: {
        catTitle: {
            type: String,
            default: 'catTitle',
        },
        catDesc: {
            type: String,
            default: 'catDesc',
        },
        imgSrc: {
            type: String,
            default: 'imgSrc',
        },
    },
    data() {
        return {
            selectedOption: '',
            searchValue: '',
            sortOptions: [
                { title: 'title', name: 'По названию' },
                { title: 'body', name: 'По описанию' },
            ],
        }
    },
}
</script>

<style></style>

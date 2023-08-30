<template>
    <div class="app">
        <div class="wrapper">
            <Header :search="searchValue" @update:search="updateSearch" />
            <side-bar />
            <router-view :search-value="searchValue"></router-view>
        </div>
        <Footer />
        <button v-bind:class="{ visible: isScrolled }" @click="scrollUp" class="scrollUpBtn hidden">
            <img :src="whiteArrow" alt="" />
        </button>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        Header,
        SideBar,
        Footer,
    },
    data() {
        return {
            isScrolled: false,
            searchValue: '',
            whiteArrow: require('./assets/arrow_up_icon.png'),
        }
    },
    methods: {
        scrollUp() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 0
        },
        updateSearch(value) {
            console.log(value)
            this.searchValue = value
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    computed: {},
    provide() {
        return {
            searchValue: this.searchValue,
        }
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

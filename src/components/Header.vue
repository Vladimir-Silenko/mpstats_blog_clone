<template>
    <div class="header">
        <img src="https://blog.mpstats.io/wp-content/themes/mp/images/logo.svg" alt="" />
        <div class="header__container">
            <ul class="header__menu">
                <li class="header__menu-item">
                    <a href="">Тарифы</a>
                </li>
                <li class="header__menu-item dropdown-container" style="position: relative">
                    <a href="">Возможности</a>
                    <img class="arrow" :src="downImg" alt="arrow down" />
                    <my-dropdown></my-dropdown>
                </li>
                <li style="margin-left: 25px" class="header__menu-item">
                    <a href="">Консалтинг</a>
                </li>
            </ul>
            <div class="header__btns">
                <form class="header__input-container">
                    <my-input
                        @input="updateValue"
                        v-model="InputValue"
                        class="header__input"
                        placeholder="Что хочешь почитать?" />
                    <span class="icon-search">
                        <img :src="SearchImageSrc" alt="search img" />
                    </span>
                </form>
                <my-btn>
                    Перейти в сервис
                    <img :src="PersonImageSrc" alt="" />
                </my-btn>
            </div>
        </div>
    </div>
</template>

<script>
import myBtn from './UI/myBtn.vue'
export default {
    components: { myBtn },
    props: {
        search: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            SearchImageSrc: require('../assets/search_icon.png'),
            PersonImageSrc: require('../assets/person_icon.png'),
            downImg: require('@/assets/arrow_down.png'),
            InputValue: '',
        }
    },
    methods: {
        updateValue() {
            this.$emit('update:search', this.InputValue)
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    height: 80px;
    width: 100%;
    padding: 10px 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    background-color: #fff;
    border-bottom: 1px solid lightgray;
    &__container {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 20px;
        height: 100%;
    }
}
.header__menu {
    display: flex;
    list-style-type: none;
    column-gap: 10px;
}

a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: #3f4651;
}
.arrow {
    position: absolute;
    width: 16px;
    top: 10px;
    right: -22px;
}
.header__btns {
    display: flex;
    align-items: center;
    column-gap: 20px;
    position: relative;

    button {
        display: flex;
        align-items: center;
        column-gap: 10px;
        padding-right: 32px;
        &:active {
            background: #25723c;
        }
        img {
            width: 18px;
            position: absolute;
            right: 13px;
            top: 14px;
        }
    }
}
.header__input {
    border: none;
    padding: 11px;
}
.header__input-container {
    border: 1px solid #38ac5a;
    border-radius: 4px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    .icon-search {
        display: block;
        cursor: pointer;
        height: 100%;
        width: 35px;
        display: flex;
        align-items: center;
    }
}
li {
    margin: 0 0 0 16px;
    padding: 6px 0 6px 0;
}
.dropdown-container:hover .dropdown {
    display: block;
    transition-delay: 0.5s;
}
</style>

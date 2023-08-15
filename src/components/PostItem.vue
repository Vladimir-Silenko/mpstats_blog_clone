<template>
    <div class="post">
        <picture>
            <img
                class="post__image"
                src="https://blog.mpstats.io/wp-content/uploads/2023/07/bidder-dlya-wildberries_-bezopasnost-i-effektivnost.jpg"
                alt=""
        /></picture>
        <div class="post__text">
            <p class="post__title">
                <strong>{{ post.title }}</strong>
            </p>
            <p class="post__description">
                {{ partOfPost(post.body) }}
            </p>
        </div>
        <div class="post__views">
            <img :src="EyeImageSrc" alt="" />
            <span>1234</span>
        </div>
        <!-- <div class="post__btns">
            <my-btn @click="$emit('remove', post)" class="post__btn">Удалить</my-btn>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            EyeImageSrc: require('../assets/eye_icon.png'),
        }
    },
    props: {
        post: { type: Object, required: true },
    },
    methods: {
        partOfPost(text) {
            return text.split('').slice(0, 40).join('') + '...'
        },
    },
}
</script>

<style scoped lang="scss">
.post {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin: 10px 0;
    border-radius: 8px;
    border: 1px solid #f0f2f4;
    transition-duration: 0.5s;
    padding-bottom: 35px;
    position: relative;
    &__title {
        display: inline-block;
        height: 50px;
    }
    &:hover {
        border: 1px solid rgb(0, 139, 97);
    }
    &__image {
        border-radius: 7px 7px 0 0;
        object-fit: cover;
        width: 100%;
        max-height: 268px;
    }

    &__views {
        position: absolute;
        bottom: 15px;
        left: 15px;
        display: flex;
        column-gap: 10px;
        align-items: center;
        span {
            color: #c3c7cb;
        }
    }
    &__text {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        padding: 15px;
    }
}
.post__btns {
    padding: 5px;
}
.post__btn {
    outline: none;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
    background: rgb(216, 248, 238);
    cursor: pointer;
}
</style>

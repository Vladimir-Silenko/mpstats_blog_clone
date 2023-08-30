<template>
    <div class="banner">
        <div class="banner-left">
            <h1>{{ title }}</h1>
            <p class="descr">Awesome article description</p>
            <div class="info">
                <img :src="EyeImageSrc" alt="" />
                <span class="views"> </span>
                <span class="published"></span>
            </div>
        </div>
        <div class="banner-right">
            <img :src="photoUrl" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            EyeImageSrc: require('@/assets/eye_icon.png'),
        }
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        photoUrl: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss">
@import './mixinsAndTemplates';
.banner {
    @include grey-header;
    grid-template-columns: 4fr 1fr;
    max-height: 350px;
    h1 {
        width: 100%;
        font-weight: 700;
        font-size: 36px;
        margin-bottom: 16px;
        line-height: 110%;
        letter-spacing: -0.5px;
    }
    img {
        max-width: 362px;
        height: 283px;
        border-radius: 8px;
    }
    .descr {
        font-weight: 400;
        font-size: 20px;
        line-height: 135%;
        margin-bottom: 56px;
        letter-spacing: 0.25px;
    }
    .info {
        img {
            width: 18px;
            height: 18px;
        }
    }
}
</style>

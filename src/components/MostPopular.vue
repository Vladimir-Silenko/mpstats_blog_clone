<template>
    <div class="most-popular">
        <h5 class="most-popular__title">Часто читают</h5>
        <ul>
            <li v-for="article in mostPopular" :key="article.id">
                <a :href="article.link">{{ article.title }}</a>
                <br />
                <span :style="`background-image: url(${EyeImageSrc});`">{{ article.views }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            EyeImageSrc: require('../assets/eye_icon.png'),
            mostPopular: [
                {
                    id: 1,
                    title: 'Как выбрать склад на Wildberries',
                    link: 'https://blog.mpstats.io/wildberries/logistics/kak-vybrat-sklad-wb',
                    views: 7606,
                },
                {
                    id: 2,
                    title: 'ChatGPT – универсальная нейросеть для маркетплейсов',
                    link: 'https://blog.mpstats.io/wildberries/cards/chatgpt-marketplejsy',
                    views: 6619,
                },
                {
                    id: 3,
                    title: 'Логистика на Wildberries',
                    link: 'https://blog.mpstats.io/wildberries/logistics/logistika-wb',
                    views: 3945,
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.most-popular {
    position: sticky;
    position: -webkit-sticky;
    grid-column-start: 2;
    grid-column-end: 5;
    top: 100px;
    padding: 20px;
    border: 1px solid #f0f2f4;
    border-radius: 8px;
    margin-bottom: 120px;
    margin-top: 10px;
    max-height: 410px;
    h5 {
        margin-bottom: 16px;
        margin-top: 0;
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: 0.25px;
    }
    ul {
        list-style-type: none;
        li {
            margin: 0;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid #d9d9d9;
            a {
                font-weight: 400;
                font-size: 14px;
                color: #3f4651;
                letter-spacing: 0.25px;
            }
            span {
                display: block;
                color: #c3c7cb;
                background-repeat: no-repeat;
                background-size: 18px;
                padding-left: 24px;
                margin-top: 16px;
            }
        }
    }
}
</style>

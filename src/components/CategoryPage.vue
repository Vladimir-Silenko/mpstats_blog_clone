<template>
    <div class="cat_page">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <div class="cat_left">
            <img
                class="cat_img"
                src="https://blog.mpstats.io/wp-content/uploads/2023/07/business.png"
                alt="Бизнес"
                title="Бизнес" />
        </div>

        <div class="cat_right">
            <h1>Бизнес</h1>

            <p></p>
            <p>
                Бизнес на маркетплейсах имеет свои нюансы. Это касается самих площадок, правовой и
                финансовой сферы, сотрудников и управления процессами. Материалами делятся
                специалисты MPSTATS и партнеры компании.
            </p>
            <p></p>
        </div>
    </div>
</template>

<script>
import Breadcrumbs from './UI/Breadcrumbs.vue'
export default {
    components: { Breadcrumbs },
    props: {
        breadcrumbs: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.cat_page {
    background: #f0f2f4;
    overflow: hidden;
    display: grid;
    grid-template-rows: 2fr 7fr;
    grid-template-columns: 1fr 5fr;
    grid-column-start: 1;
    grid-column-end: 5;
    border-radius: 8px;
    padding: 40px;
    margin-bottom: 40px;
    margin-left: 10px;
    .cat_left {
        grid-column: 1;
        grid-row-start: 2;
        grid-row-end: 8;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        img {
            width: 84px;
            display: block;
            margin-right: 40px;
        }
    }
    .cat_right {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        grid-row-start: 2;
        grid-row-end: 8;
        color: #3f4651;
        h1 {
            display: block;
            line-height: 110%;
            letter-spacing: -0.5px;
            margin-bottom: 24px;
        }
        p {
            font-weight: 400;
            font-size: 20px;
            line-height: 135%;
            letter-spacing: 0.25px;
        }
    }
    .breadcrumbs {
        display: block;
        grid-row: 1;
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 16px;
        line-height: 135%;
        letter-spacing: 0.25px;
        a {
            color: #8b9097;
            text-decoration: none;
            display: inline-block;
        }
    }
}
</style>

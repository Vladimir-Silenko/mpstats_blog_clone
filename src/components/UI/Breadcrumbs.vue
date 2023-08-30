<template>
    <div class="crumbContainer">
        <ol class="crumbList">
            <li v-for="(crumb, index) in breadcrumbs" class="crumb" :key="crumb">
                <button
                    v-if="index === breadcrumbs.length - 1"
                    @click="$router.push(`${crumb.link}`)"
                    class="c-link">
                    {{ crumb.title }}
                </button>
                <button v-else @click="$router.push(`${crumb.link}`)" class="c-link">
                    {{ crumb.title + ' ' + '/' + ' ' }}
                </button>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        breadcrumbs: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        console.log(this.breadcrumbs)
    },
}
</script>

<style lang="scss">
.crumbList {
    display: flex;
    column-gap: 10px;
    list-style-type: none;
    .crumb {
        margin: 0;
        margin-top: -10px;
    }
    .c-link {
        background: transparent;
        border: none;
        outline: none;
        color: #8b9097;
        cursor: pointer;
    }
}
</style>

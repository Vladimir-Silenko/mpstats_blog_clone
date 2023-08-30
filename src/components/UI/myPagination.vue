<template>
    <div class="paginator-container">
        <my-btn :disabled="pageCountFrom === 0" @click="previousPages">-</my-btn>
        <ul class="paginator">
            <li v-for="page in cutPageAmount()" :key="page">
                <button
                    @click="changePage(page)"
                    class="paginator__item"
                    :style="{
                        border: current === page ? '3px solid rgb(0, 139, 97)' : '',
                    }">
                    {{ page }}
                </button>
            </li>
        </ul>
        <my-btn :disabled="pageCountTo >= totalPages" @click="nextPages">+</my-btn>
    </div>
</template>

<script>
import myBtn from '@/components/UI/myBtn.vue'
export default {
    components: {
        myBtn,
    },
    name: 'my-pagination',
    props: {
        totalPages: {
            type: Number,
            default: 0,
        },
        current: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            pageCountFrom: 0,
            pageCountTo: 5,
        }
    },
    methods: {
        changePage(pageNumber) {
            this.$emit('update:current', pageNumber)
        },
        cutPageAmount() {
            const pages = []
            for (let i = this.pageCountFrom; i < this.pageCountTo; i++) {
                if (i < this.totalPages) {
                    pages.push(i + 1)
                }
            }
            return pages
        },
        nextPages() {
            this.pageCountFrom += 5
            this.pageCountTo += 5
        },
        previousPages() {
            this.pageCountFrom -= 5
            this.pageCountTo -= 5
        },
    },
}
</script>

<style lang="scss">
.paginator {
    list-style-type: none;
    display: flex;
    align-items: center;
    column-gap: 15px;
    li {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.paginator-container {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 25px;
}
.paginator__item {
    background: transparent;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid rgb(0, 139, 97);
}
.paginator__item:active {
    background: #00000012;
}
</style>

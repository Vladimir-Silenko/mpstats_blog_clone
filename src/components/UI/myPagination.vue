<template>
    <div>
        <ul class="paginator">
            <li v-for="page in cutPageAmount" :key="page">
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
        <button v-if="pageCountFrom >= 5" @click="previousPages">-</button>
        <button v-else-if="pageCountTo <= totalPages" @click="nextPages">+</button>
    </div>
</template>

<script>
export default {
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

<style>
.paginator {
    list-style-type: none;
    display: flex;
    column-gap: 10px;
    margin: 10px auto;
    width: 20%;
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

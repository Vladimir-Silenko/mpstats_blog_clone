export default {
    mounted(el, binding) {
        el.onscroll = () => {
            binding.value()
        }
    },
    unmounted(el) {
        el.onscroll = null
    },
}

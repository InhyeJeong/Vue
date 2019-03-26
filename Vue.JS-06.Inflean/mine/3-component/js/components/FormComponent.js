export default {
    template: '#search-form',
    props: ['value'],
    data() {
        return {
            inputValue: this.value
        }
    },
    methods: {
        onSubmit: function () {
            //  child -> parent
            this.$emit('@submit', this.inputValue.trim())
        },
        onKeyup: function () {
            if(!this.inputValue.length) this.onReset()
        },
        onReset: function () {
            this.inputValue = ''
            this.$emit('@reset')
        }
    },
}
export default {
    template: '#tabs',
    props: ['tabs', 'selectedTab'],
    methods: {
        onClickTab: function(tab) {
            this.$emit('@change', tab)
        }
    },
}
<template>
    <!-- state변경을 위한 함수 연결 -->
    <button class="list-group-item text-left" @click="clickButton">
            {{ label }}
    </button>
</template>
<script>
    export default {
        props : ['label'],
        methods : {
            clickButton() {
                //  이벤트를 발생시키는 $emit
                this.$emit('componentClick');
            }
        }
    };
</script>
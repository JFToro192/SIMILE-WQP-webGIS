<template>
    <div class="carousel-container">
        <slot></slot>
        <button class="prev" @click="prev"><i class="bi bi-caret-left-fill"></i></button>
        <button class="next" @click="next"><i class="bi bi-caret-right-fill"></i></button>
    </div>
</template>

<script>
export default {
    data () {
        return{

        }
    },
    methods: {
        prev () {
            this.$emit('prev')
        },
        next() {
            this.$emit('next')
        },
    }
}
</script>

<style lang="scss" scoped>
    .carousel-container{
        position: relative;
        width:100%;
        height:100%;
        overflow:hidden;
    }
    button{
        position: absolute;
        width: 50px;
        height: 40px;
        top: calc(50% - 10px);

        &.prev{
            left:2px;
        }

        &.next{
            right:2px;
        }
    }
</style>
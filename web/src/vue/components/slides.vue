<style lang="stylus">
.slides
    position: relative
    width: 730px
    height: 336px
    overflow: hidden
    .operation
        position: absolute
        top: calc(50% - 56px)
        color: #cccccc
        &.left
            left: 0
        &.right
            right: 0
    .item, img
        width: 730px
        height: 336px
</style>
<template lang="pug">
.slides
    .operation.left
        .fa.fa-chevron-left.fa-4x(@click="slide('prev')")
    .item
        a(:href="curData.link")
            img(:src="curData.img")
    .operation.right
        .fa.fa-chevron-right.fa-4x(@click="slide('next')")
</template>
<script>
export default {
    name: 'slides',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            cur: 0,
            curData: this.items[0]
        }
    },
    methods: {
        slide(dir) {
            const index = dir === 'prev' ? 
            (
                this.cur - 1 > 0 ? (this.cur - 1) : (this.items.length - 1) 
            )
            :
            (
                this.cur + 1 >= this.items.length ? 0 : (this.cur + 1)
            )

            this.curData = this.items[index]
            this.cur = index
        }
    }
}
</script>
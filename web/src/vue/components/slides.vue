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
    .item
        width: 730px
        height: 336px
</style>
<template lang="pug">
.slides
    .operation.left
        .fa.fa-chevron-left.fa-4x
    .item
        img(src="http://p3.music.126.net/ZuCqwp-IwhYtVgS6K39hSA==/18558656766932473.jpg")
    .operation.right
        .fa.fa-chevron-right.fa-4x
</template>
<script>
export default {
    name: 'slides'
}
</script>
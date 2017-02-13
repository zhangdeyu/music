<style lang="stylus">
.component-card
    .card-detail
        width: 140px
        height: 140px
        position: relative
        img
            width: 140px
            height: 140px
        .icons
            height: 20px
            line-height: 20px
            width: 140px
            padding: 0 10px
            position: absolute
            bottom: 0px
            left: 0px
            .fa
                vertical-align: center
                &.fa-play
                    float: right
</style>
<template lang="pug">
.component-card
    .card-detail
        img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
        .icons
            .fa.fa-headphones
            | 45万
            .fa.fa-play
    .card-title 『华语』我曾经最骄傲的事，就是爱过你
</template>
<script>
export default {
    name: 'card'
}
</script>
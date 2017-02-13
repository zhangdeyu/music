<style lang="stylus">
#index-view
    width: 980px
    margin: 10px auto
    .top
        display: flex
        .profile
            margin-left: 20px
            .user-info
                display: flex
                >img
                    width: 80px
                    height: 80px
                .name
                    margin-left: 10px
                    height: 80px
                    line-height: 80px
    .recommend
        margin-top: 20px
        .lists
            .item
                width: 140px
                margin: 0 20px 30px 0
                display: inline-block
                float: left
                >.item-detail
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
                        position: absolute
                        bottom: 0px
                        left: 0px
                        .fa
                            vertical-align: center 
                            &.fa-play
                                float: right
</style>
<template lang="pug">
#index-view
    .top
        slides
        .profile
            .user-info
                img(src="http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=80y80")
                .name Derek
    .recommend
        .title 热门推荐
        .lists.is-clearfix
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
</template>
<script>
import slides from './components/slides.vue'
export default {
    name: 'index',
    components: {
        slides
    }
}
</script>
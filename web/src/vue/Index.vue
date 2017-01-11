<style lang="stylus">
#index-view
    width: 980px
    margin: 10px auto
    .top
        display: flex
        .banner
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
        .banner
            .operation.left
                .fa.fa-chevron-left.fa-4x
            .item
                img(src="http://p3.music.126.net/ZuCqwp-IwhYtVgS6K39hSA==/18558656766932473.jpg")
            .operation.right
                .fa.fa-chevron-right.fa-4x
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
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
            .item
                .item-detail
                    img(src="http://p3.music.126.net/trG8Pan0oDCW-sWNqMyogg==/109951162841228618.jpg?param=140y140")
                    .icons
                        .fa.fa-headphones
                        | 45万
                        .fa.fa-play
                .item-title 『华语』我曾经最骄傲的事，就是爱过你
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
export default {
    name: 'index'
}
</script>
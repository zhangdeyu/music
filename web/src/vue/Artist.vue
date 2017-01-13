<style lang="stylus">
#artist
    display: flex
    .left
        width: 640px
    .banner
        width: 640px
        .artister
            margin-bottom: 10px
            .name
                font-size: 20px
                font-weight: bold
    .contents
        margin-top: 20px
        width: 640px
        .contents-title
            font-size: 20px
            .fa
                vertical-align: center
                margin-right: 10px
        .contents-lists
            width: 640px
            counter-reset: item
            .item
                counter-increment: item
                width: 640px
                display: flex
                &:nth-child(even)
                    background: #ffffff
                &:before
                    font-size: 14px
                    height: 26px
                    width: 26px
                    line-height: 26px
                    margin-left: 10px
                    content: counter(item)
                >div
                    font-size: 14px
                    height: 26px
                    line-height: 26px
                    flex: 1
                    margin-right: 10px
    .recommend-artist
        margin-left: 30px
        border-left: 1px solid #ccc
        padding-left: 30px
        .recommend-title
            height: 40px
            font-size: 20px
            line-height: 40px
        .recommend-lists
            .item
                width: 50px
                height: 70px
                display: inline-block
                margin: 0 20px 10px 0
                >img
                    height: 50px
                >div
                    width: 50px
                    overflow: hidden
                    height: 20px
                    font-size: 14px
                    line-height: 20px
                    text-align: center      
</style>
<template lang="pug">
#artist
    .left
        .banner
            .artister
                span.name 梁静茹
                span.nickname Fish Leong
            img(src="//p3.music.126.net/TVogDlyYUD5KZ4p0cPMZ5g==/18784056649372748.jpg?param=640y300")
        .contents
            .contents-title
                i.fa.fa-music
                | 热门单曲
            .contents-lists
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
                .item
                    .fa.fa-play
                    .song 会呼吸的痛
                    .time 04:33
    .recommend-artist
        .recommend-title 推荐歌手
        .recommend-lists
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
            .item
                img(src="//p4.music.126.net/ByXwX59XAoYsY3jwTLvlNQ==/1382086129327137.jpg?param=50y50")
                div 莫文蔚
</template>
<script>
export default {
    name: 'artist'
}
</script>
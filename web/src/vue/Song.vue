<style lang="stylus">
#song
    display: flex
    .detail
        display: flex
        margin-top: 30px
        width: 640px
        min-height: 100vh
        .cover
            margin: 20px 30px 0 0
            width: 179px
            height: 179px
            background: url('../style/images/cover.png') no-repeat
            >img
                width: 130px
                height: 130px
                border-radius: 130px
                margin: 25px
        .song-info
            >div
                margin-bottom: 20px
            .btn
                display: flex
                >div, >div>i
                    height: 20px
                    font-size: 14px
                    line-height: 20px
                >div
                    margin-right: 20px
                >div>i
                    margin-right: 6px
            .lyric
                margin-top: 60px
                font-size: 14px
                line-height: 2
    .recommend-songs
        margin-left: 30px
        border-left: 1px solid #ccc
        padding-left: 30px
        .recommend-title
            height: 40px
            width: 280px
            font-size: 20px
            line-height: 40px
            border-bottom: 1px solid #ccc
        .recommend-lists
            margin-top: 10px
            .item
                display: flex
                >div
                    height: 42px
                    &>.fa
                        height: 42px
                        line-height: 42px
                        margin-left: 30px
                line-height: 1.5
                margin-bottom: 20px
                .singer
                    color: #ccc
                .icons
                    margin-left: 90px
</style>
<template lang="pug">
#song
    .detail
        .cover
            img(src="//p4.music.126.net/RR1xm9WB4b4un4xVA8UIfg==/868614185983517.jpg?param=130y130")
        .song-info
            .song-name.title 会呼吸的痛
            .singer
                span 歌手：
                span.name 梁静茹
            .album
                span 所属专辑：
                span.name 尝味·人生-百味华语作品集
            .btn
                .btn-play
                    i.fa.fa-play
                    | 播放
                .btn-download
                    i.fa.fa-download
                    | 下载
            .lyric
                .content(v-html="lyric")
    .recommend-songs
        .recommend-title 推荐歌曲
        .recommend-lists
            .item
                div
                    .song 小手拉大手
                    .singer 梁静茹
                .icons
                    span.fa.fa-play
                    span.fa.fa-plus
            .item
                div
                    .song 小手拉大手
                    .singer 梁静茹
                .icons
                    span.fa.fa-play
                    span.fa.fa-plus
            .item
                div
                    .song 小手拉大手
                    .singer 梁静茹
                .icons
                    span.fa.fa-play
                    span.fa.fa-plus
            .item
                div
                    .song 小手拉大手
                    .singer 梁静茹
                .icons
                    span.fa.fa-play
                    span.fa.fa-plus
            .item
                div
                    .song 小手拉大手
                    .singer 梁静茹
                .icons
                    span.fa.fa-play
                    span.fa.fa-plus
            .item
                div
                    .song 小手拉大手
                    .singer 梁静茹
                .icons
                    span.fa.fa-play
                    span.fa.fa-plus
            .item
                div
                    .song 小手拉大手
                    .singer 梁静茹
                .icons
                    span.fa.fa-play
                    span.fa.fa-plus
            .item
                div
                    .song 小手拉大手
                    .singer 梁静茹
                .icons
                    span.fa.fa-play
                    span.fa.fa-plus
</template>
<script>
export default {
    name: 'song',
    data() {
        return {
            lyric: '在东京铁塔第一次眺望<br>在东京铁塔第一次眺望<br>在东京铁塔第一次眺望<br>在东京铁塔第一次眺望<br>在东京铁塔第一次眺望<br>'
        }
    }
}
</script>
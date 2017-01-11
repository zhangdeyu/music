<style lang="stylus">
@import "~bulma/css/bulma.css"
@import "~font-awesome/css/font-awesome.css"
[class~='fa'] {
    cursor: pointer
    &:hover {
        color: #CC3F4F
    }
    &.active {
        color: #3F51B5
    }
}
#app
    position: relative
    nav
        width: 100%
        .nav-item
            flex: 1
            text-align: center
            display: inline-block
            i
                display: inline-block
                margin-right: 10px
    .player
        position: fixed
        height: 80px
        width: 100%
        bottom: 0
        left: 0
        background: rgba(0, 0, 0, 0.85)
        .container
            max-width: 980px
            margin: 0 auto
            >div
                display: inline-block
                float: left
                height: 80px
            .cover
                height: 48px
                margin: 16px 20px 16px 30px
        .fa
            color: #FFFFFF
            height: 80px
            line-height: 80px
        .btn
            .fa:nth-child(2)
                margin: 0 20px
        .center
            width: 476px
            padding: 10px 10px
            color: #FFFFFF
            .desc
                height: 20px
                line-height: 20px
                margin-bottom: 3px
            .progress
                width: 100%
            .span
                width: 20px
        .timer
            width: 100px
            line-height: 80px
            color: #FFFFFF
</style>
<template lang="pug">
#app
    nav.nav
        a.nav-item.is-brand 乐然心动
        a.nav-item.is-tab.is-active
            i.fa.fa-globe
            span 发现音乐
        a.nav-item.is-tab
            i.fa.fa-music
            span 我的音乐
        span.nav-item
            i.fa.fa-user
            i.fa.fa-angle-down
    router-view
    .player
        .container.is-clearfix
            .btn
                a.fa.fa-step-backward.fa-2x
                a.fa.fa-play-circle-o.fa-3x
                a.fa.fa-step-forward.fa-2x
            div.image.is-48x48.cover
                img(src="http://placehold.it/48x48")
            div.center
                .desc flay away 梁静茹
                progress.progress.is-primary(max="100", value="15")
            .timer 01:05/04:00
            .btn
                .fa.fa-volume-up
                .fa.fa-bars
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
        
        }
    }
}
</script>
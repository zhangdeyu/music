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
</style>
<template lang="pug">
#index-view
    .top
        slides(:items="banners")
        .profile
            .user-info
                img(src="http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=80y80")
                .name Derek
    .recommend
        .title 热门推荐
        .lists.is-clearfix
            card.item
            card.item
            card.item
</template>
<script>
import slides from './components/slides.vue'
import card from './components/card.vue'
export default {
    name: 'index',
    components: {
        slides,
        card
    },
    data() {
        return {
            banners: [
                {
                    link: null,
                    img: 'http://p3.music.126.net/mVMRafifNK3-jfPM8ZBsMg==/18779658604187868.jpg'
                },
                {
                    link: null,
                    img: 'http://p3.music.126.net/ZuCqwp-IwhYtVgS6K39hSA==/18558656766932473.jpg'
                },
                {
                    link: null,
                    img: 'http://p3.music.126.net/BeCCsLLXYTlyvcMfTXmQfA==/18678503535036482.jpg'
                }
            ]
        }
    }
}
</script>
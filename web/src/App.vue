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
    .view
        width: 980px
        margin: 10px auto 100px
    .modal
        .icon
            transform: translate(50%, -150%)
</style>
<template lang="pug">
#app
    nav.nav
        a.nav-item.is-brand 心随乐动
        a.nav-item.is-tab.is-active
            i.fa.fa-globe
            span 发现音乐
        a.nav-item.is-tab
            i.fa.fa-music
            span 我的音乐
        span.nav-item
            i.fa.fa-user(@click="showModal()")
            i.fa.fa-angle-down
    .view
        router-view
    player
    .modal(:class="{'is-active': modalActive}")
        .modal-background
        .modal-content
            .box
                p.control.has-icon
                    input.input(type='email', placeholder='Email')
                    span.icon.is-small
                        i.fa.fa-envelope
                p.control.has-icon
                    input.input(type='password', placeholder='Password')
                    span.icon.is-small
                        i.fa.fa-lock
                p.control
                    button.button.is-success Login
                    button.button.is-danger(@click="hideModal()") Cancle
</template>
<script>
import player from 'vue/components/Player.vue'
export default {
    name: 'app',
    components: {
        player
    },
    data() {
        return {
            modalActive: false
        }
    },
    methods: {
        showModal() {
            this.modalActive = true
        },
        hideModal() {
            this.modalActive = false
        }
    }
}
</script>
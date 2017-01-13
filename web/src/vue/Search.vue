<style lang="stylus">
#search
    .search-box
        width: 700px
        margin: 80px auto
        position: relative
        input
            width: 700px
            height: 40px
            line-height: 40px
            border-radius: 20px
            padding: 0 20px
        i
            width: 20px
            height: 40px
            line-height: 40px
            position: absolute
            right: 10px
            top: 0 
</style>
<template lang="pug">
#search
    .search-box
        input.input(placeholder="请输入")
        i.fa.fa-search.fa-2x
</template>
<script>
export default {
    name: 'Search'
}
</script>
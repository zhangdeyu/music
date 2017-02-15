<style lang="stylus">
.player
    position: fixed
    height: 80px
    width: 100%
    bottom: 0
    left: 0
    background: rgba(0, 0, 0, 0.85)
    audio
        display: none
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
        position: relative
        .fa:nth-child(2)
            margin: 0 20px
        input[type="range"]
            position: absolute
            top: -50px
            right: -6px
            transform: rotate(-90deg)
            z-index: 2
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
            cursor: pointer
        .span
            width: 20px
    .timer
        width: 100px
        line-height: 80px
        color: #FFFFFF
    .play-list
        position: fixed
        bottom: 80px
        width: 980px
        height: 300px
        left: 50%
        transform: translateX(-50%)
        background: rgba(0, 0, 0, 0.8)
        border-radius: 10px 10px 0 0
        padding: 10px
</style>
<template lang="pug">
.player
    audio#audio(:src="audios[currentIndex].src")
    .container.is-clearfix
        .btn
            a.fa.fa-step-backward.fa-2x(@click="prev()")
            template(v-if="playing")
                a.fa.fa-pause-circle-o.fa-3x(@click="play()")
            template(v-else)
                a.fa.fa-play-circle-o.fa-3x(@click="play()")
            a.fa.fa-step-forward.fa-2x(@click="next()")
        div.image.is-48x48.cover
            img(:src="audios[currentIndex].img || 'http://placehold.it/48x48'")
        div.center
            .desc {{audios[currentIndex].title}} - {{audios[currentIndex].author}}
            progress.progress.is-primary(max="100", :value="progress", @click.stop="changeTime")
        .timer {{currentTime}} / {{totalTime}}
        .btn
            .fa.fa-volume-up(@click="showVolume = !showVolume")
            .fa.fa-bars
            input(v-if="showVolume",type="range", v-model="volume", @change="setVolume", min="0.0", max="1.0", step="0.1")
    .play-list xxx
</template>
<script>
export default {
    name: 'player',
    data() {
        return {
            playing: false,
            currentTime: '00:00',
            totalTime: '00:00',
            progress: 0,
            volume: 0.5,
            showVolume: false,
            currentIndex: 0,
            audios: [
                {
                    title: '岁月神偷',
                    author: 'xxx',
                    src: 'http://m2.music.126.net/0443RBA9VVlBGMDTHn2mTA==/1420569036314644.mp3',
                    img: 'http://p1.music.126.net/54wdQi_3rpjreY2oo2jb7w==/5998935441219557.jpg'
                },
                {
                    title: '成都',
                    author: '赵雷',
                    src: 'http://m2.music.126.net/4gwWNLUdEZuPCKGUWWu_rw==/18720284975304502.mp3',
                    img: 'http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg'
                },
                {
                    title: '告白气球',
                    author: 'xxx',
                    src: 'http://m2.music.126.net/GvIMZ5ZW0l04xFMVYtTy8g==/18502581673300022.mp3',
                    img: 'http://p1.music.126.net/m3_elKryq_x62UNHJ2NgHg==/109951162807555886.jpg'
                }
            ]
        }
    },
    mounted() {
        this.audio = document.querySelector('audio')
    },
    methods: {
        play() {
            let timer = null;
            if (!this.audio.paused) {
                clearInterval(timer)
                this.audio.pause()
                this.playing = false
            } else {
                this.audio.play()
                this.getTotalTime()

                timer = setInterval(() => {
                    this.getCurrentTime()
                    this.getProgress()
                    // TODO 判断播放完成
                    if (this.audio.ended) {
                        this.next()
                    } 
                }, 1000)

                this.playing = true
            }
        },
        getTotalTime() {
            this.totalTime = `${
                _.padStart(parseInt(this.audio.duration / 60), 2, '0')
            }:${
                _.padStart(parseInt(this.audio.duration % 60), 2, '0')
            }`
        },
        getCurrentTime() {
            this.currentTime = `${
                _.padStart(parseInt(this.audio.currentTime / 60), 2, '0')
            }:${
                _.padStart(parseInt(this.audio.currentTime % 60), 2, '0')
            }`
        },
        getProgress() {
            this.progress = _.floor(this.audio.currentTime / this.audio.duration * 100, 2)
        },
        changeTime(e) {
            const progressDom = document.querySelector('progress')
            const newTime = _.floor((e.offsetX / progressDom.clientWidth) * this.audio.duration, 2)

            this.audio.currentTime = newTime
            this.audio.oncanplay = () => {
                this.play()
            }
        },
        setVolume() {
            this.audio.volume = this.volume
        },
        next() {
            this.currentIndex = this.currentIndex === this.audios.length - 1 ? 0 : this.currentIndex + 1
            this.changeMusic()
        },
        prev() {
            this.currentIndex = this.currentIndex ? this.currentIndex - 1 : this.audios.length - 1
            this.changeMusic()
        },
        changeMusic(index = this.currentIndex){
            this.audio.src = this.audios[index].src
            this.audio.pause()
            this.audio.currentTime = 0
            this.playing = false
            // FIX Load err
            this.audio.oncanplay = () => {
                this.play()
            }
        }
    }
}
</script>
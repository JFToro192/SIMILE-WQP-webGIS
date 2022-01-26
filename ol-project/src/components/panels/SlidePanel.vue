<template>
        <div id="slidePanel" class="slide-panel ol-unselectable ol-control" style="display:none">
            {{child_msg}}
            <div class="slidepanel-show">
                <carousel-container
                    @prev="prev"
                    @next="next"
                >
                    <carousel-slide v-for="(slide,index) in settings.slides"
                        :key="slide"
                        :index="index"
                        :visibleSlide="visibleSlide"
                        :direction="direction"
                        >
                        <div class="slide-title">{{slide.title}}</div>
                        <div class="slide-description">{{slide.description}}</div>
                        <img :src="getImage(slide.src)" :alt="index">
                    </carousel-slide>
                </carousel-container>
            </div>
            <div class="slide-current"></div>
        </div>
</template>

<script>
// Import the images
import i1 from 'img/slides/i1.png'
import i2 from 'img/slides/i2.png'
import i3 from 'img/slides/i3.png'
import i4 from 'img/slides/i4.png'
import i5 from 'img/slides/i5.png'
import i6 from 'img/slides/i6.png'
import i7 from 'img/slides/i7.png'

// Import slide-show components
import CarouselContainer from './slideShow/CarouselContainer.vue'
import CarouselSlide from './slideShow/CarouselSlide.vue'

export default {
    name: 'Slide',
	props:{
		child_msg: {
			type: String,
			default: 'Slide Panel',
		},
        settings: {
            type: Object,
        }
	},
    data () {
        return {
            visibleSlide: 0,
            direction: '',
        }
    },
    computed: {
        slidesLen() {
            return this.settings.slides.length;
        }
    },
    methods: {
        prev () {
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.slidesLen - 1;
            } else {
                this.visibleSlide--;
            }
            this.direction = 'right';
        },
        next () {
            if(this.visibleSlide >= this.slidesLen - 1 ){
                this.visibleSlide = 0;
            } else {
                this.visibleSlide++;
            }
            this.direction = 'left';
        },
        getImage(name) {
			if (name == "i1.png") {
				return i1
			} else if (name=="i2.png") {
				return i2
			} else if (name=="i3.png") {
				return i3
			} else if (name=="i4.png") {
				return i4
			} else if (name=="i5.png") {
				return i5
			} else if (name=="i6.png") {
				return i6
			} else if (name=="i7.png") {
				return i7
			}
		}
    },
    mounted() {
    },
    components: { 
        CarouselContainer,
        CarouselSlide,
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.slide-panel{
    display:inline-block;
    justify-content: center;
    position: absolute;
    bottom: 25vh;
    left: 25vw;
    width: 50vw;
    height: 50vh;
    z-index: 1;
    border:$border-rad;
    img {
        width: 100%;
        height: 100%;
        border:$border-rad;
    }
}

.slide-title{
    height: 10%;
    width: 100%;
    text-align: center;
}

.slidepanel-show{
    display:flex;
    width: 100%;
    height: 90%;
}

.slide-current{
    width: 100%;
    height: 10%;
}
</style>
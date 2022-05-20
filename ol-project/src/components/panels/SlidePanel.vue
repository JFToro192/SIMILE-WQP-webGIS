<template>
        <div id="slidePanel" class="slide-panel ol-unselectable ol-control" style="display:none">
            <div class="panel-title">{{child_msg}}
                <button class="close-panel-btn" style="color:red;" @click="closePanel($event)">x</button>
            </div>
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
                        <div class="slide-illustration">
                            <div class="slide-image">
                                <img :src="getImage(slide.src)" :alt="index">
                            </div>
                            <div class="slide-details">
                                {{slide.details}}
                            </div>
                        </div>
                        
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
import i8 from 'img/slides/i8.png'
import i9 from 'img/slides/i9.png'

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
        closePanel(evt){
            let div = evt.path[2]
            let namePanel = '.show-' + div.classList[0].split('-')[0]
            document.querySelector(namePanel).classList.remove("active");
            div.classList.remove("active");
            div.style.display='none';
        },
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
			} else if (name=="i8.png") {
				return i8
			} else if (name=="i9.png") {
				return i9
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
    left: 30vw;
    width: 40vw;
    height: 55vh;
    z-index: 1;
    border:$border-rad;
    background: white;

    &:hover{
        background: white;
    }
}

.slide-title{
    height: 10%;
    width: 100%;
    text-align: center;
}

.slide-description{
    height: 15%;
    width: 100%;
    text-align: justify;
    overflow:auto;
}

.slide-illustration{
    display: inline-flex;
    width: 100%;
    height: 75%;

    .slide-image {
        text-align: center;
        margin-left: 25px;
        width: 60%;
        height: 100%;
        img {
            width: 100%;
            height:auto;
        }
    }
    
    .slide-details {
        width: 40%;
        height: 100%;
        margin-right: 25px;
        overflow:auto;

    }
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
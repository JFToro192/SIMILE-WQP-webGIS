<template>
    <div class="loading-container" v-if="isLoading">
        <div class="loading-background">
            <img src="https://www.infosostenibile.it/sites/default/files/styles/immagine_in_evidenza/public/immagini/news/progetto-simile-3.jpg?itok=mRBRenZx" alt="SIMILE" style="position: absolute; height:100%; width:100%; top:0; right:0">
        </div>
        <div class="loading-message">
            <div class="loading-message-contents">
                <h1>Welcome to SIMILE's WebGIS</h1>
                <p>Please wait for the layers to load</p>
                <div class="snippet" data-title="dot-pulse">
                    <div class="stage">
                        <div class="dot-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else style="display:none">
    </div>
</template>

<script>
export default {
    name: 'Loading',
	props:{
		isLoading: {
			type: Boolean,
            required:true,
		},
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.loading-container {
    position: absolute;
    z-index: 2;
    height: 100vh;
    width: 100%;
    background: white;
    color: black;
    /* opacity: 0; */
}

.loading-message {
    position: absolute;
    top:0;
    left:0;
    height: 100vh;
    width: 100%;
    background-color: rgba($primary-bg-color,0.3);
    color: $secondary-font-color;
    font-weight: bold;

    &-contents{
        top: 30%;
        left: 25%;
        position: relative;
        text-align: center;
        width: 50%;
    }
}

/**
 * ==============================================
 * Dot Pulse
 * ==============================================
 */
.dot-pulse {
  position: relative;
  left: -9600px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: $tertiary-bg-color;
  color: $tertiary-bg-color;
  box-shadow: 9999px 0 0 -5px $tertiary-bg-color;
  animation: dotPulse 1.5s infinite linear;
  animation-delay: .25s;
}

.dot-pulse::before, .dot-pulse::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: $tertiary-bg-color;
  color: $tertiary-bg-color;
}

.dot-pulse::before {
  box-shadow: 9984px 0 0 -5px $tertiary-bg-color;
  animation: dotPulseBefore 1.5s infinite linear;
  animation-delay: 0s;
}

.dot-pulse::after {
  box-shadow: 10014px 0 0 -5px $tertiary-bg-color;
  animation: dotPulseAfter 1.5s infinite linear;
  animation-delay: .5s;
}

@keyframes dotPulseBefore {
  0% {
    box-shadow: 9984px 0 0 -5px $tertiary-bg-color;
  }
  30% {
    box-shadow: 9984px 0 0 2px $tertiary-bg-color;
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px $tertiary-bg-color;
  }
}

@keyframes dotPulse {
  0% {
    box-shadow: 9999px 0 0 -5px $tertiary-bg-color;
  }
  30% {
    box-shadow: 9999px 0 0 2px $tertiary-bg-color;
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px $tertiary-bg-color;
  }
}

@keyframes dotPulseAfter {
  0% {
    box-shadow: 10014px 0 0 -5px $tertiary-bg-color;
  }
  30% {
    box-shadow: 10014px 0 0 2px $tertiary-bg-color;
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px $tertiary-bg-color;
  }
}
</style>

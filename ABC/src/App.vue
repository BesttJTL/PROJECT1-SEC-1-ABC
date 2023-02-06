<script setup>
import word from './components/data/word.json'
let random = Math.floor(Math.random() * word.length);
let randomEng = word[random].English

const sec = ref(3)

const countdown = () => {
  const seconds = sec
  if(sec.value <= 1 ){
    clearInterval(intervalTime)
  }
  sec.value--

  return countdown
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
</script>
 
<template>
  <div>
    <div id="fullscreen" class="flex flex-col w-screen h-screen ">

      <div id="top" class="h-1/6 w-full bg-lime-200">
        Header
      </div>

      <div id="center" class="flex flex-row h-full w-full">
        <div id="left" class="w-1/12 h-full bg-blue-200">left</div>
        <div id="background" class="flex flex-col w-10/12 h-full relative bg-scroll bg-[length:100%_100%] bg-[url('./src/components/BackgroundPicture/background.png')]">
          <img src="./components/Characters/Blueman.gif" class="w-96 absolute bottom-44 left-8">
          <img src="./components/Characters/GreenSlime.gif" class="w-96  absolute bottom-44 right-14">
          <!-- ออกเเบบได้เลยครับผม -->
          <div id="first" class="w-full h-1/3 bg-transparent border-8 border-red-800 flex flex-row box-border content-center items-center justify-around px-0 mx-0">
      <!-- Score -->
      <div id="score" class="bg-white border-4 border-black block box-border w-15 h-15 mt-5 rounded-xl self-start"><p>Score</p></div>
      <!-- Word -->
      <div id="word" class="bg-white border-4 border-black block box-border w-1/6 h-2/5 text-center text-3xl font-extrabold font-serif  bg-center" >
        <p class="p-6" >{{ randomEng }}</p>
      </div>
      <!-- button pause -->
      <button @click="play()" class="w-14 h-14 self-start justify-self-end mt-5 rounded-full bg-blue-500 focus:outline-none " id="pause">
        <font-awesome-icon icon="pause"  id="play-btn" class="fa-2x text-white text-center items-center content-center" />
      </button>
          <div id="second" class="w-full h-1/3 bg-transparent">
            <!-- Countdown Timer -->
      <div class="flex flex-col gap-2 z-10">
          <h1>Countdown Timer</h1>
          <p id="timeDisplay">Time Remaining: {{ sec }} Sec</p>
          <p id="timeup" v-if="sec === 0" class="text-red-500 inline-flex justify-center gap-2">Replay?<a href="#"><img src="./components/replay.png" class="w-6"></a></p>
        </div>
     <!-- Countdown Timer -->
          </div>
          <div id="third" class="w-full h-1/3 bg-transparent">03</div>
        </div>
        <div id="right" class="w-1/12 h-full bg-blue-400">right</div>
      </div>

      <div id="bottom" class="h-1/6 w-full bg-lime-300">
        Footer
        <button type="submit" class="border-2 border-red-300" @click="openNav">Test Overlay</button>
      </div>
      <div id="myNav" class="overlay">
        <div class="overlay-content flex flex-col justify-center content-center">
          <div class="overlay-element block mt-80 gap-5 w-full h-full pt-4 ">
            <h1 class="text-red-500 text-4xl text-center flex justify-center">Game Over!</h1>
            <button class="border-2 border-blue-400 text-white p-3 my-6 rounded-md text-xl font-bold" @click="closeNav">Play Again</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.9); 
  overflow: hidden; 
  transition: 0.35s; 
}

.overlay-content {
  position: relative;
  width: 100%;
  text-align: center; 
}

.overlay-element button:hover{
  background-color: #3b82f6;
  color: black;
  transition: 0.5s;
}

</style>
<script setup>
import word from './components/data/word.json'
import { ref } from 'vue';

function textshow(){
//random = object[random]
let random = word[Math.floor(Math.random() * word.length)]
const wordbox = word.filter(x => x != random)

  function englishwordshow(){
    return random.English
  }
  function thaiwordshow(){
    return random.Thai
  }
  function wrongwordshow(){
    let wrong = wordbox[Math.floor(Math.random() * wordbox.length)]
    return wrong.Thai
  }
  return {
    englishwordshow,
    thaiwordshow,
    wrongwordshow
  }
}
const {englishwordshow, thaiwordshow, wrongwordshow} = textshow()

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
    <div id="fullscreen" class="flex flex-col w-screen h-screen ">
      <div id="top" class="h-1/6 w-full bg-lime-200">Header</div>
      <div id="center" class="w-full h-4/6 flex flex-row ">
        <div id="left" class="w-1/12 h-full bg-blue-200">left</div>

        <div id="background" class="flex flex-col w-10/12 h-full relative bg-scroll bg-[length:100%_100%] bg-[url('./src/components/background/background.png')]">
          <img src="./components/character/maingif.gif" class="w-64 absolute bottom-32 left-8">
          <img src="./components/character/slimegif.gif" class="w-64  absolute bottom-32 right-14">
          <div id="first" class="w-full h-1/3 border-8 border-red-800 flex flex-row box-border content-center items-center justify-around">
            <!-- Score -->
            <div id="score" class="bg-white border-4 border-black box-border w-20 h-18 mt-5 self-start font-mono font-medium">
              <p class="p-2">Score:</p>
            </div>
            <!-- Word -->
            <div id="word" class="bg-white border-4 border-black box-border w-60 h-2/5 text-center text-3xl font-medium font-mono bg-center">
              <p class="pt-3" >{{ englishwordshow() }}</p>
            </div>
            <!-- button pause -->
              <button @click="play()" class="w-14 h-14 self-start justify-self-end mt-5 rounded-full bg-blue-500 focus:outline-none " id="pause">
                <font-awesome-icon icon="pause"  id="play-btn" class="fa-2x text-white text-center items-center content-center" />
              </button>
          </div>
          <div id="second" class="w-full h-1/3 border-8 border-blue-800 flex flex-col place-items-end">
            <!-- Countdown Timer -->
            <div>
            <div class="flex flex-col gap-2 z-10 mt-2 mr-4 font-mono font-medium bg-white p-2 border-4 border-black">
              <h1>Countdown Timer</h1>
              <p id="timeDisplay">Time Remaining: {{ sec }} Sec</p>
              <!-- <p id="timeup" v-if="sec === 0" class="text-red-500 inline-flex justify-center gap-2">Replay?<a href="#"><img src="./components/replay.png" class="w-6"></a></p> -->
            </div>
            </div>
          </div>
          <div id="third" class="w-full h-1/3 border-8 border-green-700 flex justify-center space-x-16">
            <button class="relative">
              <img src="./components/button/ans1.png" alt="image" class="inset-0 w-60 object-cover hover:bg-blue-400">
              <span class="absolute inset-0 w-full h-full flex items-center justify-center text-white text-xl font-medium mt-5">
                {{ thaiwordshow() }}
              </span>
            </button>

            <button class="relative">
              <img src="./components/button/ans2.png" alt="image" class="inset-0 w-60 object-cover">
              <span class="absolute inset-0 w-full h-full flex items-center justify-center text-white text-xl font-medium mt-5">
                {{ wrongwordshow() }}
              </span>
            </button>
          </div>
        </div>
        <div id="right" class="w-1/12  h-full bg-blue-400">right</div>
      </div>

      <div id="bottom" class="h-1/6 w-full bg-lime-300">
        Footer
        <button type="submit" class="font-mono font-medium bg-white p-2 border-4 border-black" @click="openNav">Test Overlay</button>
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
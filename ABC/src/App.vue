<script setup>
import word from './components/data/word.json'
import { ref } from 'vue';

const boy = 'images/maingif2.gif'
const slime = 'images/slimegif.gif'

function textshow(){
//ทำการสุ่ม object ออกมาหนึ่งชิ้น 
let randomobject = word[Math.floor(Math.random() * word.length)]
//Clear object ที่ random มาเเล้วใส่ Array ใหม่
const boxobject = word.filter(x => x != randomobject)
//หา object ใหม่ที่จะมาสุ่มอีกฝั่ง
let fakeobject = boxobject[Math.floor(Math.random()* boxobject.length)]
//ทำการสุ่มจาก mathrandom เเละใส่เข้าไปใน random
let newarray = []
let mathrandom = Math.floor(Math.random()*100)
    
    if(mathrandom%2 === 0){
      newarray.push(randomobject)
      newarray.push(fakeobject)
    }
    else{
      newarray.push(fakeobject)
      newarray.push(randomobject)
    }

//function show english word
  function engshowword(){
    return randomobject.English
  }
//function การสุ่มคำตอบซ้ายขวาที่มาจาก if else 
  function randomanswer(){
    return newarray
    }

  return{
    engshowword, 
    randomanswer
  }

}
const { engshowword, randomanswer } = textshow()

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

      <!-- <div id="top" class="h-1/6 w-full bg-lime-200">Header</div> -->

      <div id="center" class="w-full h-full flex flex-row">

        <!-- <div id="left" class="w-1/12 h-full bg-blue-200">left</div> -->

        <div id="background" class="flex flex-col w-full h-full relative bg-scroll bg-[length:100%_100%] bg-[url('/images/background.png')]">
          <img :src="boy" class="w-96 absolute bottom-52 left-8">
          <img :src="slime" class="w-80  absolute bottom-52 right-32">
          <div id="first" class="w-full h-1/3 flex flex-row box-border content-center items-center justify-around">
            <!-- Score -->
            <div id="score" class="bg-white border-4 border-black box-border w-20 h-18 mt-5 self-start">
              <p class="p-2">Score :</p>
            </div>
            <!-- Word -->
            <div id="word" class="bg-white border-4 border-black box-border w-64 h-2/5 text-center text-3xl bg-center">
              <p class="pt-8" >{{ engshowword() }}</p>
            </div>
            <!-- button pause -->
              <button @click="play()" class="w-14 h-14 self-start justify-self-end mt-5 rounded-full bg-blue-500 focus:outline-none" id="pause">
                <font-awesome-icon icon="pause"  id="play-btn" class="fa-2x text-white text-center items-center content-center" />
              </button>
          </div>
          <div id="second" class="w-full h-1/3 flex flex-col place-items-end">
            <!-- Countdown Timer -->
            <div>
            <div class="flex flex-col gap-2 z-10 mt-2 mr-6 bg-white p-2 pr-5 border-4 border-black">
              <h1>Countdown Timer</h1>
              <p id="timeDisplay">Time Remaining: {{ sec }} Sec</p>
              <!-- <p id="timeup" v-if="sec === 0" class="text-red-500 inline-flex justify-center gap-2">Replay?<a href="#"><img src="./components/replay.png" class="w-6"></a></p> -->
            </div>
            </div>
          </div>
          <div id="third" class="w-full h-1/3  flex justify-center items-center space-x-40">
            <button class="relative bg-white border-4 border-black box-border w-64 h-2/5 text-center text-2xl bg-center hover:bg-slate-50">
              {{ randomanswer()[0].Thai }}
            </button>

            <button class="relative bg-white border-4 border-black box-border w-64 h-2/5 text-center text-2xl bg-center hover:bg-slate-50">
              {{ randomanswer()[1].Thai }}
            </button>
          </div>
        </div>

        <!-- <div id="right" class="w-1/12  h-full bg-blue-400">right</div> -->

      </div>

      <!-- <div id="bottom" class="h-1/6 w-full bg-lime-300"> </div> -->
        <!-- Footer -->
        <!-- <button type="submit" class="font-mono font-medium bg-white p-2 border-4 border-black" @click="openNav">Test Overlay</button>

      <div id="myNav" class="overlay">
        <div class="overlay-content flex flex-col justify-center content-center">
          <div class="overlay-element block mt-80 gap-5 w-full h-full pt-4 ">
            <h1 class="text-red-500 text-4xl text-center flex justify-center">Game Over!</h1>
            <button class="border-2 border-blue-400 text-white p-3 my-6 rounded-md text-xl font-bold" @click="closeNav">Play Again</button>
          </div>
        </div>
      </div>
       -->
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
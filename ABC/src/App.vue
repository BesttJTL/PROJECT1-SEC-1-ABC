<script setup>
import word from './components/data/word.json'
import { ref, reactive } from 'vue';

const boy = 'images/maingif2.gif'
const slime = 'images/slimegif.gif'
const heart = 'images/huajai.png'
const logoIndex = 'images/logo.png'

////// static function
const box = []
const array = word
let answer = []
const show = ref()
const score = ref(0)
const hp = ref(3)
const hideone = ref()
const hidetwo = ref()
const hidethree = ref()
random()

function random(){
  let randomobject = array[Math.floor(Math.random() * array.length)]
  box[0] = randomobject
  answerRandom()
  console.log(randomobject)
  return randomobject.English
}

function answerRandom(){
  let trueword = box[0]
  let fakegroup = array.filter(x => x != trueword)
  let fakeword = fakegroup[Math.floor(Math.random() * fakegroup.length)]
  let mathrandom = Math.floor(Math.random() * 100)

  if(mathrandom % 2 === 0){
    answer[0] = trueword.Thai
    answer[1] = fakeword.Thai
  }
  else{
    answer[0] = fakeword.Thai
    answer[1] = trueword.Thai
  }
  return answer
}

function leftanswer(x){
  return x[0]
}

function rightanswer(x){
  return x[1]
}
////// addEvent
function checkanswer(x){
  if(x === undefined){
    show.value = {'background-color': 'white'}
  }
  else if(x === box[0].Thai){
    ++score.value
    show.value = {'background-color': 'rgb(74 222 128)'}
  }
  else{
    score.value = 0
    --hp.value
    heartattack()
    show.value = {'background-color': 'rgb(248 113 113)'}
  }
  setTimeout(function() {
  show.value = {'background-color': 'white'}
  random()
  },600)
}
function heartattack(){
  if(hp.value === 2){
    hideone.value = {'visibility': 'hidden'}
  }
  else if(hp.value === 1){
    hidetwo.value = {'visibility': 'hidden'}
  }
  else{
    hidethree.value = {'visibility': 'hidden'}
    // ไอพีทำ Show GAMEOVER 
  }
}
</script>

<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center gap-y-8 bg-[url('images/background2b.png')] bg-[length:100%_100%] bg-center">
    <div class="flex ">
      <h1 class="text-5xl text-white text-bold">Game A B C</h1>
    </div>
      <div class="flex">
        <a href="#" class="btn justify-center items-center" id="btn">Hover to Shine</a>
      </div>
  </div>
    <div id="fullscreen" class="flex flex-col w-screen h-screen ">
      <!-- <div id="top" class="h-1/6 w-full bg-lime-200">Header</div> -->
        <!-- <div id="left" class="w-1/12 h-full bg-blue-200">left</div> -->
        <div id="background" class="flex flex-col w-full h-full relative bg-scroll bg-[length:100%_100%] bg-[url('/images/background.png')]">
          <img :src="boy" class="w-96 absolute bottom-52 left-8">
          <img :src="slime" class="w-80  absolute bottom-52 right-32">
          <div class="absolute flex flex-row space-x-3 mt-7 ml-3  h-auto w-auto ">
          <img :src="heart" class="w-10 " :style="hidethree"/>
          <img :src="heart" class="w-10 " :style="hidetwo"/>
          <img :src="heart" class="w-10 " :style="hideone"/>
          </div>
          <div id="first" class="w-full h-1/3 flex flex-row box-border content-center items-center justify-around">
            <!-- Score -->
            <div id="score" class="bg-white border-4 border-black box-border w-32 h-18 mt-5 self-start text-center">
              <p class="p-2">Score : {{ score }}</p>
            </div>
            <!-- Word -->
            <div id="word" class="bg-white border-4 border-black box-border w-72 h-2/5 text-center text-4xl bg-center " :style="show">
              <p class="pt-8 duration-700" >{{ box[0].English }}</p>
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
              <p id="timeDisplay">Time Remaining: {{  }} Sec</p>
              <!-- <p id="timeup" v-if="sec === 0" class="text-red-500 inline-flex justify-center gap-2">Replay?<a href="#"><img src="./components/replay.png" class="w-6"></a></p> -->
            </div>
            </div>
          </div>
          <div id="third" class="w-full h-1/3  flex justify-center items-center space-x-40">
            <button class="relative bg-white border-4 border-black box-border w-64 h-2/5 text-center text-2xl bg-center duration-300 hover:bg-slate-300" 
            @click="checkanswer(answer[0])">
            {{ leftanswer(answer) }}
            </button>
            <button class="relative bg-white border-4 border-black box-border w-64 h-2/5 text-center text-2xl bg-center duration-300 hover:bg-slate-300 " 
            @click="checkanswer(answer[1])">
            {{ rightanswer(answer) }}
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
       
</template>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: Arial;

}
h1{
    padding: 1rem 3rem;
}
a {
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem 3rem;
    color: #f4f4f4;
    text-transform: uppercase;
  }
  #btn {
    text-decoration: none;
    /* border: 3px solid rgb(35, 217, 230); */
    position: relative;
    overflow: hidden;
  }
  #btn:hover {
    box-shadow: 1px 1px 25px 10px rgb(35, 217, 230);
  }
  #btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgb(248, 250, 250),
      transparent
    );
    transition: all 650ms;
  }

  #btn:hover:before {
    left: 100%;
  }
</style>
<script setup>
import word from './components/data/word.json'
import { ref, reactive, onMounted } from 'vue';
import MajesticonsReload from './components/icons/MajesticonsReload.vue'
const boy = 'images/maingif2.gif'
const slime = 'images/slimegif.gif'
const heart = 'images/huajai.png'
const logoIndex = 'images/logo.png'
const attackBoy = 'images/dead.png'
const boyAttack = 'images/mainatkgif.gif'
const attackSlime = 'images/slimeded.png'

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
const overlay = ref(null)
const boyRef = ref(null)
const slimeRef = ref(null)
random()

const openNav = (() =>{
  overlay.value.style.width = '100%'
})

function random(){
  let randomobject = array[Math.floor(Math.random() * array.length)] //random words with specific range.
  box[0] = randomobject //keep randomed word at first position in new array
  answerRandom()
  console.log(randomobject)
  return randomobject.English
}


function answerRandom(){
  let trueword = box[0] // right answer is in the first array index.
  let fakegroup = array.filter(x => x != trueword)  // pick wrong ans from the first element in array which is filtered by not select a correct answer in the array.
  let fakeword = fakegroup[Math.floor(Math.random() * fakegroup.length)] // random wrong word.
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

//function ตัวละครโดนโจมตีเมื่อตอบผิด
function changeImage() {
  boyRef.value.src = attackBoy
  setTimeout(() => {
    boyRef.value.src = boy
  }, 1000);
}

//function ตัวละครไปโจมตีเมื่อตอบถูก
  const changeGIF = () =>{
      boyRef.value.src = boyAttack;
      setTimeout(() => {
        boyRef.value.src = boy;
        }, 1000);
  
      slimeRef.value.src = attackSlime;
      setTimeout(() => {
      slimeRef.value.src = slime;
        }, 1000);
  }

////// addEvent
function checkanswer(x){
  if(x === undefined){
    show.value = {'background-color': 'white'}
  }
  else if(x === box[0].Thai){
    ++score.value
    show.value = {'background-color': 'rgb(74 222 128)'}
    changeGIF()
  }
  else{
    score.value = 0
    --hp.value
    heartattack()
    show.value = {'background-color': 'rgb(248 113 113)'}
    changeImage()
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
  }
}

const reset = () =>{
  location.reload()
}

const parent = ref(null)
const fullScreenClass = ref(null)
const hide =() =>{
  parent.value.remove(parent)
  fullScreenClass.value.className = 'flex flex-col w-screen h-screen'
} 

</script>

<template>
  <div id="mainDiv">
    <div class="w-screen h-screen flex flex-col items-center justify-center gap-y-8 bg-[url('images/background2b.png')] bg-[length:100%_100%] bg-center" id="parent" ref="parent" >
      <div class="flex pb-10">
        <h1 class="text-8xl text-white text-bold">Game A B C</h1>
      </div>
        <div class="flex pb-32">
          <a href="#fullscreen" class="btn justify-center items-center" @click="hide" id="btn">Let's Play</a>
        </div>
    </div>

    <div id="fullscreen" class="hidden" ref="fullScreenClass" :class="hideScreen">
        <div id="background" class="flex flex-col w-full h-full relative bg-[length:100%_100%] bg-[url('/images/background.png')] bg-fixed">
          <img id="boy" ref="boyRef" :src="boy" class="w-80 absolute bottom-52 left-8 ">
          <img id="slime" ref="slimeRef" :src="slime" class="w-80 absolute bottom-52 right-32 ">
          <div class="absolute flex flex-row space-x-3 mt-7 ml-3  h-auto w-auto justify-start">
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
              <button @click="reset()" class="w-14 h-14 self-start justify-end mt-5 ml-10 rounded-full bg-blue-500 focus:outline-none" id="reset">
                <!-- <font-awesome-icon icon="reset" id="reset-btn" class="fa-2x text-white text-center items-center content-center" /> -->
                <div class=" w-10 h-5 flex justify-center content-center align-middle">
                  <MajesticonsReload/>
                </div>
              </button> 

          </div>
          <div id="second" class="w-full h-1/3 flex flex-col place-items-end">
            <!-- Countdown Timer -->
            <div>
            <!-- <div class="flex flex-col gap-2 z-10 mt-2 mr-6 bg-white p-2 pr-5 border-4 border-black">
              <h1>Countdown Timer</h1>
              <p id="timeDisplay">Time Remaining: {{ time }} Sec</p>
            </div> -->
            </div>
          </div>
          <div id="third" class="w-full h-1/3  flex justify-center items-center space-x-28">
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
      <div id="myNav" class="overlay" :class="hp === 0 ? openNav():''" ref="overlay">
          <div class="overlay-content flex flex-col justify-center content-center">
            <div class="overlay-element block mt-80 gap-5 w-full h-full pt-4 ">
              <h1 class="text-red-500 text-4xl text-center flex justify-center">Game Over!</h1>
              <button class="border-2 border-blue-400 text-white p-3 my-6 rounded-md text-xl font-bold" @click="reload">GO TO FIRST PAGE</button>
          </div>
        </div>
      </div>
       </div>   

       <!-- Start Responsive Div Zone -->
       <!-- <div class="answerBtn flex flex-col w-36 h-full gap-y-4 align-center m-auto">
        <button class="relative bg-white border-4 border-black box-border w-64 h-2/5 text-center text-2xl bg-center duration-300 hover:bg-slate-300">Answer Dummy 1</button>
        <button class="relative bg-white border-4 border-black box-border w-64 h-2/5 text-center text-2xl bg-center duration-300 hover:bg-slate-300">Answer Dummy 2</button>
       </div> -->

  </div>
</template>

<style scoped>
/* Responsive Design */
@media only screen and (max-width: 640px) {
  button{
    margin-top: 4rem;
    padding: 0.5rem;
    height: 7rem;
    width: 7rem;
    word-wrap: break-word;
  }
  #score{
    margin-top: 5rem;
    margin-left: 10px;
  }
  #word {
    /* position: relative;
    margin-left: rem;
    margin-top: 10rem; */
    margin:auto;
    width:50%;
    padding:10px;
    /* width:13rem; */
    word-wrap: break-word;

  }

  #pause{
    visibility: visible;
  }

  #boy{
    width: 10rem;
    margin-left: 0;
  }

  #slime{
    width:10rem;
  }


  /* End of Responsive Design */
}
html{
  height: 100%;
}
body{
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  height:100%
}

#reset{
  display:flex;
  padding:2rem;
  align-content: center;
  justify-content: center;
}

#reset:hover{
  background-color:yellow;
  transition:width 0.3s ease-in-out;
  width:10rem;
}


#reset:hover::after{
  content: "Replay";
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mitr', sans-serif;

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

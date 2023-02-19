<script setup>
import word from "./components/data/word.json";
import { ref, reactive, onMounted } from "vue";
import MajesticonsReload from "./components/icons/MajesticonsReload.vue";
import SystemUiconsVolumeHigh from "./components/icon/SystemUiconsVolumeHigh.vue";
import SystemUiconsVolumeDisabled from "./components/icon/SystemUiconsVolumeDisabled.vue";
const boy = "images/maingif2.gif";
const slime = "images/slimegif.gif";
const heart = "images/huajai.png";
const logoIndex = "images/logo.png";
const attackBoy = "images/dead.png";
const boyAttack = "images/mainatkgif.gif";
const attackSlime = "images/slimeded.png";

//static function
const box = [];
const array = word;
let answer = [];
const show = ref();
const score = ref(0);
const hp = ref(3);
const hideone = ref();
const hidetwo = ref();
const hidethree = ref();
const overlay = ref(null);
const boyRef = ref(null);
const slimeRef = ref(null);
const scoreOverlay = ref(null);
random();

const showOverlay = () => {
  overlay.value.style.width = "100%";
};

function random() {
  let randomobject = array[Math.floor(Math.random() * array.length)]; //random words with specific range.
  box[0] = randomobject; //keep randomed word at first position in new array
  answerRandom();
  console.log(randomobject);
  return randomobject.English;
}

function answerRandom() {
  let trueword = box[0]; // right answer is in the first array index.
  let fakegroup = array.filter((x) => x != trueword); // pick wrong ans from the first element in array which is filtered by not select a correct answer in the array.
  let fakeword = fakegroup[Math.floor(Math.random() * fakegroup.length)]; // random wrong word.
  let mathrandom = Math.floor(Math.random() * 100);
  if (mathrandom % 2 === 0) {
    answer[0] = trueword.Thai;
    answer[1] = fakeword.Thai;
  } else {
    answer[0] = fakeword.Thai;
    answer[1] = trueword.Thai;
  }
  return answer;
}
function leftanswer(x) {
  return x[0];
}
function rightanswer(x) {
  return x[1];
}
//function ตัวละครโดนโจมตีเมื่อตอบผิด
function changeImage() {
  boyRef.value.src = attackBoy;
  setTimeout(() => {
    boyRef.value.src = boy;
  }, 1000);
}
//function ตัวละครไปโจมตีเมื่อตอบถูก
const changeGIF = () => {
  boyRef.value.src = boyAttack;
  setTimeout(() => {
    boyRef.value.src = boy;
  }, 1000);

  slimeRef.value.src = attackSlime;
  setTimeout(() => {
    slimeRef.value.src = slime;
  }, 1000);
};

////// addEvent
function checkanswer(x) {
  if (x === undefined) {
    show.value = { "background-color": "white" };
  } else if (x === box[0].Thai) {
    ++score.value;
    show.value = { "background-color": "rgb(74 222 128)" };
    changeGIF();
  } else {
    score.value = 0;
    --hp.value;
    heartattack();
    show.value = { "background-color": "rgb(248 113 113)" };
    changeImage();
  }
  setTimeout(function () {
    show.value = { "background-color": "white" };
    random();
  }, 600);
}
function heartattack() {
  if (hp.value === 2) {
    hideone.value = { visibility: "hidden" };
  } else if (hp.value === 1) {
    hidetwo.value = { visibility: "hidden" };
  } else {
    hidethree.value = { visibility: "hidden" };
  }
}

const reset = () => {
  location.reload();
};

const parent = ref(null);
const fullScreenClass = ref(null);
const hide = () => {
  parent.value.remove(parent);
  fullScreenClass.value.className = "flex flex-col w-screen h-screen";
};

//song toggle
const bgSong = ref("bgsong.mp3");
const playing = ref(true);
const song = ref(null);
const playSong = () => {
  if (playing.value) song.value.play();
  else song.value.pause();
  playing.value = !playing.value;
};
</script>
<template>
  <div id="mainDiv" @click="testEvent">
    <div
      class="w-screen h-screen flex flex-col items-center justify-center gap-y-8"
      id="parent"
      ref="parent"
    >
      <div class="background">
        <img
          src="/images/background2b.png"
          alt="bg-1"
          class="w-screen h-screen"
        />
      </div>
      <div class="text-game flex pb-10 z-10 w-full justify-center sm:w-screen">
        <h1 class="game-title text-8xl text-white text-bold">Game A B C</h1>
      </div>
      <div class="lets-play flex pb-32">
        <a
          href="#fullscreen"
          class="play-btn btn justify-center items-center mt-20"
          @click="hide"
          id="btn"
          >Let's Play</a
        >
      </div>
    </div>

    <div
      id="fullscreen"
      class="hidden"
      ref="fullScreenClass"
      :class="hideScreen"
    >
      <div
        id="background"
        class="flex flex-col w-full h-full relative bg-[length:100%_100%] bg-[url('/images/background.png')] bg-fixed"
      >
        <img
          id="boy"
          ref="boyRef"
          :src="boy"
          class="w-80 absolute bottom-52 left-8"
        />
        <img
          id="slime"
          ref="slimeRef"
          :src="slime"
          class="w-80 absolute bottom-52 right-32"
        />
        <div
          class="absolute flex flex-row space-x-3 mt-7 ml-3 h-auto w-auto justify-start"
        >
          <img :src="heart" class="w-10" :style="hidethree" />
          <img :src="heart" class="w-10" :style="hidetwo" />
          <img :src="heart" class="w-10" :style="hideone" />
        </div>

        <div
          id="first"
          class="w-full h-1/3 flex flex-row box-border content-center items-center justify-around"
        >
          <!-- Score -->
          <div
            id="score"
            class="rounded-xl bg-white border-4 border-black box-border w-32 h-18 mt-5 ml-10 self-start text-center"
          >
            <p class="p-2">Score : {{ score }}</p>
          </div>
          <!-- Word -->
          <div
            id="word"
            class="rounded-xl bg-white border-4 border-black box-border w-72 h-2/5 text-center text-4xl bg-center"
            :style="show"
          >
            <p class="word-box pt-6 duration-700">{{ box[0].English }}</p>
          </div>
          <div
            class="bg-white border-4 border-black box-border mr-24 w-20 h-20 rounded-full mt-3 self-start text-center"
            id="circleSong"
          >
            <audio ref="song" :src="bgSong" id="music"></audio>
            <button class="text-center pt-1" @click="playSong" id="btnsong">
              <p v-if="playing == true"><SystemUiconsVolumeDisabled /></p>
              <p v-else><SystemUiconsVolumeHigh /></p>
            </button>
          </div>
        </div>
        <div
          id="second"
          class="w-full h-1/3 flex flex-col place-items-end"
        ></div>
        <div
          id="third"
          class="w-full h-1/3 flex justify-center items-center space-x-28"
        >
          <button
            class="relative bg-white border-4 border-black box-border w-64 h-2/5 text-center text-2xl bg-center duration-300 hover:bg-slate-300"
            @click="checkanswer(answer[0])"
          >
            {{ leftanswer(answer) }}
          </button>
          <button
            class="relative bg-white border-4 border-black box-border w-64 h-2/5 text-center text-2xl bg-center duration-300 hover:bg-slate-300"
            @click="checkanswer(answer[1])"
          >
            {{ rightanswer(answer) }}
          </button>
        </div>
      </div>
      <!-- <div id="right" class="w-1/12  h-full bg-blue-400">right</div> -->
      <div
        id="myNav"
        class="overlay"
        :class="hp === 0 ? showOverlay() : ''"
        ref="overlay"
      >
        <div
          class="overlay-content flex flex-col justify-center content-center"
        >
          <div class="overlay-element block mt-80 gap-5 w-full h-full pt-4">
            <h1 class="text-red-500 text-4xl text-center flex justify-center">
              Game Over!
            </h1>
            <!-- <p ref="scoreOverlay">{{ keepScore() }}</p> -->
            <button
              class="back-main-btn border-2 border-blue-400 text-white p-5 my-6 rounded-md text-xl font-bold"
              @click="reset"
            >
              Back To Main
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Responsive Design */
@media only screen and (max-width: 640px) {
  #parent background-image {
    background-position: center;
    background-size: cover;
    width: 500px;
  }
  #text {
    margin-top: 66px;
    font-size: 80px;
  }
  #btn {
    margin-bottom: 5rem;
  } /* game */
  #btnsong {
    text-align: center;
  }
  #circleSong {
    margin-top: 4rem;
    margin-right: 15px;
  }
  #third button {
    margin-top: 4rem;
    padding: 0.5rem;
    height: 7rem;
    width: 7rem;
    word-wrap: break-word;
  }
  #score {
    margin-top: 5rem;
    margin-left: 10px;
  }
  #word {
    margin: auto;
    width: 50%;
    padding: 10px;
    margin-left: 10px;
  }

  #pause {
    visibility: visible;
  }

  #boy {
    width: 10rem;
    margin-left: 0;
  }

  #slime {
    width: 10rem;
  }
  .game-title {
    font-size: 30px;
    transition: 0.5s;
    word-wrap: break-word;
    transition: 0.3s;
  }
  .game-title::before {
    content: "\a";
    white-space: pre;
  }
  .game-title::after {
    content: "\a";
    white-space: pre;
  }
  .play-btn {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%);
  }
  .reset-btn {
    padding: 1px;
    margin-left: 20px;
    width: 4px !important;
    height: 8px !important;
  }
  .word-box {
    word-wrap: break-word;
    margin: auto;
    text-align: center;
    padding-top: 0 !important;
    font-size: 20px;
  }
  .overlay-element {
    margin: 10rem 0px;
    transition: 0.5s;
  }
  #boy {
    position: absolute;
    left: 0px;
    top: 50%;
  }
  #slime {
    position: absolute;
    right: 0px;
    top: 50%;
  }
  .back-main-btn {
    padding: 0px 0.5rem;
    width: 40%;
    height: 3rem;
  }
  .reset-ico {
    position: absolute;
    top: 5.5rem;
  }
  /* End of Responsive Design */
}
html {
  height: 100%;
}

#reset {
  display: flex;
  padding: 2rem;
  align-content: center;
  justify-content: center;
}

#reset:hover {
  background-color: yellow;
  transition: width 0.3s ease-in-out;
  width: 10rem;
}

#reset:hover::after {
  content: "Replay";
  display: flex;
  padding: 0.3rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Mitr", sans-serif;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Arial;
}
h1 {
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
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  transition: 0.35s;
}
.overlay-content {
  position: relative;
  width: 100%;
  text-align: center;
}
.overlay-element button:hover {
  background-color: #3b82f6;
  color: black;
  transition: 0.5s;
}
body,
html {
  height: 100%;
}
.background {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.text-game {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.lets-play {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#name:focus {
  transition: 0.5s ease-in-out;
  background-color: rgb(39, 255, 108, 0.5);
  color: white;
}
#name {
  color: black;
  transition: 0.5s;
  text-align: center;
}
.reset-ico {
  position: absolute;
  top: 2.5rem;
}

button {
  border-radius: 10px;
}
</style>

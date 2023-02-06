<script setup>
import word from './components/data/word.json'
let random = Math.floor(Math.random() * word.length);
let randomEng = word[random].English

</script>
 
<template>
<div id="fullscreen" class="flex flex-col w-screen h-screen ">

<div id="top" class="h-1/6 w-full bg-lime-200">
  Header
</div>

<div id="center" class="flex flex-row h-full w-full">
  <div id="left" class="w-1/12 h-full bg-blue-200">left</div>
  <div id="background" class="flex flex-col w-10/12 h-full relative bg-scroll bg-[length:100%_100%] bg-[url('./src/components/pic/background.png')]">
    <!-- <img src="./components/Charac/hero.gif" class="w-96 absolute bottom-44 left-8">
    <img src="./components/Charac/enemy.gif" class="w-96  absolute bottom-44 right-14"> -->
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
    </div>
    <div id="second" class="w-full h-1/3 bg-transparent">02</div>
    <div id="third" class="w-full h-1/3 bg-transparent">03</div>
  </div>
  <div id="right" class="w-1/12 h-full bg-blue-400">right</div>
</div>

<div id="bottom" class="h-1/6 w-full bg-lime-300">
  Footer
</div>

</div>
</template>
 
<style scoped>
</style>
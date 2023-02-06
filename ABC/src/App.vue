<script setup>
  import words from './data/words.json'
  
  function randomword(){

    let word = words[Math.floor(Math.random() * words.length)]

    const newword = words.filter(x => x != word)
    // console.log(newword)
    function showword(){
      return word.English
    }
    function correctword(){
      return word.Thai
    }
    function wrongword(){

    }
    return {
      showword,
      correctword,
      wrongword
    }
  }
  const { showword, correctword, wrongword } = randomword()
 

</script>
 
<template>
    <div id="fullscreen" class="flex flex-col w-screen h-screen ">

      <div id="top" class="h-1/6 w-full bg-lime-200">
        Header
      </div>

      <div id="center" class="flex flex-row h-full w-full">

        <div id="left" class="w-1/12 h-full bg-blue-200">left</div>

        <div id="background" class="flex flex-col w-10/12 h-full relative bg-scroll 
        bg-[length:100%_100%] bg-[url('./src/components/BackgroundPicture/background.png')]">
          <img src="./components/Characters/Blueman.gif" class="w-64 absolute bottom-44 left-8">
          <img src="./components/Characters/GreenSlime.gif" class="w-64  absolute bottom-44 right-14">

          <div id="first" class="w-full h-1/3 flex justify-center relative"> 
            <img src="./components/UIButton/question.png" class="absolute w-80 pt-2"/>
            
            
            <div class="absolute top-36  text-white text-2xl font-medium">{{ showword() }}</div>
            
          </div>
          
          <div id="second" class="w-full h-1/3 bg-transparent">02</div>
          <div id="third" class="w-full h-1/3 flex justify-center space-x-12">
                <button class="relative">
                  <img src="./components/UIButton/ans2.png" alt="image" class="inset-0 w-60 object-cover ">
                  <span class="absolute inset-0 w-auto  flex items-center justify-center text-white text-xl font-medium  hover:underline">
                    {{ correctword() }}
                  </span>
                </button>
                
                <button class="relative">
                  <img src="./components/UIButton/ans1.png" alt="image" class="inset-0 w-60 object-cover ">
                  <span class="absolute inset-0 w-auto flex items-center justify-center text-white text-2xl font-medium  hover:underline">
                    ตำรวจ
                  </span>
                </button>      
          </div>
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
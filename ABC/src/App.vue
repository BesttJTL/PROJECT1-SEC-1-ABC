<script setup>
// //sample
// function randomQuestion() {
//   const questions = [
//     {
//       question: "Bat",
//       answer: "ค้างคาว",
//     },
//     {
//       question: "Japan",
//       answer: "ญี่ปุ่น",
//     },
//   ];
//   const randomIndex = Math.floor(Math.random() * questions.length);
//   return questions[randomIndex];
// }
// const correctAnswer = ref(0);
// function countCorrectAnswer() {
//   correctAnswer.value++;
// }

// function checkAnswer(answer) {
//   if (answer === randomQuestion().answer) {
//     countCorrectAnswer();
//   } 
// }

</script>
 
<template>
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
          
          <div id="first" class="w-full h-1/3 bg-transparent">01</div>
          <div id="second" class="w-full h-1/3 bg-transparent">02</div>
          <div id="third" class="w-full h-1/3 bg-transparent flex items-center justify-center">
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-8 px-20 border-4 border-blue-700 hover:border-blue-500 rounded mr-10">
              Button1
            </button>

            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-8 px-20 border-4 border-blue-700 hover:border-blue-500 rounded mr-10">
              Button2
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
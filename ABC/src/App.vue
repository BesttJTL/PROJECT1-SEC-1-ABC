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
  <div class="w-full">
  <div>
    <div class="flex flex-col w-screen h-screen bg-purple-100">
    <div class="h-24 w-full bg-lime-200">
      Header
    </div>
    <div class="flex items-center mx-20 justify-center h-screen content-center bg-slate-50">
      <button type="button" class="bg-green-300 border-collapse">Click Me!</button>
    </div>
    <div class="h-24 w-full bg-lime-300">
      Footer
    </div>
  </div>
  </div>
</div>
  
</template>
 
<style scoped>

</style>
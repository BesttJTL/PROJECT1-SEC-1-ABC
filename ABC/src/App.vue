<script setup>
//sample
function randomQuestion() {
  const questions = [
    {
      question: "Bat",
      answer: "ค้างคาว",
    },
    {
      question: "Japan",
      answer: "ญี่ปุ่น",
    },
  ];
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}
const correctAnswer = ref(0);
function countCorrectAnswer() {
  correctAnswer.value++;
}

function checkAnswer(answer) {
  if (answer === randomQuestion().answer) {
    countCorrectAnswer();
  } 
}

</script>
 
<template>
  <h1 class="text-3xl font-bold underline text-green-200">
    Dev mode
  </h1>
</template>
 
<style scoped>

</style>
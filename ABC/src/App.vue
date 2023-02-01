<script setup>

</script>
 
<template>
  <div>
    <section class="navbar">
            <ul>
                <li><a href="#">Level Select</a></li>
                <li><a href="#">Credits</a></li>
            </ul>
        </section>
    <h1 class="text-3xl font-bold underline text-green-200">
      Dev mode
    </h1>

  </div>
  
</template>
 
<style scoped>
.navbar{
    display:flex;
    background-color: #333;
    height: 5rem;
}
ul li{
    display: flex;
    list-style: none;
    align-content: center;
    margin:0px 0px 1rem 1rem;
    justify-content: center;
}

ul{
    display: flex;
    align-content: center;
    margin-top: 10px;
    padding: 1rem;
}

a{
    text-decoration: none;
    display: flex;
    color: #fff;
}
</style>
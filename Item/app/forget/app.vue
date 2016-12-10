<template>
  <div id="app">
    <title title="忘记密码"></title> 
    <register btn="确认"></register>
  </div>
</template>

<script>
import Title from '../commons/title';
import Register from '../commons/forget-register';
export default {
  components: {
    Title,
    Register
  },
}
</script>
  
<style>
.header a:nth-child(3){
  display: none;
}

</style>

<template>
  <div class="topBar">
    
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      msg: 'TopBar Mounted'
    }
  },
  mounted (){
    var that = this;
    console.log(that.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style> 

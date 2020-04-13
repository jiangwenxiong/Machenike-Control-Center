<template>
  <div class="sideBar">
    
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      msg: 'SideBar Is Mounted'
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

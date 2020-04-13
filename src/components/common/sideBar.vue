<template>
  <div class="sideBar">
    
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      msg: 'SideBar Mounted'
    }
  },
  mounted (){
    var that = this;
    console.log(that.msg)
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style> 

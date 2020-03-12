<template>
    <div id="tab1">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tab1"
    }
</script>

<style scoped>
  #tab1{
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 49px;
    background-color: darkgray;
    box-shadow: 0px -1px 5px darkgray;
    display: flex;
  }
</style>

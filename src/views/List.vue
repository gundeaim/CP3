<template>
  <div class="page">
      <div class="list-container">
        <div class="username">
          <div class="signin-header"><h1>Books To Read:</h1></div>
          <p><input type="text" id="IDTYPE" v-model="userInput"><br><br></p>
          <button type="button" name="signin-button" @click="select()">Add To List</button>
        </div>
        <div class="item-container">
          <div v-for="item in this.$root.$data.myList" :key="item.id">
            <ul>{{item}}</ul>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
    data() {
      return {
        userInput: ''
      };
    },
  methods: {
    select(){
      this.$root.$data.myList.push(this.userInput);
      console.log(this.$root.$data.myList)
      this.userInput = '';
    }
  },
}
</script>

<style scoped>

  .page{
    background-color: #D5C4B2;
    display: flex;
    justify-content: center;
    height: auto;
    align-items: center;
  }

  .list-container{
    color: #51525B;
    width: 60%;
    height: 90%;
    background-color: #F2EADF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .signin-header{
    padding: 30px;
    padding-bottom: 0px;
    text-align: center;
  }

  .username{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-container{
    color: #51525B;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 25px;
    margin: 15px;
    width: 100%;
    padding-left: 35%;
  }
</style>

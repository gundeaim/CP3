<template>
<div class="page">
  <div class="signin-container">
    <div class="signin-header"><h1>Sign In To Escape</h1></div>
    <div class="facebook-button-div">
      <button class="button">Sign In With FaceBook</button>
    </div>
    <div class="google-button-div">
      <button class="button">Sign in with Google</button>
    </div>
    <div class="or"><h4>--Or--</h4></div>
    <div class="username">
      <label for="username">Username:</label>
      <input type="text" id="IDTYPE" v-model="userInput"><br><br>
    </div>
    <button type="button" name="signin-button" @click="select()">Sign In</button>
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
      this.$root.$data.userName = this.userInput;
      this.$root.$data.userList = this.userInput + "'s";
    }
  },
}
</script>

<style scoped>
  .page, .page-q, .page-r{
    background-color: #D5C4B2;
    display: flex;
    justify-content: center;
    height: auto;
    align-items: center;
  }

  .signin-container, .quotes-container, .reviews-container{
    color: #51525B;
    width: 60%;
    height: 90%;
    background-color: #F2EADF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .signin-header, .quotes-header{
    padding: 30px;
    text-align: center;
  }

  .facebook-button-div {
      padding-bottom: 10px;
  }
  .google-button-div{
    padding-bottom: 25px;
  }

  .button {
    background-color: #cad1c7;
  }

  .or{
    padding-bottom: 15px;
  }

  .username, .password{
    display: flex;
    flex-direction: column;
  }

</style>

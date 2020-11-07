<template>
  <div id="app">
    <div class="grid-container">
        <div class="item1">
          <router-link to="/">
            <img src="/images/booklogo.png">
          </router-link>
        </div>
        <div class="item2">
          <router-link to="/Login">
            <div class="menu-item login">
              <img src="/images/login-icon.png">
              <p>{{currentUser}}</p>
            </div>
          </router-link>
        </div>
        <div class="item3">
          <router-link to="/Quotes">
            <div class="menu-item quotes">
              <img src="/images/quotes-icon.png">
              <p>Quotes</p>
            </div>
          </router-link>
        </div>
        <div class="item4">
          <router-link to="/Review">
            <div class="menu-item review">
              <img src="/images/review-icon.png">
              <p>Reviews</p>
            </div>
          </router-link>
        </div>
        <div class="item5">
          <router-link to="/List">
            <div class="menu-item list">
              <img src="/images/list-icon.png">
              <p>{{userList}} List</p>
            </div>
          </router-link>
        </div>
      </div>
    <router-view />
    <div class="footer">
      <div class="footer-container">
          <div class="Information"><h2>GitHub</h2></div>
          <div class="contact-links">
            <div class="indeed"><a href='https://github.com/gundeaim/CP3'>Repository</a></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentUser(){
      return this.$root.$data.userName;
    },
    userList(){
      return this.$root.$data.userList;
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

#menu a {
  color: #B84901;
}

.item1 img {
  height: 150px;
}

.item2 img, .item3 img {
  width: 50px;
}
.item4 img, .item5 img {
  width: 40px;
}

.menu-item login{
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.item1 {
  grid-area: myArea;
}

.grid-container {
  display: grid;
  grid-template-areas: 'myArea myArea myArea myArea';
  grid-gap: 10px;
  background-color: #8A9986;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
.footer{
  color: white;
  background-color: #8A9986;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.footer-container {  /* For debugging */
  height: 60px;
  width: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.Information{
  padding-top: 10px;
  padding-bottom: -10px;
}

.contact-links{
  padding-top: -20px;
  width: auto;
  display: flex;
  justify-content: center;
}
</style>

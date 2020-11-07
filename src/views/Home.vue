<template>
<div class="background-picture">
  <img class="home-img" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/02/10/old-book.jpg">
  <div class="mid-right"><p>I HAVE ALWAYS IMAGINED PARADISE AS A KIND OF LIBRARY</p><p class="author">- Jorge Luis Borges</p></div></div>
</template>

<script>

</script>

<style scoped>
img.home-img {
  margin: auto;
  display: block;
  max-width: 100%;
}

.background-picture{
  max-height: 700px; overflow: hidden;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  text-align: center;
  color: #51525B;
}

.mid-right{
  position: absolute;
  width: 45%;
  top: 20%;
  right: 25px;
  font-size: 55px;
  text-shadow: 1px 1px black;
}

p.author{
  font-size: 35px;
}


@media only screen and (min-width: 401px) and (max-width: 960px)  {
  div.mid-right {
    font-size: 25px;
  }
  p.author{
    font-size: 20px;
  }
}

@media only screen and (max-width: 400px) {
  div.mid-right {
    font-size: 13px;
    right: 10px;
  }
  p.author{
    font-size: 10px;
  }
  div.signin-header{
      padding: 5px;
      padding-bottom: 20px;
  }
}

</style>

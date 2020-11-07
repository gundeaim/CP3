<template>
  <div class="page-r">
    <div class="reviews-container">
      <div class="books">
        <div class="book" v-for="book in books" :key="book.id">
        <div class="review-container">
          <div class="book-cover"><img class="book-cover-img" :src="'/images/Covers/'+book.bookCover"></div>
          <div class="review">
            <div class="title"><strong>Title: </strong>{{book.Title}}</div>
            <div class="author"><strong>By: </strong>{{book.Author}}</div>
            <div class="rating"><strong>Rating: </strong>{{book.Review}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: Array
  }
}
</script>

<style scoped>
img.book-cover-img{
  width: 120px;
  height: auto;
  padding: 10px;
  padding-top: 18px;
}

.review-container{
  display: flex;
  margin: 30px;
  align-items: center;
}

.review{
  margin: 10px;
  border-style: solid none none none;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  padding-left: 25px;
  padding-bottom: 20px;
  font-size: 30px;
}

.page-r{
  background-color: #D5C4B2;
  display: flex;
  justify-content: center;
  height: auto;
  align-items: center;
}

.reviews-container{
  color: #51525B;
  width: 60%;
  height: 90%;
  background-color: #F2EADF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

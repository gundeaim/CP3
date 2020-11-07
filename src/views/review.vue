<template>
  <div>
    <BookList :books="books" />
  </div>
</template>

<script>
import BookList from "../components/BookList.vue"
  export default {
    name: 'Review',
    components: {
      BookList
    },
    computed: {
      books() {
        return this.$root.$data.books;
      }
    },
  }
</script>

<style scoped>

  img.book-cover-img{
    width: 80px;
    height: auto;
    padding: 10px;
    padding-top: 18px;
  }

  .review-container{
    display: flex;
  }

  .review{
    border-style: solid none none none;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
    padding-left: 25px;
    padding-bottom: 20px;
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

<template>
  <div class="page-q">
    <div class="quotes-container">
      <div class="quotes-header"><h1>Favorite Quotes Of The Week</h1></div>
      <div class="quotes">
        "I wish I wrote the way I thought; Obsessively, Incessantly, With maddening hunger. I'd write to
        the point of suffocation. I'd write myself into nervous breakdowns, Manuscripts spiralling out like tentacles into abysmal nothing. And I'd write about
        you a lot more than I should."
      </div>
      <div class="author">
        - Benedict Smith
      </div>
      <div class="quotes">
        "despite knowing they wont be here for long
        they still choose to live their brightest lives"
      </div>
      <div class="author">
        - Rupi Kaur
      </div>
      <div class="quotes">
        "i learned vulnerability is always the right choice because it is easy to be
        cold in a world that makes it so very difficult to remain soft."
      </div>
      <div class="author">
        - Rupi Kaur
      </div>
      <div class="quotes">
        "You call it hope — that fire of fire!
        It is but agony of desire.""
      </div>
      <div class="author">
        - Edgar Allen Poe
      </div>
      <div class="quotes">
        "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking."
      </div>
      <div class="author">
        - Leo Tolstoy
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-q{
    background-color: #D5C4B2;
    display: flex;
    justify-content: center;
    height: auto;
    align-items: center;
  }

  .quotes-container {
    color: #51525B;
    width: 60%;
    height: 90%;
    background-color: #F2EADF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .quotes-header{
    padding: 30px;
    text-align: center;
  }

  .quotes{
    align-self: flex-start;
    padding-left: 15px;
    padding-right: 15px;
    border-style: solid none none none;
    padding-top: 5px;
  }

  .author{
    font-size: 13px;
    align-self: flex-start;
    padding-top: 7px;
    padding-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 600;
  }

</style>

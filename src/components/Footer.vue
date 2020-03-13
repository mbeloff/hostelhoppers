<template>
  <div>
    <div class="spacer"></div>
    <div class="container-fluid bg-light border-top border-bottom">
      <div class="container ">
        <div class="col-12 col-md-10 mx-auto">
          <img src="@/assets/hhmapfull.svg" alt="" class="img-fluid" style="" />
          <ul class="list-unstyled text-center small" style="columns: 3">
            <li>Adelaide</li>
            <li>Airlie Beach</li>
            <li>Alice Springs</li>
            <li>Brisbane</li>
            <li>Broome</li>
            <li>Byron Bay</li>
            <li>Cairns</li>
            <li>Darwin</li>
            <li>Exmouth</li>
            <li>Hobart</li>
            <li>Melbourne</li>
            <li>Monkey Mia</li>
            <li>Perth</li>
            <li>Sydney</li>
            <li>Auckland</li>
            <li>Christchurch</li>
            <li>Queenstown</li>
            <li>Wellington</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="container-fluid bg-light p-2">
        <p class="mb-0 orange-text h3 text-center py-5 my-2">
          Book with your friendly travel agent today
        </p>
      </div>
      <div class="container-fluid flex-center orange">
        <p class="mb-0 white-text small">
          <i class="far fa-copyright vertical-align-middle"></i>
          hostelhoppers.com.au
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['global']
}
</script>

<style>
#footer {
  height: 50px;
}

.footer-brand {
  max-height: 50px;
}

.spacer {
  min-height: 25vh;
}
</style>

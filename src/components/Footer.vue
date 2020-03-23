<template>
  <div>
    <div class="container-fluid bg-light border-top border-bottom">
      <div class="container p-0">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              src="@/assets/hhmapfull.svg"
              alt=""
              class="img-fluid"
              style=""
            />
          </div>
          <div class="col-12 col-md-6 mx-auto my-auto text-muted small">
            <div class="row">
              <h6 class="text-center h4 my-4 col-12">
                18 Convenient Rental Locations
              </h6>

              <ul class="col-4 text-left mx-auto list-unstyled">
                <li>Adelaide</li>
                <li>Airlie Beach</li>
                <li>Alice Springs</li>
                <li>Brisbane</li>
                <li>Broome</li>
                <li>Byron Bay</li>
              </ul>

              <ul class="col-4 text-left mx-auto list-unstyled">
                <li>Cairns</li>
                <li>Darwin</li>
                <li>Exmouth</li>
                <li>Hobart</li>
                <li>Melbourne</li>
                <li>Monkey Mia</li>
              </ul>

              <ul class="col-4 text-left mx-auto list-unstyled">
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
      </div>
    </div>
    <div id="footer">
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

.orange-text {
  color: #ff7535 !important;
}

.orange {
  background-color: #ff7535 !important;
}
</style>

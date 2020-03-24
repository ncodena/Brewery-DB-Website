<template>
  <div class="wrapper" :key="beer.id">
    <!-- Header -->
    <div class="header">
      <h2 class="align">{{ beer.name }}</h2>
      <h4 class="align">{{ beer.tagline }}</h4>
    </div>

    <section class="intro">
      <div class="imageContainer">
        <img v-if="beer.image_url" :src="beer.image_url" img-alt="image" />
      </div>
      <div>
        <h6>First Brewed: {{ beer.first_brewed }}</h6>
        <p class="info">{{ beer.description }}</p>
      </div>
    </section>

    <section class="properties">
      <div class="property">
        <h6>ABV</h6>
        {{ beer.abv }}
      </div>

      <div class="property">
        <h6>EBC</h6>
        {{ beer.ebc }}
      </div>

      <div class="property">
        <h6>PH</h6>
        {{ beer.ph }}
      </div>

      <div class="property">
        <h6>IBU</h6>
        {{ beer.ibu }}
      </div>
    </section>

    <!-- Top Container -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";
export default {
  name: "Details",
  props: {
    beer: Object
  }
  //   created(){
  //     console.log(this.beer)
  //   }
};
</script>

<style lang="scss">
.wrapper {
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-gap: 20px;
}
.header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.align {
  display: flex;
  justify-content: center;
}

.intro {
  background: white;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
}
.info {
  font-size: 30px;
  text-align: justify;
}
.imageContainer {
  display: flex;
  justify-content: center;
}
img {
  max-width: 130px;
  min-height: 40%;
}

.properties {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

.property {
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  clip-path: circle(50%);
  height: 7em;
  width: 7em;
}

// Media Queries
@media (max-width: 700px) {
  .intro {
    grid-template-columns: 1fr;
  }
  .img {
    max-width: 80px;
    min-height: 40%;
  }
  .property {
    height: 5em;
    width: 5em;
  }
  .info {
    font-size: 20px;
  }
}
</style>

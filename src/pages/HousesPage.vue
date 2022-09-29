<template>
  .<div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-4 " v-for="c in classifieds">

        <div v-if="c.listingType == 'House'">
          <router-link :to="{
          name: 'Details',
          params:{
            id: c.id
          }
          }">
            <HouseCard :house="c.listing" :seller="c.seller" @deleteClassified="deleteClassified(c.id)" />
          </router-link>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState.js"
import { classifiedsService } from "../services/ClassifiedsService.js"
import HouseCard from "../components/HouseCard.vue"

export default {
  setup() {
    async function getClassifieds() {
      try {
        await classifiedsService.getClassifiedByListingType("House");
      }
      catch (error) {
        console.error("[getClassifieds]", error);
        Pop.error(error);
      }
    }
    getClassifieds();
    return {
      classifieds: computed(() => AppState.classifieds)
    };
  },
  components: { HouseCard }
}
</script>


<style lang="scss" scoped>

</style>
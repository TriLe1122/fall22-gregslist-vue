<template>
  .<div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-4 " v-for="c in classifieds">

        <div v-if="c.listingType == 'Job'">
          <router-link :to="{
          name: 'Details',
          params:{
            id: c.id
          }
          }">
            <JobCard :job="c.listing" :seller="c.seller" @deleteClassified="deleteClassified(c.id)" />
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState.js"
import { classifiedsService } from "../services/ClassifiedsService.js"
import JobCard from "../components/JobCard.vue"

export default {
  setup() {
    async function getClassifieds() {
      try {
        await classifiedsService.getClassifiedByListingType("Job");
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
  components: { JobCard }
}
</script>


<style lang="scss" scoped>

</style>
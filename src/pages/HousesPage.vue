<template>
  <div class="component">


  </div>
</template>


<script>
import { classifiedsService } from "../services/ClassifiedsService.js"

export default {
  setup() {
    async function getClassifieds() {
      try {
        await classifiedsService.getClassifiedByListingType('House')
      } catch (error) {
        console.error('[getClassifieds]', error)
        Pop.error(error)
      }
    }
    getClassifieds()


    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
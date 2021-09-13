<template>
  <div>
    <h3 class="text-center mt-2">Session 1</h3>
    <Session1Activity1 />
    <Session1Activity2 />
    <Session1Activity3 />
    <Session1Activity4 />
  </div>
</template>

<script>
import Session1Activity1 from "@/views/SessionTesting/Session1Activity1";
import Session1Activity2 from "@/views/SessionTesting/Session1Activity2";
import Session1Activity3 from "@/views/SessionTesting/Sesion1Activity3";
import Session1Activity4 from "@/views/SessionTesting/Session1Activity4";
export default {
  name: "SessionTesting",
  components: {
    Session1Activity4,
    Session1Activity3,
    Session1Activity2,
    Session1Activity1
  },
  data() {
    return {
      showed: false,
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
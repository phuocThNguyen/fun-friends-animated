<template>
  <div class="interactive-container" id="alt-bg">
    <img src="../../assets/images/introduction/page5.jpg" alt="intro" class="session-background" id="fix-pos">
    <a class="mask" id="mask-1" href="https://apps.apple.com/au/app/the-friends-programs-game/id1104845670" target="_blank"/>
    <a class="mask" id="mask-2" href="https://apps.apple.com/au/app/thumbs-down-or-thumbs-up/id1301090858" target="_blank"/>
    <a class="mask" id="mask-3" href="https://play.google.com/store/apps/details?id=org.friendsresilience.thumbsdownup" target="_blank"/>
    <div class="page-number" id="page-dark">5</div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage4',
}
</script>

<style scoped>
#alt-bg {
  background-color: #00CE7C;
}
.mask {
  position: absolute;
  width: 68vh;
  height: 5vh;
}
#mask-1 { left: 33vh; bottom: 16.5vh;}
#mask-2 { left: 33vh; bottom: 11vh; }
#mask-3 { left: 33vh; bottom: 5.5vh; }
#fix-pos {
  top: -5vh
}
</style>
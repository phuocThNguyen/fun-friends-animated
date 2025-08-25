<template>
  <div class="interactive-container" id="alt-bg">
    <div class="text-box">
      <h1>Fun FRIENDS: Animated Activity E-Book</h1>
      <p>Published in 2025 by FRIENDS Resilience Pty Ltd</p>
      <p>Website: www.friendsresilience.org</p>
      <p>Email: info@friendsresilience.org</p>
      <p>All text copyright © 2025 FRIENDS Resilience Pty Ltd.</p>
      <p>All illustrations copyright © 2025 FRIENDS Resilience Pty Ltd.</p>
      <p class="mb-1"><strong>Copying</strong></p>
      <p>The exclusive right to publish the material in this book throughout the world is owned by Friends Resilience Pty Ltd. Except as permitted under the Australian
        Copyright Act 1968, no part of this publication may be reproduced, stored in a retrieval system, transmitted in any form or by any means, electronic, mechanical,
        photocopying, recording or otherwise, without the prior written permission of the publisher. Any such activity unless expressly permitted in writing from the
        publisher is an infringement of the artistic and intellectual rights of the author and illustrator and is liable to legal action which will be pursued. </p>
      <p class="mb-1"><strong>Disclaimer</strong></p>
      <p>During the preparation of this work, all possible efforts have been made to provide information based on quality standards and acceptable practice at the time
        of publication. The publisher, however, makes no guarantees of any kind in terms of psychological outcome relating to the use of this work and disclaims all
        responsibility or liability for direct or consequential damages resulting from any use of the material that is contained in this book.</p>
    </div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/introduction/2Animated_Book_Page1.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">1</div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage2',
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    }
  },
  mounted() {
    this.playVoiceOver();
  }
}
</script>

<style scoped>
#alt-bg {
  background-color: #00CE7C;
}
.text-box {
  position: absolute;
  padding: 2vh;
  width: 100%;
  height: 100%;
  color: white;
}
.text-box h1 {margin-bottom: 3vh}
.text-box p {margin-bottom: 2.5vh;font-size: 2.2vh }
</style>
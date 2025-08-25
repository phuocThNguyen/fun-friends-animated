<template>
  <div class="interactive-container">
    <div class="content-list">
      <div @click="setSession(1)" class="content-line">
        <p><strong>Session 1:</strong>
          Hip Hip Hooray! It's FUN FRIENDS today!</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(2)" class="content-line">
        <p><strong>Session 2:</strong>
          Feelings: Understanding feelings in ourselves</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(3)" class="content-line">
        <p><strong>Session 3:</strong>
          Understanding feelings in other people</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(4)" class="content-line">
        <p><strong>Session 4:</strong>
          Understanding body clues and five senses</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(5)" class="content-line">
        <p><strong>Session 5:</strong>
          Talking about 'Red' (unhelpful) and
          'Green' (helpful) thoughts</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(6)" class="content-line">
        <p><strong>Session 6:</strong>
          Talking more about 'Red' (unhelpful) and
          'Green' (helpful) thoughts</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(7)" class="content-line">
        <p><strong>Session 7:</strong>
          Talking about setting goals and trying to
          do new things</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(8)" class="content-line">
        <p><strong>Session 8:</strong>
          Talking about how to be a kind friend</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(9)" class="content-line">
        <p><strong>Session 9:</strong>
          Getting rewards for trying</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(10)" class="content-line">
        <p><strong>Session 10</strong>:
          Someone to look up to</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(11)" class="content-line">
        <p><strong>Session 11</strong>:
          Talking about support teams</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
      <div @click="setSession(12)" class="content-line">
        <p><strong>Session 12</strong>:
          Talking about being happy with our efforts!</p>
        <svg class="content-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
          <g id="object">
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp0" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
              <path id="&lt;Path&gt;" class="shp1" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/introduction/3Animated_Book_Page2.mp3" ref="voice"/>
    <div class="page-number" id="page-light">2</div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage3',
  methods: {
    setSession(number) {
      this.$emit('setSession', number)
    },
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
.content-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.9vh;
  border-bottom: 1px solid #000;
}
.content-line p {
  margin-bottom: 0;
}
.content-line:hover {
  cursor: pointer;
}
.content-arrow {
  width: auto;
  height: 3vh;
}
.content-list {
  position: absolute;
  width: 90%;
  left: 5%;
  top: 2%;
  font-size: 2.5vh;
}
tspan { white-space:pre }
.shp0 { fill: #272525 }
.shp1 { fill: #ffffff }
</style>
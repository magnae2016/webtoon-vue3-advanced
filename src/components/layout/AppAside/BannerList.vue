<template>
  <div class="asideBanner">
    <a onclick="nclk_v2(event,'sna.proposal');" href="/business/proposalGuide">
      <img
        src="https://ssl.pstatic.net/static/comic/images/bnr_partnership.jpg"
        width="240"
        height="86"
        alt="웹툰, 웹소설 온라인 광고 판권 사업"
      />
    </a>
  </div>
  <div class="asideBanner">
    <a
      onclick="nclk_v2(event,'sna.writerproposal');"
      href="https://joinus.comic.naver.com"
    >
      <img
        src="https://ssl.pstatic.net/static/comic/images/bnr_joinus.jpg"
        width="240"
        height="86"
        alt="연재 경력 작가 웹툰 차기작 제안"
      />
    </a>
  </div>
  <div class="asideBanner">
    <a href="https://comic.naver.com/contest/greatest/webtoon">
      <img
        src="https://ssl.pstatic.net/static/comic/images/bnr_contest_2022.jpg"
        width="240"
        height="86"
        alt="2022 지상최대공모전 - 접수 및 안내"
      />
    </a>
  </div>
  <div class="asideBanner">
    <a
      onclick="nclk_v2(event,'sna.recruit');"
      href="https://recruit.webtoonscorp.com"
    >
      <img
        src="https://ssl.pstatic.net/static/comic/images/bnr_careers.jpg"
        width="240"
        height="86"
        alt="웹툰 채용공고 CAREERS"
      />
    </a>
  </div>
  <div class="asideButton">
    <a
      class="btn_faq"
      onclick="nclk_v2(event,'sna.faq')"
      href="https://help.naver.com/support/service/main.help?serviceNo=799"
      target="_blank"
      title="새 창"
    >
      <span class="blind">웹툰 고객센터</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
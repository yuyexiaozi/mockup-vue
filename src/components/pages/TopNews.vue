<script lang="ts">
import { defineComponent } from 'vue';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/swiper.scss'
import AppArrowAnimeButton from '@/components/AppArrowAnimeButton.vue';

export default defineComponent({
  name: 'TopNews',
  components: {
    AppArrowAnimeButton,
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper:any) => {
      console.log(swiper);
    }
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    }
  }
});
</script>

<template>
  <section class="TopNews">
    <div class="TopNews__container">
      <h2 class="TopNews__ttl">NEWS</h2>
      <router-link to="about">
        <AppArrowAnimeButton>VIEW ALL</AppArrowAnimeButton>
      </router-link>
    </div>
    <swiper :slides-per-view="2.5" :space-between="50" class="TopNews__ul">
      <swiper-slide class="TopNews__list">
        <a href="#" class="TopNews__link">
          <p class="TopNews__pic"><img src="@/assets/images/news_img01.jpg" alt="news画像" class="TopNews__img"></p>
          <p class="TopNews__txt">Labore duis exercitation labore ullamco pariatur Lorem in exercitation proident laboris.
          </p>
          <p class="TopNews__date">20XX.00.00</p>
        </a>
      </swiper-slide>
      <swiper-slide class="TopNews__list">
        <a href="#" class="TopNews__link">
          <p class="TopNews__pic"><img src="@/assets/images/news_img01.jpg" alt="news画像" class="TopNews__img"></p>
          <p class="TopNews__txt">Labore duis exercitation labore ullamco pariatur Lorem in exercitation proident laboris.
          </p>
          <p class="TopNews__date">20XX.00.00</p>
        </a>
      </swiper-slide>
      <swiper-slide class="TopNews__list">
        <a href="#" class="TopNews__link">
          <p class="TopNews__pic"><img src="@/assets/images/news_img01.jpg" alt="news画像" class="TopNews__img"></p>
          <p class="TopNews__txt">Labore duis exercitation labore ullamco pariatur Lorem in exercitation proident laboris.
          </p>
          <p class="TopNews__date">20XX.00.00</p>
        </a>
      </swiper-slide>
      <swiper-slide class="TopNews__list">
        <a href="#" class="TopNews__link">
          <p class="TopNews__pic"><img src="@/assets/images/news_img01.jpg" alt="news画像" class="TopNews__img"></p>
          <p class="TopNews__txt">Labore duis exercitation labore ullamco pariatur Lorem in exercitation proident laboris.
          </p>
          <p class="TopNews__date">20XX.00.00</p>
        </a>
      </swiper-slide>
      <swiper-slide class="TopNews__list">
        <a href="#" class="TopNews__link">
          <p class="TopNews__pic"><img src="@/assets/images/news_img01.jpg" alt="news画像" class="TopNews__img"></p>
          <p class="TopNews__txt">Labore duis exercitation labore ullamco pariatur Lorem in exercitation proident laboris.
          </p>
          <p class="TopNews__date">20XX.00.00</p>
        </a>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>
.TopNews {
  padding: 50px 0 100px 50px;
  overflow-x: hidden;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 14vw;
    padding: 120px 0 120px 7vw;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px 50px 0;
    @media screen and (min-width: 1024px) {
      flex-direction: column;
      align-items: start;
      flex-shrink: 0;
      margin: 0;
    }
  }

  &__ttl {
    @include sectionTtl();
  }

  &__ul {
    display: flex;
    gap: 28px;
  }

  &__list {
    flex-shrink: 0;
    width: 300px;
    list-style-type: none;
    @media screen and (min-width: 1024px) {
      width: 340px;
    }
    &:last-of-type {
      display: none;
      @media screen and (min-width: 1024px) {
        display: block;
      }
    }
  }

  &__img {
    display: block;
    object-fit: cover;
    object-position: center center;
    transition: .5s;
  }

  &__pic {
    height: 200px;
    margin-bottom: 10px;
    overflow: hidden;
    @media screen and (min-width: 1024px) {
      margin-bottom: 14px;
    }
  }

  &__link {
    color: #000;
    transition: .2s;
    &:hover {
      & .TopNews__img {
        transform: scale(1.1);
      }
      color: #8e8e8e;
    }
  }

  &__txt {
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.1em;
    @media screen and (min-width: 1024px) {
      margin-bottom: 14px;
      font-size: 14px;
    }
  }

  &__date {
    font-size: 12px;
  }
}</style>
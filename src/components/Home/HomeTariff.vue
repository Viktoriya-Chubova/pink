<template>
  <section class="tariff">
    <div class="container">
      <table class="tariff__table">
        <thead>
          <tr>
            <th class="tariff__none"></th>
            <th class="tariff__name">
              БАЗА
              <p class="tariff__price">1,99 USD</p>
            </th>
            <th class="tariff__name tariff__hits">
              СТАНДАРТ
              <p class="tariff__price">3,99 USD</p>
              <p class="tariff__hit">ХИТ</p>
            </th>
            <th class="tariff__name">
              АНЛИМ
              <p class="tariff__price">9,99 USD</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item">
            <td class="tariff__item">{{ item.name }}</td>
            <td>
              <img :src="require(`@/assets/images/tariff/${item.base}.png`)" />
            </td>
            <td>
              <img
                :src="require(`@/assets/images/tariff/${item.standard}.png`)"
              />
            </td>
            <td>
              <img
                :src="require(`@/assets/images/tariff/${item.anlim}.png`)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

.tariff {
  background: $grey;
  clip-path: polygon(0 6vw, 100% 0, 100% 100%, 0% 100%);
  text-align: center;
  padding: 159px 0 98px;
  &__table {
    width: 100%;
    border-collapse: collapse;
    background: $white;
  }
  &__none {
    background: $grey;
  }
  &__name {
    background: $darkblue;
    color: $white;
    padding: 23px 0 25px;
  }
  &__price {
    font-weight: 300;
    font-size: 24px;
  }
  &__item {
    text-align: left;
    padding-left: 22px;
  }
  &__hits {
    position: relative;
    overflow: hidden;
  }
  &__hit {
    background: $pink;
    font-weight: 400;
    font-size: 14px;
    position: absolute;
    width: 110px;
    top: 20px;
    left: -25px;
    transform: rotate(-45deg);
  }
}
td {
  width: 234px;
  height: 59px;
}
td,
th {
  border: 2px solid $grey;
}
@media screen and (max-width: 991.98px) {
  .tariff {
    padding: 114px 0 70px;
    &__name {
      font-size: 16px;
      padding: 19px 0 16px;
    }

    &__price {
      font-size: 18px;
    }

    &__hit {
      font-size: 14px;
      top: 10px;
      left: -35px;
    }

    &__item {
      font-size: 14px;
      padding-left: 15px;
    }
  }
  td {
    width: 234px;
    height: 45px;
  }
}
@media screen and (max-width: 767.98px) {
  .tariff {
    padding: 100px 0 98px;
  }
}
</style>
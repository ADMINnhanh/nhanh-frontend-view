<script setup lang="ts">
import {
  GetWeatherByLocation,
  type WeatherResponse,
} from "@/assets/api/otherAsk/amap";
import { NButton, NDivider, NPopover, NText, NP } from "naive-ui";
import { computed, ref } from "vue";
import {
  GetWeatherType,
  GetWeatherTemperatureType,
  GetWeatherTemperatureIcon,
  GetWeatherWindpowerType,
  GetWeatherHumidityType,
} from ".";

const weatherInfo = ref<Exclude<WeatherResponse["lives"], undefined>[number]>();

const useWeather = computed(() => {
  if (!weatherInfo.value) return;
  const {
    temperature_float,
    city,
    weather,
    province,
    winddirection,
    windpower,
    reporttime,
    humidity_float,
  } = weatherInfo.value;
  return {
    city,
    weather,
    temperature_float,
    province,
    winddirection,
    windpower,
    reporttime,
    humidity_float,
    weatherType: GetWeatherType(weather),
    icon: GetWeatherTemperatureIcon(weather),
    temperatureType: GetWeatherTemperatureType(temperature_float),
    windpowerType: GetWeatherWindpowerType(windpower),
    humidityType: GetWeatherHumidityType(humidity_float),
  };
});

if (import.meta.env.PROD)
  GetWeatherByLocation().then((res) => {
    weatherInfo.value = res.lives?.[0];
  });
</script>

<template>
  <template v-if="useWeather">
    <NPopover placement="bottom">
      <template #trigger>
        <NButton quaternary>
          <NText depth="3">
            {{ useWeather.city }}
          </NText>
          &nbsp;
          <NText :type="useWeather.weatherType">
            {{ useWeather.weather }}
          </NText>
          &nbsp;
          <NText :type="useWeather.weatherType">
            <component v-if="useWeather.icon" :is="useWeather.icon" size="18" />
          </NText>
          &nbsp;
          <NText :type="useWeather.temperatureType">
            {{ useWeather.temperature_float }}℃
          </NText>
        </NButton>
      </template>
      <NP>
        <NText depth="3">位置</NText>
        <NText>
          {{ useWeather.province }}
          &nbsp;
          {{ useWeather.city }}
        </NText>
      </NP>
      <NP>
        <NText depth="3">风向</NText>
        <NText>{{ useWeather.winddirection }}</NText>
        &nbsp;
        <NText :type="useWeather.windpowerType">
          {{ useWeather.windpower }}级
        </NText>
      </NP>
      <NP>
        <NText depth="3">湿度</NText>
        <NText :type="useWeather.humidityType">
          {{ useWeather.humidity_float }}%
        </NText>
      </NP>
      <NP>
        <NText depth="3">时间</NText>
        <NText>{{ useWeather.reporttime }}</NText>
      </NP>
    </NPopover>
    <NDivider vertical />
  </template>
</template>

<style scoped lang="less">
.n-p {
  > .n-text:nth-child(1) {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>

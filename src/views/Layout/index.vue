<script setup lang="ts">
import MyHeader from "./header/index.vue";
import MyBody from "./body/index.vue";
import { watch } from "vue";
import router from "@/router";
import { baseURL } from "@/utils/axios";

type VisitSession = {
  /** 访问开始时间 */
  visitStartTime: number;
  /** 访问结束时间 */
  visitEndTime: number;
  /** 访问入口名称 */
  entryName: string;
  /** 访问出口名称 */
  exitName: string;
  /** 访问来源 */
  visitSource: string;
  /** 用户设备信息 */
  userAgent: string;
  pageVisitLog: {
    [key: string | symbol]: {
      /** 时间锚点 */
      timeAnchor: number;
      /** 访问时长 */
      visitTime: number;
    };
  };
};

const visitSession: VisitSession = {
  visitStartTime: Date.now(),
  visitEndTime: Date.now(),
  entryName: router.currentRoute.value.name!.toString(),
  exitName: router.currentRoute.value.name!.toString(),
  visitSource: document.referrer,
  userAgent: navigator.userAgent,
  pageVisitLog: {},
};

function UpdateRouterName(name?: string | symbol, oldName?: string | symbol) {
  if (name) {
    if (visitSession.pageVisitLog[name])
      visitSession.pageVisitLog[name].timeAnchor = Date.now();
    else
      visitSession.pageVisitLog[name] = {
        timeAnchor: Date.now(),
        visitTime: 0,
      };
  }
  if (oldName && visitSession.pageVisitLog[oldName])
    visitSession.pageVisitLog[oldName].visitTime +=
      Date.now() - visitSession.pageVisitLog[oldName].timeAnchor;
}
watch(() => router.currentRoute.value.name, UpdateRouterName, {
  immediate: true,
});

window.addEventListener("unload", function () {
  return;
  UpdateRouterName(undefined, router.currentRoute.value.name);

  visitSession.visitEndTime = Date.now();
  if (visitSession.visitEndTime - visitSession.visitStartTime < 1000 * 10)
    return;
  visitSession.exitName = router.currentRoute.value.name!.toString();

  const pageVisitLog: { pageName: string; stayTime: number }[] = [];
  for (const key in visitSession.pageVisitLog) {
    if (Object.prototype.hasOwnProperty.call(visitSession.pageVisitLog, key)) {
      const item = visitSession.pageVisitLog[key];
      const visitTime = Number((item.visitTime / 1000).toFixed(0));
      if (visitTime >= 10)
        pageVisitLog.push({ pageName: key, stayTime: visitTime });
    }
  }

  const data = JSON.stringify(Object.assign(visitSession, { pageVisitLog }));

  const url = baseURL + "/sys-visit-session/create";
  const blob = new Blob([data], { type: "application/json; charset=UTF-8" });
  navigator.sendBeacon(url, blob);
});
</script>

<template>
  <div class="layout">
    <MyHeader />
    <MyBody />
  </div>
</template>

<style scoped lang="less">
.layout {
  width: 100vw;
  height: var(--100vh);
  display: flex;
  flex-direction: column;
}
</style>

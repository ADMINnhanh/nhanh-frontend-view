import type { ScrollbarInst } from "naive-ui";
import { _Utility_WaitForCondition } from "nhanh-pure-function";
import { Peer } from "peerjs";
import { ref } from "vue";

export const peerID = ref();
export const destPeerID = ref();
export const logMessage = ref<
  ["default" | "success" | "info" | "warning" | "error", string][]
>([]);
export const scrollbarHover = ref(false);
export const scrollbarRef = ref<ScrollbarInst>();

/** 滚动至底 */
let scrollToBottom: number | undefined;
const newLog = (
  message: string,
  type: "default" | "success" | "info" | "warning" | "error" = "default"
) => {
  logMessage.value.push([type, message]);

  if (!scrollToBottom) {
    scrollToBottom = requestAnimationFrame(() => {
      const scrollHeight = (scrollbarRef.value as any)?.$el.nextSibling
        .children[0].scrollHeight;
      if (!scrollbarHover.value) scrollbarRef.value?.scrollTo(0, scrollHeight);
      scrollToBottom = undefined;
    });
  }
};

export const videoEl = ref<HTMLVideoElement>();
const renderVideo = (stream: MediaStream) => {
  if (videoEl.value) videoEl.value.srcObject = stream;
};

const peer = new Peer({
  // host: "www.nhanh.xin",
  host: "nhanh.xin",
  // host: "47.117.69.99",
  debug: 1,
  path: "/peerjs-server/myapp",
});

peer.on("open", function (id) {
  peerID.value = id;
  newLog(`获取到了新的对接id: ${id}`, "info");
});
peer.on("error", (error) => {
  newLog(error.message);
});
peer.on("connection", function (conn) {
  newLog("传入对等连接！", "warning");

  conn.on("data", (data) => {
    newLog("新信息：" + data, "success");
  });
  conn.on("open", () => {
    conn.send("hello!");
  });
});
peer.on("call", (call) => {
  let finish = false;
  _Utility_WaitForCondition(() => finish, 5000).catch(() => {
    newLog("获取本地流超时", "error");
  });
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      call.answer(stream);
      call.on("stream", renderVideo);
    })
    .catch((err) => {
      newLog("获取本地流失败" + err, "error");
    })
    .finally(() => (finish = true));
});

let conn: ReturnType<typeof peer.connect>;
export function ConnectToPeer() {
  conn = peer.connect(destPeerID.value);
  newLog(`正在连接到 ${destPeerID.value} 对等端...`, "info");
  conn.on("data", (data) => {
    newLog("新信息：" + data, "success");
  });
  conn.on("open", () => {
    conn.send("hi!");
  });

  let finish = false;
  _Utility_WaitForCondition(() => finish, 5000).catch(() => {
    newLog("获取本地流超时", "error");
  });

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      let call = peer.call(destPeerID.value, stream);
      call.on("stream", renderVideo);
      newLog("获取本地流成功");
    })
    .catch((err) => {
      newLog("获取本地流失败" + err, "error");
    })
    .finally(() => (finish = true));
}

import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 存储所有连接的客户端信息，键为 socket.id，值为客户端名字
const connectedClients = new Map<string, string>();

let suffix = 1;

io.on("connection", (socket) => {
  console.log(`A new client connected: ${socket.id}`);

  // 监听客户端发送的名字
  socket.on("setName", (name: string) => {
    let finalName = name;

    // 检测名字是否重复，若重复则添加数字后缀
    while (connectedClients.has(finalName)) {
      finalName = `${name}${suffix}`;
      suffix++;
    }

    // 存储客户端名字
    connectedClients.set(socket.id, finalName);

    // 若名字有修改，告知该用户
    if (finalName !== name) {
      socket.emit("nameModified", finalName);
    }

    // 通知其他客户端有新客户端加入
    socket.broadcast.emit("newClient", finalName);

    // 发送当前所有连接的客户端名字给新客户端
    socket.emit("allClients", Array.from(connectedClients.values()));
  });

  // 处理客户端断开连接
  socket.on("disconnect", () => {
    const clientName = connectedClients.get(socket.id);
    if (clientName) {
      connectedClients.delete(socket.id);
      console.log(`Client disconnected: ${clientName}`);

      // 通知其他客户端有客户端离开
      socket.broadcast.emit("clientLeft", clientName);
    }
  });
});

const port = 5555;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

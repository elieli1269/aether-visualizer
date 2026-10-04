const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("aetherDesktop", {
  isDesktop: true,
});

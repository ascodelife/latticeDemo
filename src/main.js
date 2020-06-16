// 引入electron并创建一个Browserwindow
const { app, BrowserWindow, session, ipcMain } = require("electron");
const { getMetaData, setMetaData } = require("./utils/localstorage");

// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow;
function createWindow() {
  session.defaultSession.loadExtension(
    "C:\\Users\\lijunan\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\4.7.0_0"
  );
  session.defaultSession.loadExtension(
    "C:\\Users\\lijunan\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.17.0_0"
  );
  //创建浏览器窗口,宽高自定义具体大小你开心就好
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + "/preload.js",
    },
  });
  /* 
 * 加载应用----- electron-quick-start中默认的加载入口
 mainWindow.loadURL(url.format({
 pathname: path.join(__dirname, 'index.html'),
 protocol: 'file:',
 slashes: true
 }))
 */
  // 加载应用----适用于 react 项目

  mainWindow.loadURL("http://localhost:3000/");

  // 打开开发者工具
  mainWindow.webContents.openDevTools();
  // 关闭window时触发下列事件.
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  //进程通信
  ipcMain.on("getMetaData", function (event, arg) {
    let metaData = getMetaData();
    event.returnValue = metaData;
  });
  ipcMain.on("setMetaData", function (event, arg) {
    setMetaData(arg);
  });
}
// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on("ready", createWindow);

// 所有窗口关闭时退出应用.
app.on("window-all-closed", function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow();
  }
});

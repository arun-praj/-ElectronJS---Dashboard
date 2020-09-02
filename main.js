const path = require("path");
const url = require("url");
const axios = require("axios");
const { app, BrowserWindow, ipcMain } = require("electron");
const { ipcMain: ipc } = require("electron-better-ipc");
const isReachable = require("is-reachable");

let mainWindow;

let isDev = false;
let isMac = process.platform === "darwin";
if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === "development") {
   isDev = true;
}
// console.log(app.getPath("userData"));

function createMainWindow() {
   mainWindow = new BrowserWindow({
      minWidth: 1087,
      minHeight: 644,
      height: 644,
      width: 1087,
      show: false,
      resizable: isDev ? true : false,
      icon: `${__dirname}/assets/icon.png`,
      // frame: false,
      titleBarStyle: isMac ? "hiddenInset" : "",
      webPreferences: {
         nodeIntegration: true,
         // enableRemoteModule: true,
      },
   });

   let indexPath;

   if (isDev && process.argv.indexOf("--noDevServer") === -1) {
      indexPath = url.format({
         protocol: "http:",
         host: "localhost:8080",
         pathname: "index.html",
         slashes: true,
      });
   } else {
      indexPath = url.format({
         protocol: "file:",
         pathname: path.join(__dirname, "dist", "index.html"),
         slashes: true,
      });
   }

   mainWindow.loadURL(indexPath);

   // Don't show until we are ready and loaded
   mainWindow.once("ready-to-show", () => {
      mainWindow.show();

      // Open devtools if dev
      if (isDev) {
         const {
            default: installExtension,
            REACT_DEVELOPER_TOOLS,
         } = require("electron-devtools-installer");

         installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
            console.log("Error loading React DevTools: ", err)
         );
         mainWindow.webContents.openDevTools();
      }
   });

   mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createMainWindow);

app.on("window-all-closed", () => {
   if (process.platform !== "darwin") {
      app.quit();
   }
});

app.on("activate", () => {
   if (mainWindow === null) {
      createMainWindow();
   }
});

//Checks of our site is reachable
let online;

(async () => {
   ipcMain.on("giveMeInternetStatus", async (event, arg) => {
      online = await isReachable("https://dhaushop.herokuapp.com/");
      event.sender.send("statusReply", online);
   });
})();

// Stop error
app.allowRendererProcessReuse = true;

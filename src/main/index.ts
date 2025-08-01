import { join } from 'path'
import { app, BrowserWindow } from 'electron/main'
import { electronApp, is } from '@electron-toolkit/utils'
import { APP_EVENT, APP_USER_MODEL_ID, ELECTRON_RENDERER_URL } from './config'
import {
  handleActivate,
  handleBrowserWindowCreated,
  handleReadyToShow,
  handleWindowAllClosed
} from './event'

const preloadPath = join(__dirname, '../preload/index.js')
const rendererPath = join(__dirname, '../renderer/index.html')

const defaultWindowOptions = {
  width: 900,
  height: 670,
  show: false,
  autoHideMenuBar: true,
  webPreferences: {
    preload: preloadPath,
    sandbox: false
  }
}

function createWindow(): void {
  const mainWindow = new BrowserWindow(defaultWindowOptions)

  mainWindow.on(APP_EVENT.READY_TO_SHOW, handleReadyToShow.bind(undefined, mainWindow))

  if (is.dev && process.env[ELECTRON_RENDERER_URL]) {
    mainWindow.loadURL(process.env[ELECTRON_RENDERER_URL])
  } else {
    mainWindow.loadFile(rendererPath)
  }
}

app.on(APP_EVENT.BROWSER_WINDOW_CREATED, handleBrowserWindowCreated)

app.on(APP_EVENT.ACTIVATE, handleActivate.bind(undefined, createWindow))

app.on(APP_EVENT.WINDOW_ALL_CLOSED, handleWindowAllClosed.bind(undefined, app))

app.whenReady().then(() => {
  electronApp.setAppUserModelId(APP_USER_MODEL_ID)
  createWindow()
})

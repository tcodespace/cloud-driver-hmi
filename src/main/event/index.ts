import { optimizer, platform } from '@electron-toolkit/utils'
import { BrowserWindow } from 'electron/main'
import type { App } from 'electron/main'

export function handleReadyToShow(mainWindow: BrowserWindow): void {
  mainWindow.webContents.setZoomFactor(1)
  mainWindow.show()
}

export function handleWindowAllClosed(app: App): void {
  if (!platform.isMacOS) app.quit()
}

export function handleBrowserWindowCreated(_, window: BrowserWindow): void {
  optimizer.watchWindowShortcuts(window)
}

export function handleActivate(createWindow: () => void): void {
  if (!BrowserWindow.getAllWindows().length) createWindow()
}

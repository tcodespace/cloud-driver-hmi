/** 应用｜窗口 事件 */
export enum APP_EVENT {
  /* 窗口创建完成 */
  ACTIVATE = 'activate',
  /* 窗口准备显示 */
  READY_TO_SHOW = 'ready-to-show',
  /* 所有窗口关闭 */
  WINDOW_ALL_CLOSED = 'window-all-closed',
  /* 窗口创建 */
  BROWSER_WINDOW_CREATED = 'browser-window-created'
}

/** 窗口平台 */
export enum WINDOW_PLATFORM {
  MAC = 'darwin',
  WINDOWS = 'win32',
  LINUX = 'linux'
}

/** 本地开发环境网页地址 */
export const ELECTRON_RENDERER_URL = 'ELECTRON_RENDERER_URL'

/** 应用用户模型 ID, Windows 操作系统特有的标识符，目的是确保你的 Electron 应用在 Windows 任务栏中显示时，能够正确与系统集成。*/
export const APP_USER_MODEL_ID = 'cloud-driver-hmi'

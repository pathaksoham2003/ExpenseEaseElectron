import { app, shell, BrowserWindow, ipcMain, Notification } from 'electron'
import path, { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import axios from 'axios'
import fs from 'fs';

let options = {
  silent: false,
  printBackground: true,
  color: false,
  margin: {
    marginType: 'printableArea'
  },
  landscape: false,
  pagesPerSheet: 1,
  collate: false,
  copies: 1,
  header: 'Header of the Page',
  footer: 'Footer of the Page'
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  ipcMain.on('react-loaded', () => {
    mainWindow.maximize()
    mainWindow.setTitle('EaseExpense') // Set the title when React is fully loaded
    mainWindow.show() // Show the window
  })

  ipcMain.on('print', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow() // Get the current window

    if (focusedWindow) {
      focusedWindow.webContents.print(
        {
          silent: false, // Ensure silent is false to show the print preview
          printBackground: true, // Print background colors and images
          color: true, // Use color printing (set to false if monochrome is needed)
          margin: {
            marginType: 'printableArea' // Choose the margin type, 'printableArea' ensures that the content fits
          },
          landscape: false, // Set to true if you want landscape orientation
          pagesPerSheet: 1, // Number of pages to print per sheet
          collate: false,
          copies: 1,
          header: 'Header of the Page',
          footer: 'Footer of the Page'
        },
        (success, failureReason) => {
          if (!success) console.log(failureReason)
          console.log('Print Initiated with Preview')
        }
      )
    }
  })

  ipcMain.on('print-content', (event, htmlContent) => {
    // Read the CSS file content
    // Create a new hidden window to print custom HTML
    const printWindow = new BrowserWindow({
      show: false, // Keep the window hidden
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });
  
    // Embed the CSS content into the HTML
  
    // Load the passed HTML content
    printWindow.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(htmlContent)}`);
  
    // Once the content is loaded, print it with preview
    printWindow.webContents.on('did-finish-load', () => {
      printWindow.webContents.print(
        {
          silent: false, // Show print preview
          printBackground: true, // Ensure backgrounds are printed as well
        },
        (success, failureReason) => {
          if (!success) console.log(failureReason);
          console.log('Print Preview Initiated');
          printWindow.close(); // Close the hidden window after printing
        }
      );
    });
  });
  

  ipcMain.handle('getCompany', async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/chand/Company/')
      return response.data
    } catch (error) {
      console.error('Failed to fetch company data:', error)
      return { error: 'Failed to fetch data' }
    }
  })

  ipcMain.handle('createTruck', async (event, someArguments) => {
    try {
      console.log(someArguments)
      const response = await axios.post('http://127.0.0.1:8000/chand/Vehicle/', someArguments)
      return response.data
    } catch (error) {
      console.error('Failed to fetch company data:')
      return { error: 'Failed to fetch data' }
    }
  })

  ipcMain.handle('getVehicle', async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/chand/Vehicle/')
      return response.data
    } catch (error) {
      console.error('Failed to fetch company data:', error)
      return { error: 'Failed to fetch data' }
    }
  })

  ipcMain.handle('updateTruck', async (e, args) => {
    try {
      const response = await axios.patch('http://127.0.0.1:8000/chand/Vehicle/', args)
      return response
    } catch (err) {
      console.log('SOme error occured', err)
      return { error: 'Failed to update' }
    }
  })

  ipcMain.handle('deleteTruck', async (e, args) => {
    try {
      console.log(args)
      const response = await axios.delete(`http://127.0.0.1:8000/chand/Vehicle/?number=${args}`)
      return response
    } catch (err) {
      console.log('SOme error occured', err)
      return { error: 'Failed to update' }
    }
  })

  ipcMain.handle('getVendors', async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/chand/Vendor/')
      return response.data
    } catch (error) {
      console.error('Failed to fetch company data:', error)
      return { error: 'Failed to fetch data' }
    }
  })

  ipcMain.handle('createVendor', async (event, someArguments) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/chand/Vendor/', someArguments)
      return response.data
    } catch (error) {
      console.error('Failed to fetch company data:')
      return { error: 'Failed to fetch data' }
    }
  })

  ipcMain.handle('updateVendor', async (e, args) => {
    try {
      const response = await axios.patch('http://127.0.0.1:8000/chand/Vendor/', args)
      return response
    } catch (err) {
      console.log('SOme error occured', err)
      return { error: 'Failed to update' }
    }
  })

  ipcMain.handle('getBills', async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/chand/Bill/')
      return response.data
    } catch (error) {
      console.error('Failed to fetch company data:', error)
      return { error: 'Failed to fetch data' }
    }
  })

  // mainWindow.on('ready-to-show', () => {
  //   mainWindow.show()
  // })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))
  let count = 0
  ipcMain.on('smash', () => {
    console.log(count)
    count += 1
  })

  ipcMain.on('notification', () =>
    new Notification({ title: 'Hello', body: 'woeooerigbehrdbgvehdrfbgvdsbj' }).show()
  )

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const handlePrint = () => {
    window.electron.ipcRenderer.send('print')
  }

  const handleContent = () => {
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            h1 { color: blue; }
          </style>
        </head>
        <body>
          <h1>Home Page Content</h1>
          <p>This is the content of the home page that will be printed.</p>
        </body>
      </html>
    `

    window.electron.ipcRenderer.send('print-content', htmlContent)
  }

  return (
    <div className="flex flex-1 w-full justify-between bg-background">
      <h1 onClick={handlePrint}>Home</h1>
      <h2 onClick={handleContent}>Content</h2>
      <Link to="/">GO Back</Link>
    </div>
  )
}

export default Home

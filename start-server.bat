@echo off
REM Colors and setup for Windows batch
REM Node.js Server Startup Script

echo.
echo ============================================================
echo 🎬 Prompt to GIF Generator - Node.js Server
echo ============================================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ⚠️  Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ⚠️  npm is not installed!
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version
echo.
echo ✅ npm found: 
npm --version
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    echo.
    call npm install
    echo.
)

echo ✅ Setup complete!
echo.
echo 🚀 Starting server...
echo.

REM Start the server
call npm start

pause

@echo off
REM Create a downloads directory if it doesn't exist
if not exist "downloads" mkdir downloads

REM Download the offline.html file
powershell -Command "Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/baxleychris543-code/prompt-to-gif/main/public/offline.html' -OutFile 'downloads/offline.html'"

echo.
echo ===== DOWNLOAD COMPLETE =====
echo.
echo File saved to: downloads\offline.html
echo.
echo To use it:
echo   1. Open downloads\offline.html in your web browser
echo   2. Or double-click the file to open it
echo.
echo Features:
echo   - Works completely offline
echo   - Create animated GIFs with custom text
echo   - 5 animation types to choose from
echo   - Download GIFs to your computer
echo.
pause

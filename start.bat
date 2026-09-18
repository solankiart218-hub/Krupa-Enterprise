@echo off
title Krupa Enterprise - Localhost:3000
cd /d "%~dp0"

echo ======================================================
echo          KRUPA ENTERPRISE - LOCAL SERVER
echo ======================================================
echo   Starting local server at http://localhost:3000 ...
echo   Opening browser automatically...
echo   Press Ctrl+C to stop the server.
echo ======================================================
echo.

:: Open the website in default browser automatically
start "" "http://localhost:3000"

:: Launch local python web server on port 3000
python -m http.server 3000

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Could not start Python server on port 3000.
    echo Please make sure Python is installed and port 3000 is not in use.
    pause
)

@echo off
echo ========================================
echo Casabougan Apartments - Complete Setup
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install --legacy-peer-deps

if %errorlevel% neq 0 (
    echo Failed to install dependencies!
    pause
    exit /b %errorlevel%
)

echo.
echo Step 2: Building project...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed! Fix errors and try again.
    pause
    exit /b %errorlevel%
)

echo.
echo Step 3: Logging into Vercel...
echo Please complete the login in your browser...
call vercel login

echo.
echo Step 4: Deploying to Vercel...
call vercel --prod

echo.
echo ========================================
echo Deployment process completed!
echo Check the URL above for your live site.
echo ========================================
pause

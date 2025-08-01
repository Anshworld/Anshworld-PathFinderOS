@echo off
REM Pathfinder Platform Setup Script for Windows
REM Run this batch file to create the complete project structure

echo 🚀 Setting up Pathfinder Platform...

REM Create project directory
mkdir pathfinder-platform
cd pathfinder-platform

REM Create package.json
(
echo {
echo   "name": "pathfinder-platform",
echo   "private": true,
echo   "version": "0.0.0",
echo   "type": "module",
echo   "scripts": {
echo     "dev": "vite",
echo     "build": "vite build",
echo     "lint": "eslint .",
echo     "preview": "vite preview"
echo   },
echo   "dependencies": {
echo     "lucide-react": "^0.344.0",
echo     "react": "^18.3.1",
echo     "react-dom": "^18.3.1"
echo   },
echo   "devDependencies": {
echo     "@eslint/js": "^9.9.1",
echo     "@types/react": "^18.3.5",
echo     "@types/react-dom": "^18.3.0",
echo     "@vitejs/plugin-react": "^4.3.1",
echo     "autoprefixer": "^10.4.18",
echo     "eslint": "^9.9.1",
echo     "eslint-plugin-react-hooks": "^5.1.0-rc.0",
echo     "eslint-plugin-react-refresh": "^0.4.11",
echo     "globals": "^15.9.0",
echo     "postcss": "^8.4.35",
echo     "tailwindcss": "^3.4.1",
echo     "typescript": "^5.5.3",
echo     "typescript-eslint": "^8.3.0",
echo     "vite": "^5.4.2"
echo   }
echo }
) > package.json

REM Create directory structure
mkdir src\components

REM Create index.html
(
echo ^<!doctype html^>
echo ^<html lang="en"^>
echo   ^<head^>
echo     ^<meta charset="UTF-8" /^>
echo     ^<link rel="icon" type="image/svg+xml" href="/vite.svg" /^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0" /^>
echo     ^<title^>Pathfinder Innovation ^& Readiness Center^</title^>
echo   ^</head^>
echo   ^<body^>
echo     ^<div id="root"^>^</div^>
echo     ^<script type="module" src="/src/main.tsx"^>^</script^>
echo   ^</body^>
echo ^</html^>
) > index.html

echo ✅ Project structure created!
echo 📁 Next steps:
echo 1. cd pathfinder-platform
echo 2. npm install
echo 3. Copy all React component files to src\ folder
echo 4. npm run dev
echo.
echo 🚀 Happy coding!
pause
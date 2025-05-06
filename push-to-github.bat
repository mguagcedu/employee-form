@echo off
:: Step 1 - Set Git identity
git config --global user.name "Manuel Gomez"
git config --global user.email "manuel.gomez2@student.uagc.edu"

:: Step 2 - Initialize Git repo
git init

:: Step 3 - Create .gitignore (if not already exists)
echo node_modules/> .gitignore
echo build/>> .gitignore
echo .env>> .gitignore
echo .DS_Store>> .gitignore
echo AppData/>> .gitignore
echo *.log>> .gitignore

:: Step 4 - Add all relevant project files
git add .

:: Step 5 - Initial commit
git commit -m "Initial commit: React Employee Form Project"

:: Step 6 - Link to GitHub repo
git remote add origin https://github.com/mguagcedu/employee-form.git

:: Step 7 - Rename to main branch
git branch -M main

:: Step 8 - Push to GitHub
git push -u origin main

echo.
echo ✅ SUCCESS: Your project is now on GitHub at:
echo https://github.com/mguagcedu/employee-form
pause

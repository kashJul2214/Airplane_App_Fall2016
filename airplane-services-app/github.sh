#!/bin/bash
# helpful: http://stackoverflow.com/questions/8482843/git-commit-bash-script

git add .
read -p "Commit description: " desc
git commit -m "$desc"
git remote add origin git@github.com:kashJul2214/Airplane_App_Fall2016.git
git push -u origin master
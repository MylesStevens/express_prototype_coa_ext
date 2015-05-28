#!/bin/ksh

clear
echo Preparing to deploy prototype to Heroku ...
git checkout master
git add *
git commit -m "Latest build"
git push origin master

git push heroku master

heroku open

 

git add .
git commit -m push
git pull origin master
git push origin master
npm run build
scp -r dist/* root@wintc.top:/home/lushg/laboratory

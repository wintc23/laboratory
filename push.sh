git add .
git commit -m push
git pull origin master
git push origin master
yarn build
scp -r dist/* root@wintc.top:/home/lushg/laboratory

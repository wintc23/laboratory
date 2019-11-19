git add .
git commit -m push
yarn build
scp -r dist/* root@wintc.top:/home/lushg/laboratory

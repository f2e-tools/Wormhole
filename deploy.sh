#!/usr/bin/env sh
#生成当前时间
time=`date '+%Y%m%d-%H%M%S'`

#确保脚本抛出遇到的错误
set -e

#生成静态文件
npm run build

#进入生成的文件夹
cd dist

#如果是自定义域名 指定解析值
echo "51wormhole.club" > CNAME

git init
git add -A
git commit -m "deploy-$time"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:allenchinese/Wormhole.git master:gh-pages

cd -
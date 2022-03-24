#!/usr/bin/env sh

# 오류 발생시 중단한다.
set -e

# 문서를 build하여 html로 만든다
yarn build

# build가 output된 폴더로 이동한다.
cd src/.vuepress/dist

# git clone
git clone https://github.com/GuSubeen/GuSubeen.github.io.git/

# .git의 내용을 복사한 후 clone은 삭제한다.
cp -rf GuSubeen.github.io/.git ./.git
rm -rf GuSubeen.github.io

# add + commit + push를 차례대로 실행한다.
# 
# git init
git add .
git commit -m "$1"
git push origin master


cd -
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/GuSubeen/GuSubeen.github.io.git master:gh-pages




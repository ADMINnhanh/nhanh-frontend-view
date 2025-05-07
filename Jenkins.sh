pwd

node -v
npm -v
npm install --registry=https://registry.npmmirror.com
npm run build:aliyun

pwd

echo '构建成功'

ls

rm -rf /home/html/nhanh-frontend-view
cp -f /nhanh-frontend-view /home/html/nhanh-frontend-view
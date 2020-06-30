# Node Mirai Joke

[node-mirai-sdk](https://github.com/RedBeanN/node-mirai) 的笑话插件，发送“来点XX笑话”时，bot回复一句高斯笑话或Jeff Dean笑话，其中人名会替换为XX

## Usage

`NodeMiraiSDK` 的配置请参考 [node-mirai-sdk](https://github.com/RedBeanN/node-mirai)

`npm i -S node-mirai-joke`

index.js

```javascript
const joke = require('node-mirai-joke');

const bot = new Mirai({/* ... */});
bot.use(joke());

```

## 关于

高斯笑话和Jeff Dean笑话语料来自网络，如有侵权请联系作者删除

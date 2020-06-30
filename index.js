const Mirai = require('node-mirai-sdk');
const { Plain } = Mirai.MessageComponent;

const jokes = require('./jokes.json');
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const joke = () => {
  const callback = message => {
    const { messageChain, reply } = message;
    let msg = '';
    for (let chain of messageChain) {
      if (chain.type === 'Plain') msg += Plain.value(chain);
    }
    if (msg.match(/^来点(.+)笑话$/)) {
      const name = msg.replace(/^来点/, '').replace(/笑话$/, '').trim();
      if (name.includes('来点') || name.includes('笑话')) return reply('禁止套娃！');
      else if (name.length === 0) return;
      const joke = jokes[random(0, jokes.length - 1)];
      return reply(joke.replace(/\$name/g, name));
    }
  };
  return {
    name: 'NodeMiraiJoke',
    subscribe: 'message',
    callback,
  };
};

module.exports = joke;

// import { tgBase, tgToken, tgChatId } from '../product/config.js';

export default class MessengerModel {
  sendMsg = (msg) => {
    const url = `${tgBase}${tgToken}/sendMessage?chat_id=${tgChatId}&text=${msg}`;

    fetch(url);
  };
}

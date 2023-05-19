class Api {
  constructor(options) {
    this._headers = options.headers;
  }

  //проверим ответ
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  //получим данные пользователя
  getUserInfo(idInstance, apiTokenInstance) {
    return fetch(`https://api.green-api.com/waInstance${idInstance}/GetSettings/${apiTokenInstance}`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  //получим контакты пользователя
  getUserContact(idInstance, apiTokenInstance) {
    return fetch(`https://api.green-api.com/waInstance${idInstance}/getContacts/${apiTokenInstance}`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  //добавим новое сообщение
  addMessage(data, chatId, idInstance, apiTokenInstance) {
    return fetch(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        "chatId": chatId,
        "message": data.message
      })
    })
      .then(this._checkResponse)
  }

  //получим историю чата
  getChatHistory(id, idInstance, apiTokenInstance) {
    return fetch(`https://api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        "chatId": id,
      })
    })
      .then(this._checkResponse)
  }

  //получим уведомление
  getNotification(idInstance, apiTokenInstance) {
    return fetch(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  //удалим уведомелние
  deleteNotification(receiptId, idInstance, apiTokenInstance) {
    return fetch(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }
}

const api = new Api({
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api;

import * as React from "react";
import "./../assets/scss/FeedbackForm.sass";

const FeedbackForm: React.FC = () => {
  function sendRequest() {
    const requestURL = "http://localhost:3000/";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL + "name=" + "vlad");

    xhr.send();
  }

  sendRequest();

  return (
    <form className="form">
      <div className="form__field">
        <input
          type="text"
          required
          id="name"
          pattern="^([а-яА-ЯёЁa-zA-Z]{3,30}\s[а-яА-ЯёЁa-zA-Z]{3,30})"
          placeholder="Имя Фамилия"
        />
        <span className="form__error">
          Поле Имя Фамилия состоит из 2 слов с минимальной длинной 3 символа
        </span>
      </div>
      <div className="form__field">
        <input
          type="email"
          required
          id="email"
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
          placeholder="E-Mail"
        />
        <span className="form__error">
          Поле должно содержать E-Mail в формате example@site.com
        </span>
      </div>
      <div className="form__field">
        <input
          type="text"
          required
          pattern="[+]7[\(]\d{3}[\)]\d{7}"
          title="Используйте формат: +7(777)7777777"
          id="phoneNumber"
          placeholder="Телефон в формате +7(777)7777777"
        />
        <span className="form__error">
          Поле должно содержать номер телефона в формате +7(777)7777777
        </span>
      </div>
      <div className="form__field">
        <input type="date" required id="BDay" placeholder="Дата рождения" />
        <span className="form__error">
          Проверьте правильность введенной даты
        </span>
      </div>
      <div className="form__field">
        <input
          type="text"
          required
          id="message"
          minLength={10}
          maxLength={300}
          placeholder="Сообщение"
        />
        <span className="form__error">
          Длина минимального сообщения состоит из 10 символов
        </span>
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FeedbackForm;

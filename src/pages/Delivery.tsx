import React from "react";
import styles from "./delivery.module.css";

const Delivery: React.FC = () => {
  return (
    <div className={styles.delivery}>
      <h1>Варианты доставки</h1>
      <div className={styles.content}>
        <section>
          <h2>Самовывоз</h2>
          <p>
            Забрать заказ можно в одном из наших пунктов выдачи. Время обработки заказа для самовывоза — от 1 до 3 рабочих дней.
          </p>
          <ul>
            <li>ул. Автозапчастей, 123</li>
            <li>ул. Машиностроителей, 45</li>
          </ul>
        </section>

        <section>
          <h2>Доставка курьером</h2>
          <p>
            Курьерская доставка доступна по городу и области. Стоимость и сроки зависят от вашего местоположения.
          </p>
          <ul>
            <li><strong>Город:</strong> доставка в течение 1-2 дней — 300 руб.</li>
            <li><strong>Область:</strong> доставка в течение 2-5 дней — 500 руб.</li>
          </ul>
        </section>

        <section>
          <h2>Доставка транспортной компанией</h2>
          <p>
            Мы сотрудничаем с ведущими транспортными компаниями для доставки в другие регионы. Вы можете выбрать компанию при оформлении заказа.
          </p>
          <p>
            Примерные сроки доставки:
          </p>
          <ul>
            <li><strong>Москва и Санкт-Петербург:</strong> 3-5 рабочих дней.</li>
            <li><strong>Другие регионы:</strong> от 5 рабочих дней.</li>
          </ul>
        </section>

        <section>
          <h2>Почтовая доставка</h2>
          <p>
            Отправка через Почту России возможна по всей стране. Стоимость зависит от веса и региона доставки.
          </p>
        </section>

        <p className={styles.contact}>
          Для уточнения информации о доставке свяжитесь с нами по телефону <strong>+7 123 456 789</strong>.
        </p>
      </div>
    </div>
  );
};

export default Delivery;

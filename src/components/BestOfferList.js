import React from 'react'
import styles from '../styles/BestOfferList.module.sass'
import BestOfferListItem from "./BestOfferListItem"
import CashStackIcon from "./icons/CashStackIcon"
import CreditCardIcon from "./icons/CreditCardIcon"
import ExchangeIcon from "./icons/ExchangeIcon"
import TruckIcon from "./icons/TruckIcon"

function BestOfferList() {
  return (
    <ul className={styles.list}>
      <BestOfferListItem title={'Цена'} img={<CashStackIcon />} text={'Черный металлолом до '} price={'32000 ₽ / т.'} />
      <BestOfferListItem title={'Бесплатные услуги'} img={<ExchangeIcon />} text={'Вывоз и демонтаж металлолома от 1 тонны бесплатный.'} />
      <BestOfferListItem title={'Оплата'} img={<CreditCardIcon />} text={'Наличные, безнал, по договору для юр. лиц'} />
      <BestOfferListItem title={'Автопарк'} img={<TruckIcon />} text={'Более 200 единц техники для вывоза и демонтажа'} />
    </ul>
  )
}

export default BestOfferList

import React from 'react'
import styles from '../../styles/sections/ReviewsSection.module.sass'
import ReviewCard from "../cards/ReviewCard"

function ReviewsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ul className={styles.list}>
          <ReviewCard
            name={'Александр Морозов'}
            date={'27 апреля 2018'}
            text={'Не знали, как вывезти и сдать скопившийся во дворе металлолом. Не хотелось тратить деньги на грузовое такси и нанимать грузчиков. После звонка в компанию все вопросы решились моментально. Приехали сотрудники с инструментом, оборудованием и сами выполнили порезку и погрузку. Увезли весь металл своим транспортом.'} />

          <ReviewCard
            name={'Ирина Кузнецова'}
            date={'2 мая 2018'}
            text={'Приятно, что за время нашего постоянного сотрудничества, компания не раз делала выгодные предложения. Даже не собираемся менять их на кого-то другого, уже не раз убедились в их профессионализме. Молодцы!'} />

          <ReviewCard
            name={'Владимир Виноградов'}
            date={'7 июня 2018'}
            text={'Сравнивали цены компании с другими точками и пунктами приема металлолома — здесь выгоднее всего. Ребята молодцы, высокий сервис обслуживания и всегда готовы идти навстречу в разных вопросах.'} />

          <ReviewCard
            name={'Роман Зубков'}
            date={'8 июня 2018'}
            text={'Нужно было сразу навести порядок на участке, убрать кучу всякого железного хлама. Приехали ребята, все быстро демонтировали взвесили на электронных весах и погрузили. Работают быстро и четко, то что нужно.'} />

          <ReviewCard
            name={'Андрей Тихонов'}
            date={'19 июля 2018'}
            text={'Отличная компания, на сайте представлены все расценки на лом. Работают хорошо, берутся за любой демонтаж! Все демонтировали, взвесили на электронных весах, деньги отдали сразу.'} />

          <ReviewCard
            name={'Евгений'}
            date={'2 августа 2018'}
            text={'Спасибо за помощь в демонтаже и вывозе металлолома. Необходимо было расчистить и вывезти достаточно большие объемы. Коллеги порекомендовали обратиться сюда. Цены здесь выше, чем в других местах, и принимают металл без жульничества.'} />

          <ReviewCard
            name={'Антон Мельников'}
            date={'28 декабря 2018'}
            text={'Вызывали ребят из этой компании когда нужно было избавиться от старого железного гаража и еще от кое-каких конструкций на даче. Приехали в назначенное время, со своей техникой и оборудованием, все порезали и вывезли, работают профессионально, взвешивали на электронных весах, суммой за лом остались довольны'} />

          <ReviewCard
            name={'Глеб Новгородский'}
            date={'1 марта 2019'}
            text={'Пункт приема находится в удобном для меня месте, поэтому регулярно сдаю здесь металлолом. Принимают черный и цветной лом всех видов по нормальной цене. При оценке к состоянию металла не придираются, взвешивают на проверенных весах. Рассчитываются сразу.'} />

          <ReviewCard
            name={'Илья Михайленко'}
            date={'11 апреля 2019'}
            text={'Сдавал недавно металлолом в данную приемку. Остался всем очень доволен, завесили быстро и оплатили сразу же на месте без каких-либо задержек.'} />

          <ReviewCard
            name={'Константин'}
            date={'1 июля 2019'}
            text={'Недавно привозили груду металлолома, пункты приема работают оперативно. При взвешивании не обманывают, цена за лом хорошая. Рекомендую!'} />

          <ReviewCard
            name={'Даниил Климов'}
            date={'16 октября 2019'}
            text={'Приятно иметь дело с честной компанией. Сделали выгодное предложение. Помогли в расчете работ. Качественно и оперативно произвели демонтаж гаражей.'} />

        </ul>
      </div>
    </section>
  )
}

export default ReviewsSection

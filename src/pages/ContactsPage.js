import React from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import PageTitle from "../components/PageTitle"
import Paragraph from "../components/Paragraph"
import ContactUsMiniSection from "../components/Sections/ContactUsMiniSection"
import AddressAndMap from "../components/Sections/AddressAndMap";

function ContactsPage() {
  return (
    <MainLayout>
      <HomeSection />

      <PageTitle title={'Прием металлолома рядом, адрес, точка на карте, телефон ООО «Стандарт»'} />

      <Paragraph text={'Хотите сдать металлом, и думаете: «Где есть прием металла рядом со мной?» Вам помогут контакты ООО «Стандарт», размещенные на данной странице: точный адрес, точка на карте и номер телефона нашего пункта приема металлолома в Одинцовском районе.'} />
      <Paragraph text={'Стоит отметить, что мы осуществляем демонтаж и вывоз металлолома по Москве и Московской области. Свяжитесь с нами, воспользовавшись контактной информацией, формами или чатом на сайте, и мы проведем экспресс-оценку и осуществим оперативный прием и вывоз лома черных и цветных металлов.'} />

      <AddressAndMap />

      <ContactUsMiniSection />
    </MainLayout>
  )
}

export default ContactsPage

import React from 'react'
import MainLayout from "../layouts/MainLayout"
import HomeSection from "../components/Sections/HomeSection"
import PageTitle from "../components/PageTitle"
import Paragraph from "../components/Paragraph"
import ReviewsSection from "../components/Sections/ReviewsSection"
import ContactUsMiniSection from "../components/Sections/ContactUsMiniSection"
import PartnersSection from "../components/Sections/PartnersSection"

function ReviewsPage() {
  return (
    <MainLayout>
      <HomeSection />
      <PageTitle title={'Выгодно сдать металлолом: отзывы клиентов пункта приема лома ООО «Стандарт»'} />

      <Paragraph text={'Не знаете где и как выгодно сдать металлолом? Вам точно помогут отзывы клиентов пункта приема лома ООО «Стандарт»!'} />
      <Paragraph text={'Мы делаем все, чтобы сдавать нам лом не только выгодно, но и комфортно, для этого мы не только создали дополнительный сервис по оценке, демонтажу и вывозу металлолома, но и ведем диалог с нашими клиентами. Здесь опубликованы некоторые отзывы людей, с которыми сотрудничала наша компания, надеемся, что это поможет Вам при выборе пункта сдачи металлолома. Также Вы можете оставить свой комментарий и отзыв, написав нам письмо на указанную электронную почту в разделе «Контакты».'} />

      <PartnersSection />
      <ReviewsSection />
      <ContactUsMiniSection />
    </MainLayout>
  )
}

export default ReviewsPage

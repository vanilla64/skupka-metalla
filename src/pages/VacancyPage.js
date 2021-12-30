import React from 'react'
import MainLayout from "../layouts/MainLayout";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import ContactUsMiniSection from "../components/Sections/ContactUsMiniSection"
import HomeSection from "../components/Sections/HomeSection";

function VacancyPage() {
  return (
    <MainLayout>
      <HomeSection />
        <PageTitle title={'Вакансии пункта приема металлолома ООО «Стандарт»'} />

        <Paragraph text={'Водитель на КамАЗ- манипулятор(ломовоз)'} />
        <Paragraph text={'Разнорабочие(приемщики и сортировщики лома черных и цветных металлов)'} />

        <ContactUsMiniSection />
    </MainLayout>
  )
}

export default VacancyPage

import Image from 'next/image'
import Navigation from './navigation/Navigation'
import Banner from './banner/Banner'
import Main from './ui/Main'
import Features from './features/Features'
import Form from './form/Form'
import Section from './ui/Section'
import Others from './others/Others'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <Main>
        <Features />
      </Main>
      <Section bgColor='bg-section'>
        <Form />
      </Section>
      <Section>
        <Others />
      </Section>
      <Toaster/>
    </>
  )
}

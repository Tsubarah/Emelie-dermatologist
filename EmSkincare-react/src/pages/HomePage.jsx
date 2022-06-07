import Hero from '../components/Hero'
import TreatmentIcons from '../components/TreatmentIcons'
import './HomePage.css'

export default function HomePage() {
  return (
  <main className="wrapper">
    <Hero />

    <section className="treatments">
      <TreatmentIcons />
      
      <p>Get your treatment done for a great mood. Simple pleasures can make your week, not just day</p>
      
      <a href="/services" className="treatment-btn">VIEW SERVICE MENU</a>
    </section>
  </main>
  )
}

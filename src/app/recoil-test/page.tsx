import Footer from '@/components/common/Footer'
import Section1 from '@/components/recoilTest/Section1'
import Section2 from '@/components/recoilTest/Section2'
import Section3 from '@/components/recoilTest/Section3'

export default function page() {
  return (
    <>
      <h1 className="text-2xl font-bold">Recoil Test</h1>

      <section>
        <Section1 />
      </section>

      <section>
        <Section2 />
      </section>

      <section>
        <Section3 />
      </section>

      <Footer />
    </>
  )
}

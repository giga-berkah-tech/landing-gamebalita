import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';

export default function Home() {
  return (
    <>
      <SeoHead title="Game Balita - Balita Belajar" />
      <Layout>
        <Hero />

        <Contact />
      </Layout>
    </>
  );
}

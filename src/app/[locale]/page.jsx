import Hero from '@/components/core/Root/Hero/Hero';
import Content from '@/components/core/Root/Content/Content';

export const metadata = {
  title: 'Serene.',
  description: 'Meet the perfect strangers over food and wine!',
};

export default function Home() {
  return (
    <>
      <section
        className="home-section parallax-mousemove-scene scrollSpysection"
        id="home"
      >
        <Hero />
      </section>
      <Content />
    </>
  );
}

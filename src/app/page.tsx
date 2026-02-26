import Hero from '@/components/Hero';
import ManifestoHook from '@/components/ManifestoHook';
import ZingCallout from '@/components/ZingCallout';
import LatestReleases from '@/components/LatestReleases';
import CreatorCallout from '@/components/CreatorCallout';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ManifestoHook />
      <ZingCallout />
      <LatestReleases />
      <CreatorCallout />
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import Manifesto from '@/components/Manifesto';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'The Vision | Zinema Music | Cinema Scale. Community Soul.',
    description:
        'Learn how Zinema Music is disrupting the Indian music industry with high-volume, cinematic releases and a community-first creator ecosystem.',
};

export default function VisionPage() {
    return (
        <>
            <Manifesto />
            <Footer />
        </>
    );
}

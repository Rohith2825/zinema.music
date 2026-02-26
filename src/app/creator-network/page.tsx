import type { Metadata } from 'next';
import CreatorNetwork from '@/components/CreatorNetwork';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Zinema Tribe | Creator Network & Copyright Whitelist',
    description:
        'Video editors, dancers, and influencers—whitelist your channel with Zinema Music to use our premium cinematic tracks with zero copyright strikes.',
};

export default function CreatorNetworkPage() {
    return (
        <>
            <CreatorNetwork />
            <Footer />
        </>
    );
}

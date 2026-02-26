import type { Metadata } from 'next';
import Catalog from '@/components/Catalog';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Official Catalog & Releases | Zinema Music',
    description:
        'Stream the complete Zinema Music discography. High-fidelity Thamizh, Hindi, Telugu, and Malayalam tracks updated three times a week.',
};

export default function CatalogPage() {
    return (
        <>
            <Catalog />
            <Footer />
        </>
    );
}

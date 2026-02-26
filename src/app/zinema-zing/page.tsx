import type { Metadata } from 'next';
import ZinemaZing from '@/components/ZinemaZing';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Zinema Zing Contest | Win ₹1 Lakh & A Feature Film Debut',
    description:
        'Enter the ultimate monthly music challenge. Download Zinema Music instrumentals, record your vocals, and win massive cash prizes and industry features.',
};

export default function ZinemaZingPage() {
    return (
        <>
            <ZinemaZing />
            <Footer />
        </>
    );
}

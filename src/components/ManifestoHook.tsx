'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ManifestoHook.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

export default function ManifestoHook() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className="section-marker"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    custom={0}
                    variants={fadeUp}
                >
                    01 // THE VISION
                </motion.div>

                <motion.h2
                    className={styles.headline}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    custom={1}
                    variants={fadeUp}
                >
                    Music For All.<br />
                    <span className="gold-text">Opportunity For Everyone.</span>
                </motion.h2>

                <motion.p
                    className={styles.body}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    custom={2}
                    variants={fadeUp}
                >
                    For too long, the music industry has been locked behind gatekeepers,
                    closed doors, and elite studios. Zinema Music is tearing the doors
                    off the hinges. We believe the next generation-defining track can
                    come from a bedroom in Chennai, a street in Mumbai, or a college
                    dorm in Punjab. Our mission is ruthless: Produce massive, cinematic,
                    chart-ready music at a relentless pace—and hand the microphone directly to you.
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    custom={3}
                    variants={fadeUp}
                >
                    <Link href="/vision" className="text-link">
                        Read Our Full Vision ➔
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './CreatorCallout.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

export default function CreatorCallout() {
    return (
        <section className={styles.section}>
            {/* Animated Background Grid */}
            <div className={styles.bgGrid}>
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.bgTile}
                        style={{
                            animationDelay: `${i * 0.3}s`,
                            opacity: 0.03 + Math.random() * 0.04,
                        }}
                    />
                ))}
            </div>

            <div className={styles.container}>
                <motion.div
                    className="section-marker"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    04 // #ZINEMATRIBE
                </motion.div>

                <motion.h2
                    className={styles.headline}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    variants={fadeUp}
                >
                    BUILD YOUR CHANNEL<br />
                    <span className="gold-text">WITH OUR MUSIC.</span>
                </motion.h2>

                <motion.p
                    className={styles.body}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={fadeUp}
                >
                    Are you a dancer? A video editor? A reactor? Join the Zinema Tribe.
                    Whitelist your channel to use our entire catalog with <strong>zero copyright
                        strikes</strong>. Keep your monetization, get early access to tracks, and
                    let us amplify your content to millions.
                </motion.p>

                <motion.div
                    className={styles.ctaWrap}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                    variants={fadeUp}
                >
                    <Link href="/creator-network" className="btn-gold">
                        APPLY FOR WHITELIST ACCESS
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ZingCallout.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

const steps = [
    { num: '01', title: 'Listen', desc: 'Find your anthem from our weekly drops.' },
    { num: '02', title: 'Create', desc: 'Download the stems, record your vocals, and post to Instagram/YouTube.' },
    { num: '03', title: 'Win', desc: 'Tag us, hype your crowd, and secure the bag plus a Feature Film debut.' },
];

export default function ZingCallout() {
    return (
        <section className={styles.section}>
            <div className={styles.bgGradient} />

            <div className={styles.container}>
                <div className={styles.topRow}>
                    <div className={styles.textCol}>
                        <motion.div
                            className="section-marker"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            variants={fadeUp}
                        >
                            02 // THE STAGE IS YOURS
                        </motion.div>

                        <motion.h2
                            className={styles.headline}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            variants={fadeUp}
                        >
                            THE ZINEMA ZING<br />
                            <span className="gold-text">CHALLENGE</span>
                        </motion.h2>

                        <motion.p
                            className={styles.body}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                            variants={fadeUp}
                        >
                            Every month, we drop a ₹1,00,000 prize pool to find India&apos;s
                            rawest, most talented vocalists. No industry connections needed.
                            Just your voice, our premium tracks, and the audience.
                        </motion.p>
                    </div>

                    {/* Golden Ticket */}
                    <div className={styles.ticketCol}>
                        <div className={styles.ticket}>
                            <div className={styles.ticketInner}>
                                <div className={styles.ticketLabel}>GOLDEN TICKET</div>
                                <div className={styles.ticketAmount}>₹1,00,000</div>
                                <div className={styles.ticketSub}>MONTHLY PRIZE</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3-Step Graphic */}
                <div className={styles.stepsRow}>
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.num}
                            className={styles.step}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 3}
                            variants={fadeUp}
                        >
                            <div className={styles.stepNum}>{s.num}</div>
                            <h3 className={styles.stepTitle}>{s.title}</h3>
                            <p className={styles.stepDesc}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.ctaWrap}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={6}
                    variants={fadeUp}
                >
                    <Link href="/zinema-zing" className="btn-gold">
                        VIEW RULES &amp; DOWNLOAD STEMS
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

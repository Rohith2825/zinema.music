'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Manifesto.module.css';

// Deterministic pseudo-random to avoid SSR/client hydration mismatch
function seededRandom(seed: number) {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

const pillars = [
    {
        icon: '⚡',
        title: 'Relentless Volume',
        desc: 'We don\u2019t make you wait. 52 weeks a year, 3 tracks a week. From Thamizh mass anthems to Hindi Lofi, we are scoring the soundtrack of the internet in real-time.',
    },
    {
        icon: '👑',
        title: 'Democratized Opportunity',
        desc: 'The Zinema Zing challenge isn\u2019t a marketing gimmick; it is our A&R department. We bypass traditional scouting and give ₹1 Lakh and feature film slots directly to the community.',
    },
    {
        icon: '🛡️',
        title: 'Creator Protection',
        desc: 'Copyright strikes kill creativity. We offer a true haven for digital creators. If you are in our network, our music is your music. Monetize freely.',
    },
];

export default function Manifesto() {
    return (
        <section className={styles.section} id="manifesto">
            {/* Page Hero */}
            <div className={styles.pageHero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.heroHeadline}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        WE ARE TEARING DOWN<br />
                        <span className="gold-text">THE GATES.</span>
                    </motion.h1>
                    <motion.p
                        className={styles.heroSub}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Cinema Scale. Community Soul.
                    </motion.p>
                </div>
            </div>

            {/* Deep Dive Content */}
            <div className={styles.container}>
                <div className={styles.textCol}>
                    <motion.div
                        className="section-marker"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        custom={0}
                        variants={fadeUp}
                    >
                        THE MANIFESTO
                    </motion.div>

                    <motion.h2
                        className={styles.headline}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        custom={1}
                        variants={fadeUp}
                    >
                        The Old Industry<br />
                        <span className="gold-text">is Broken.</span>
                    </motion.h2>

                    <motion.p
                        className={styles.body}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        custom={2}
                        variants={fadeUp}
                    >
                        The traditional music label model is slow, exclusive, and out of touch
                        with how culture moves today. Artists wait months to release a single
                        track, and fans are treated merely as consumers. Zinema Music was built
                        to shatter this cycle. We operate at the speed of the internet, dropping
                        three fully mastered, cinematic tracks every single week. But we don&apos;t
                        stop at production.
                    </motion.p>

                    <motion.p
                        className={styles.body}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        custom={3}
                        variants={fadeUp}
                    >
                        We believe that the audience is the ultimate collaborator. Whether you are
                        singing a cover, choreographing a dance, or editing a montage, your
                        creativity gives our music life. That is why we built an ecosystem that
                        rewards you for participating.
                    </motion.p>
                </div>

                {/* Soundwave Visual */}
                <div className={styles.visualCol}>
                    <div className={styles.soundwave}>
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className={styles.bar}
                                style={{
                                    height: `${20 + Math.sin(i * 0.5) * 60 + seededRandom(i + 400) * 20}%`,
                                    animationDelay: `${i * 0.08}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Three Pillars */}
            <motion.h3
                className={styles.pillarsHeading}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={fadeUp}
            >
                OUR THREE PILLARS
            </motion.h3>

            <div className={styles.pillars}>
                {pillars.map((p, i) => (
                    <motion.div
                        key={p.title}
                        className={styles.pillar}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-30px' }}
                        custom={i + 1}
                        variants={fadeUp}
                    >
                        <span className={styles.pillarIcon}>{p.icon}</span>
                        <h3 className={styles.pillarTitle}>{p.title}</h3>
                        <p className={styles.pillarDesc}>{p.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* CTA to join */}
            <motion.div
                className={styles.ctaWrap}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={fadeUp}
            >
                <Link href="/zinema-zing" className="btn-gold">
                    JOIN THE ZINEMA ZING CHALLENGE
                </Link>
            </motion.div>
        </section>
    );
}

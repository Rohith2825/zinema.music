'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ZinemaZing.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

const steps = [
    {
        num: '01',
        title: 'THE SELECTION',
        desc: 'Browse this month\u2019s official contest playlist. Choose the instrumental that fits your vocal range and style. You can sing the original lyrics, translate them, or write your own verse.',
    },
    {
        num: '02',
        title: 'THE STUDIO (YOUR BEDROOM)',
        desc: 'Download the official high-fidelity stems and instrumentals directly from our portal below. Mix your vocals.',
    },
    {
        num: '03',
        title: 'THE DROP',
        desc: 'Film a raw, authentic video of your performance. Upload it as an Instagram Reel or YouTube Short.',
    },
    {
        num: '04',
        title: 'THE TAG (CRUCIAL)',
        desc: 'You MUST follow and tag @ZinemaMusic and use the hashtag #ZinemaZing in your caption to be officially entered into the tracking system.',
    },
];

const downloads = [
    { title: 'Madras Fury', format: 'WAV + MP3', bpm: 128, language: 'Thamizh' },
    { title: 'Neon Raat', format: 'WAV + MP3', bpm: 110, language: 'Hindi' },
    { title: 'Street Kuthu', format: 'WAV + MP3', bpm: 135, language: 'Thamizh' },
];

const faqs = [
    {
        q: 'Do I need professional studio equipment?',
        a: 'No. A good smartphone camera and raw passion are enough. We judge the voice and the vibe, not the microphone brand.',
    },
    {
        q: 'Can I enter multiple times?',
        a: 'Yes. You can submit different vocal takes for different tracks within the same month.',
    },
    {
        q: 'When are winners announced?',
        a: 'The first week of every new month, live on our Instagram page.',
    },
];

export default function ZinemaZing() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className={styles.section} id="zing">
            {/* Background Gradient */}
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
                            THE BIG STAGE.<br />
                            <span className="gold-text">THE BIG BAG.</span>
                        </motion.h2>

                        <motion.p
                            className={styles.subline}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1.5}
                            variants={fadeUp}
                        >
                            Sing. Go Viral. Win ₹1,00,000.
                        </motion.p>

                        <motion.p
                            className={styles.body}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                            variants={fadeUp}
                        >
                            Every month, we drop a ₹1,00,000 prize pool to find India&apos;s
                            rawest, most talented vocalists. No industry connections needed. Just
                            your voice, our premium tracks, and the audience.
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

                {/* How To Dominate */}
                <motion.h3
                    className={styles.sectionSubHead}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2.5}
                    variants={fadeUp}
                >
                    Your Path to the Golden Ticket.
                </motion.h3>

                {/* Timeline */}
                <div className={styles.timeline}>
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
                            <div className={styles.stepDot} />
                            <h3 className={styles.stepTitle}>{s.title}</h3>
                            <p className={styles.stepDesc}>{s.desc}</p>
                        </motion.div>
                    ))}
                    <div className={styles.timelineLine} />
                </div>

                {/* Dual Awards */}
                <div className={styles.awards}>
                    <motion.div
                        className={styles.awardCard}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={7}
                        variants={fadeUp}
                    >
                        <span className={styles.awardIcon}>🏆</span>
                        <h3 className={styles.awardTitle}>The Creator Award</h3>
                        <div className={styles.awardAmount}>₹50,000</div>
                        <p className={styles.awardDesc}>
                            This is about pure talent. Our internal directors and producers evaluate
                            submissions for pitch, emotional delivery, vocal range, and unique style.
                            Impress the studio, win the cash.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.awardCard}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={8}
                        variants={fadeUp}
                    >
                        <span className={styles.awardIcon}>🔥</span>
                        <h3 className={styles.awardTitle}>The Public Choice Award</h3>
                        <div className={styles.awardAmount}>₹50,000</div>
                        <p className={styles.awardDesc}>
                            This is about stardom. The streets decide this winner. The submission that
                            generates the highest organic engagement, shares, and algorithmic hype
                            takes this prize. Build your community, win the cash.
                        </p>
                    </motion.div>
                </div>

                {/* Golden Ticket Callout */}
                <motion.div
                    className={styles.goldenCallout}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={9}
                    variants={fadeUp}
                >
                    Winners from both categories are flown out (or digitally integrated)
                    to record as the Lead Vocalist on an upcoming Zinema Music flagship track,
                    securing a chance to be featured in Zinema Media Private Limited feature films.
                </motion.div>

                {/* Download Portal */}
                <motion.div
                    className={styles.downloadPortal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={10}
                    variants={fadeUp}
                >
                    <h3 className={styles.portalTitle}>THIS MONTH&apos;S TRACKS</h3>
                    <div className={styles.downloadGrid}>
                        {downloads.map((d) => (
                            <div key={d.title} className={styles.downloadCard}>
                                <div className={styles.downloadInfo}>
                                    <span className={styles.downloadName}>{d.title}</span>
                                    <span className={styles.downloadMeta}>
                                        {d.language} · {d.bpm} BPM · {d.format}
                                    </span>
                                </div>
                                <button className={styles.downloadBtn}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    STEMS
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    className={styles.ctas}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={11}
                    variants={fadeUp}
                >
                    <a href="#" className="btn-gold">
                        VIEW RULES &amp; DOWNLOAD STEMS
                    </a>
                    <a href="#" className="btn-outline">
                        SUBMIT YOUR ENTRY LINK HERE
                    </a>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    className="faq-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={12}
                    variants={fadeUp}
                >
                    <h3 className={styles.faqHeading}>FREQUENTLY ASKED QUESTIONS</h3>
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                {faq.q}
                                <span className={`faq-chevron ${openFaq === i ? 'open' : ''}`}>
                                    ▾
                                </span>
                            </button>
                            <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

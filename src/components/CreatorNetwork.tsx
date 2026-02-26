'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CreatorNetwork.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

const benefits = [
    {
        icon: '💰',
        title: '100% Monetization',
        desc: 'Stop losing your YouTube AdSense to massive record labels. By joining our whitelist, you are legally cleared to use our music. You make the video, you keep the money.',
    },
    {
        icon: '🎬',
        title: 'Unmatched Quality',
        desc: 'No more generic, royalty-free elevator music. Score your vlogs, edits, and montages with actual cinematic, chart-quality music produced by industry heavyweights.',
    },
    {
        icon: '📢',
        title: 'Grow With Us',
        desc: 'We actively scout the #ZinemaTribe tag. When you make a killer edit or dance routine to our music, we repost it to our hundreds of thousands of followers.',
    },
];

const creatorTypes = [
    {
        icon: '💃',
        title: 'Dancers & Choreographers',
        desc: 'We provide the heavy bass and complex rhythms; you provide the movement.',
    },
    {
        icon: '✂️',
        title: 'Video Editors & AMV Creators',
        desc: 'Use our cinematic synthwave and drill beats to make your transitions hit harder.',
    },
    {
        icon: '🎥',
        title: 'Lifestyle Vloggers',
        desc: 'Score your cinematic b-roll with our acoustic and indie pop tracks.',
    },
];

export default function CreatorNetwork() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        whatsapp: '',
        platform: 'YouTube',
        channelUrl: '',
        followers: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className={styles.section} id="tribe">
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
                    NEVER GET A COPYRIGHT<br />
                    <span className="gold-text">STRIKE AGAIN.</span>
                </motion.h2>

                <motion.p
                    className={styles.subheadline}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1.5}
                    variants={fadeUp}
                >
                    Premium cinematic music, completely cleared for your channel. Keep your ad revenue.
                </motion.p>

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

                {/* Benefits */}
                <div className={styles.benefits}>
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            className={styles.benefitCard}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 3}
                            variants={fadeUp}
                        >
                            <span className={styles.benefitIcon}>{b.icon}</span>
                            <h3 className={styles.benefitTitle}>{b.title}</h3>
                            <p className={styles.benefitDesc}>{b.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Who Is This For */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={6}
                    variants={fadeUp}
                >
                    <h3 className={styles.whoTitle}>WHO IS THIS FOR?</h3>
                    <div className={styles.whoGrid}>
                        {creatorTypes.map((ct) => (
                            <div key={ct.title} className={styles.whoCard}>
                                <span className={styles.whoIcon}>{ct.icon}</span>
                                <h4 className={styles.whoCardTitle}>{ct.title}</h4>
                                <p className={styles.whoCardDesc}>{ct.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Application Form */}
                <motion.div
                    className={styles.formCard}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={7}
                    variants={fadeUp}
                >
                    <h3 className={styles.formTitle}>APPLY FOR WHITELISTING</h3>
                    <p className={styles.formSubtitle}>
                        Get whitelisted and start monetizing your content with our premium cinematic music.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="full-name">Full Name</label>
                                <input
                                    id="full-name"
                                    type="text"
                                    className={styles.input}
                                    placeholder="Your full name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="email-address">Email Address</label>
                                <input
                                    id="email-address"
                                    type="email"
                                    className={styles.input}
                                    placeholder="you@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="whatsapp">WhatsApp Number</label>
                                <input
                                    id="whatsapp"
                                    type="tel"
                                    className={styles.input}
                                    placeholder="+91 98765 43210"
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="platform">Primary Platform</label>
                                <select
                                    id="platform"
                                    className={styles.select}
                                    value={formData.platform}
                                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                                >
                                    <option value="YouTube">📺 YouTube</option>
                                    <option value="Instagram">📸 Instagram</option>
                                    <option value="TikTok">🎵 TikTok</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="channel-url">Channel / Profile URL</label>
                                <input
                                    id="channel-url"
                                    type="url"
                                    className={styles.input}
                                    placeholder="https://youtube.com/@yourchannel"
                                    value={formData.channelUrl}
                                    onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="followers">Follower Count (Approx)</label>
                                <input
                                    id="followers"
                                    type="text"
                                    className={styles.input}
                                    placeholder="e.g. 10,000"
                                    value={formData.followers}
                                    onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`btn-gold ${styles.submitBtn}`}
                            disabled={submitted}
                        >
                            {submitted ? '✓ APPLICATION SENT!' : 'SECURE MY CHANNEL'}
                        </button>
                    </form>

                    <p className={styles.microCopy}>
                        <em>Approval takes 24-48 hours. You will receive an email confirmation once your channel ID is cleared in our system.</em>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

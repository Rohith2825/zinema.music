'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            {/* Animated Background */}
            <div className={styles.bgOverlay} />
            <div className={styles.bgGrain} />

            {/* Cinematic side bars */}
            <div className={styles.letterboxTop} />
            <div className={styles.letterboxBottom} />

            {/* Floating Particles */}
            <div className={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.particle}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 6}s`,
                            animationDuration: `${4 + Math.random() * 6}s`,
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                        }}
                    />
                ))}
            </div>

            {/* Animated Waveform Background */}
            <div className={styles.waveformBg}>
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.waveBar}
                        style={{
                            animationDelay: `${i * 0.06}s`,
                            height: `${15 + Math.sin(i * 0.4) * 30 + Math.random() * 15}%`,
                        }}
                    />
                ))}
            </div>

            <div className={styles.content}>
                <motion.p
                    className={styles.superHeadline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    THE NEW ERA OF INDIAN MUSIC IS HERE.
                </motion.p>

                <motion.h1
                    className={styles.mainHeadline}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                >
                    YOUR VOICE.<br />
                    OUR MUSIC.<br />
                    <span className={styles.goldLine}>THE BIG SCREEN.</span>
                </motion.h1>

                <motion.p
                    className={styles.subHeadline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    We don&apos;t just drop chart-topping tracks; we launch superstars. 3 new songs
                    every week. A ₹1,00,000 prize every month. Your infinite opportunity starts
                    right here.
                </motion.p>

                <motion.div
                    className={styles.ctas}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <a href="#zing" className="btn-gold">
                        ENTER THE ₹1 LAKH CONTEST
                    </a>
                    <a href="#catalog" className="btn-outline">
                        STREAM THE LATEST DROP
                    </a>
                </motion.div>

                <motion.p
                    className={styles.microCopy}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                >
                    <em>Join over 15,000+ creators shaping the future of sound.</em>
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}

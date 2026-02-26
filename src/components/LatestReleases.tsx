'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './LatestReleases.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

const tracks = [
    {
        id: 1,
        title: 'Madras Fury',
        language: 'Thamizh',
        genre: 'Mass EDM',
        color: '#FF4444',
        gradient: 'linear-gradient(135deg, #FF4444, #CC0000)',
    },
    {
        id: 2,
        title: 'Neon Raat',
        language: 'Hindi',
        genre: 'Synthwave',
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    },
    {
        id: 3,
        title: 'Love in Kochi',
        language: 'Malayalam',
        genre: 'Indie Acoustic',
        color: '#10B981',
        gradient: 'linear-gradient(135deg, #10B981, #059669)',
    },
];

export default function LatestReleases() {
    const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);

    return (
        <section
            className={styles.section}
            style={{
                '--accent-glow': hoveredTrack !== null
                    ? tracks.find(t => t.id === hoveredTrack)?.color ?? 'transparent'
                    : 'transparent',
            } as React.CSSProperties}
        >
            <div className={styles.bgGlow} />

            <div className={styles.container}>
                <motion.div
                    className="section-marker"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    03 // NOW STREAMING
                </motion.div>

                <motion.h2
                    className={styles.headline}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    variants={fadeUp}
                >
                    3 Fresh Tracks.<br />
                    <span className="gold-text">Every Single Week.</span>
                </motion.h2>

                <div className={styles.grid}>
                    {tracks.map((track, i) => (
                        <motion.div
                            key={track.id}
                            className={styles.tile}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 2}
                            variants={fadeUp}
                            onMouseEnter={() => setHoveredTrack(track.id)}
                            onMouseLeave={() => setHoveredTrack(null)}
                        >
                            <div className={styles.tileArt} style={{ background: track.gradient }}>
                                <div className={styles.tileOverlay}>
                                    <button className={styles.playBtn} aria-label={`Play ${track.title}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.langBadge}>{track.language}</div>
                                <div className={styles.soundBars}>
                                    {[...Array(5)].map((_, j) => (
                                        <div key={j} className={styles.soundBar} style={{ animationDelay: `${j * 0.12}s` }} />
                                    ))}
                                </div>
                            </div>
                            <div className={styles.tileInfo}>
                                <h3 className={styles.tileTitle}>{track.title}</h3>
                                <p className={styles.tileGenre}>{track.genre}</p>
                            </div>
                            <div className={styles.streamIcons}>
                                <a href="#" className={styles.streamIcon} aria-label="Spotify" title="Spotify">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                    </svg>
                                </a>
                            </div>
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
                    <Link href="/catalog" className="btn-gold">
                        BROWSE THE FULL CATALOG
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

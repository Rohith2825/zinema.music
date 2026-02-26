'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Catalog.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

const languageFilters = ['All', 'Thamizh', 'Hindi', 'Telugu', 'Malayalam', 'Punjabi'];
const vibeFilters = ['Mass / Kuthu', 'Midnight / Lofi', 'Club / EDM', 'Acoustic / Indie', 'Devotional'];

const tracks = [
    {
        id: 1,
        title: 'Madras Fury',
        language: 'Thamizh',
        genre: 'Mass EDM',
        bpm: 128,
        color: '#FF4444',
        gradient: 'linear-gradient(135deg, #FF4444, #CC0000)',
    },
    {
        id: 2,
        title: 'Neon Raat',
        language: 'Hindi',
        genre: 'Synthwave',
        bpm: 110,
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    },
    {
        id: 3,
        title: 'Love in Kochi',
        language: 'Malayalam',
        genre: 'Indie Acoustic',
        bpm: 92,
        color: '#10B981',
        gradient: 'linear-gradient(135deg, #10B981, #059669)',
    },
    {
        id: 4,
        title: 'Street Kuthu',
        language: 'Thamizh',
        genre: 'Kuthu Beats',
        bpm: 135,
        color: '#F59E0B',
        gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    },
    {
        id: 5,
        title: 'Midnight Lofi',
        language: 'Hindi',
        genre: 'Lofi Chill',
        bpm: 85,
        color: '#3B82F6',
        gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    },
    {
        id: 6,
        title: 'Villain Theme',
        language: 'Telugu',
        genre: 'Dark Cinematic',
        bpm: 140,
        color: '#EF4444',
        gradient: 'linear-gradient(135deg, #1A1A1A, #4A0000)',
    },
];

export default function Catalog() {
    const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
    const [activeLang, setActiveLang] = useState('All');
    const [activeVibe, setActiveVibe] = useState<string | null>(null);

    const filteredTracks = tracks.filter((t) => {
        if (activeLang !== 'All' && t.language !== activeLang) return false;
        return true;
    });

    return (
        <section
            className={styles.section}
            id="catalog"
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
                    THE SOUND OF THE STREETS.<br />
                    <span className="gold-text">THE SOUND OF CINEMA.</span>
                </motion.h2>

                <motion.p
                    className={styles.subheadline}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1.5}
                    variants={fadeUp}
                >
                    Explore the fastest-growing music library in the country.
                </motion.p>

                <motion.p
                    className={styles.body}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={fadeUp}
                >
                    3 Fresh Tracks. Every Single Week. From high-BPM street Kuthu to late-night
                    Lofi, across Thamizh, Hindi, Telugu, Malayalam, and Punjabi.
                </motion.p>

                {/* Filter Pills */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2.5}
                    variants={fadeUp}
                >
                    <div className={styles.filterSection}>
                        <span className={styles.filterLabel}>LANGUAGE</span>
                        <div className="filter-row">
                            {languageFilters.map((f) => (
                                <button
                                    key={f}
                                    className={`filter-pill ${activeLang === f ? 'active' : ''}`}
                                    onClick={() => setActiveLang(f)}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.filterSection}>
                        <span className={styles.filterLabel}>VIBE</span>
                        <div className="filter-row">
                            {vibeFilters.map((f) => (
                                <button
                                    key={f}
                                    className={`filter-pill ${activeVibe === f ? 'active' : ''}`}
                                    onClick={() => setActiveVibe(activeVibe === f ? null : f)}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Track Grid */}
                <div className={styles.grid}>
                    {filteredTracks.map((track, i) => (
                        <motion.div
                            key={track.id}
                            className={styles.tile}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 3}
                            variants={fadeUp}
                            onMouseEnter={() => setHoveredTrack(track.id)}
                            onMouseLeave={() => setHoveredTrack(null)}
                        >
                            <div
                                className={styles.tileArt}
                                style={{ background: track.gradient }}
                            >
                                <div className={styles.tileOverlay}>
                                    {/* Play Button */}
                                    <button className={styles.playBtn} aria-label={`Play ${track.title}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Language Badge */}
                                <div className={styles.langBadge}>{track.language}</div>

                                {/* Soundwave Animation */}
                                <div className={styles.soundBars}>
                                    {[...Array(5)].map((_, j) => (
                                        <div
                                            key={j}
                                            className={styles.soundBar}
                                            style={{ animationDelay: `${j * 0.12}s` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className={styles.tileInfo}>
                                <h3 className={styles.tileTitle}>{track.title}</h3>
                                <p className={styles.tileGenre}>{track.genre} · {track.bpm} BPM</p>
                            </div>

                            {/* Streaming Icons */}
                            <div className={styles.streamIcons}>
                                <a href="#" className={styles.streamIcon} aria-label="Spotify" title="Spotify">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                    </svg>
                                </a>
                                <a href="#" className={styles.streamIcon} aria-label="Apple Music" title="Apple Music">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.297.228.56.053 1.122.07 1.684.077.166.003.333.012.5.012h11.27c.098 0 .196 0 .294-.003a13.83 13.83 0 002.06-.177c1.08-.22 2.01-.72 2.71-1.593.53-.66.86-1.42 1.04-2.24.1-.46.162-.93.19-1.4.03-.52.05-1.04.06-1.56V6.124zm-6.73 10.083a.907.907 0 01-1.162.453c-3.18-1.943-7.186-2.383-11.907-1.305a.907.907 0 01-.403-1.768c5.168-1.18 9.607-.672 13.19 1.506a.908.908 0 01.283 1.114zm1.55-3.118a1.134 1.134 0 01-1.458.56c-3.64-2.237-9.186-2.885-13.49-1.578a1.136 1.136 0 11-.658-2.175c4.91-1.492 11.013-.77 15.166 1.79.494.303.65.958.44 1.403zm.134-3.245C14.74 7.17 8.56 6.99 5.03 8.07a1.36 1.36 0 11-.786-2.606c4.06-1.24 10.81-1 15.07 1.673a1.358 1.358 0 01-1.376 2.408z" />
                                    </svg>
                                </a>
                                <a href="#" className={styles.streamIcon} aria-label="JioSaavn" title="JioSaavn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.5 16.5a3.5 3.5 0 11-7 0V8a3.5 3.5 0 017 0v8.5z" />
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
                    custom={10}
                    variants={fadeUp}
                >
                    <a href="#" className="btn-gold">
                        BROWSE THE FULL CATALOG
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

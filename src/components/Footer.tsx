'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
    };

    return (
        <footer className={styles.footer} id="join">
            <div className={styles.topDivider} />

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <svg
                                viewBox="0 0 260 80"
                                className={styles.logoSvg}
                                aria-label="Zinema Music"
                            >
                                <text
                                    x="0"
                                    y="52"
                                    fontFamily="'Montserrat', sans-serif"
                                    fontWeight="900"
                                    fontStyle="italic"
                                    fontSize="56"
                                    fill="currentColor"
                                    letterSpacing="-2"
                                >
                                    zinema
                                </text>
                                <rect x="47" y="5" width="11" height="11" rx="1" fill="var(--accent, #E88B2D)" />
                                <text
                                    x="260"
                                    y="72"
                                    fontFamily="'Montserrat', sans-serif"
                                    fontWeight="700"
                                    fontSize="14"
                                    fill="currentColor"
                                    opacity="0.6"
                                    textAnchor="end"
                                    letterSpacing="4"
                                >
                                    MUSIC
                                </text>
                            </svg>
                        </Link>
                        <p className={styles.tagline}>Cinema Scale. Community Soul.</p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram" title="Instagram">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="YouTube" title="YouTube">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="Spotify" title="Spotify">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="X (Twitter)" title="X (Twitter)">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Navigation</h4>
                        <Link href="/" className={styles.footLink}>Home</Link>
                        <Link href="/vision" className={styles.footLink}>The Vision</Link>
                        <Link href="/catalog" className={styles.footLink}>Catalog</Link>
                        <Link href="/zinema-zing" className={styles.footLink}>Zinema Zing</Link>
                        <Link href="/creator-network" className={styles.footLink}>Creator Network</Link>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.newsletterCol}>
                        <h4 className={styles.colTitle}>Don&apos;t Miss A Drop.</h4>
                        <p className={styles.newsletterDesc}>
                            Get early instrumentals and contest alerts.
                        </p>
                        <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                className={styles.newsletterInput}
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className={`btn-gold ${styles.notifyBtn}`}
                                disabled={subscribed}
                            >
                                {subscribed ? '✓ SUBSCRIBED' : 'SUBSCRIBE'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Legal Bottom Row */}
                <div className={styles.legal}>
                    <p className={styles.copyright}>
                        © 2026 Zinema Music, a venture of Zinema Media Private Limited. All Rights Reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <a href="#">Terms of Service</a>
                        <span className={styles.dot}>·</span>
                        <a href="#">Privacy Policy</a>
                        <span className={styles.dot}>·</span>
                        <a href="#">Contest Rules</a>
                        <span className={styles.dot}>·</span>
                        <a href="#">DMCA</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

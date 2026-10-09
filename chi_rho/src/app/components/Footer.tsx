'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
    faDumbbell,
    faBook,
    faUser,
    faArrowRight,
    faMobileScreen
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Map = dynamic(() => import('./Map'), { ssr: false });

const FooterLink = ({ href, icon: Icon, children, external }: { href: string, icon: any, children: React.ReactNode, external?: boolean }) => {
    const content = (
        <>
            <span className="w-6 h-6 flex items-center justify-center">
                <FontAwesomeIcon icon={Icon} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
            </span>
            <span>{children}</span>
        </>
    );
    const className = "flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors py-1 group";
    return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
        </a>
    ) : (
        <Link href={href} className={className}>
            {content}
        </Link>
    );
};

const SocialIcon = ({ href, icon: Icon }: { href: string, icon: any }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 flex items-center justify-center text-yellow-400 transition-colors"
        aria-label={Icon.iconName}
    >
        <FontAwesomeIcon icon={Icon} className="text-lg" />
    </a>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png"
                                alt="Chi Rho Strength"
                                width={40}
                                height={40}
                                className="rounded"
                            />
                            <span className="text-2xl font-bold text-yellow-400">
                                Chi Rho
                            </span>
                        </div>
                        <p className="text-gray-400">
                            Empowering your fitness journey with personalized training and unwavering support.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon href="https://www.facebook.com/profile.php?id=61585916301651" icon={faFacebookF} />
                            <SocialIcon href="https://www.instagram.com/chirhostrength/" icon={faInstagram} />
                            <SocialIcon href="https://www.tiktok.com/@chirhostrength?lang=en" icon={faTiktok} />
                            <SocialIcon href="https://www.youtube.com/@ChiRhoStrength" icon={faYoutube} />
                            <SocialIcon href="https://www.youtube.com/@chirhoshorts" icon={faYoutube} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">Quick Links</h3>
                        <div className="space-y-3">
                            <FooterLink href="/templates" icon={faDumbbell}>
                                Workout Plans
                            </FooterLink>
                            <FooterLink href="/blog" icon={faBook}>
                                Blog
                            </FooterLink>
                            <FooterLink href="/mystory" icon={faUser}>
                                My Story
                            </FooterLink>
                            <FooterLink href="/coaching" icon={faArrowRight}>
                                Coaching
                            </FooterLink>
                            <FooterLink href="https://chirholifts.com/" icon={faMobileScreen} external>
                                Chi-Rho Lifts App
                            </FooterLink>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mt-1 flex-shrink-0" />
                                <a 
                                    href="https://maps.google.com/?q=Toledo,+Ohio" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Toledo, Ohio<br />
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FontAwesomeIcon icon={faPhone} className="text-yellow-500" />
                                <a href="tel:+14193439894" className="text-gray-400 hover:text-white transition-colors">
                                    (419) 343-9894
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
                                <a href="mailto:chirhostrength@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    chirhostrength@gmail.com
                                </a>
                            </div>
                            <div className="pt-2">
                                <p className="text-sm text-yellow-500">Open M-F: 9:00 AM – 5:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2">Our Location</h3>
                        <div className="bg-gray-800 rounded-lg overflow-hidden h-64">
                            <Map />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Chi Rho Strength. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
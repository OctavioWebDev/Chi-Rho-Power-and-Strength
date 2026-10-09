'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
    };

    return (
        <header className="bg-black text-white py-3 p-5 border-b border-gray-800">
            <div className="container mx-auto space-x-3 flex justify-between items-center">
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png"
                            alt="Company Logo"
                            width={80}
                            height={50}
                        />
                    </Link>
                </div>
                <nav className="flex space-x-2 items-center">
                    <Link
                        href="/"
                        aria-label="Home"
                        className="flex items-center hover:text-yellow-400 transition-colors p-2"
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-3" />
                    </Link>
                    <div
                        className="relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            aria-label="Information"
                            className="flex items-center hover:text-yellow-400 p-2 rounded-full hover:bg-gray-900 transition-colors"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <FontAwesomeIcon icon={faCircleInfo} className="text-xl" />
                        </button>
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-gray-900 text-white rounded-lg shadow-2xl border border-gray-800 z-50 transition-all duration-200 ease-in-out transform ${isDropdownOpen
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-95 pointer-events-none'
                                }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ minWidth: '14rem' }}
                        >
                            {/* Training Section */}
                            <div className="px-4 py-2 font-semibold text-yellow-400 border-b border-gray-800">
                                Training
                            </div>
                            <Link
                                href="/templates?type=strength"
                                className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                            >
                                Strength Training
                            </Link>

                            {/* Coaching Section */}
                            <Link
                                href="/coaching"
                                className="block px-4 py-2 font-semibold text-yellow-400 border-t border-b border-gray-800 mt-1 hover:bg-gray-800 transition-colors"
                            >
                                Coaching
                            </Link>
                            <Link
                                href="/coaching/in-person"
                                className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                            >
                                In-Person Coaching
                            </Link>
                            <Link
                                href="/coaching/online"
                                className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                            >
                                Online Coaching
                            </Link>
                            <Link
                                href="/coaching/group-classes"
                                className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                            >
                                Group Classes
                            </Link>
                             <Link
                                href="/gym"
                                className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                            >
                                Chi-Rho Strength Barbell Club
                            </Link>


                            {/* Info Section */}
                            <div className="border-t border-gray-800 mt-1">
                                <Link
                                    href="/book"
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                                >
                                    The Book
                                </Link>
                                <Link
                                    href="/journal"
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                                >
                                    Training Journal
                                </Link>
                                <Link
                                    href="https://chirholifts.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                                >
                                    Chi-Rho Lifts App
                                </Link>
                                <Link
                                    href="/blog"
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="https://www.stickermule.com/chirhops"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                                >
                                    Merch Store
                                </Link>
                                <Link
                                    href="/philosophy"
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                                >
                                    Training Philosophy
                                </Link>
                                <Link
                                    href="/mystory"
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                                >
                                    My Story
                                </Link>
                                <Link
                                    href="/faq"
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-400 transition-colors rounded-b-lg"
                                >
                                    FAQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
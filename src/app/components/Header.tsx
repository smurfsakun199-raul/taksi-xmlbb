'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

import {
    Sun,
    Moon,
    House,
    CodeXml,
    Info,
    PaintBucket,
    WandSparkles,
    Layers2,
} from "lucide-react";

const lisItemLinkBacot = [
    {
        id: 1,
        icon: <House />,
        link: 'blog',
        name: 'Home'
    },
    {
        id: 2,
        icon: <Layers2 />,
        link: 'bacot1',
        name: 'Collections'
    },
    {
        id: 3,
        icon: <PaintBucket />,
        link: 'bacot2',
        name: 'Style'
    },
    {
        id: 4,
        icon: <WandSparkles />,
        link: 'bacot3',
        name: 'Experiments'
    },
    {
        id: 5,
        icon: <Info />,
        link: 'bacot4',
        name: 'About'
    }
];

export default function Header() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light'
        }
        return 'light'
    })

    useEffect(() => {
        if (isDark === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

        localStorage.setItem('theme', isDark);
    }, [isDark]);

    const toggleThemesMode = () => {
        setIsDark(prev => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <header>
            <nav className="pos-sticky width-100ps top pad-bl-10px pad-0-14px br-btm-op">
                <div className="flex jus-c-sb align-itm-c max-w-1180px margin-auto">
                    <div className="flex jus-c-c align-itm-c gap-10px">
                        <div className="bacotLogo">
                            <CodeXml />
                        </div>
                        <div className="authorTolol">
                            <span>Pemalas</span>
                            <p className="font-size-12px">Animasi yang biasa</p>
                        </div>
                    </div>
                    <div className="icn-item-svg flex jus-c-c align-itm-c gap-20px">
                        {lisItemLinkBacot.map((item) => (
                            <Link key={item.id} href={item.link}>{item.icon}{item.name}</Link>
                        ))}
                    </div>
                    <div>
                        <button onClick={toggleThemesMode} className="icn-svg-theme flex align-itm-fe bg-white outline-op br-radius-12px gap-4px">
                            {isDark === 'dark' ? (
                                <><Moon /> Darkz</>
                            ) : (
                                <><Sun /> Light</>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </header>

    )
}
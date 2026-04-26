'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Sun,
    Moon,
    House,
    CodeXml,
    Info,
    CircleUserRound,
    ChartNoAxesColumn,
    Layers2,
} from "lucide-react";

const listItemLinksBacot = [
    {
        id: 1,
        icon: <House />,
        link: '/',
        name: 'Home'
    },
    {
        id: 2,
        icon: <Layers2 />,
        link: '/projects',
        name: 'Projects'
    },
    {
        id: 3,
        icon: <ChartNoAxesColumn />,
        link: '/stats',
        name: 'Stats'
    },
    {
        id: 4,
        icon: <CircleUserRound />,
        link: '/contact',
        name: 'Contact'
    },
    {
        id: 5,
        icon: <Info />,
        link: '/about',
        name: 'About'
    }
];

export default function Header() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark'
        }
        return 'dark'
    })

    useEffect(() => {
        if (isDark === 'light') {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }

        localStorage.setItem('theme', isDark);
    }, [isDark]);

    const toggleThemesMode = () => {
        setIsDark(prev => prev === 'dark' ? 'light' : 'dark');
    }

    const pathName = usePathname();

    return (
        <header>
            <nav className="pos-sticky width-100ps top pad-bl-10px pad-0-14px">
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
                    <div className="icn-item-svg flex jus-c-c align-itm-c gap-20px pad-10-24px outline-op bg-blur-card br-radius-12px">
                        {listItemLinksBacot.map((item) => {
                            const linkActive = pathName === item.link;
                            return (
                                <Link key={item.id} href={item.link}
                                    className={linkActive ? 'color-blue' : ''}>{item.icon}{item.name}</Link>
                            );
                        })}
                    </div>
                    <div>
                        <button onClick={toggleThemesMode} className="icn-svg-theme bg-blur-card flex align-itm-fe bg-white outline-op br-radius-12px gap-4px">
                            {isDark === 'light' ? (
                                <><Sun /> Light</>
                            ) : (
                                <><Moon /> Darkz</>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            <div className="horiz-effect-center"></div>
        </header>

    )
}
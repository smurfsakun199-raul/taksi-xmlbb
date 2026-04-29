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
    TextAlignJustify,
    EyeClosed,
    Eye,
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
    const [isLight, setIsLight] = useState('dark');

    useEffect(() => {
        const simpanTheme = localStorage.getItem('theme') || 'dark';
        setIsLight(simpanTheme);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('light', isLight === 'light');
        localStorage.setItem('theme', isLight);
    }, [isLight]);

    const toggleTheme = () => {
        setIsLight(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const pathName = usePathname();

    const [downLink, setDownLink] = useState(false);

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
                                    className={linkActive ? 'color-blue' : ''}>{item.icon}{item.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex jus-c-c align-itm-c gap-10px">
                        <button
                            type="button"
                            aria-pressed={isLight as any}
                            onClick={toggleTheme}
                            className="icn-svg-theme bg-blur-card flex align-itm-fe bg-white outline-op br-radius-12px gap-4px">
                            {isLight === 'light' ? (
                                <><Sun /> Light</>
                            ) : (
                                <><Moon /> Darkz</>
                            )}
                        </button>
                        <button
                            aria-pressed={downLink}
                            onClick={() => setDownLink(prev => !prev)}
                            className="bg-dark font-size-0 cursor-pnt dis-mx-764-visible"><TextAlignJustify />
                        </button>
                    </div>
                </div>
            </nav>
            <div className="horiz-effect-center"></div>
            <div className={`pos-abs z-index-1000 width-100ps ${downLink === true ? 'icn-item-link-op1-important' : ''} icn-item_764-svg grid grid-temp-clm jus-c-c align-itm-c gap-20px pad-10-24px`}>
                {listItemLinksBacot.map((item) => {
                    const linkActive = pathName === item.link;
                    return (
                        <Link key={item.id} href={item.link}
                            className={linkActive ? 'color-blue' : ''}>{item.icon}{item.name}
                        </Link>
                    );
                })}
                <button
                    aria-pressed={downLink}
                    onClick={() => setDownLink(false)}
                    className="bg-op font-size-14px cursor-pnt flex jus-c-c align-itm-c gap-10px">
                    {downLink === true ? <Eye /> : <EyeClosed />}
                    Close
                </button>
            </div>
        </header>

    )
}
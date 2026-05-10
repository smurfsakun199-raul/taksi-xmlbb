'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SiGithub, SiWhatsapp } from "react-icons/si";

import {
    Sun,
    Moon,
    House,
    CodeXml,
    Info,
    ChartNoAxesColumn,
    Layers2,
    TextAlignJustify,
    UserRound,
    ArrowUp,
    ChevronUp,
} from "lucide-react";

const Author = 'Pemalas';

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
        icon: <Info />,
        link: '/about',
        name: 'About'
    }
];

const listContact = [
    { id: 1, contact: SiWhatsapp, link: 'https://wa.me/62811004639', label: 'WhatsApp', class: 'icn-whatsapp' },
    { id: 2, contact: SiGithub, link: 'https://github.com/smurfsakun199-raul/taksi-xmlbb', label: 'GitHub', class: 'icn-github' }
];

export default function Header() {
    const [isLight, setIsLight] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    const [mountLight, setMountLight] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMountLight(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (mountLight) {
            document.body.classList.toggle('light', isLight === 'light');
            localStorage.setItem('theme', isLight);
        }
    }, [isLight, mountLight]);

    const toggleTheme = () => {
        setIsLight(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const pathName = usePathname();

    const [downLink, setDownLink] = useState(false);

    const [contact, setContact] = useState(false)

    const divRefs = useRef<{
        [key: string]: HTMLElement | null
    }>({});

    const scrollToId = (id: string) => {
        divRefs.current[id]?.scrollIntoView(
            { behavior: "smooth" }
        );
    };

    return (
        <header>
            <nav
                ref={(e) => { divRefs.current['nav'] = e; }}
                className="pos-sticky width-100ps top pad-bl-10px pad-0-14px">
                <div className="flex jus-c-sb align-itm-c max-w-1180px margin-auto">
                    <div className="flex jus-c-c align-itm-c gap-10px">
                        <div className={`bg-black-in-light ${mountLight && (isLight === 'dark' ? 'box-sdw-0-2-6px' : 'box-sdw-0-0-4px-black-in-light')} br-radius-4px pad-2px`}>
                            <CodeXml
                                className="flex align-itm-c jus-c-c"
                            />
                        </div>
                        <div className="flex flex-direc-clm">
                            <span>{Author}</span>
                            <span className="font-size-12px color-p">Animasi yang biasa</span>
                        </div>
                    </div>
                    <ul className="icn-item-svg flex jus-c-c align-itm-c gap-20px pad-10-24px outline-op bg-blur-card br-radius-12px">
                        {listItemLinksBacot.map((item) => {
                            const linkActive = pathName === item.link;
                            return (
                                <li key={item.id}>
                                    <Link href={item.link}
                                        className={linkActive ? 'color-blue' : ''}>{item.icon}{item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex jus-c-c align-itm-c gap-10px">
                        <button
                            type="button"
                            aria-label="Contact"
                            aria-expanded={contact}
                            onClick={() => {
                                setContact(prev => !prev);
                                setDownLink(false);
                            }}
                            className="icn-svg-theme pad-4-0px hover-after-effect-left-to-right cursor-pnt bg-blur-card flex align-itm-fe bg-transparent br-radius-12px gap-4px">
                            <UserRound />Contact
                        </button>
                        <button
                            type="button"
                            aria-label="Toggle Theme"
                            onClick={toggleTheme}
                            className="icn-svg-theme cursor-pnt bg-blur-card flex align-itm-fe bg-transparent br-radius-12px gap-4px">
                            {mountLight && (isLight === 'light'
                                ? <Sun />
                                : <Moon />
                            )}
                        </button>
                        <button
                            type="button"
                            aria-label="showLink"
                            aria-expanded={downLink}
                            onClick={() => {
                                setDownLink(prev => !prev);
                                setContact(false)
                            }}
                            className="bg-transparent font-size-0 cursor-pnt dis-mx-764-visible"><TextAlignJustify />
                        </button>
                    </div>
                </div>
            </nav>
            <div className="horiz-effect-center"></div>
            <div
                className={`pos-abs width-100ps ${downLink == true ? 'icn-item-link-op visibility-visible' : 'icn-item_764-svg visibility-hide'} grid grid-temp-clm jus-c-c align-itm-c pad-14px gap-20px`}>
                <ul className={`grid grid-temp-clm jus-c-c align-itm-c gap-20px`}>
                    {listItemLinksBacot.map((item) => {
                        const linkActive = pathName === item.link;
                        return (
                            <li
                                key={item.id}>
                                <Link href={item.link}
                                    className={linkActive ? 'color-blue' : ''}>{item.icon}{item.name}
                                </Link>
                            </li>
                        );
                    })}</ul>
                <button
                    type="button"
                    aria-label="closeLink"
                    aria-expanded={downLink}
                    onClick={() => setDownLink(false)}
                    className="bg-op font-size-14px cursor-pnt flex jus-c-c align-itm-c gap-10px">
                    {downLink === true ?
                        <ChevronUp className="width-18px height-18px rotate-0deg" />
                        :
                        <ChevronUp className="width-18px height-18px rotate-180deg" />
                    }
                    Close
                </button>
            </div>
            <div
                className={`pos-abs width-100ps pad-10px ${contact == true
                    ? 'transition-op08-trans03s-ease-in-out transY-op1 z-index-1 pnt-e-visible visibility-visible'
                    : 'transition-op02-trans05s-ease-in-out transY-op0-80px z-index--1 pnt-e-none visibility-hide'}`}
            >
                <div className="flex flex-direc-clm jus-c-c align-itm-c margin-auto">
                    <div className="flex gap-10px">
                        {listContact.map((itm) => (
                            <Link
                                aria-label={itm.label}
                                href={itm.link}
                                target="_blank"
                                className={`font-size-24px br-radius-50ps cursor-pnt ${itm.class}`}
                                key={itm.id}>
                                {<itm.contact
                                    aria-hidden="true"
                                    className={`flex align-itm-c ${itm.class}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />}
                            </Link>
                        ))}</div>
                    <button
                        type="button"
                        aria-label="closeContact"
                        aria-expanded={contact}
                        onClick={() => setContact(false)}
                        className="bg-op font-size-14px cursor-pnt flex jus-c-c align-itm-c gap-10px">
                        {contact === true ?
                            <ChevronUp className="width-18px height-18px rotate-0deg" />
                            :
                            <ChevronUp className="width-18px height-18px rotate-180deg" />
                        }
                        Close
                    </button>
                </div>
            </div>
            <div
                onClick={() => scrollToId('nav')}
                className="pos-fix pad-10px br-radius-50ps bottom-4ps right-2ps z-index-1">
                <button
                    type="button"
                    className="bg-transparent cursor-pnt"
                    aria-label="UpToNavigation">
                    <ArrowUp />
                </button>
            </div>
        </header>

    )
}
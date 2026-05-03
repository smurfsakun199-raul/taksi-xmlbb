'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
    { id: 1, contact: faWhatsapp, link: 'https://wa.me/62811004639', label: 'WhatsApp', class: 'icn-whatsapp' },
    { id: 2, contact: faGithub, link: 'https://github.com/smurfsakun199-raul/taksi-xmlbb', label: 'GitHub', class: 'icn-github' }
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

    const [contact, setContact] = useState(false)

    const divRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const scrollToId = (id: string) => {
        divRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header>
            <nav
                ref={(e) => { divRefs.current['nav'] = e; }}
                className="pos-sticky width-100ps top pad-bl-10px pad-0-14px">
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
                            onClick={() => {
                                setContact(prev => !prev);
                                setDownLink(false);
                            }}
                            className="icn-svg-theme cursor-pnt bg-blur-card flex align-itm-fe bg-transparent br-radius-12px gap-4px"><UserRound />Contact
                        </button>
                        <button
                            type="button"
                            aria-label="Toggle Theme"
                            onClick={toggleTheme}
                            className="icn-svg-theme cursor-pnt bg-blur-card flex align-itm-fe bg-transparent br-radius-12px gap-4px">
                            {isLight === 'light' ? (
                                <><Sun /></>
                            ) : (
                                <><Moon /></>
                            )}
                        </button>
                        <button
                            aria-label="showLink"
                            aria-pressed={downLink}
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
                aria-hidden={downLink == false ? true : false}
                className={`pos-abs z-index-1000 width-100ps ${downLink == true ? 'icn-item-link-op' : 'icn-item_764-svg'} grid grid-temp-clm jus-c-c align-itm-c gap-20px pad-10-24px`}>
                {listItemLinksBacot.map((item) => {
                    const linkActive = pathName === item.link;
                    return (
                        <Link key={item.id} href={item.link}
                            className={linkActive ? 'color-blue' : ''}>{item.icon}{item.name}
                        </Link>
                    );
                })}
                <button
                    aria-label="closeLink"
                    aria-pressed={downLink}
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
                aria-hidden={contact == false ? true : false}
                className={`pos-abs width-100ps pad-10px ${contact == true ? 'transY-op1 z-index-1 pnt-e-visible' : 'transY-op0-100px z-index--1 pnt-e-none'}`}>
                <div className="flex flex-direc-clm jus-c-c align-itm-c margin-auto">
                    <div>
                        {listContact.map((itm) => (
                            <Link
                                aria-label={itm.label}
                                href={itm.link}
                                target="_blank"
                                className={`font-size-24px br-radius-50ps cursor-pnt ${itm.class}`}
                                key={itm.id}>
                                <FontAwesomeIcon icon={itm.contact} />
                            </Link>
                        ))}</div>
                    <button
                        aria-label="closeContact"
                        aria-pressed={contact}
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
                aria-label="Up To Navigation"
                onClick={() => scrollToId('nav')}
                className="pos-fix pad-10px br-radius-50ps bottom-4ps right-2ps cursor-pnt z-index-1">
                <span>
                    <ArrowUp />
                </span>
            </div>
        </header>

    )
}
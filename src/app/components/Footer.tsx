import Link from "next/link";
import { List } from "lucide-react";
import { SiGithub, SiGoogle, SiGooglegemini, SiWhatsapp } from "react-icons/si";
import { IconType } from "react-icons";

interface List {
    id: number;
    contact: IconType;
    link: string;
    label: string;
    class?: string;
    class_2?: string;
}

const listContact: List[] = [
    {
        id: 1,
        contact: SiWhatsapp,
        link: 'https://wa.me/62811004639',
        label: 'WhatsApp',
        class: 'icn-whatsapp'
    },
    {
        id: 2,
        contact: SiGithub,
        link: 'https://github.com/smurfsakun199-raul/taksi-xmlbb',
        label: 'GitHub',
        class: 'icn-github'
    }
];

const listReport: List[] = [
    {
        id: 1,
        contact: SiGooglegemini,
        link: 'https://chatgpt.com/',
        label: 'OpenAi ChatGPT',
        class: 'icn-gemini'
    },
    {
        id: 2,
        contact: SiGoogle,
        link: 'https://google.com/',
        label: 'Google',
        class: 'icn-google'
    }
];


export default function Footer() {
    return (
        <footer aria-labelledby="footer-Lol" className="sec-visible-auto max-w-1180px margin-auto">
            <div className="glow-w400-h100px tolol-blue-old-btm-r-10-10ps"></div>
            <div className="horiz-effect-center"></div>
            <div
                className="flex jus-c-c align-itm-c pad-top-30px gap-24px">
                <div className="flex flex-direc-clm">
                    <span className="font-size-18px pad-btm-10px">Contact Me</span>
                    <div className="flex gap-10px">
                        {listContact.map((itm) => (
                            <Link
                                aria-label={itm.label}
                                href={itm.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`font-size-24px br-radius-50ps cursor-pnt`}
                                key={itm.id}>
                                {<itm.contact
                                    aria-hidden="true"
                                    className={`flex align-itm-c ${itm.class}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />}
                            </Link>
                        ))}</div>
                </div>
                <div className="flex flex-direc-clm">
                    <span className="font-size-18px pad-btm-10px">Report Me</span>
                    <div className="flex gap-10px">
                        {listReport.map((itm) => (
                            <Link
                                aria-label={itm.label}
                                href={itm.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`font-size-24px br-radius-50ps cursor-pnt ${itm.class}`}
                                key={itm.id}>
                                {<itm.contact
                                    aria-hidden="true"
                                    className={`flex align-itm-c ${itm.class}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex jus-c-c align-itm-c">
                <div className="pad-top-30px pad-btm-10px">
                    <span id="footer-Lol" className="hover-after-effect color-p font-size-14px">Create by Author Tolol 2026</span>
                </div>
            </div>
        </footer>
    )
}

'use client';
import { Accessibility, ChartPie, CircleGauge, Layers3, LucideIcon, Orbit, Sparkles, Telescope } from "lucide-react";
import { useRef, useState } from "react";
import Reveal from "@/app/hooks/Reveal";

const score = 93.4;

interface Stats {
    id: number;
    skor: number;
    icn: LucideIcon;
    name: string;
    mar_1?: string | null;
    mar_2?: string;
    mar_3?: string;
    desc_primary?: string;
    desc_secondary?: string;
};

type pass = 'Performance' | 'Accesbility' | 'Best' | 'Seo';

const statsMap: Record<pass, Stats> = {
    Performance: {
        id: 1,
        skor: 97,
        icn: CircleGauge,
        name: 'Performance',
        mar_1: 'Speed Index 95',
        mar_2: 'Ui Interactive 97.9',
        mar_3: 'Swift Layout 98.8',
        desc_primary: 'Pengoptimalan terdefinisi cukup baik dari segi kecepatan pemuatan index, class dan UI interaktif yang unik. Lumayan juga untuk website kelas biasa ini.',
        desc_secondary: 'Performa yang lumayan di tingkatnya'
    },
    Accesbility: {
        id: 2,
        skor: 22.4,
        icn: Accessibility,
        name: 'Accesbility',
        mar_1: 'Easy use 36',
        mar_2: 'Read element 17.4',
        mar_3: 'Clean Text 19.1',
        desc_primary: 'Akses kemudahan pada website dalam tingkatan kenyamanan pengguna sangat buruk. Poin ini berpengaruh pada penyandang disabilitas dalam memperoleh kemudahan mereka. Web tolol juga namanya.',
        desc_secondary: 'Aksesbilitas yang cukup parah pada website'
    },
    Best: {
        id: 3,
        skor: 67.2,
        icn: Sparkles,
        name: 'Best Practice',
        mar_1: 'Acces view 72.3',
        mar_2: 'Interactive Tab 43.8',
        mar_3: 'Share Community 49',
        desc_primary: 'Jangkauan yang sangat jauh dari kata "Best Practice". Website yang diimplementasikan sangat tidak disarankan tuk penggunaan jangka panjang. Bahasa dan struktur kata menjadi poin lebih dalam menentukan estimasi. ',
        desc_secondary: 'Best practice apaan, web tolol gini'
    },
    Seo: {
        id: 4,
        skor: 11.3,
        icn: Orbit,
        name: 'SEO',
        mar_1: 'Structurize 4.56',
        mar_2: 'Metadata Hard 14.2',
        mar_3: 'Index Generate 8',
        desc_primary: 'Struktur Pengoptimalan yang tidak baik dari segi penataan tema,deskripsi dan konten. Hal ini pula yang menjadikan website perlu merevisi optimisasi pada pencarian seperti Google.',
        desc_secondary: 'Pengoptimalan teknik website yang rendah dan inkonsisten'
    }
}

const listAllStats: Stats[] = Object.values(statsMap);

const listPerformance = [statsMap.Performance];

const listAccesbility = [statsMap.Accesbility];

const listBestPractice = [statsMap.Best];

const listSEO = [statsMap.Seo];

const classAlignList = (id: number) => {
    if ([3].includes(id)) return 'align-itm-c';
    if ([2].includes(id)) return 'align-itm-fe';
    return 'align-itm-fs';
};

const classHorizEffectList = (id: number) => {
    if ([3].includes(id)) return 'horiz-effect-left-red';
    if ([2].includes(id)) return '';
    if ([4].includes(id)) return '';
    return 'horiz-effect-right';
};

const classHoverAfterList = (id: number) => {
    if ([2, 4].includes(id)) return 'hover-after-effect-red-btm--24px';
    return 'hover-after-effect-btm--24px';
};

const classFlexDirecList = (id: number) => {
    if ([2].includes(id)) return 'flex-direc-row-r'
    return '';
};

const classSkorList = (id: number) => {
    if ([3].includes(id)) return 'bg-blue-ld-to-r-b-35ps';
    if ([2].includes(id)) return 'bg-red-ld-to-r-b-35ps';
    if ([4].includes(id)) return 'bg-red-ld-to-r-b-30ps';
    return 'bg-blue-rd-c-at-0-0';
};

type StatsType = 'all' | 's1' | 's2' | 's3' | 's4';


export default function Stats() {

    const [stats, setStats] = useState<StatsType>('all');

    const daftarStatistik: Record<StatsType, Stats[]> = {
        all: listAllStats,
        s1: listPerformance,
        s2: listAccesbility,
        s3: listBestPractice,
        s4: listSEO
    };

    const isList = daftarStatistik[stats];

    const buttonStats: { id: StatsType, icn: LucideIcon, label: string }[] = [
        { id: 'all', icn: Telescope, label: 'All' },
        { id: 's1', icn: CircleGauge, label: 'Perform' },
        { id: 's2', icn: Accessibility, label: 'Acces' },
        { id: 's3', icn: Sparkles, label: 'Best' },
        { id: 's4', icn: Orbit, label: 'SEO' }
    ] as const;

    // Reveal Tag
    Reveal();

    const divRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const scrollToDiv = (id: string) => {
        divRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="max-w-1210px margin-auto">
            <section aria-labelledby="stats-bacot" className="reveal sec-visible-auto pad-bl-20px pad-top-48px pad-0-14px">
                <div className="flex flex-direc-clm jus-c-c align-itm-c height-432px pad-top-20px gap-10px">
                    <h1 onClick={() => scrollToDiv('lol')} id="stats-bacot" className="font-size-3rem glow-text box-sdw-0-2-6px-dark-blue">Stats</h1>
                    <p className="font-size-14px pad-btm-10px">Apa kelebihan dan kekurangan website ini?</p>
                    <div className="horiz-effect-center-small"></div>
                </div>
                <div className="flex jus-c-c align-itm-c gap-10px pad-top-10px pad-btm-10px">
                    <ChartPie />
                    <span>Stats in Project</span>
                </div>
                <div className="pos-rel">
                    <div className="glow-w400-h100px tolol-blue-old-btm-r-10-10ps"></div>
                </div>
                <div className="pad-btm-20px">
                    <h2 id="bacot-title" className="font-size-3-5rem txt-align-c pad-btm-20px">Statistik <span className="glow-text">Website</span> paling Sampah juga sangat biasa dan Tidak <span className="glow-text">Menarik</span></h2>
                    <p className="txt-align-c">Data analisis ini mungkin sangat tepat sehingga mungkin membuat anda tidak sanggup melihat realita yang sudah ada sehingga harapan anda pada kami menurun.</p>
                </div>
            </section>
            <section ref={(el) => { divRefs.current['lol'] = el; }} aria-labelledby="statistik-bacot" className="sec-visible-auto pos-rel sec-visible-auto pad-bl-20px pad-top-48px pad-0-14px">
                <div className="reveal pad-top-10px">
                    <div className="flex jus-c-c align-itm-c pad-btm-40px">
                        <h2 id="statistik-bacot" className="font-size-16px flex jus-c-c align-itm-c gap-10px"><Layers3 />Statistik</h2>
                    </div>
                    <div className="flex flex-direc-clm jus-c-c align-itm-c pad-btm-40px gap-48px">
                        <div className="flex flex-direc-clm jus-c-c align-itm-c gap-24px pos-rel">
                            <div className="glow-w300-h100px tolol-blue-old-top-l-60-10ps"></div>
                            <div className="hover-after-effect-btm--24px pad-10px br-radius-50ps bg-blue-rd-c-at-0-0">
                                <strong className="font-size-30px flex jus-c-c align-itm-c br-radius-50ps width-100px height-100px pad-10px bg-dark">{score}</strong>
                            </div>
                            <h3 className="font-size-16px color-p pad-top-20px txt-align-c">Total Skor</h3>
                        </div>
                        <div className="grid grid-temp-clm-r4-to-r2 jus-c-c align-itm-c gap-24px">
                            {listAllStats.map((itm) => (
                                <div key={itm.id} className="flex flex-direc-clm jus-c-c align-itm-c gap-10px">
                                    <div className={`${classHoverAfterList(itm.id)} pad-10px br-radius-50ps ${classSkorList(itm.id)}`}>
                                        <strong className="font-size-20px flex jus-c-c align-itm-c br-radius-50ps width-70px height-70px pad-10px bg-dark">{itm.skor}</strong>
                                    </div>
                                    <h3 className="font-size-14px color-p pad-top-20px txt-align-c">{itm.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-temp-clm-r5 jus-c-c align-itm-inherit pad-btm-40px gap-24px">
                        {buttonStats.map((btn) => (
                            <button key={btn.id}
                                onClick={() => setStats(btn.id)}
                                className={`cursor-pnt font-size-16px flex jus-c-c align-itm-c ${stats === btn.id ? 'box-sdw-blue' : 'transZ-4'} br-op br-radius-12px bg-transparent gap-10px`}>{<btn.icn />}{btn.label}</button>
                        ))}
                    </div>
                </div>
                <div className="">
                    <div ref={(el) => { divRefs.current['lol'] = el; }} className="flex pos-rel flex-direc-clm jus-c-c align-itm-inherit gap-24px">
                        <div className="glow-w300-h100px tolol-blue-old-top-l-10-10ps"></div>
                        <div className="glow-w300-h100px tolol-blue-old-btm-r-10-10ps"></div>
                        {isList.map((itm) => {
                            const IconComponent = itm.icn;
                            return (
                                <div
                                    key={itm.id}
                                    className={`reveal flex flex-direc-clm pad-10px ${classAlignList(itm.id)}`}>
                                    <div className={`${classHorizEffectList(itm.id)}`}></div>
                                    <h3 className="flex jus-c-c align-itm-c gap-10px pad-top-20px pad-btm-20px"><IconComponent /> {itm.name}</h3>
                                    <div className={`flex-mx-764px-dir-clm width-100ps ${itm.id === 3 ? 'jus-c-c' : 'jus-c-sb'} pad-btm-40px ${classAlignList(itm.id)} ${classFlexDirecList(itm.id)} gap-48px`}>
                                        <div className="flex jus-c-c align-itm-fs gap-24px">
                                            <div className={`${classHoverAfterList(itm.id)} pad-10px br-radius-50ps ${classSkorList(itm.id)}`}>
                                                <strong className="font-size-20px flex jus-c-c align-itm-c br-radius-50ps width-82px height-82px pad-10px bg-dark txt-align-c">{itm.skor}</strong>
                                            </div>
                                            <div className="flex flex-direc-clm gap-20px">
                                                <h4>{itm.mar_1}</h4>
                                                <h4>{itm.mar_2}</h4>
                                                <h4>{itm.mar_3}</h4>
                                            </div>
                                        </div>
                                        <div className="card-hover max-w-400px bg-dark-to-light box-sdw-1-2-6px pad-btm-20px">
                                            <p className="font-size-16px color-white-op">{itm.desc_primary}</p>
                                        </div>
                                    </div>
                                    <p className="font-size-14px color-p pad-10px box-sdw-0-2-6px">{itm.desc_secondary}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
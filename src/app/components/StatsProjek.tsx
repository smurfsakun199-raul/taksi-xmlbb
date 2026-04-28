'use client';
import { Accessibility, ChartPie, CircleGauge, Layers3, LucideIcon, Orbit, Sparkles } from "lucide-react";
import { useState } from "react";

interface Stats {
    id: number;
    skor: number;
    icn: LucideIcon;
    name: string;
    mar_1: string;
    mar_2: string;
    mar_3: string;
    desc: string;
};

const statsMap: Record<string, Stats> = {
    Performance: {
        id: 1,
        skor: 97,
        icn: CircleGauge,
        name: 'Performance',
        mar_1: 'Speed Index 95',
        mar_2: 'Ui Interactive 97.9',
        mar_3: 'Swift Layout 98.8',
        desc: 'Performa yang lumayan di tingkatnya'
    },
    Accesbility: {
        id: 2,
        skor: 22.4,
        icn: Accessibility,
        name: 'Accesbility',
        mar_1: 'Easy use 36',
        mar_2: 'Read element 17.4',
        mar_3: 'Clean Text 19.1',
        desc: 'Aksesbilitas yang cukup parah pada website'
    },
    Best: {
        id: 3,
        skor: 67.2,
        icn: Sparkles,
        name: 'Best Practice',
        mar_1: 'Acces view 72.3',
        mar_2: 'Interactive Tab 43.8',
        mar_3: 'Share Community 49',
        desc: 'Best practice apaan, web tolol gini'
    },
    Seo: {
        id: 4,
        skor: 11.3,
        icn: Orbit,
        name: 'SEO',
        mar_1: 'Structulize 4.56',
        mar_2: 'Metadata Hard 14.2',
        mar_3: 'Index Generate 8',
        desc: 'Pengoptimalan teknik website yang rendah dan inkonsisten'
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
    if ([3].includes(id)) return 'horiz-effect-center';
    if ([2].includes(id)) return 'horiz-effect-left-red';
    if ([4].includes(id)) return 'horiz-effect-right-red';
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

    const buttonStats = [
        { id: 'all', label: 'All' },
        { id: 's1', label: 'Perform' },
        { id: 's2', label: 'Acces' },
        { id: 's3', label: 'Best' },
        { id: 's4', label: 'SEO' }
    ] as const;

    return (
        <main className="max-w-1210px margin-auto">
            <section aria-labelledby="stats-bacot" className="pad-bl-20px pad-top-48px pad-0-14px">
                <div className="glow tolol-blue-old-btm-r-10-10ps"></div>
                <div className="flex flex-direc-clm jus-c-c align-itm-c height-432px pad-top-20px gap-10px">
                    <h1 id="stats-bacot" className="font-size-3rem glow-text box-sdw-0-2-6px-dark-blue">Stats</h1>
                    <p className="font-size-14px pad-btm-10px">Apa kelebihan dan kekurangan website ini?</p>
                    <div className="horiz-effect-center-small"></div>
                </div>
                <div className="flex jus-c-c align-itm-c gap-10px pad-top-10px pad-btm-10px">
                    <ChartPie />
                    <span>Stats in Project</span>
                </div>
                <div className="pad-btm-20px pos-rel">
                    <div className="glow tolol-blue-top-l-10-10ps"></div>
                    <h2 id="bacot-title" className="font-size-3-5rem txt-align-c pad-btm-20px">Statistik Website paling <span className="glow-text">Sampah</span> juga sangat biasa dan Tidak <span className="glow-text">Menarik</span></h2>
                    <p className="txt-align-c">Data analisis ini mungkin sangat tepat sehingga mungkin membuat anda tidak sanggup melihat realita yang sudah ada sehingga harapan anda pada kami menurun.</p>
                </div>
            </section>
            <section aria-labelledby="statistik-bacot" className="pad-bl-20px pad-top-48px pad-0-14px">
                <div className="flex jus-c-c align-itm-c pad-top-10px pad-btm-40px">
                    <h2 id="statistik-bacot" className="font-size-16px flex jus-c-c align-itm-c gap-10px"><Layers3 />Statistik</h2>
                </div>
                <div className="skills-score flex jus-c-c gap-24px pad-btm-40px">
                    <div className="hover-after-effect-btm--24px pad-10px br-radius-50ps bg-blue-rd-c-at-0-0">
                        <strong className="font-size-30px flex jus-c-c align-itm-c br-radius-50ps width-100px height-100px pad-10px bg-dark">91.7</strong>
                    </div>
                </div>
                <div className="grid grid-temp-clm-r5 jus-c-c align-itm-inherit pad-btm-40px gap-24px">
                    {buttonStats.map((btn) => (
                        <button key={btn.id}
                            onClick={() => setStats(btn.id)}
                            className={`font-size-16px hover-effect-blue-to-red ${stats === btn.id ? 'box-sdw-red-important' : ''} bg-dark`}>{btn.label}</button>
                    ))}
                </div>
                <div className="pos-rel flex flex-direc-clm jus-c-c align-itm-inherit gap-24px">
                    <div className="glow tolol-blue-top-l-10-10ps"></div>
                    <div className="glow tolol-red-old-btm-r-60-20ps"></div>
                    <div className="glow tolol-red-old-btm-l-10-30ps"></div>
                    {isList.map((itm) => {
                        const IconComponent = itm.icn;
                        return (
                            <div key={itm.id} className={`flex flex-direc-clm ${classAlignList(itm.id)}`}>
                                <div className={`${classHorizEffectList(itm.id)}`}></div>
                                <h3 className="flex jus-c-c align-itm-c gap-10px pad-top-20px pad-btm-20px"><IconComponent /> {itm.name}</h3>
                                <div className={`flex ${classFlexDirecList(itm.id)} gap-24px`}>
                                    <div className={`skills-score pad-btm-40px`}>
                                        <div className={`${classHoverAfterList(itm.id)} pad-10px br-radius-50ps ${classSkorList(itm.id)}`}>
                                            <strong className="font-size-20px flex jus-c-c align-itm-c br-radius-50ps width-82px height-82px pad-10px bg-dark">{itm.skor}</strong>
                                        </div>
                                    </div>
                                    <div className="flex flex-direc-clm gap-20px">
                                        <h4>{itm.mar_1}</h4>
                                        <h4>{itm.mar_2}</h4>
                                        <h4>{itm.mar_3}</h4>
                                    </div>
                                </div>
                                <p className="font-size-16px color-p pad-btm-20px">{itm.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}



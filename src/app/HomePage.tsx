'use client';
import Reveal from "@/app/hooks/Reveal";

import {
    Compass,
    ChartNoAxesCombined,
    Dna,
    Code,
    Palette,
    Layers,
    LayersPlus,
    Road,
    Sparkles,
    Star,
    ShieldCheck,
    SquareTerminal,
    Shuffle,
    Terminal,
    TrendingUpDown,
    MoonStar,
    LucideIcon,
    ChartNoAxesGantt,
    Wrench,
} from "lucide-react";

const listYear = [
    {
        id: 1,
        title: <Shuffle className="width-18px height-18px" />,
        name: 'Flex',
        icn: <Sparkles />,
        code: 'TypeScript Xml',
        desk: 'Best dan menjadi bahasa yang sering digunakan dalam kegabutan.'
    },
    {
        id: 2,
        title: <Road className="width-18px height-18px" />,
        name: 'The Road',
        icn: <MoonStar />,
        code: 'JavaScript Xml',
        desk: 'Bahasa yang menemani perjalanan menuju ga menuju kemana mana sih.'
    },
    {
        id: 3,
        title: <Terminal className="width-18px height-18px" />,
        name: 'System Internal',
        icn: <SquareTerminal />,
        code: 'Shell Script',
        desk: 'Ga perlu dijelasin lah ya, pasif aktif inimah di Linux wkwkw.'
    }
];

const fokusBacotList = [
    {
        id: 1,
        name: 'Visual'
    },
    {
        id: 2,
        name: 'Creative'
    },
    {
        id: 3,
        name: 'Style'
    }
];

const lolList = [
    {
        id: 1,
        icon: <TrendingUpDown />,
        name: 'Optimization',
        desc: 'Optimisasi yang diusahakan.'
    },
    {
        id: 2,
        icon: <ShieldCheck />,
        name: 'Security Self',
        desc: 'Keamanan yang belum terjamin baik.'
    },
    {
        id: 3,
        icon: <ChartNoAxesCombined />,
        name: 'Up Performance',
        desc: 'Sedikit peningkatan harapan.'
    }
];

const roadLol = [
    {
        id: 1,
        years: 2026,
        month: 'April',
        title: 'Perjalanan',
        desc: 'Mempertanyakan arti dari "Apakah harapan itu ada?'
    },
    {
        id: 2,
        years: 2062,
        month: 'Mei',
        title: 'Ujian',
        desc: 'Masa yang dimana "Mengenal apa itu harapan"'
    },
    {
        id: 3,
        years: 2099,
        month: 'November',
        title: 'Determinasi',
        desc: 'Kesadaran membuka jawaban terpendam.'
    },
];

const skorLol = 96;

const skillsBacot = [
    {
        id: 1,
        icn: '',
        skr: 12.4,
        skill: 'Fast UI',
        desc: 'Desain yang memberikan respon cepat mungkin.'
    },
    {
        id: 2,
        skr: 6.7,
        icn: '',
        skill: 'Optimize',
        desc: 'Penyederhanaan fleksibilitas yang tak diharapkan.'
    },
    {
        id: 3,
        skr: 3.1,
        icn: '',
        skill: 'Low Effects',
        desc: 'Kesan balik yang sangat lambat.'
    },
    {
        id: 4,
        skr: 99.3,
        icn: '',
        skill: 'Lol Skill',
        desc: 'Skill ga jelas,skip deskripsi Now!'
    }
];

const listTools: { id: number, icn: LucideIcon, category: string, tool: string, desc: string }[] = [
    { id: 1, icn: Code, category: 'Normal Flex', tool: 'Visual Studio Code', desc: 'Efisiensi kode dalam pengembangan projek. Disarankan menggunakan tool Visual Studio jika fokus anda berupa efisiensi kode.' },
    { id: 2, icn: ChartNoAxesGantt, category: 'HardCore', tool: 'Nano', desc: 'Penggunaan tuk memahami kedalaman kode dalam pengembangan,meski cara ini tidak efisien dibanding tool Visual Studio.' },
];

const classBgCardId = (id: number) => {
    if ([1].includes(id)) return 'bg-blur-card';
    return 'bg-dark-to-light'
}

const classColor = (id: number) => {
    if ([2, 3, 4].includes(id)) return 'color-white-op';
    return 'color-p'
}

export default function HomePage() {
    // Reveal Tag
    Reveal();

    return (
        <main className="max-w-1210px margin-auto">
            <section
                aria-labelledby="bacot-title"
                className="reveal sec-visible pad-bl-20px pad-top-48px pad-0-14px">
                <div className="flex flex-direc-clm jus-c-c align-itm-c height-432px pad-top-20px gap-10px">
                    <h1 id="project-bacot" className="font-size-3rem glow-text box-sdw-0-2-6px-dark-blue">PortFolio</h1>
                    <p className="font-size-14px txt-align-c pad-btm-10px">Merepresentasikan website Portfolio yang Tolol banget juga biasa</p>
                    <div className="horiz-effect-center-small"></div>
                </div>
                <div className="pos-rel sec-visible flex flex-direc-clm jus-c-c align-itm-inherit pad-top-10px gap-24px">
                    <div className="glow-w400-h100px tolol-blue-old-top-r-0-10ps"></div>
                    <div className="pos-rel pad-btm-20px">
                        <div className="flex jus-c-c gap-10px pad-btm-10px">
                            <Palette />
                            <span>Experinece Style</span>
                        </div>
                        <div className="pad-btm-40px">
                            <div className="glow-w400-h100px tolol-blue-top-l-10-10ps"></div>
                            <h2 id="bacot-title" className="font-size-3-5rem txt-align-c pad-btm-20px">Design Portfolio dengan memadukan <span className="glow-text">Ketololan</span> yang <span className="glow-text">Unik, Rapi</span> dan biasa</h2>
                            <p className="txt-align-c">Deskripsi ini mungkin membuat anda akan menyesal jika sampai membacanya sampai selesai,dikarenakan kata yang saya gunakan merepetisi sebuah kata menjadi berulang ulang,dan akhirnya yang anda dapat hanyalah tautologi dan tak menguntungkan anda.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section aria-labelledby="info-bacot" className="sec-visible-auto pos-rel pad-bl-20px pad-top-48px pad-0-14px">
                <div className="horiz-effect-right"></div>
                <div className="reveal pad-top-100px pad-btm-40px">
                    <h2 className="font-size-24px txt-align-c pad-btm-40px">Bahasa pemrograman apa yang digunakan oleh Author yang ga jelas ini?</h2>
                    <div className="flex pad-top-10px pad-btm-20px">
                        <div className="pad-4-18px br-op br-radius-12px bg-dark-to-light">
                            <h3 className="font-size-16px flex align-itm-c gap-10px"><Code /> Code</h3>
                        </div>
                    </div>
                    <div className="pos-rel grid grid-temp-clm-r3 jus-c-c align-itm-inherit gap-20px">
                        {listYear.map((item) => (
                            <div key={item.id} className={`card-hover ${classBgCardId(item.id)}`}>
                                <div className="flex align-itm-c pad-btm-10px gap-10px">
                                    {item.title}
                                    <span className={`font-size-12px ${classColor(item.id)}`}>{item.name}</span>
                                </div>
                                <div className="icn-svg-18wh flex jus-c-l align-itm-c pad-btm-10px gap-10px">
                                    {item.icn}
                                    <h4 className="font-size-18px">{item.code}</h4>
                                </div>
                                <div>
                                    <p className={`font-size-14px ${classColor(item.id)}`}>{item.desk}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reveal pad-btm-40px">
                    <div className="pad-top-48px pad-btm-40px">
                        <h2 className="font-size-24px txt-align-c">Tools apa yang digunakan tuk pengembangan Projek biasa ini?</h2>
                    </div>
                    <div className="flex pad-top-10px pad-btm-20px">
                        <div className="pad-4-18px br-op br-radius-12px bg-dark-to-light">
                            <h3 className="font-size-16px flex align-itm-c gap-10px"><Wrench /> Tools</h3>
                        </div>
                    </div>
                    <div className="grid grid-temp-clm-r2 jus-c-c align-itm-c gap-24px">
                        {listTools.map((itm) => (
                            <div key={itm.id} className={`card-hover ${classBgCardId(itm.id)}`}>
                                <span className="font-size-18px">
                                    {itm.category}
                                </span>
                                <h4 className="flex align-itm-c pad-top-10px pad-btm-20px gap-10px">{<itm.icn />}{itm.tool}</h4>
                                <p className={`font-size-14px ${classColor(itm.id)}`}>{itm.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reveal pad-top-48px">
                    <div className="pad-btm-40px">
                        <h2 className="font-size-24px txt-align-c">Daya tarik apa yang membuat website ini sangat Tolol?</h2>
                    </div>
                    <div className="reveal">
                        <div className="pos-rel card-hover-dig-to-left bg-dark-to-light">
                            <div className="flex jus-c-sb align-itm-c gap-10px pad-btm-10px">
                                <div className="icn-circle-svg flex gap-10px">
                                    <span className="bg-blue-circle"></span>
                                    <span className="bg-cyan-circle"></span>
                                    <span className="bg-white-circle"></span>
                                </div>
                                <span className="font-size-12px color-white-op">Art Design</span>
                            </div>
                            <div className="card flex flex-direc-clm jus-c-sb bg-white-to-light">
                                <h3 className="font-size-12px pad-btm-10px color-p">Fokus utama</h3>
                                <div className="flex jus-c-c pad-btm-10px gap-10px">
                                    <h4 className="font-size-18px color-white-to-black">Design sistem tuk gaya Tolol Modern</h4>
                                    <Layers className="color-black-op" />
                                </div>
                                <div className="flex-mx-500px-dir-clm jus-c-sb align-itm-stretch gap-24px">
                                    {fokusBacotList.map((item) => (
                                        <div key={item.id} className="card-small-10-20px bg-dark-op-to-black">
                                            <p className="color-white">{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-temp-clm-r2 jus-c-c align-itm-inherit gap-10px pad-top-10px">
                                <div className="card bg-white-to-light">
                                    <h2 className="font-size-14px color-p pad-btm-10px">WorkFlow</h2>
                                    {lolList.map((item) => (
                                        <div key={item.id} className="icn-svg-18wh flex flex-direc-clm jus-c-sb">
                                            <h3 className="font-size-16px color-white-to-black pad-btm-10px flex align-itm-c gap-10px">{item.icon} {item.name}</h3>
                                            <p className="font-size-14px pad-btm-10px">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="card bg-white-to-light">
                                    <h2 className="font-size-14px color-p pad-btm-10px">FlowWork</h2>
                                    <div className="icn-svg-18wh flex flex-direc-clm jus-c-sb">
                                        <h3 className="font-size-16px flex align-itm-c color-black-op pad-btm-10px gap-10px"><Dna />Position</h3>
                                        <p className="font-size-14px pad-btm-10px">Penempatan posisi yang Ideal dalam repetisi dibalik kata tiap kalimat yang menjadikan paragraf deskripsi ini berisi namun berulang.</p>                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section aria-labelledby="road-bacot" className="sec-visible-auto pos-rel pad-bl-20px pad-top-48px pad-0-14px">
                <div className="horiz-effect-left"></div>
                <div className="reveal pad-top-10px">
                    <div className="flex pad-btm-20px">
                        <div className="pad-4-18px br-op br-radius-12px bg-dark-to-light">
                            <h2 id="road-bacot" className="font-size-16px flex jus-c-c align-itm-c gap-10px"><Compass />Road</h2>
                        </div>
                    </div>
                    <div className="flex-mx-1024px-dir-clm jus-c-c align-itm-inherit gap-24px">
                        <div className="card width-100ps bg-blur-card">
                            <h3 className="font-size-14px color-p pad-btm-20px">Portfolio</h3>
                            <h4 className="font-size-24px pad-btm-30px">Portfolio yang didesain agar anda bosan membaca setiap kalimatnya.</h4>
                            <p>Memvisualisasikan penempatan posisi yang adaptif serta fleksibel. Dengan mengimplementasikan cara ini,akan membuat anda menjadi bosan dengan harapan anda pada kami.</p>
                        </div>
                        <div className="flex-mx-764px-dir-clm gap-20px">
                            {roadLol.map((item) => (
                                <div key={item.id} className="card grid align-itm-inherit bg-dark-to-light">
                                    <div className="flex jus-c-sb align-itm-c pad-btm-10px gap-10px">
                                        <h3 className="font-size-14px color-white-op">{item.years}</h3>
                                        <span className="font-size-14px color-white-op">{item.month}</span>
                                    </div>
                                    <h4 className="font-size-16px pad-btm-20px">{item.title}</h4>
                                    <p className="font-size-14px color-white-op">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section aria-labelledby="skill-bacot" className="sec-visible-auto pos-rel pad-bl-20px pad-top-48px pad-0-14px">
                <div className="glow-w400-h100px tolol-blue-old-btm-r-10-10ps"></div>
                <div className="horiz-effect-right"></div>
                <div className="reveal pad-top-10px">
                    <div className="flex pad-btm-20px">
                        <div className="pad-4-18px br-op br-radius-12px bg-dark-to-light">
                            <h2 id="skill-bacot" className="font-size-16px flex jus-c-c align-itm-c gap-10px"><LayersPlus />Skills</h2>
                        </div>
                    </div>
                    <div className="flex flex-direc-clm jus-c-c align-itm-c gap-24px">
                        <div className="flex jus-c-c align-itm-c pad-btm-40px gap-24px">
                            <div className="skills-score flex jus-c-c gap-24px">
                                <div className="hover-after-effect-btm--24px pad-10px br-radius-50ps bg-blue-rd-c-at-0-0">
                                    <strong className="font-size-40px flex jus-c-c align-itm-c br-op br-radius-50ps width-100px height-100px pad-10px bg-dark">{skorLol}</strong>
                                </div>
                            </div>
                            <div className="item-desc-score flex flex-direc-clm jus-c-c align-itm-fs gap-10px">
                                {skillsBacot.map((item) => (
                                    <p key={item.id} className="font-size-14px">{item.skill} <span className="font-size-16px">{item.skr}</span></p>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-temp-clm-r4 jus-c-c gap-20px">
                            {skillsBacot.map((item) => (
                                <div key={item.id} className={`card-hover ${classBgCardId(item.id)}`}>
                                    <div className="flex jus-c-sb gap-20px pad-btm-20px">
                                        <h2 className="font-size-16px">{item.skill}</h2>
                                        <strong className="flex jus-c-c align-itm-c gap-10px font-size-14px"><Star className="width-18px height-18px" />{item.skr}</strong>
                                    </div>
                                    <p className={`font-size-12px ${classColor(item.id)}`}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

'use client';

import { useEffect, useMemo, useState } from "react"

interface About {
    id: number;
    title: string;
    name: string;
}

const listAbout: Record<string, About> = {
    Pertama: {
        id: 1,
        title: 'Sampah',
        name: 'nama ke satu'
    },
    Kedua: {
        id: 2,
        title: 'Ga jelas',
        name: 'nama ke dua'
    },
    Ketiga: {
        id: 3,
        title: 'Skip',
        name: 'nama ke tiga'
    },
};

const listAboutAll: About[] = Object.values(listAbout);
const listAboutPertama = [listAbout.Pertama];
const listAboutKedua = [listAbout.Kedua];

type AboutType = 'all' | 'p1' | 'p2';

export default function About() {
    const [search, setSearch] = useState('');
    const [isItem, setIsItem] = useState<AboutType>('all');

    const listSearch: Record<AboutType, About[]> = {
        all: listAboutAll,
        p1: listAboutPertama,
        p2: listAboutKedua
    };

    const list = listSearch[isItem];

    const buttons: { id: AboutType, title: string }[] = [
        { id: 'all', title: 'All' },
        { id: 'p1', title: 'P1' },
        { id: 'p2', title: 'P2' },
    ] as const;

    const filterSearch = useMemo(() => {
        return listAboutAll.filter(itm =>
            itm.name.toLowerCase().includes(search.toLowerCase()) ||
            itm.title.toLowerCase().includes(search.toLowerCase())
        )
    }, [search]);

    useEffect(() => {
        const deff = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).classList.add('rev');
                    deff.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const showRev = document.querySelectorAll('.reveal');

        showRev.forEach((el) => {
            deff.observe(el);
        });

        return () => deff.disconnect();
    }, [])
    return (
        <main className="max-w-1210px margin-auto">
            <section aria-labelledby="project-bacot" className="reveal pad-bl-20px pad-top-48px pad-0-14px">
                <div className="glow tolol-blue-old"></div>
                <div className="flex flex-direc-clm jus-c-c align-itm-c height-432px pad-top-20px gap-10px">
                    <h1 id="project-bacot" className="font-size-3rem glow-text box-sdw-0-2-6px-dark-blue">About</h1>
                    <p className="font-size-14px pad-btm-10px">Apakah ada info tentang Author Tolol ini?</p>
                    <div className="horiz-effect-center-small"></div>
                </div>
            </section>
            {/*<section>
                <div>
                    <input
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="search"
                    />
                    <div>
                        {list.map((itm) => (
                            <div key={itm.id}>
                                <h2>{itm.title}</h2>
                                <p>{itm.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {buttons.map((btn) => (
                        <button
                            onClick={() => setIsItem(btn.id)}
                            key={btn.id}>
                            {btn.title}
                        </button>
                    ))}
                </div>
                {filterSearch.map((itm) => (
                    <div key={itm.id}>
                        <h2>{itm.title}</h2>
                        <h3>{itm.name}</h3>
                    </div>
                ))}
            </section>*/}
        </main>
    )
}


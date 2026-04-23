'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar() {
    const [openCart, setOpenCart] = useState(false);

    const [dark, darkCulun] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        if (dark === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', dark);
    }, [dark]);

    const toggleTheme = () => {
        darkCulun(prevCulun => prevCulun === 'light' ? 'dark' : 'light');
    }

    return (
        <nav className="pos-sticky pos-top backdrop-filter-blur width-100 dis-flexborder-bottom">
            <div className="margin-auto dis-flex justify-sb padding-10">
                <div className="dis-flex">
                    <div>
                        <span><i className="font-size-24px fa-solid fa-shop" aria-hidden="true"></i></span>
                    </div>
                    <div>
                        <h2 className="font-size-16px">Tolol</h2>
                        <p className="font-size-12px">Experience Tolol Visual</p>
                    </div>

                </div>

                <div className="dis-flex gap-10">
                    <Link href="/">Home</Link>
                    <Link href="/">Collections</Link>
                    <Link href="/">Style</Link>
                    <Link href="/">About</Link>
                </div>

                <div className="dis-clex gap-10">
                    <button onClick={() => setOpenCart(true)}>Cart</button>
                    <button onClick={toggleTheme} className="bg-dark padding-2-8 cursor-pnt" >
                        {dark === 'dark' ? (
                            <><i className="fa-regular fa-moon"></i> Culun</>
                        ) : (
                            <><i className="fa-regular fa-sun"></i> Badut</>
                        )}
                    </button>
                </div>
            </div>

            <aside
                id="asidecart"
                className={`slide-right ${openCart ? 'right' : ''}`}
            >
                <button id="close-cart" onClick={() => setOpenCart(false)}>
                    Close
                </button>
                <p>Isi Keranjang</p>
            </aside>
        </nav>
    );
}
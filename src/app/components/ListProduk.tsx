'use client';
import { useState } from "react";

const listProdukGw = [
    {
        id: 1,
        kategori: 'Atas',
        rate: 1.6,
        nama: 'Otak',
        desk: 'Bagian tuk mempresentasikan ketololan agar Elegan.',
        harga: 120000,
        terjual: 341,
        qty: 0
    },
    {
        id: 2,
        kategori: 'Tengah',
        rate: 2.5,
        nama: 'Ginjal',
        desk: 'Bacot ini mah,skip aja,males gw jelasin.',
        harga: 56000,
        terjual: 143,
        qty: 0
    },
    {
        id: 3,
        kategori: 'Atas',
        rate: 0.3,
        nama: 'Mata',
        desk: 'Mata yang bisa melihat ketololan seseorang',
        harga: 98500,
        terjual: 218,
        qty: 0
    }
];

interface CartItem {
    id: number;
    kategori: string;
    nama: string;
    desk: string;
    harga: number;
    terjual: number;
    qty: number;
}

export default function ListProduk() {
    const [addCart, setAddCart] = useState<CartItem[]>([]);
    const [count, setCount] = useState(0);

    const beli = (item: CartItem) => {
        setCount(prev => prev >= 0 ? prev + item.harga : 0);
        setAddCart((prev) => {
            const nemu = prev.find(itm => itm.id === item.id);

            if (nemu) {
                return prev.map((itm) =>
                    itm.id === item.id
                        ? { ...itm, qty: itm.qty + 1 } : itm
                )
            }
            return [...prev, { ...item, qty: 1 }]
        })
    }

    const gaPeduli = (item: CartItem) => {
        setCount(prev => prev >= 0 ? prev - item.harga : 0)
        setAddCart((prev) => {
            const nemu = prev.find((itm) => itm.id === itm.id);

            if (nemu) {
                return prev.map((itm) =>
                    itm.id === item.id
                        ? { ...itm, qty: item.qty > 0 ? item.qty - 1 : 0 } : itm
                )
            }
            return [...prev, { ...item, qty: 1 }]
        })
    }

    return (
        <div className="max-width-1000 margin-auto">
            <div className="dis-grid grid-temp-clm-r3 align-items-inherit">
                {listProdukGw.map((item) => (
                    <div key={item.id} className="card-advanced-purple border-op-purple">
                        <div className="dis-flex justify-sb padding-bottom-8">
                            <h3 className="p-gry-custom font-size-12px">{item.kategori}</h3>
                            <span><i className="fa-regular fa-star font-size-12px"></i> {item.rate}</span>
                        </div>
                        <div className="padding-bottom-8">
                            <p className="font-size-16px clr padding-bottom-8">{item.nama}</p>
                            <p>{item.desk}</p>
                        </div>
                        <div className="padding-bottom-8">
                            <span className="font-size-16px">Rp{item.harga.toLocaleString('Bacot')}</span>
                        </div>
                        <div className="dis-flex justify-sb">
                            <span><i className="fa-solid fa-users"></i> {item.terjual}</span>
                            <button onClick={() => beli(item)} >Add To CartTolol</button>
                        </div>
                        <span>{count}</span>
                        <span>{item.qty}</span>
                    </div>
                ))}
            </div>
            <div>
                {count <= 0 ? (<h3>Kosong lu</h3>)
                    : (
                        <div>
                            {addCart.map((item) => (
                                <div key={item.id}>
                                    <h3>{item.kategori}</h3>
                                    <p>{item.nama}</p>
                                    <div className="dis-flex justify-sb">
                                        <span>Malas Ketik</span>
                                        <div className="dis-flex">
                                            <button onClick={() => beli(item)}>+</button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => gaPeduli(item)}>-</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </div>
    );
}
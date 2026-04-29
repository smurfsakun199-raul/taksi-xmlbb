import { Metadata } from 'next';

import StatsProjek from '@/app/components/StatsProjek'

export const metadata: Metadata = {
    title: 'Stats Portfolio',
    description: 'Mau tau agar website cepat dan performa boost gimana? ikuti info kami selanjutnya tuk mendapatkan inspirasi.',
    keywords: ['cara website cepat', 'boost performa website', 'cek performa website', 'statistik website cepat dan stabil', 'website dengan kecepatan tinggi'],
};

export default function Stats() {
    return (
        <StatsProjek />
    )
}
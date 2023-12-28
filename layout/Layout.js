import Head from "next/head";
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const jakarta = Plus_Jakarta_Sans({
    display: 'swap',
    subsets: ['latin']
})

export default function Layout({children}) {
    return (
        <>
            <style jsx global>{`
            html {
              font-family: ${jakarta.style.fontFamily};
            }
          `}</style>
            <Head>
                <title>Piero MG | Portfolio</title>
            </Head>
            <div className={'max-w-3xl mx-auto px-5 sm:px-0'}>
                {children}
                <Analytics />
            </div>
        </>
    );
};

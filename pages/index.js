import Layout from "@/layout/Layout";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const [copyInput, setCopyInput] = useState('pieromarcozgarces@gmail.com')
    const [textCopy, setTextCopy] = useState(false)
    const handleInput = (e) => {
        setCopyInput(e.target.value);
    }
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) { // Ajusta este valor según sea necesario
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(copyInput);
            setTextCopy(true)
        } catch (err) {
        }
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode])

  return (
      <>
          <style jsx global>{`
            html {
              background-color: ${darkMode ? '#1f2937' : '#fff'}; 
            }
          `}</style>
    <Layout>
      <div className={'mx-auto max-w-3xl sticky top-0 z-10'}>
          <header className="w-full bottom-0 static flex justify-between items-center py-1 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
              <div className={`flex w-12 h-12 relative opacity-1 items-center bg-indigo-100 dark:bg-gray-700/60 rounded-full shadow-md border-4 border-white dark:border-gray-900/80 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <Image className={'rounded-full'} src={'/img/pieromg.webp'} alt={'Imagen PIERO'} width={40} height={40}/>
                  <p className="ml-4 font-semibold text-lg whitespace-nowrap text-slate-600 dark:text-slate-300">
                      Piero MG
                  </p>
              </div>
              <button onClick={toggleDarkMode} className="py-4 px-2 sm:py-5 flex items-center gap-4 outline-none">
                  {darkMode ? (
                      <FontAwesomeIcon icon={faMoon} style={{color: "#f1f5f9", width: "24px", height: "24px"}} />
                  ) : (
                      <Image src={'/img/ButtonMoon.png'} alt={'Imagen Button'} height={24} width={24} />
                  )}
              </button>
          </header>
      </div>
        <main className={'flex flex-col gap-16'}>
            <section className={'flex flex-col md:flex-row gap-4 items-center'}>
                <div
                    className="relative w-44 h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white dark:border-gray-900/80 shadow-lg rounded-full overflow-hidden">
                    <Image className={'rounded-full'} src={'/img/pieromg.webp'} width={160} height={160}/>
                </div>
            <div className={'flex flex-col gap-2'}>

                <h1 className={'text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-600 dark:text-slate-100'}>
                    Piero MG
                </h1>
                <p className={'text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl rounded-2xl'}>Im a
                    passionate web development.</p>
                <div className="flex gap-3 justify-center sm:justify-start">
                    <div className="relative group/tooltip">
                        <div className="p-2.5 rounded-xl grid place-items-center bg-emerald-200 dark:bg-emerald-500">
                            {
                                darkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                         fill="#fff"
                                         viewBox="0 0 512 512">
                                        <path className="fa-primary"
                                              d="M331.2 146.9L322.7 96.24C321 86.05 324.3 75.66 331.6 68.36L382.8 17.16C390.1 9.036 404.7 11.86 409 22.53L432 80L489.5 102.1C500.1 107.3 502.1 121 494.8 129.2L443.6 180.4C436.3 187.7 425.9 190.1 415.8 189.3L365.1 180.8L272.1 272.1C263.6 282.3 248.4 282.3 239 272.1C229.7 263.6 229.7 248.4 239 239L331.2 146.9z"/>
                                        <path className="fa-secondary opacity-40"
                                              d="M366.4 213.5L395 218.3C398.3 230.3 400 242.9 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256C112 176.5 176.5 112 256 112C269.1 112 281.7 113.7 293.7 116.1L298.5 145.6L267.3 176.8C263.6 176.3 259.8 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336C300.2 336 336 300.2 336 255.1C336 252.2 335.7 248.4 335.2 244.7L366.4 213.5zM497.7 171.5C506.1 197.1 512 226.4 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C285.6 0 314 5.024 340.5 14.27L288.1 66.67C277.6 64.91 266.9 64 256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 245.1 447.1 234.4 445.3 223.9L497.7 171.5z"/>
                                        </svg>
                                    ): (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                             fill="#047857"
                                             viewBox="0 0 512 512">
                                            <defs>
                                            </defs>
                                            <path className="fa-primary "
                                                  d="M331.2 146.9L322.7 96.24C321 86.05 324.3 75.66 331.6 68.36L382.8 17.16C390.1 9.036 404.7 11.86 409 22.53L432 80L489.5 102.1C500.1 107.3 502.1 121 494.8 129.2L443.6 180.4C436.3 187.7 425.9 190.1 415.8 189.3L365.1 180.8L272.1 272.1C263.6 282.3 248.4 282.3 239 272.1C229.7 263.6 229.7 248.4 239 239L331.2 146.9z"/>
                                            <path className="fa-secondary opacity-40"
                                                  d="M366.4 213.5L395 218.3C398.3 230.3 400 242.9 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256C112 176.5 176.5 112 256 112C269.1 112 281.7 113.7 293.7 116.1L298.5 145.6L267.3 176.8C263.6 176.3 259.8 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336C300.2 336 336 300.2 336 255.1C336 252.2 335.7 248.4 335.2 244.7L366.4 213.5zM497.7 171.5C506.1 197.1 512 226.4 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C285.6 0 314 5.024 340.5 14.27L288.1 66.67C277.6 64.91 266.9 64 256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 245.1 447.1 234.4 445.3 223.9L497.7 171.5z"/>
                                        </svg>
                                    )
                                }
                            </div>
                            <span
                                className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Looking for job</span>
                        </div>
                        <a href="/PieroMG_CV.pdf" download="PieroMG_CV.pdf"
                            className="flex items-center text-sm gap-2 bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2 px-4 rounded-lg font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                 viewBox="0 0 384 512">
                                <path className="fa-primary "
                                      d="M256 0v128h128L256 0zM192 320c35.35 0 64-28.66 64-64s-28.65-64-64-64C156.7 192 128 220.7 128 256S156.7 320 192 320zM224 352H160c-44.18 0-80 35.81-80 80C80 440.8 87.16 448 96 448h192c8.836 0 16-7.164 16-16C304 387.8 268.2 352 224 352z"/>
                                <path className="fa-secondary opacity-40"
                                      d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM192 192c35.35 0 64 28.66 64 64s-28.65 64-64 64c-35.34 0-64-28.66-64-64S156.7 192 192 192zM288 448H96c-8.836 0-16-7.164-16-16C80 387.8 115.8 352 160 352h64c44.18 0 80 35.81 80 80C304 440.8 296.8 448 288 448z"/>
                            </svg>
                            Resume
                        </a>
                    </div>
                </div>
            </section>
            <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md"/>
            <section className="w-full">
                <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                    <h2>Experience</h2>
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 512 512">
                            <path className="fa-primary opacity-40"
                                  d="M464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V288h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/>
                            <path className="fa-secondary"
                                  d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 512 512">
                            <path className="fa-primary"
                                  d="M464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V288h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/>
                            <path className="fa-secondary opacity-40"
                                  d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336z"/>
                        </svg>
                    )}
                </header>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1 ">
                            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">Front-End Developer</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Jun 2022 — Dec 2022</p>
                        </div>
                        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
                            <li>Administration Dashboard with React and NextJs for the management of patients,
                                appointments, and services performed daily by a physiotherapy center.
                            </li>
                            <li>Designing a user interface from scratch and implementing it in a web interface using
                                TailwindCSS.
                            </li>
                            <li>This successfully developed software replaced the previous spreadsheet system, avoiding
                                inconsistencies in the information.
                            </li>
                            <li>It increased the data capture speed of patients by 300% and improved efficiency in
                                managing appointments and services.
                            </li>
                            <li>Administration Dashboard with React and NextJs for the management of patients,
                                appointments, and services performed daily by a physiotherapy center.
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md my-8"/>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1 ">
                            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">FullStack Developer • Grupo P</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Feb 2023 — Present</p>
                        </div>
                        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
                            <li>Developed landing pages using PHP, Tailwind, jQuery, MySQL, and Vanilla JavaScript, focusing on creating fast and responsive solutions that enhance user experience and optimize conversion rates.
                            </li>
                            <li>Created and customized websites using WordPress, Elementor, and Yoast SEO, ensuring attractive design as well as search engine optimization for better online visibility.
                            </li>
                            <li>Laid out robust web applications using Bootstrap, HTML, and Vanilla JS, providing solid structures and interactive designs for a variety of web projects.
                            </li>
                            <li>IConducted maintenance and updates for e-commerce websites, focusing on continuous improvement in functionality, security, and user experience, ensuring optimal performance and smooth navigation for customers.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={'w-full'}>
                <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                    <h2>Projects</h2>
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 576 512">
                            <path className="fa-primary"
                                  d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                            <path className="fa-secondary opacity-40"
                                  d="M146.3 512C145.3 512.1 144.2 512.1 143.1 512H146.3zM288 439.8V-.0387L288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.1 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L288 439.8z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 576 512">
                            <path className="fa-primary"
                                  d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"/>
                            <path className="fa-secondary opacity-40"
                                  d="M146.3 512C145.3 512.1 144.2 512.1 143.1 512H146.3zM288 439.8V-.0387L288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.1 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L288 439.8z"/>
                        </svg>
                    )}
                </header>
                <div className="flex flex-col gap-10">
                    <div className="grid gap-10">
                        <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
                            <a href="https://velvety-daifuku-ad4dfc.netlify.app/" target="_blank" rel="noreferrer"
                               className="block">
                                {/*<div className="relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50">
                                    <Image src={'/img/landing-tesla.png'} width={350} height={225} alt={"Landing Tesla"}/>
                                </div>*/}
                                <div
                                    className="relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50">
                                    <span>
                                        <Image
                                            alt={"Landing Tesla"}
                                            src="/img/landing-tesla.png"
                                            width={350}
                                            height={225}
                                            className="rounded-lg duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7 "/>
                                    </span>
                                </div>
                            </a>
                            <div className="flex flex-col gap-2.5 justify-center">
                                <h3 className="font-bold text-3xl text-slate-800 dark:text-white">Tesla Landing</h3>
                                <p className="text-slate-600 dark:text-slate-300 text-lg line-clamp-3">
                                    He desarrollado una réplica de la página de inicio de Tesla en la que he
                                    implementado características avanzadas de diseño y navegación.
                                    Mediante el uso de la tecnología Intersection Observer, logré un efecto dinámico en
                                    el color de la tipografía de la barra de navegación,
                                    adaptándolo según la sección que está visible en la pantalla. Además, para una
                                    experiencia de desplazamiento suave y centrada, he empleado la propiedad CSS
                                    scroll-snap-type en los sliders,
                                    asegurando que las transiciones entre imágenes sean precisas y atractivas a medida
                                    que los usuarios navegan a través del contenido destacado.
                                </p>
                                <div className="flex gap-2 items-center mb-1">
                                    <div className="relative group/tooltip">
                                        <span
                                            className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Next.js</span>
                                    </div>
                                    <div className="relative group/tooltip">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 85 107" fill="none">
                                            <path
                                                d="M27.5893 91.1365C22.7555 86.7178 21.3443 77.4335 23.3583 70.7072C26.8503 74.948 31.6888 76.2914 36.7005 77.0497C44.4374 78.2199 52.0358 77.7822 59.2231 74.2459C60.0453 73.841 60.8052 73.3027 61.7036 72.7574C62.378 74.714 62.5535 76.6892 62.3179 78.6996C61.7452 83.5957 59.3086 87.3778 55.4332 90.2448C53.8835 91.3916 52.2437 92.4167 50.6432 93.4979C45.7262 96.8213 44.3959 100.718 46.2435 106.386C46.2874 106.525 46.3267 106.663 46.426 107C43.9155 105.876 42.0817 104.24 40.6844 102.089C39.2086 99.8193 38.5065 97.3081 38.4696 94.5909C38.4511 93.2686 38.4511 91.9345 38.2733 90.6309C37.8391 87.4527 36.3471 86.0297 33.5364 85.9478C30.6518 85.8636 28.37 87.6469 27.7649 90.4554C27.7187 90.6707 27.6517 90.8837 27.5847 91.1341L27.5893 91.1365Z"
                                                fill="#17191E"/>
                                            <path
                                                d="M0 69.5866C0 69.5866 14.3139 62.6137 28.6678 62.6137L39.4901 29.1204C39.8953 27.5007 41.0783 26.3999 42.4139 26.3999C43.7495 26.3999 44.9325 27.5007 45.3377 29.1204L56.1601 62.6137C73.1601 62.6137 84.8278 69.5866 84.8278 69.5866C84.8278 69.5866 60.5145 3.35233 60.467 3.21944C59.7692 1.2612 58.5911 0 57.0029 0H27.8274C26.2392 0 25.1087 1.2612 24.3634 3.21944C24.3108 3.34983 0 69.5866 0 69.5866Z"
                                                fill="#17191E"/>
                                        </svg>
                                        <span
                                            className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Astro</span>
                                    </div>

                                    <div className="relative group/tooltip">
                                        <svg width="22" height="22" viewBox="0 0 55 33" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="w-7 h-6">
                                            <path
                                                d="M27.5 0C20.1667 0 15.5833 3.66667 13.75 11C16.5 7.33333 19.7083 5.95833 23.375 6.875C25.4673 7.3975 26.9615 8.91458 28.6183 10.5967C31.3156 13.3329 34.4346 16.5 41.25 16.5C48.5833 16.5 53.1667 12.8333 55 5.5C52.25 9.16667 49.0417 10.5417 45.375 9.625C43.2827 9.1025 41.7885 7.58542 40.1317 5.90333C37.4367 3.16708 34.3177 0 27.5 0ZM13.75 16.5C6.41667 16.5 1.83333 20.1667 0 27.5C2.75 23.8333 5.95833 22.4583 9.625 23.375C11.7173 23.8975 13.2115 25.4146 14.8683 27.0967C17.5656 29.8329 20.6846 33 27.5 33C34.8333 33 39.4167 29.3333 41.25 22C38.5 25.6667 35.2917 27.0417 31.625 26.125C29.5327 25.6025 28.0385 24.0854 26.3817 22.4033C23.6867 19.6671 20.5677 16.5 13.75 16.5V16.5Z"
                                                fill="#19B5B9"></path>
                                        </svg>
                                        <span
                                            className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
                                    </div>
                                </div>
                                <div className="flex justify-start gap-3">
                                    <a href="https://velvety-daifuku-ad4dfc.netlify.app/" target="_blank"
                                       rel="noreferrer"
                                       className="flex gap-3 group/live hover:gap-6 transition-[gap] items-center text-lg py-2 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg">
                                        Live
                                        <div
                                            className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                 fill="currentColor"
                                                 viewBox="0 0 640 512">
                                                <path className="fa-primary"
                                                      d="M256 96C273.7 96 288 110.3 288 128C288 145.7 273.7 160 256 160H160C106.1 160 64 202.1 64 256C64 309 106.1 352 160 352H256C273.7 352 288 366.3 288 384C288 401.7 273.7 416 256 416H160C71.63 416 0 344.4 0 256C0 167.6 71.63 96 160 96H256zM480 96C568.4 96 640 167.6 640 256C640 344.4 568.4 416 480 416H384C366.3 416 352 401.7 352 384C352 366.3 366.3 352 384 352H480C533 352 576 309 576 256C576 202.1 533 160 480 160H384C366.3 160 352 145.7 352 128C352 110.3 366.3 96 384 96H480z"/>
                                                <path className="fa-secondary"
                                                      d="M192 256C192 238.3 206.3 224 224 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H224C206.3 288 192 273.7 192 256z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="grid gap-10">
                        <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
                            <a href="https://phplaravel-1180651-4138879.cloudwaysapps.com/" target="_blank" rel="noreferrer"
                               className="block">
                                {/*<div className="relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50">
                                    <Image src={'/img/landing-tesla.png'} width={350} height={225} alt={"Landing Tesla"}/>
                                </div>*/}
                                <div
                                    className="relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50">
                                    <span>
                                        <Image
                                            alt={"Devstagram"}
                                            src="/img/dev.png"
                                            width={350}
                                            height={225}
                                            className="rounded-lg duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7 "/>
                                    </span>
                                </div>
                            </a>
                            <div className="flex flex-col gap-2.5 justify-center">
                                <h3 className="font-bold text-3xl text-slate-800 dark:text-white">Devstagram</h3>
                                <p className="text-slate-600 dark:text-slate-300 text-lg line-clamp-3">
                                    He desarrollado una aplicación que es un clon de Instagram, utilizando tecnologías modernas como Laravel, Tailwind CSS y Livewire.
                                    Esta aplicación emula varias funcionalidades clave de Instagram, ofreciendo una experiencia de usuario interactiva y atractiva.
                                </p>
                                <div className="flex gap-2 items-center mb-1">
                                    <div className="relative group/tooltip">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                             viewBox="0 0 50 52">
                                            <path
                                                d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
                                                fill="#FF2D20" fill-rule="evenodd"/>
                                        </svg>
                                        <span
                                            className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Laravel</span>
                                    </div>
                                    <div className="relative group/tooltip">
                                        <Image src="/img/livewire.png" alt={'Livewire'} width={22} height={22}/>
                                        <span
                                            className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-['']
                                            before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100
                                            group-hover/tooltip:-translate-y-3">Livewire</span>
                                    </div>
                                    <div className="relative group/tooltip">
                                        <svg width="22" height="22" viewBox="0 0 55 33" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="w-7 h-6">
                                            <path
                                                d="M27.5 0C20.1667 0 15.5833 3.66667 13.75 11C16.5 7.33333 19.7083 5.95833 23.375 6.875C25.4673 7.3975 26.9615 8.91458 28.6183 10.5967C31.3156 13.3329 34.4346 16.5 41.25 16.5C48.5833 16.5 53.1667 12.8333 55 5.5C52.25 9.16667 49.0417 10.5417 45.375 9.625C43.2827 9.1025 41.7885 7.58542 40.1317 5.90333C37.4367 3.16708 34.3177 0 27.5 0ZM13.75 16.5C6.41667 16.5 1.83333 20.1667 0 27.5C2.75 23.8333 5.95833 22.4583 9.625 23.375C11.7173 23.8975 13.2115 25.4146 14.8683 27.0967C17.5656 29.8329 20.6846 33 27.5 33C34.8333 33 39.4167 29.3333 41.25 22C38.5 25.6667 35.2917 27.0417 31.625 26.125C29.5327 25.6025 28.0385 24.0854 26.3817 22.4033C23.6867 19.6671 20.5677 16.5 13.75 16.5V16.5Z"
                                                fill="#19B5B9"></path>
                                        </svg>
                                        <span
                                            className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
                                    </div>
                                </div>
                                <div className="flex justify-start gap-3">
                                    <a href="https://phplaravel-1180651-4138879.cloudwaysapps.com/" target="_blank"
                                       rel="noreferrer"
                                       className="flex gap-3 group/live hover:gap-6 transition-[gap] items-center text-lg py-2 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg">
                                        Live
                                        <div
                                            className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                 fill="currentColor"
                                                 viewBox="0 0 640 512">
                                                <path className="fa-primary"
                                                      d="M256 96C273.7 96 288 110.3 288 128C288 145.7 273.7 160 256 160H160C106.1 160 64 202.1 64 256C64 309 106.1 352 160 352H256C273.7 352 288 366.3 288 384C288 401.7 273.7 416 256 416H160C71.63 416 0 344.4 0 256C0 167.6 71.63 96 160 96H256zM480 96C568.4 96 640 167.6 640 256C640 344.4 568.4 416 480 416H384C366.3 416 352 401.7 352 384C352 366.3 366.3 352 384 352H480C533 352 576 309 576 256C576 202.1 533 160 480 160H384C366.3 160 352 145.7 352 128C352 110.3 366.3 96 384 96H480z"/>
                                                <path className="fa-secondary"
                                                      d="M192 256C192 238.3 206.3 224 224 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H224C206.3 288 192 273.7 192 256z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                    <h2>Socials</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                         viewBox="0 0 512 512">
                        <path className="fa-primary"
                              d="M384 318.7c-18.1-3.825-32.01-19.18-32.01-38.43v-120.1c0-8.846-7.171-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68C274.1 148.6 257.6 144.1 240 144.1c-61.86 0-112 50.2-112 112.1s50.13 112.1 111.1 112.1c26.44 0 50.43-9.544 69.59-24.88C327.1 366.3 353.7 381.7 384 384V318.7zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"/>
                        <path className="fa-secondary opacity-40"
                              d="M495.1 256.3v20.96c.0001 46.74-29.27 90.22-74.22 103C408.8 383.9 396.1 384.1 384 384v-65.31c2.672 .5651 5.164 1.621 7.1 1.621c22.06 0 40-17.96 40-40.05l0-16.16c.0001-91.97-67.02-174.3-158.6-183.2C168.6 70.76 79.1 153.4 79.1 256.3c0 87.88 64.61 160.9 148.8 174.1c15.62 2.441 27.24 15.5 27.24 31.31c-.0001 19.52-17.42 35.04-36.71 32.07c-130.2-20.08-226.1-145.2-198.5-285.9c18.34-93.45 93.57-168.8 187-187.1C361.2-9.332 495.1 107.1 495.1 256.3z"/>
                    </svg>
                </header>
                <div className="flex flex-wrap gap-3">
                    <a href="https://www.linkedin.com/in/piero-marcos-142796232/" target="_blank" rel="noreferrer"
                       className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl border-[3px] hover:border-[7px] border-[#f0f0f0] shadow-lg hover:shadow-2xl transition-all duration-300 text-sky-600">
                        <svg className={'text-2xl'} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                             fill="currentColor" viewBox="0 0 448 512">
                            <path
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg>
                        Linkedin
                    </a>
                    <a href="https://github.com/pieromarcoz/" target="_blank" rel="noreferrer"
                       className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl  border-[3px] hover:border-[7px] border-[#f0f0f0] shadow-lg hover:shadow-2xl transition-all duration-300 text-black/80 dark:text-white/80">
                        <svg className={'text-2xl'} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                             fill="currentColor" viewBox="0 0 496 512">
                            <path
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                        Github
                    </a>
                    <a href="https://twitter.com/pieromg__" target="_blank" rel="noreferrer"
                       className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl  border-[3px] hover:border-[7px] border-[#f0f0f0] shadow-lg hover:shadow-2xl transition-all duration-300 text-blue-400">
                        <svg className={'text-2xl'} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                             fill="currentColor" viewBox="0 0 512 512">
                            <path
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                        </svg>
                        Twitter
                    </a>
                </div>
            </section>
            <section className="w-full">
                <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                    <h2>Email</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                         viewBox="0 0 512 512">
                        <path className="fa-primary"
                              d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464z"/>
                        <path className="fa-secondary opacity-40"
                              d="M19.2 150.4L236.8 313.6C248.2 322.1 263.8 322.1 275.2 313.6L492.8 150.4C504.9 141.3 512 127.1 512 112V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V112C0 127.1 7.113 141.3 19.2 150.4z"/>
                    </svg>
                </header>
                <div className="flex gap-2 mb-10">
                    <input type="text"
                           className="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300"
                           value={copyInput} data-listener-added_410e2e75="true"/>
                    <div className="flex gap-2">
                        <div className="relative group/tooltip">
                            <a href="mailto:pieromarcozgarces@gmail.com" target="_blank" rel="noreferrer"
                               className="flex bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 512 512">
                                    <path className="fa-primary" d="M383.1 255.1L77.03 286.4V225.6L383.1 255.1z"/>
                                    <path className="fa-secondary opacity-40"
                                          d="M511.1 255.1c0 12.8-7.625 24.38-19.41 29.41L44.6 477.4c-4.062 1.75-8.344 2.594-12.59 2.594c-8.625 0-17.09-3.5-23.28-10.05c-9.219-9.766-11.34-24.25-5.344-36.27l73.66-147.3l306.1-30.37L77.03 225.6l-73.66-147.3C-2.623 66.3-.4982 51.81 8.72 42.05c9.25-9.766 23.56-12.75 35.87-7.453L492.6 226.6C504.4 231.6 511.1 243.2 511.1 255.1z"/>
                                </svg>
                            </a><span
                            className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Send me email</span>
                        </div>
                        <div className="relative group/tooltip">
                            <button onClick={copyToClipboard}
                                    className="flex bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 512 512">
                                    <path className="fa-primary"
                                          d="M192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352zM416 0v96h96L416 0z"/>
                                    <path className="fa-secondary opacity-40"
                                          d="M512 96v240c0 26.51-21.49 48-48 48h-192c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48H416v96H512z" />
                                </svg>
                            </button>
                            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-['']
                            before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white
                            before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                                {textCopy ? 'Copied!' : 'Copy to clipboard'}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Layout>
      </>
  )
}

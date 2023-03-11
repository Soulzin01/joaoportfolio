import Head from 'next/head'
import {BsMoonStarsFill, BsSunFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp} from 'react-icons/ai';
import Image from 'next/image';
import desjoao from "../public/joaoImg.png";
import iconDesign from '../public/iconDesign.png';
import Dev from '../public/Dev.svg';
import { useState } from 'react';
import CT from '../public/ct.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>João Emanuel - Portfolio</title>
        <meta name="description" content="Portfolio de João Emanuel - By: Luan Alves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
      </Head>
      <main className='bg-slate-800 px-10 min-h-screen dark:bg-slate-200 transition-all duration-300 w-full
      h-full m-0 overflow-hidden'>
          <section className=''>
            <nav className='py-10 mb-12 flex justify-between'>
                {/* <h1 className='text-xl text-slate-200 font-centauri cursor-default select-none dark:text-gaiat-blue '>CT</h1> */}
                <Image src={CT} width={55} height={55}/>
                <h1 className='text-xl text-slate-200 font-centauri cursor-default select-none dark:text-gaiat-blue max-md:hidden'>Conjunto Tecnico</h1>
              <ul className='flex items-center'>
                <li>
                  <BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-slate-200 hover:text-slate-500 dark:hidden transition-all '/>
                  <BsSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-black hover:text-slate-600  hidden dark:block transition-all '/>
                </li>
              </ul>
            </nav>

            <div className='text-center'>
              <h2 className='text-5xl text-soda-orange font-medium  py-2 dark:text-gaiat-blue transition-all duration-300 cursor-default select-none'>João Emanuel</h2>
              <h3 className='text-2xl text-slate-100 pt-2 pb-6 cursor-default select-none dark:text-gaiat-blue duration-300'>Técnico em Informática | Designer</h3>
            </div>

            <div className='text-4xl text-center flex text-slate-50 justify-center gap-9 dark:text-gaiat-blue duration-300'>
              
                <a className='select-none hover:text-teal-200 dark:hover:text-teal-400' href="https://www.linkedin.com/in/jo%C3%A3o-alcanfor-341363249/" target="_blank" rel="noopener">
                <AiFillLinkedin/>
                </a>

                <a className='select-none hover:text-teal-200 dark:hover:text-teal-400' href="https://www.instagram.com/conjunto_tecnico/" target="_blank" rel="noopener">
                <AiFillInstagram/>
                </a>

                <a className='select-none hover:text-teal-200 dark:hover:text-teal-400' href="https://api.whatsapp.com/send/?phone=5588988464056&text&type=phone_number&app_absent=0" target='_blank' rel="noopener">
                <AiOutlineWhatsApp/>
                </a>

              </div>

              <div className="relative rounded-full w-72 h-72 overflow-clip mx-auto mt-10 border-slate-600 border-4">
                <Image className='object-cover cursor-default select-none' src={desjoao} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" priority fill alt='João Emanuel'/>
              </div>

          </section>

          <section>
            <div className='max-w-2xl mx-auto py-10'>
                <h3 className="text-3xl text-center text-slate-50 cursor-default select-none dark:text-gaiat-blue duration-300">
                  Sobre mim:
                </h3>
                <p className='text-lg py-2 text-center text-slate-50 leading-8 cursor-default select-none dark:text-gaiat-blue duration-300'>
                Formado como <span className='text-teal-300 dark:text-soda-orange'>técnico em informática</span> possuo experiência com formatação e manutenção de computadores, 
                e há 1 ano atuo como <span className='text-teal-300 dark:text-soda-orange'>designer gráfico de digitais e impressos</span> (logotipos, publicações, embalagens, flyers,
                 documentos entre outros).
                </p>
            </div>
            <div className="gap-10 justify-evenly items-start lg:flex">
              <div className="text-center bg-slate-900 shadow-slate-500 shadow rounded-xl my-10 mx-2 p-10 hover:scale-105 hover:shadow
              hover:shadow-slate-500 transition-all duration-300 cursor-default select-none dark:bg-chuuch-gray flex-none">
                <Image className='relative mx-auto ' src={iconDesign} width={150} height={150} alt='ícone do card de designs'/>
                <h3 className="text-1xl font-bold pt-6 pb-2 text-slate-50 dark:text-gaiat-blue duration-300">
                  Designs Profissionais
                </h3>
                <p className="text-lg text-slate-50 dark:text-gaiat-blue duration-300">
                  Criação de designs elegantes que atenderão às suas necessidades.
                </p>
                <h4 className="text-teal-300 py-4 dark:text-teal-800">
                  Ferramentas que uso:
                </h4>
                <p className='text-slate-50 font-medium py-1 dark:text-gaiat-blue duration-300'>&#x2022; Photoshop &#x2022;</p>
                <p className='text-slate-50 font-medium py-1 dark:text-gaiat-blue duration-300'>&#x2022; Adobe Illustrator &#x2022;</p>
                <p className='text-slate-50 font-medium py-1 dark:text-gaiat-blue duration-300'>&#x2022; Canva &#x2022;</p>
                <p className='text-slate-50 font-medium py-1 dark:text-gaiat-blue duration-300'>&#x2022; Corel Draw &#x2022;</p>
              </div>

              <div className="text-center bg-slate-900 shadow-slate-500 shadow rounded-xl my-10 mx-2 p-10 transition-all
              duration-300 cursor-default select-none dark:bg-chuuch-gray hover:scale-105 hover:shadow hover:shadow-slate-500 flex-none">
                <Image className='relative mx-auto' src={iconDesign} width={150} height={150} alt='ícone'/>
                <h3 className="text-1xl font-bold pt-6 pb-2 text-slate-50 dark:text-gaiat-blue duration-300">
                  Manutenção Preventiva
                </h3>
                <p className="text-lg text-slate-50 dark:text-gaiat-blue duration-300">
                  Diagnóstico de problemas do seu computador ou notebook.
                </p>
                <h4 className="text-teal-300 py-4 dark:text-teal-800">
                  Serviços que ofereço:
                </h4>
                <p className='text-slate-50 font-medium py-1 dark:text-gaiat-blue duration-300'>&#x2022; Formatação &#x2022;</p>
                <p className='text-slate-50 font-medium py-1 dark:text-gaiat-blue duration-300'>&#x2022; Limpeza &#x2022;</p>
                <p className='text-slate-50 font-medium py-1 dark:text-gaiat-blue duration-300'>&#x2022; Instalação de Programas essenciais &#x2022;</p>
                <p className='text-slate-50 font-medium py-1 dark:text-gaiat-blue duration-300'>&#x2022; Diagnóstico e Manutenção &#x2022;</p>
              </div>
            </div>
          </section>
          <section>
          <div className='max-w-3xl mx-auto py-10 flex justify-between'>
              <div className='my-auto'>
                <h1 className='text-6xl text-slate-50 font-burtons text-center font-medium w-56 dark:text-gaiat-blue'>
                  Entre em contato<span className='text-teal-300 font-bold dark:text-soda-orange'>:</span>
                </h1>
              </div>
              <div className='block'>
                <div className='py-6'>
                  <label className='relative'>
                    <input type='email' className='w-72 h-12 px-6 text-md outline-none text-white bg-slate-700 border-2 rounded-lg border-white border-opacity-60
                    focus:border-teal-200 transition duration-200' placeholder='Nome'/>
                  </label>
                </div>
                <div className='py-6'>
                  <label className='relative'>
                    <input type='text' className='w-72 h-12 px-6 text-md outline-none text-white bg-slate-700 border-2 rounded-lg border-white border-opacity-60
                    focus:border-slate-900 transition duration-200' placeholder='Email'/>
                  </label>
                </div>
                <div className='py-6'>
                  <label className='relative'>
                    <input type='text' className='w-72 h-16 px-6 text-md outline-none text-white bg-slate-700 border-2 rounded-lg border-white border-opacity-60
                    focus:border-slate-900 transition duration-200' placeholder='Mensagem'/>
                  </label>
                </div>
              </div>
            </div>
          </section>
      </main>
      <footer>
            <div className='text-center text-slate-400 bg-slate-900 p-3 cursor-default select-none min-h-fit'>
                    <div className='relative rounded-full w-7 h-7 overflow-clip mx-auto border-slate-50 border-2' title='Soulzin Dev'>
                    <Image className='bg-white mx-auto object-cover' src={Dev} width={25} height={25} alt='Logo do desenvolvedor'/>
                    </div>
                    &#169; Todos os direitos reservados. 
            </div>
          </footer>
    </div>
  )
}

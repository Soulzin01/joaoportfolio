import Head from 'next/head'
import {BsMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp} from 'react-icons/ai';
import Image from 'next/image';
import desjoao from "../public/joaoImg.png";
import iconDesign from '../public/iconDesign.png';
import dev from '../public/dev.png';
import { useState } from 'react';

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
      <main className='bg-slate-800 px-10 min-h-screen '> {/*dark:bg-slate-200 transition-all duration-300 */}
          <section className=''>
            <nav className='py-10 mb-12 flex justify-between'>
              <div className='before:contents-["CT"] hover:after:contents-["Conjunto Técnico"]'>
                <h1 className='text-xl text-slate-200 font-centauri cursor-default sm:content-["_CT"] md:content-["_Conjunto_Tecnico"]'>CT</h1>
              </div>
              <ul className='flex items-center'>
                <li><BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-slate-200 hover:text-slate-500 transition-all'/></li>
              </ul>
            </nav>

            <div className='text-center'>
              <h2 className='text-5xl text-purple-700 font-medium  py-2 dark:text-orange-500 transition-all duration-300'>João Emanuel</h2>
              <h3 className='text-2xl text-slate-100 py-2'>Técnico em Informática | Designer</h3>
              <p className='text-lg text-slate-50 py-4'>
                
              </p>
            </div>

            <div className='text-4xl text-center flex text-slate-50 justify-center gap-9'>
              
                <a href="https://www.linkedin.com/in/jo%C3%A3o-alcanfor-341363249/" target="_blank" rel="noopener">
                <AiFillLinkedin/>
                </a>

                <a href="https://www.instagram.com/conjunto_tecnico/" target="_blank" rel="noopener">
                <AiFillInstagram/>
                </a>

                <a href="https://api.whatsapp.com/send/?phone=5588988464056&text&type=phone_number&app_absent=0" target='_blank' rel="noopener">
                <AiOutlineWhatsApp/>
                </a>

              </div>

              <div className="relative rounded-full w-72 h-72 overflow-clip mx-auto mt-10 border-slate-600 border-4">
                <Image className='object-cover' src={desjoao} fill/>
              </div>

          </section>

          <section>
            <div className='max-w-2xl mx-auto py-10'>
                <h3 className="text-3xl text-center text-slate-50">
                  Sobre mim:
                </h3>
                <p className='text-lg py-2 text-center text-slate-50 leading-8'>
                Formado como <span className='text-teal-300'>técnico em informática</span> possuo experiência com formatação e manutenção de computadores, 
                e há 1 ano atuo como <span className='text-teal-300'>designer gráfico de digitais e impressos</span> (logotipos, publicações, embalagens, flyers,
                 documentos entre outros).
                </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-slate-500 shadow-inner rounded-xl my-10 mx-2 p-10 hover:scale-105 transition-all duration-300">
                <Image className='relative mx-auto' src={iconDesign} width={150} height={150}/>
                <h3 className="text-1xl font-medium pt-6 pb-2 text-slate-50">
                  Designs Profissionais
                </h3>
                <p className="text-lg text-slate-50">
                  Criação de designs elegantes que atenderão às suas necessidades.
                </p>
                <h4 className="text-teal-300 py-4">
                  Ferramentas que uso:
                </h4>
                <p className='text-slate-50 font-medium py-1'>Photoshop</p>
                <p className='text-slate-50 font-medium py-1'>Adobe Illustrator</p>
                <p className='text-slate-50 font-medium py-1'>Canva</p>
                <p className='text-slate-50 font-medium py-1'>Corel Draw</p>
              </div>

              <div className="text-center shadow-slate-500 shadow-inner rounded-xl my-10 mx-2 p-10 hover:scale-105 transition-all duration-300">
                <Image className='relative mx-auto' src={iconDesign} width={150} height={150}/>
                <h3 className="text-1xl font-medium pt-6 pb-2 text-slate-50">
                  Designs Profissionais
                </h3>
                <p className="text-lg text-slate-50">
                  Criação de designs elegantes que atenderão às suas necessidades.
                </p>
                <h4 className="text-teal-300 py-4">
                  Ferramentas que uso:
                </h4>
                <p className='text-slate-50 font-medium py-1'>Photoshop</p>
                <p className='text-slate-50 font-medium py-1'>Adobe Illustrator</p>
                <p className='text-slate-50 font-medium py-1'>Canva</p>
                <p className='text-slate-50 font-medium py-1'>Corel Draw</p>
              </div>

              <div className="text-center shadow-slate-500 shadow-inner rounded-xl my-10 mx-2 p-10 hover:scale-105 transition-all duration-300">
                <Image className='relative mx-auto' src={iconDesign} width={150} height={150}/>
                <h3 className="text-1xl font-medium pt-6 pb-2 text-slate-50">
                  Designs Profissionais
                </h3>
                <p className="text-lg text-slate-50">
                  Criação de designs elegantes que atenderão às suas necessidades.
                </p>
                <h4 className="text-teal-300 py-4">
                  Ferramentas que uso:
                </h4>
                <p className='text-slate-50 font-medium py-1'>Photoshop</p>
                <p className='text-slate-50 font-medium py-1'>Adobe Illustrator</p>
                <p className='text-slate-50 font-medium py-1'>Canva</p>
                <p className='text-slate-50 font-medium py-1'>Corel Draw</p>
              </div>
            </div>
          </section>
      </main>
      <footer>
            <div className='text-center bg-slate-900 p-10'>
                  <p className='text-slate-500'>
                    <Image className='mx-auto' src={dev} width={25} height={25}/>&#169; Todos os direitos reservados. 
                  </p>
            </div>
          </footer>
    </div>
  )
}

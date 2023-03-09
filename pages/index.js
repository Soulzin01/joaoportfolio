import Head from 'next/head'
import {BsMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp} from 'react-icons/ai';
import Image from 'next/image';
import devsoul from "../public/joaoImg.png";
import iconDesign from "../public/iconDesign.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Emanuel - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
      </Head>
      <main className='bg-slate-900 px-10 min-h-screen'>

          <section className='min-h-3/4'>

            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl text-slate-200 font-centauri cursor-default'>CT</h1>
              <ul className='flex items-center'>
                <li><BsMoonStarsFill className='cursor-pointer text-2xl text-slate-200'/></li>
              </ul>
            </nav>

            <div className='text-center'>
              <h2 className='text-5xl text-purple-700 font-medium  py-2'>João Emanuel</h2>
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
                <Image className='object-cover' src={devsoul} fill/>
              </div>

          </section>

          <section>
            <div className='max-w-2xl mx-auto py-10'>
                <h3 className="text-3xl text-center text-slate-50">
                  Sobre mim:
                </h3>
                <p className='text-lg py-2 text-center text-slate-50'>
                Formado como <span className='text-teal-300'>técnico em informática</span> possuo experiência com formatação e manutenção de computadores, 
                e há 1 ano atuo como <span className='text-teal-300'>designer gráfico de digitais e impressos</span> (logotipos, publicações, embalagens, flyers,
                 documentos entre outros).
                </p>
            </div>
            <div className="">
              <div className="text-center">
                <Image src={iconDesign} width={100} height={100}/>
                <h3 className="text-1xl font-medium pt-8 pb-2 text-slate-50">
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
    </div>
  )
}

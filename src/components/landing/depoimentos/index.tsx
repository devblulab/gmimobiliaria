import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Particles from "../../contatos/particles";





const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1, delay: -10 } },
};

const marqueeVariantssss = {
  hidden: { x: "10%" , y: "-10%" },
  
  visible: {
    x: "-100%",
    transition: { duration: 30, ease: "linear", repeat: Infinity },
  },
};


const marqueeVariantss = {
    hidden: { x: "10%" , y: "-10%" },
    
    visible: {
      x: "-40%",
      transition: { duration: 30, ease: "linear", repeat: Infinity },
    },
  };

  const marqueeVariantsss = {
    hidden: { y: "-5%" },
    visible: {
      x: "40%",
      transition: { duration: 30, ease: "linear", repeat: Infinity },
    },
  };

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("visible");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-blue-900/20 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <motion.nav
        className="my-16 animate-fade-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 10 } }}
      >
        
      </motion.nav>
      <motion.div
        className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-cyan-300/50 to-zinc-300/0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 10 } }}
      />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <motion.h1
        className="z-10 text-4xl text-transparent duration- 300 bg-zinc-400 cursor-default text-edge-outline animate-title font-display sm:text-10xl md:text-9xl whitespace-nowrap bg-clip-text"
        initial="hidden"
        animate="visible"
        variants={marqueeVariantss}
        style={{ fontFamily: "Roboto Mono, monospace", fontStyle: "italic" }}
      >
        <motion.span variants={textVariants}>G</motion.span>
        <motion.span variants={textVariants}>u</motion.span>
        <motion.span variants={textVariants}>i</motion.span>
        <motion.span variants={textVariants}>l</motion.span>
        <motion.span variants={textVariants}>h</motion.span>
        <motion.span variants={textVariants}>e</motion.span>
        <motion.span variants={textVariants}>m</motion.span>
        <motion.span variants={textVariants}>e</motion.span>
        <motion.span variants={textVariants}>M</motion.span>
        <motion.span variants={textVariants}>a</motion.span>
        <motion.span variants={textVariants}>r</motion.span>
        <motion.span variants={textVariants}>t</motion.span>
        <motion.span variants={textVariants}>i</motion.span>
        <motion.span variants={textVariants}>n</motion.span>
        <motion.span variants={textVariants}>s</motion.span>
          
</motion.h1>
<motion.div
className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
initial={{ opacity: 0 }}
animate={{ opacity: 1, transition: { duration: 10 } }}
/>
<motion.h1
        className="z-10 text-4xl text-transparent duration- 300 bg-zinc-400 cursor-default text-edge-outline animate-title font-display sm:text-10xl md:text-9xl whitespace-nowrap bg-clip-text"
        initial="hidden"
        animate="visible"
        variants={marqueeVariantsss}
        style={{ fontFamily: "Roboto Mono, monospace", fontStyle: "italic" }}
      >
       
        <motion.span variants={textVariants}>A</motion.span>
        <motion.span variants={textVariants}>g</motion.span>
        <motion.span variants={textVariants}>e</motion.span>
        <motion.span variants={textVariants}>n</motion.span>
<motion.span variants={textVariants}>t</motion.span>
<motion.span variants={textVariants}>e</motion.span>
<motion.span variants={textVariants}> </motion.span>
<motion.span variants={textVariants}>I</motion.span>
<motion.span variants={textVariants}>m</motion.span>
<motion.span variants={textVariants}>o</motion.span>
<motion.span variants={textVariants}>b</motion.span>
<motion.span variants={textVariants}>i</motion.span>
<motion.span variants={textVariants}>a</motion.span>
<motion.span variants={textVariants}>r</motion.span>
<motion.span variants={textVariants}>i</motion.span>
<motion.span variants={textVariants}>o</motion.span>
</motion.h1>
<motion.div
className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-100/50 to-zinc-300/0"
initial={{ opacity: 0 }}
animate={{ opacity: 1, transition: { duration: 10 } }}
/>
<h4 className="text-sm text-zinc-500">
Desbrave o terreno das suas finanças com confiança e controle!
</h4>
<motion.div
className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-cyan-300/50 to-zinc-300/0"
initial={{ opacity: 0 }}
animate={{ opacity: 1, transition: { duration: 10 } }}
/>

<motion.div
className="my-16 text-center animate-fade-in"
initial={{ opacity: 0 }}
animate={{ opacity: 1, transition: { duration: 10 } }}
>
<motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-sm text-zinc-500"
    >
      Guilherme Martins: Transformando sonhos em realidade, um imóvel de cada vez. 🏡✨ Empreendedor e Corretor de Imóveis, conectando pessoas e criando histórias há mais de XX anos. 🌟 Com CRECI 60478F, sua jornada imobiliária em Tubarão-SC começa aqui.{' '}
      <a
        href="https://enygma-enterprise-co.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline duration-500 hover:text-zinc-300"
      >
        
      </a>{' '}
     {' '}
      <a
        href="https://enygma-enterprise-co.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline duration-500 hover:text-zinc-300"
      >
        
      </a>{' '}
      
    </motion.h2>

<motion.div
className="text-4xl text-zinc-500 mt-4 overflow-hidden"
style={{ whiteSpace: "nowrap" }}
initial="hidden"
animate="visible"
variants={marqueeVariantss}
>
    
<motion.span variants={marqueeVariantssss}>Lazer.                   .Confroto....                          </motion.span>
</motion.div>

</motion.div>
</motion.div>

);
};

export default Home;

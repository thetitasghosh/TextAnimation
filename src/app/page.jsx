'use client'
import  { useEffect , useRef } from "react";
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./page.module.css";
const page = () => {

    const Ref = useRef([]);
    const container = useRef(null);
  

  const Phrase =
    "The words are a message waiting to be decoded by those who can see beyond the code The message of the words is a message of hope They are not just letters on a page but living symbols that contain a deeper meaning The words are a message waiting to be decoded Are you ready to see beyond the code?";

    const Splitwords =(Phrase)=>{
      let body =[];
     Phrase.split(" ").forEach((word , i) => {
      const letters = Splitletter(word)
      body.push(<h3 key={word + " " + i}>{letters}</h3>)
     });
     return body;
    }

    const Splitletter = (word)=>{
      let letters =[];
      word.split("").forEach((letter , i) => {
        letters.push(<span key={letter + " " + i } ref={elm => {Ref.current.push(elm)}}>{letter}</span>)
      });
      return letters;
    }

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(Ref.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          end: `+=${window.innerHeight / 1.5}`,
          scrub: 2,
          markers: true,
        },
        opacity: 1,
        stagger:0.1,
        ease: "none",
      })
    }, []);


  return (
    <>
      <main  className={style.main}>
        <div ref={container} className={style.phrase}>

          {Splitwords(Phrase)}

          </div>
      </main>
    </>
  );
};

export default page;

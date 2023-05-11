import { useState, useEffect, useRef } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import  img_1  from './assets/shoe_1.png';
import  img_2  from './assets/shoe_2.png';
import  img_3  from './assets/shoe_3.png';
import  img_4  from './assets/shoe_4.png';
import  img_5  from './assets/shoe_5.png';

function App() {

  const shoes = [img_1, img_2, img_3, img_4, img_5];

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(`${carousel.current?.scrollWidth} ${carousel.current?.offsetWidth}`)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <div className="main-application">
      <h1 className="title">Exemplo de Carousel utilizando Framer-Motion</h1>
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}> 
          <motion.div 
          className='inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.8 }}>
              {
                shoes.map(shoe =>(
                    <motion.div key={shoe}> 
                      <img className='item' src={shoe} alt="shoe"/>
                    </motion.div>
                ))
              }
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default App

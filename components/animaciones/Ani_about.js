import React, {useState, useEffect} from 'react';
import About from '../About';






const Ani_about = () => {
    
    const [clase, setclase] = useState('hidden');

    
    useEffect(() => {
        let handleAnimation = () => {       
            if (document.documentElement.scrollTop > 1) {           
                setclase('visible');  
           };
        }
        window.addEventListener("scroll", handleAnimation, false); 
        return () => {
        window.removeEventListener("scroll", handleAnimation, false);
          };
       
    }, [clase])
  
    return ( 
<>
        <div className={clase}>  
            <About />        
        </div>
        
</>     
     );
}
 
export default Ani_about;
import React, {useState, useEffect} from 'react';
import About2 from '../About2';






const Ani_about2 = () => {
    
    const [clase, setclase] = useState('hidden');

    
    useEffect(() => {
        let handleAnimation = () => {       
            if (document.documentElement.scrollTop > 410) {           
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
            <About2 />        
        </div>
        
</>     
     );
}
 
export default Ani_about2;
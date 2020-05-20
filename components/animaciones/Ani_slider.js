import React, {useState, useEffect} from 'react';
import Slider from '../Slider';






const AniSlider = () => {
    
    const [clase, setclase] = useState('hidden');

    
    useEffect(() => {
        let handleAnimation = () => {       
            if (document.documentElement.scrollTop > 1250) {           
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
            <Slider />        
        </div>
        
</>     
     );
}
 
export default AniSlider;
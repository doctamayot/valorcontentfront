import React, {useState, useEffect} from 'react';
import Formport from '../Formport';






const Aniform = () => {
    
    const [clase, setclase] = useState('hidden');

    
    useEffect(() => {
        let handleAnimation = () => {       
            if (document.documentElement.scrollTop > 810) {           
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
            <Formport />        
        </div>
        
</>     
     );
}
 
export default Aniform;
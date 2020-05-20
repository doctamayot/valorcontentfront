import Layout from '../components/Layout';
import Principal from '../components/Principal';
import AniAbout from '../components/animaciones/Ani_about';
import AniAbout2 from '../components/animaciones/Ani_about2';
import AniForm from '../components/animaciones/Ani_form';
import AniSlider from '../components/animaciones/Ani_slider';


const Index = () => {
 
return(
  <div>  
    <Layout>
      <Principal  />     
      <AniAbout/>      
      <AniAbout2/>
      <AniForm /> 
      <AniSlider />        
    </Layout>
  </div>
  );
}
 
export default Index;
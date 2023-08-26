import HeroSection from '../HeroSection';
import { useProductContext } from '../context/productcontext';


const AboutUs = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Fashion Store"
  };

  return <>
    {myName}
    <HeroSection myData={data} />
    {" "}
  </>
};

export default AboutUs

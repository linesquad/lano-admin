import welcomeBird from "/images/welcomeBird.svg";
import welcome from "/images/Welcome.svg";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-[152px] ">
      <img src={welcomeBird} alt="welcome-bird" className="ml-[145px]" />
      <img src={welcome} alt="welcome" />
    </div>
  );
};

export default Home;

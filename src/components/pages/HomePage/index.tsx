import AttendanceForm from '@/components/organisms/AttendanceForm';
import Banner from '@/components/organisms/Banner';
import Header from '@/components/organisms/Header';
import Minimap from '@/components/organisms/Minimap';
import Timer from '@/components/organisms/Timer';
// import Timer from '@/components/organisms/Timer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner imgPath="/images/banner.webp" />
      <Timer />
      <AttendanceForm />
      <Minimap />
    </>
  );
};

export default HomePage;

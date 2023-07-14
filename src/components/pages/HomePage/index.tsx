import AttendanceForm from '@/components/organisms/AttendanceForm';
import Banner from '@/components/organisms/Banner';
import EventInfo from '@/components/organisms/EventInfo';
import Header from '@/components/organisms/Header';
import Minimap from '@/components/organisms/Minimap';
import Timer from '@/components/organisms/Timer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner imgPath="/images/banner.webp" />
      <Timer />
      <EventInfo />
      <AttendanceForm />
      <Minimap />
    </>
  );
};

export default HomePage;

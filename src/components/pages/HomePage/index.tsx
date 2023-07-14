import AttendanceForm from '@/components/organisms/AttendanceForm';
import Header from '@/components/organisms/Header';
import Minimap from '@/components/organisms/Minimap';
// import Timer from '@/components/organisms/Timer';

const HomePage = () => {
  return (
    <>
      <Header />
      <AttendanceForm />
      <Minimap />
      {/* <Timer /> */}
    </>
  );
};

export default HomePage;

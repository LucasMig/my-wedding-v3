import AttendanceForm from '@/components/organisms/AttendanceForm';
import Header from '@/components/organisms/Header';
import Timer from '@/components/organisms/Timer';

const HomePage = () => {
  return (
    <>
      <Header />
      <AttendanceForm />
      <Timer />
    </>
  );
};

export default HomePage;

import LandingPage from '../components/LandingPage';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout hideNav={true}>
      <LandingPage />
    </Layout>
  );
}
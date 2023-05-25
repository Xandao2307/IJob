import { StatusBar } from 'expo-status-bar';
import { Pages } from './src/util/pages';
import ServiceProviderPage from './src/pages/register/serviceProviderPage';

export default function App() {
  return (
      <>
        <StatusBar style="auto" />
        <ServiceProviderPage/>
      </>
  );
}

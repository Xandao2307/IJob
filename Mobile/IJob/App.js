import { StatusBar } from 'expo-status-bar';
import { Login, Register} from "./src/pages/screens";
import ServiceProviderPage from './src/pages/register/serviceProviderPage';

export default function App() {
  return (
      <>
        <StatusBar style="auto" />
        <Login/>
      </>
  );
}


import Header from './components/Header/index';
import Footer from './components/Footer/index';
import { RouteManager } from './router';

function App() {

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      minHeight: '100vh',
    }}>
      <Header />
      <RouteManager />
      <Footer />
    </div>
  );
}

export default App;

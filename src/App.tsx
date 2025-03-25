import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from './components/Footer'
import { Header } from './components/Header';
import { AppRoutes } from './routes/AppRoutes';

function App() {

  return (
    <div className='flex flex-col bg-gray-800 h-full'>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App

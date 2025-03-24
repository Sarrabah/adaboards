import { Footer } from './components/Footer'
import { Header } from './components/Header';

import { BoardsPage } from './pages/BoardsPage';

function App() {

  return (
    <div className='bg-gray-800'>
      <Header />
      <BoardsPage/>
      <Footer />
    </div>
  );
};

export default App

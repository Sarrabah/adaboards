import { Footer } from './components/Footer'
import { Header } from './components/Header';
import { BoardsPage } from './pages/BoardsPage';

function App() {

  return (
    <div className='flex flex-col bg-gray-800 h-full'>
      <Header />
      <BoardsPage/>
      <Footer />
    </div>
  );
};

export default App

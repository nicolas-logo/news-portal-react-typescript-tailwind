import Header from './components/header'
import MainArticle from './components/mainArticle'
import MostReadContainer from './components/mostReadContainer'
import NewsContainer from './components/newsContainer'

function App() {
  return (
    <main className='px-4 py-4'>
      <Header />
      <div className='sm:flex gap-4'>
        <MainArticle />
        <NewsContainer />
      </div>
      <MostReadContainer />
    </main>
  )
}

export default App

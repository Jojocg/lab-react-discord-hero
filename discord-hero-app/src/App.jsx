import './App.css'
import Navbar from './components/navbar'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a <br />
        worldwide art community. Where just you and a handful of <br />
        friends can spend time together. A place that makes it easy to <br />
        talk every day and hang out more often.</p>
        <button>Download for Mac</button>
        <button>Open Discord in your browser</button>
      </main>
      <aside>
        <img src="./src/assets/discord-background.png" alt="discord-background" /> 
      </aside>
    </div>
  )
}



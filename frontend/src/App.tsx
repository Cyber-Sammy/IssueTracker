import './App.css'
import ElementsList from './components/ElemetsList'
import Header from './components/Header'
import InfoBlock from './components/InfoBlock'

function App() {
  var currentIssuesCount = Math.trunc(Math.random() * 1000)
  
  return (
    <div className='app-container'>
      <Header totalIssues={currentIssuesCount}></Header>
      <text>This is a simple issue tracker app built with .NET and React</text>
      <div className='information-block'>
        <InfoBlock userName='CyberSammy' currentDate='6-7-6767' usersCount={123} issuesForUser={10}></InfoBlock>
      </div>
      <div>
        <ElementsList></ElementsList>
      </div>
    </div>
  )
}

export default App

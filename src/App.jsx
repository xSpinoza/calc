import Base from './components/Base';

function App() {

  return (
    <div className='bodyD'>
      <div className='base__container container'>
        <Base/>
      </div>

      <footer className="footer">
        <div className='footer__details'>
          <a href="https://xspinoza.com" target='_blank'>By <span>xSpinoza</span></a>

          <a href="https://xspinoza.com" target='_blank'>
            <img src="/xsIcon.svg" alt="XS icon" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App;
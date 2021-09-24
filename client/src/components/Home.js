import react from 'react'
import '../css/Home.scss'
import mainImg from '../images/bubble_tea_icons/main.png'
function Home() {
  return (
    <div className="home">
      <div className="intro">
        <h2>Is it tea time?</h2>
        <h3>Always.</h3>
        <p>
          Keep track of your favourite milk tea orders all in one place!
          <br />
          Featuring drinks from Chatime, Gong cha and ShareTea.
          <br />
        </p>
        <a href="/login-signup">Get Started</a>
      </div>

      <img src={mainImg} alt="" />
    </div>
  )
}
export default Home
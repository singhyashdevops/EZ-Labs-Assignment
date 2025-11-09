import stroke from '../assets/Vector 5.svg'
import taped from '../assets/taped.png'
import eight from '../assets/Camera 01.svg'
import nine from '../assets/Camera 02.svg'
import ten from '../assets/Camera 03.svg'
import arrow from '../assets/arrow.svg'
import production from '../assets/prod.png'
import mandala from '../assets/Frame 33.svg';
import { Link } from 'react-router-dom'

export default function FilmProduction() {
  return (
    <div className='page-four'>
      <Link to={'/'}><button className='webview'>Go Back</button></Link>
      <div className='stroked-title'>
        <h2>"Filmmaking is a chance to live many lifetimes." - Robert Altman</h2>
        <img id='stroke' src={stroke} alt="stroke" />
      </div>
      <div className='carousel artcurator'>
        <div id='art' className='frame'>
          <img id='tape' src={taped} alt="" />
          <img className='image-carousel' src={production} alt="" />
          <h4>Film Production</h4>
        </div>
        <div>
          <h3>Who says films are just an escape? We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating. V crafts:</h3>
          <ul>
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>
        </div>
      </div>
      <div id='explore'>
        <button>Explore More</button>
        <img src={arrow} alt="explore" />
      </div>
      <img className='xop i1' src={eight} alt="art" />
      <img className='xop i2' src={nine} alt="art" />
      <img className='xop i4' src={ten} alt="art" />
      <div id="mandala-border" >
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
        <img src={mandala} alt="mandala art" />
      </div>
    </div>
  )
}

import stroke from '../assets/Vector 5.svg'
import taped from '../assets/taped.png'
import curator from '../assets/art.jpg'
import one from '../assets/Art Curation Icons 01.svg'
import two from '../assets/Art Curation Icons 02.svg'
import four from '../assets/Art Curation Icons 04.svg'
import arrow from '../assets/arrow.svg'
import mandala from '../assets/Frame 33.svg';
import { Link } from 'react-router-dom'

export default function ArtCurator() {
  return (
    <div className='page-four artModel'>
      <Link to={'/'}><button className='webview'>Go Back</button></Link>
      <div className='stroked-title'>
        <h2>"V take art where it belongs, to the people.” - Vernita Verma</h2>
        <img id='stroke' src={stroke} alt="stroke" />
      </div>
      <div className='carousel artcurator'>
        <div id='art' className='frame'>
          <img id='tape' src={taped} alt="" />
          <img className='image-carousel' src={curator} alt="" />
          <h4>Art Curation</h4>
        </div>
        <div>
          <h3>Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong. Through every festival, every performance, and every gathering, we help stories find their stage and their people. V curates:</h3>
          <ul>
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </ul>
        </div>
      </div>
      <div id='explore'>
        <button>Explore More</button>
        <img src={arrow} alt="explore" />
      </div>
      <img className='xop i1' src={one} alt="art" />
      <img className='xop i2' src={two} alt="art" />
      <img className='xop i4' src={four} alt="art" />
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

import mandala from '../assets/Frame 33.svg'
import stroke from '../assets/Vector 5.svg'
import taped from '../assets/taped.png'
import five from '../assets/Branding Vector 01.svg'
import six from '../assets/Branding Vector 03.svg'
import seven from '../assets/Branding Vector 04.svg'
import branding from '../assets/branding.png'
import { Link } from 'react-router-dom'

export default function Branding() {
  return (
    <div className='page-four'>
      <Link to={'/'}><button className='webview'>Go Back</button></Link>
      <div className='stroked-title'>
        <h2>A brand is a voice, and a product is a souvenir." - Lisa Gansky</h2>
        <img id='stroke' src={stroke} alt="stroke" />
      </div>
      <div className='carousel artcurator'>
        <div id='art' className='frame'>
          <img id='tape' height={100} src={taped} alt="" />
          <img className='image-carousel' src={branding} alt="" />
          <h4>Branding</h4>
        </div>
        <div>
          <h3>A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust. We shape brands that people remember, return to, and fall in love with.</h3>
          <ul>
            <li>Branding & Communications</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </ul>
        </div>
      </div>
      <div id='explore'>
        <button>Explore More</button>
      </div>
      <img id='mandala-border' src={mandala} alt="art" />
      <img className='xop i1' src={five} alt="art" />
      <img className='xop i2' src={six} alt="art" />
      <img className='xop i4' src={seven} alt="art" />
    </div>
  )
}

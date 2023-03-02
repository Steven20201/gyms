import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Value" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond /> } title="Value"></SectionHead>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam explicabo, vel error distinctio facere, unde deserunt in quo at cumque voluptatibus? Atque rem quisquam, vero fugit incidunt consequuntur quibusdam.</p>

                <div className="values__wrapper">
                    {
                        values.map(({id,icon,title,desc})=>{
                            return <Card className="values__value" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
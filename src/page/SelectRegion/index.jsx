import RegionButton from '../../components/RegionButton'
import './index.css'
import { Region } from '../../data/data'
import Accordion from '../../components/AccordionList'


function SelectRegion() {

  return (
    <div className="container">
        <div className="row select-region">
          {Region.map((item) => (
            <>
              <Accordion regionName={item.name}
              villageName={item.village}
              />
            </>

          ))}
        </div>
    </div>
  )
}

export default SelectRegion
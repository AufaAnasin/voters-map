import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.css'
import logoRegion from '../img/logo-1.png'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function RegionButton({villageName}) {
    const [data, setData] = useState()
    const navigate = useNavigate()

    const redirectTo = () => {
        navigate()
    }
  return (
    <>{
        villageName.map((item) => (
            <div className="card region">
            <div className="container-fluid">
                <div className="row identity-row">
                    <div className="col identitycol">
                        <div className="identity">
                            {/* <img className="region-logo" src={logoRegion} alt="region-logo" /> */}
                            {/* require name from api */}
                            <p className="region-name">{item.name}</p>
                        </div>
                    </div>
                    <div className="col identitycol">
                        {/* require id later */}
                        <button type="button" onClick={redirectTo} className="next-button">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        ))
    }
    </>
  )
}

export default RegionButton
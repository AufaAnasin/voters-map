import React from 'react'
import { Accordion } from 'react-bootstrap'
import RegionButton from '../RegionButton'

function AccordionList({regionName, villageName}) {
  return (
    <>
    <Accordion defaultActiveKey="0" style={{marginBottom: "16px"}}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{regionName}</Accordion.Header>
        <Accordion.Body>
          <RegionButton villageName={villageName}/>
        </Accordion.Body>
      </Accordion.Item> 
    </Accordion>

    
    </>
  )
}

export default AccordionList
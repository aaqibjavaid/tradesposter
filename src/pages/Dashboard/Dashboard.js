import React from 'react'
import Section1 from '../../sections/Dashboard/Section1'
import Heading from '../../components/common/Typography/Heading'

const Dashboard = () => {
  return (
    <>
    <div className="md:ml-[8%]">
      <Heading variant={"h4"}>
        Hi, <span>Jozeph J</span>
      </Heading>
      <div className="mx-1 mt-[93px]">
        <Section1/>
      </div>
    </div>
  </>
  )
}

export default Dashboard
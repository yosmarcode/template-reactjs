import { AiFillPieChart } from 'react-icons/ai'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

export const searchIconMenu = (nameIcon: string) => {
  if (nameIcon === 'DocumentEnviadoIcon') {
    return <AiFillPieChart />
  }
  if (nameIcon === 'SourceIcon') {
    return <BsFillArrowRightSquareFill />
  }

  return <BsFillArrowRightSquareFill />
}

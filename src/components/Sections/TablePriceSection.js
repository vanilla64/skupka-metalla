import React, { useContext } from 'react'
import MetalGroups from "../MetalGroups"
import TableMetal from "../TableMetal"
import BlackMetalTable from "../tables/BlackMetalTable"
import CuprumAndBrass from "../tables/CuprumAndBrass"
import AluminumTable from "../tables/AluminumTable"
import StainlessSteelTable from "../tables/StainlessSteelTable"
import PlumbumTable from "../tables/PlumbumTable"
import CableTable from "../tables/CableTable"
import BatteryTable from "../tables/BatteryTable"
import OtherTable from "../tables/OtherTable"
import AppContext from "../../contexts/AppContext"

function TablePriceSection() {
  const { metalGroup } = useContext(AppContext)

  return (
    <>
      <MetalGroups />

      <div className="container">
        <TableMetal>
          { metalGroup === 'чёрный металл' && <BlackMetalTable /> }
          { metalGroup === 'медно-латунная группа' && <CuprumAndBrass /> }
          { metalGroup === 'алюминиевая группа' && <AluminumTable /> }
          { metalGroup === 'нержавеющая сталь' && <StainlessSteelTable /> }
          { metalGroup === 'свинцово-оловянная группа' && <PlumbumTable /> }
          { metalGroup === 'лом кабеля' && <CableTable /> }
          { metalGroup === 'аккумуляторы' && <BatteryTable /> }
          { metalGroup === 'прочее' && <OtherTable /> }
        </TableMetal>
      </div>
    </>
  )
}

export default TablePriceSection

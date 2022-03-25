import React from 'react'

function TableRow(
  {
    img,
    title,
    priseOpt,
    priceRozn,
    weight = ' руб/кг',
    requestPrice = false,
    bgGrey
  }
  ) {
  return (
    <tr style={bgGrey ? { background: '#f2f2f2' } : { background: "transparent" }}>
      <th>
        <div>
          <img src={img} alt="Metal img"/>
        </div>
      </th>
      <th>{ title }</th>
      <th>
        { requestPrice && <p>Цена по запросу</p> }
        { !requestPrice && <p>{ priseOpt + weight + ' оптом' }</p> }
        { !requestPrice && <p>{ priceRozn + weight + ' в розницу' }</p> }
      </th>
    </tr>
  )
}

export default TableRow

import React from 'react'

function TableRow({ img, title, priseOpt, priceRozn, bgGrey }) {
  return (
    <tr style={bgGrey ? { background: '#f2f2f2' } : { background: "transparent" }}>
      <th>
        <div>
          <img src={img} alt="Metal img"/>
        </div>
      </th>
      <th>{ title }</th>
      <th>
        <p>{ priseOpt + 'кг оптом' }</p>
        <p>{ priceRozn + 'кг в розницу' }</p>
      </th>
    </tr>
  )
}

export default TableRow

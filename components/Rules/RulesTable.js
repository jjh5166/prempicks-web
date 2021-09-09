import React from 'react'

import { RulesTableEl } from './styled'

export default function RulesTable() {
  return (
    <RulesTableEl>
      <thead>
        <tr>
          <th></th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Win</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Loss</td>
          <td>-3</td>
        </tr>
        <tr>
          <td>Draw</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Clean Sheet Win</td>
          <td>1</td>
        </tr>
        <tr>
          <td>GD Factor</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Top 6 Loss</td>
          <td>-1</td>
        </tr>
        <tr>
          <td>Beat a Top Six team</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Newly Promoted Win</td>
          <td>1</td>
        </tr>
      </tbody>
    </RulesTableEl>
  )
}

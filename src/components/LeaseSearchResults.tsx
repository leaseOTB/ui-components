import styled from 'styled-components'
import React, { FunctionComponent, useEffect } from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'

import PropTypes, { InferProps } from "prop-types"


type SearchProps = {
  data: Array<Object>
}

const LeaseSearchResults: FunctionComponent<SearchProps> = ({data}) => {
  return (
    <div>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Street Address</TableCell>
            <TableCell>Contract Address</TableCell>
            <TableCell>Rent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.address}>
              <TableCell component='h6' scope='row'>
                {row.address}
              </TableCell>
              <TableCell component='h6' scope='row'>
                {row.contract}
              </TableCell>
              <TableCell component='h6' scope='row'>
                {row.rent}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </div>
  )
}

// ; is necessary at the end of export default for components using propTypes
export default LeaseSearchResults;
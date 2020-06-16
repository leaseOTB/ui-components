import React, { FunctionComponent } from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

type SearchProps = {
  data: Array<Object>;
};

const LeaseSearchResults: FunctionComponent<SearchProps> = ({ data }) => {
  return (
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
            <TableCell component="h6" scope="row">
              {row.address}
            </TableCell>
            <TableCell component="h6" scope="row">
              {row.contract}
            </TableCell>
            <TableCell component="h6" scope="row">
              {row.rent}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default LeaseSearchResults;
// ; is necessary at the end of export default for components using propTypes

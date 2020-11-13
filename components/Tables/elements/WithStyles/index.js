import styled from 'styled-components';

import { device } from '../../../../constants';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';

export const StyledTableContainer = styled(TableContainer)`
  max-height: 75vh;
  width: 90% !important;
  @media ${device.tablet} {
    width: 80% !important;
  }
`;

export const TableSpacer = styled(TableCell)`
  width:100%;
`;

export const StickyCell = styled(TableCell)`
  position: -webkit-sticky !important;
  position: sticky !important;
  background-color: #fff;
  left: ${({ stickyleft }) => stickyleft ? stickyleft : 0};
`;
export const StickyHeaderCell = styled(StickyCell)`
  background-color: #fafafa !important;
  z-index: 3 !important;
`;
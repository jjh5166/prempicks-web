import styled from 'styled-components'
import TableContainer from '@material-ui/core/TableContainer'
import TableCell from '@material-ui/core/TableCell'

import { device } from 'constants/index'

export const StyledTableContainer = styled(TableContainer)`
  max-height: 75vh;
  width: 90% !important;
  @media ${device.tablet} {
    width: 80% !important;
  }
`

export const TableSpacer = styled(TableCell)`
  width: 100%;
`
export const NoWrapCell = styled(TableCell)`
  white-space: nowrap;
`
const StickyCell = styled(TableCell)`
  position: -webkit-sticky !important;
  position: sticky !important;
  left: ${({ stickyleft }) => (stickyleft ? stickyleft : 0)};
`
export const StickyTd = styled(StickyCell)`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`
export const StickyHeaderCell = styled(StickyCell)`
  z-index: 3 !important;
`

export const BoldingSpan = styled.span`
  white-space: nowrap;
  font-weight: ${({ isUser }) => (isUser ? '900' : 'unset')};
`

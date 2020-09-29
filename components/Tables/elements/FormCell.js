import TableCell from '@material-ui/core/TableCell';

import { FormItem, FormResults } from './styled';

const FormCell = ({ form }) => {
  const formArray = form.split(',');
  return (
    <TableCell>
      <FormResults>
        {formArray.map((r, i) =>
          <FormItem key={i} result={r} />
        )}
      </FormResults>
    </TableCell>
  );
};

export default FormCell;
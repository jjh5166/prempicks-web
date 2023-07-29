import { useField } from 'formik'
import { TextField } from '@material-ui/core'

const TxtField = ({ labelName = '', isPassword = false, ...props }) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ''
    const password = isPassword ? 'password' : ''

    return (
        <TextField
            {...field}
            helperText={errorText}
            error={!!errorText}
            label={labelName}
            InputLabelProps={{ shrink: true }}
            type={password}
            autoComplete="on"
            {...props}
        />
    )
}

export default TxtField

import ForgotPwordLink from './ForgotPassword'
import HaveAcctLoginLink from './HaveAccountLogin'
import NoAccountSignUpLink from './NoAccountSignUp'

export default function FormLinks({ formType }) {
    switch (formType) {
        case 'Login':
            return (
                <>
                    <ForgotPwordLink />
                    <br />
                    <NoAccountSignUpLink />
                </>
            )
        case 'Sign Up':
            return <HaveAcctLoginLink />
        default:
            return null
    }
}

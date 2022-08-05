import Link from 'next/link'

export default function NoAccountSignUpLink() {
    return (
        <Link href="/user/signup">
            <a>Don't have an account yet? Sign Up.</a>
        </Link>
    )
}

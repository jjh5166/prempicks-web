import Link from 'next/link'

export default function ForgotPwordLink() {
    return (
        <Link href="/user/reset_password">
            <a>Forgot Password?</a>
        </Link>
    )
}

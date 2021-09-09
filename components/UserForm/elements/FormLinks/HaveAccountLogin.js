import Link from 'next/link'

export default function HaveAcctLoginLink() {
  return (
    <Link href='/user/login'>
      <a>Already have an account? Login.</a>
    </Link>
  )
}

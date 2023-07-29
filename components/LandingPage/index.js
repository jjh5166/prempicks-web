import Link from 'next/link'

import { LandingButton } from '../Buttons'
import { BigTitle, LandingButtonsContainer } from './styled'

export default function Home() {
    return (
        <>
            <BigTitle>Prem Picks</BigTitle>
            <LandingButtonsContainer>
                <Link href="/user/login">
                    <LandingButton>Log In</LandingButton>
                </Link>
                {/* <Link href="/guest/welcome">
          <LandingButton className="btn-secondary">Guest</LandingButton>
        </Link> */}
                <Link href="/user/signup">
                    <LandingButton className="btn-success">
                        Sign Up
                    </LandingButton>
                </Link>
            </LandingButtonsContainer>
        </>
    )
}

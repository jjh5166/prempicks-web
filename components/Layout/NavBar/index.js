import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faGavel,
    faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'

import { useGuestUser } from 'redux/hooks'
import { UserLogout, GuestLogout } from 'components/Buttons'
import { StyledNavBar, StyledBrand } from './styled'

const NavBarLink = ({ href, onClick, children }) => (
    <Link href={href} passHref>
        <Nav.Link onClick={onClick}>{children}</Nav.Link>
    </Link>
)
const NavBar = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const navRef = useRef()
    const { isGuest } = useGuestUser()
    const handleClickOutside = e => {
        if (navRef.current.contains(e.target)) {
            return
        }
        setIsExpanded(false)
    }
    const handleNavLinkClick = () => {
        setIsExpanded(false)
    }
    useEffect(() => {
        if (isExpanded) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isExpanded])
    return (
        <StyledNavBar
            expand="md"
            className="justify-content-between navbar-dark"
            ref={navRef}
            expanded={isExpanded}
        >
            <Container fluid>
                <StyledBrand
                    href="/"
                    className="d-block text-center order-0 order-md-1"
                >
                    PremPicks
                </StyledBrand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={async () => {
                        setIsExpanded(!isExpanded)
                    }}
                />
                <Navbar.Collapse className="collapseNav w-50 order-1 order-md-0">
                    <Nav>
                        <NavBarLink
                            onClick={handleNavLinkClick}
                            href={isGuest ? '/guest/standings' : '/standings'}
                        >
                            Standings
                        </NavBarLink>
                        <NavBarLink
                            onClick={handleNavLinkClick}
                            href={isGuest ? '/guest/mypicks' : '/mypicks'}
                        >
                            My Picks
                        </NavBarLink>
                        <NavBarLink
                            onClick={handleNavLinkClick}
                            href="/epl/table"
                        >
                            EPL Table
                        </NavBarLink>
                        <NavBarLink
                            onClick={handleNavLinkClick}
                            href="/epl/schedule"
                        >
                            <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
                        </NavBarLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="collapseNav w-50 order-2">
                    <Nav className="ml-auto">
                        <NavBarLink onClick={handleNavLinkClick} href="/rules">
                            <FontAwesomeIcon icon={faGavel} size="2x" />
                        </NavBarLink>

                        {isGuest ? (
                            <GuestLogout />
                        ) : (
                            <>
                                <NavBarLink
                                    onClick={handleNavLinkClick}
                                    href="/user/account"
                                >
                                    <FontAwesomeIcon icon={faUser} size="2x" />
                                </NavBarLink>
                                <UserLogout />
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavBar>
    )
}

export default NavBar

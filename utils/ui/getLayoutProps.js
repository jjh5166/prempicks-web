export function getLayoutProps(pathname) {
    const hideNav = [
        '/',
        '/user/login',
        '/user/opt-in',
        '/user/signup',
        '/guest/welcome',
        '/user/reset_password',
    ].includes(pathname)
    const getTitle = pathname => {
        switch (pathname) {
            case '/mypicks':
            case '/guest/mypicks':
                return 'My Picks'
            case '/guest/standings':
            case '/standings':
                return 'Standings'
            case '/user/account':
                return 'Update Account'
            case '/user/login':
                return 'Login'
            case '/user/opt-in':
                return 'Opt In'
            case '/user/reset_password':
                return 'Reset Password'
            case '/user/signup':
                return 'Sign Up'
            default:
                return 'PremPicks'
        }
    }
    const title = getTitle(pathname)
    return {
        hideNav,
        title,
    }
}

export const routes = []

routes.push({
    to: '/',
    name: 'Home',
    private: false
})
routes.push({
    to: '/blog',
    name: 'Blog',
    private: false
})
routes.push({
    to: '/profile',
    name: 'Profile',
    private: true
})
routes.push({
    to: '/login',
    name: 'Login',
    private: false
})
routes.push({
    to: '/logout',
    name: 'Logout',
    private: true
})
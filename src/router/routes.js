const Home = () => import('@/pages/Home')
const ComponentPage = () => import('@/pages/Component')


const ButtonComponent = () => import('@/pages/Button')
const ListComponent = () => import('@/pages/List')
const InputComponent = () => import('@/pages/Input')
const AvatarComponent = () => import('@/pages/Avatar')
const TextComponent = () => import('@/pages/Text')

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        name: 'button-component',
        path: '/components/button',
        component: ComponentPage,
        meta: {
            component: ButtonComponent,
            name: 'Buttons'
        }
    },
    {
        name: 'list-component',
        path: '/components/list',
        component: ComponentPage,
        meta: {
            component: ListComponent,
            name: 'Lists'
        }
    },
    {
        name: 'input-component',
        path: '/components/input',
        component: ComponentPage,
        meta: {
            component: InputComponent,
            name: 'Text Fields'
        }
    },
    {
        name: 'avatar-component',
        path: '/components/avatar',
        component: ComponentPage,
        meta: {
            component: AvatarComponent,
            name: 'Avatars'
        }
    },
    {
        name: 'text-component',
        path: '/components/text',
        component: ComponentPage,
        meta: {
            component: TextComponent,
            name: 'Typography'
        }
    },

]

export default routes
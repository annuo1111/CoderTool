import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import codeGod from './components/code-god.vue'

export const routes = [
    //{ path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    //{ path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    //{ path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' },
    { path: '/', component: codeGod, display: '码神工具', style: 'glyphicon glyphicon-th-list' }
]

import Form from './components/Form.vue';
import StakUp from './components/StakUp.vue';
import Start from './components/Start.vue';
import Error from './components/Error.vue';

const routes = [
    { path: '/', component: Start, name: 'start', props: true },
    { path: '/stakup', name: 'stakup', component: StakUp, props: true },
    { path: '/form', name: 'form', component: Form, props: true },
    { path: '*', component: Error },
];

export default routes;
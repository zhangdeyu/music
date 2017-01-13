const routes = [
    {
        path: '',
        component: resolve => {
            require.ensure([], () => resolve(require('./vue/Index.vue')), 'index');
        }
    },
    {
        path: '/index',
        component: resolve => {
            require.ensure([], () => resolve(require('./vue/Index.vue')), 'index');
        }
    },
    {
        path: '/artist',
        component: resolve => {
            require.ensure([], () => resolve(require('./vue/Artist.vue')), 'artist');
        }
    },
    {
        path: '/song',
        component: resolve => {
            require.ensure([], () => resolve(require('./vue/Song.vue')), 'song');
        }
    },
    {
        path: '/search',
        component: resolve => {
            require.ensure([], () => resolve(require('./vue/Search.vue')), 'search');
        }
    }
];

export default routes;
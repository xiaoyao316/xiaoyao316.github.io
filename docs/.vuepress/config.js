module.exports = {
    title: '前端大户',
    description: '前端大户个人博客',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'Github', link: 'https://github.com/xiaoyao316' },
        ],
        sidebar: [
            {
                title: 'JavaScript',// 必要的
                collapsable: true,  // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/js/promise',
                    '/js/throttle',
                    '/js/currying',
                    '/js/call-apply-bind',
                    '/js/new',
                    '/js/instanceof',
                    '/js/proto',
                    '/js/eventloop'
                ]
            },
            {
                title: '设计模式',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/designMode/singleton',
                    '/designMode/strategy',
                    '/designMode/proxy',
                    '/designMode/iterator',
                    '/designMode/observer',
                    '/designMode/command',
                    '/designMode/composite',
                    '/designMode/template',
                    '/designMode/flyweight',
                    '/designMode/chainOfResponsibility',
                    '/designMode/mediator',
                    '/designMode/decorator',
                    '/designMode/state',
                    '/designMode/adapter'
                ]
            },
            {
                title: '源码分析',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Element UI',
                        path: '/sourceCode/element',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/sourceCode/element/button',
                            '/sourceCode/element/alert',
                        ]
                    }
                ]
            },
            {
                title: '浏览器',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/browser/loadpage'
                ]
            },
            {
                title: '前端优化',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/optimize/webpack'
                ]
            },
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
    serviceWorker: true,
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/plugin-pwa'
    ]
}

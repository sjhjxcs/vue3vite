export const enterpriseCenter = [
    {
        path: '/enterpriseCenter',
        name: 'enterpriseCenter',
        meta: {
            title: "企业中心",
            icon: "Setting",
            permission: "300",
        },
        component: () => import("@/components/layout/keepAlive.vue"),
        children: [
            {
                path: '/enterpriseCenter/accountManage',
                name: 'accountManage',
                meta: {
                    title: "我的账户",
                    icon: "Setting",
                    permission: "310",
                },
                component: () => import("../views/enterpriseCenter/accountManage/index.vue")
            },
            {
                path: '/enterpriseCenter/invoiceManage',
                name: 'invoiceManage',
                meta: {
                    title: "发票管理",
                    icon: "Setting",
                    permission: "320",
                },
                component: () => import("../views/enterpriseCenter/invoiceManage/index.vue")
            },
            {
                path: '/enterpriseCenter/invoiceInformationManage',
                name: 'invoiceInformationManage',
                meta: {
                    title: "发票信息管理",
                    icon: "Setting",
                    permission: "340",
                },
                component: () => import("../views/enterpriseCenter/invoiceInformationManage/index.vue")
            },
            {
                path: '/enterpriseCenter/refundApplication',
                name: 'refundApplication',
                meta: {
                    title: "退款申请",
                    icon: "Setting",
                    permission: "330",
                },
                component: () => import("../views/enterpriseCenter/refundApplication/index.vue")
            },
            {
                path: '/enterpriseCenter/mine',
                name: 'mine',
                meta: {
                    title: "个人主页",
                    icon: "Setting",
                    permission: "350",
                    hideFlag:true,
                },
                component: () => import("../views/enterpriseCenter/mine/index.vue")
            },
        ]
    },
]

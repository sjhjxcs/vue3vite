//B端
export const jiankong = [
    {
        path: '',
        name: 'jiankong',
        meta: {
            title: "监控中心",
            icon: "Setting",
          //  permission: "200",   //暂时写200用于本地开发，上线需要删除
           permission: "400",
        },
        component: () => import("@/components/layout/keepAlive.vue"),
        children: [
            {
                path: '/jiankongctr',
                name: 'jiankongctr',
                meta: {
                    title: "监控管理",
                    icon: "Setting",
                //  permission: "200",   //暂时写200用于本地开发，上线需要删除
                    permission: "410",
                },
                component: () => import("../views/jiankong/jiankongctr.vue"),
            },
            {
                path: '/videoAddress',
                name: 'videoAddress',
                meta: {
                    title: "视频地址管理",
                    icon: "Setting",
                      //    permission: "200",   //暂时写200用于本地开发，上线需要删除
                    permission: "420",
                },
                component: () => import("../views/jiankong/videoAddress/index.vue"),
            },
        ]
    },
]
export const ToBvehicleAlarm = [
    {
        path: '/TobvehicleAlarm',
        name: 'TobvehicleAlarm',
        meta: {
            title: "车辆报警",
            icon: "Setting",
            permission: "430",
        },
        component: () => import("../views/vehicleAlarm/TobvehicleAlarm.vue"),
    },
]



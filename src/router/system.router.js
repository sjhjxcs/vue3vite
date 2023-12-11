export const systemRouter = [
  {
    path: '',
    name: 'systemManage',
    meta: {
      title: "设置管理",
      icon: "Setting",
      permission: "5",
    },
    component: () => import("@/components/layout/keepAlive.vue"),
    children: [
      {
        path: '/systemManage/roleManage',
        name: 'roleManage',
        meta: {
          title: "角色管理",
          icon: "Setting",
          permission: "5-1",
        },
        component: () => import("../views/systemManage/roleManage/index.vue")
      },
      {
        path: '/systemManage/userManage',
        name: 'userManage',
        meta: {
          title: "用户管理",
          icon: "User",
          permission: "5-2",
          childrenFlag:true
        },
        component: () => import("../views/systemManage/userManage/index.vue")
      },
      {
        path: '/systemManage/groupManage',
        name: 'groupManage',
        meta: {
          title: "组织机构管理",
          permission: "5-3",
          icon: "Operation"
        },
        component: () => import("../views/systemManage/groupManage/index.vue")
      }
    ]
  },
]

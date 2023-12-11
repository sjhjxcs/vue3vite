// 运营端
export const shareRouter = [
    {
        path: '',
        name: 'terminalOperation',
        meta: {
            title: "终端运营",
            icon: "Setting",
           // permission: "200",  //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("@/components/layout/keepAlive.vue"),
        children: [
            {
                path: '/terminalOperation/terminalMange',
                name: 'terminalMange',
                meta: {
                    title: "终端管理",
                    icon: "Setting",
                  //  permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/terminalOperation/terminalMange/index.vue")
            },
            {
                path: '/terminalOperation/serviceManage',
                name: 'serviceManage',
                meta: {
                    title: "终端服务管理",
                    icon: "Setting",
                  //  permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/terminalOperation/serviceManage/index.vue")
            },
            {
                path: '/terminalOperation/netTraAudit',
                name: 'netTraAudit',
                meta: {
                    title: "转网审核",
                    icon: "User",
                    childrenFlag: true,
                    // permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/terminalOperation/netTraAudit/index.vue")
            },
        ]
    },
    {
        path: '',
        name: 'financialManage',
        meta: {
            title: "财务管理",
            icon: "Setting",
         //    permission: "200",  //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("@/components/layout/keepAlive.vue"),
        children: [
            {
                path: '/financialManage/rechargeAudit',
                name: 'rechargeAudit',
                meta: {
                    title: "充值审核",
                    icon: "Setting",
                 //    permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/financialManage/rechargeAudit/index.vue")
            },
            {
                path: '/financialManage/accountBalance',
                name: 'accountBalance',
                meta: {
                    title: "账户余额",
                    icon: "User",
                 //    permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/financialManage/accountBalance/index.vue")
            },
            {
                path: '/financialManage/revenueExDetail',
                name: 'revenueExDetail',
                meta: {
                    title: "收支明细",
                    icon: "User",
                  //   permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/financialManage/revenueExDetail/index.vue")
            },
            {
                path: '/financialManage/refundReview',
                name: 'refundReview',
                meta: {
                    title: "退款审核",
                    icon: "User",
                   //  permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/financialManage/refundReview/index.vue")
            },
            {
                path: '/financialManage/invoiceApproval',
                name: 'invoiceApproval',
                meta: {
                    title: "发票审核",
                    icon: "User",
                  //   permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/financialManage/invoiceApproval/index.vue")
            },
        ]
    },
    {
        path: '',
        name: 'configurationManage',
        meta: {
            title: "配置管理",
            icon: "Setting",
            // permission: "200",  //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("@/components/layout/keepAlive.vue"),
        children: [
            {
                path: '/configurationManage/businessConfig',
                name: 'businessConfig',
                meta: {
                    title: "业务配置",
                    icon: "Setting",
                    // permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/configurationManage/businessConfig/index.vue")
            },
            {
                path: '/configurationManage/videopeizhi',
                name: 'videopeizhi',
                meta: {
                    title: "视频配置",
                    icon: "Setting",
                    // permission: "200",  //暂时写200用于本地开发，上线需要删除
                    // permission: "310",
                },
                component: () => import("../views/videomanagement/videopeizhi.vue"),
            },
        ]
    },
    {
        path: '/serviceProviderManage',
        name: 'serviceProviderManage',
        meta: {
            title: "服务商管理",
            icon: "Setting",
        },
        component: () => import("../views/serviceProviderManage/index.vue")
    },
    {
        path: '',
        name: 'valueAdded',
        meta: {
            title: "监控业务管理",
            icon: "Setting",
            //  permission: "200",   //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("@/components/layout/keepAlive.vue"),
        children: [
            {
                path: '/businessOperation',
                name: 'businessOperation',
                meta: {
                    title: "业务运营管理",
                    icon: "Log",
                    // permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/valueAdded/businessOperation/index.vue")
            },
            {
                path: '/valueAdded/videoAddressCtl',
                name: 'videoAddressCtl',
                meta: {
                    title: "视频地址管理",
                    icon: "Log",
                    //  permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/valueAdded/videoAddressCtl/index.vue")
            },
            // {
            //   path: '/configurationManage/businessConfig',
            //   name: 'businessConfig',
            //   meta: {
            //     title: "业务配置",
            //     icon: "Setting",
            //     // permission: "200",  //暂时写200用于本地开发，上线需要删除
            //   },
            //   component: () => import("../views/configurationManage/businessConfig/index.vue")
            // },
        ]
    },
    {
        path: '',
        name: 'regulatoryAssistant',
        meta: {
            title: "法规助手管理",
            icon: "Setting",
           // permission: "200",  //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("@/components/layout/keepAlive.vue"),
        children: [
            {
                path: '/regulatoryAssistant/securityAlarm',
                name: 'securityAlarm',
                meta: {
                    title: "主动安全报警",
                    icon: "Setting",
                  //  permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/regulatoryAssistant/securityAlarm/index.vue")
            },
            {
                path: '/regulatoryAssistant/riskInquiry',
                name: 'riskInquiry',
                meta: {
                    title: "风险事件查询",
                    icon: "Setting",
                 //   permission: "200",  //暂时写200用于本地开发，上线需要删除

                    // permission: "310",
                },
                component: () => import("../views/regulatoryAssistant/riskInquiry/index.vue"),
            },
            {
                path: '/regulatoryAssistant/realTimeMonitoring',
                name: 'realTimeMonitoring',
                meta: {
                    title: "实时监控",
                    icon: "Setting",
                   // permission: "200",  //暂时写200用于本地开发，上线需要删除
                    // permission: "310",
                },
                component: () => import("../views/regulatoryAssistant/video/realTimeMonitoring/index.vue"),
            },
            {
                path: '/regulatoryAssistant/Replay',
                name: 'Replay',
                meta: {
                    title: "视频回放",
                    icon: "Setting",
                    //   permission: "200",  //暂时写200用于本地开发，上线需要删除
                    // permission: "310",
                },
                component: () => import("../views/regulatoryAssistant/video/Replay/index.vue"),
            },
        ]
    },

    {
        path: '/qualityseeting',
        name: 'Qualityseeting',
        meta: {
            title: "质检配置",
            icon: "Setting",
            // permission: "200",  //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("../views/qualityseeting.vue"),
    },
    //V1.4 TTS语音
    {
        path: '',
        name: 'TTSVoice',
        meta: {
            title: "TTS语音",
            icon: "Setting",
          //  permission: "200",  //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("@/components/layout/keepAlive.vue"),
        children: [
            {
                path: '/TTSVoice/TTSVoiceManage',
                name: 'TTSVoiceManage',
                meta: {
                    title: "TTS语音管理",
                    icon: "Setting",
                 //   permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/TTSVoice/TTSVoiceManage/index.vue")
            },
            {
                path: '/TTSVoice/TTSSpeechManage',
                name: 'TTSSpeechManage',
                meta: {
                    title: "TTS话术管理",
                    icon: "Setting",
                   // permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/TTSVoice/TTSSpeechManage.vue"),
            },
            {
                path: '/TTSVoice/TTSSpeechLabelManage',
                name: 'TTSSpeechLabelManage',
                meta: {
                    title: "话术标签管理",
                    icon: "Setting",
                   // permission: "200",  //暂时写200用于本地开发，上线需要删除
                },
                component: () => import("../views/TTSVoice/TTSSpeechLabelManage.vue"),
            },
        ]
    },
    //V1.4 Yop车辆报警
    {
        path: '/yopvehiclealarm',
        name: 'Yopvehiclealarm',
        meta: {
            title: "车辆报警",
            icon: "Setting",
           // permission: "200",   //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("../views/vehicleAlarm/YopvehicleAlarm.vue"),
    },

    {
        path: '/monitoringScatter',
        name: 'monitoringScatter',
        meta: {
            title: "车辆监控",
            icon: "Setting",
           // permission: "200",  //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("../views/monitoring/scatter/index.vue"),

    },
    {
        path: '/monitoringScatter/info',
        name: 'monitoringScatterInfo',
        meta: {
            title: "车辆详情",
            icon: "Setting",
            hideFlag: true,
           // permission: "200",  //暂时写200用于本地开发，上线需要删除
        },
        component: () => import("../views/monitoring/scatter/info.vue")
    },
    {
      path: '/TTSVoice/info',
      name: 'TTSVoiceInfo',
      meta: {
          title: "语音下发详情",
          hideFlag:true,
         // permission: "200",  //暂时写200用于本地开发，上线需要删除
      },
      component: () => import("../views/TTSVoice/info.vue")
  },
]

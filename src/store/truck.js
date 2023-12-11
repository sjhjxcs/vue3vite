import { defineStore } from "pinia";
export const trunkStore = defineStore({
    id: 'trunkState', // id必填，且需要唯一
    state: () => ({
        status: 0,//0暂停   1播放  播放状态 0.待开始  1.待暂停或停止
        points: [],//所有轨迹点集合
        index: 0,//轨迹点每个index
    }),
    getters: {
        // 通过 state 获取状态
        getState: (state) => state.status,
       // getPoints: (state) => state.points,
        getIndex: (state) => state.index,
        // 通过 this 获取状态（注意this指向）
        getPoints(){
            return this.points
        },
        getDRoutes() {
            return this.points
        }
    },
    actions: {
        getList () {

        },
    }
})

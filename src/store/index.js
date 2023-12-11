// import { getGroupDictApi } from "@/api/system/group_api.js";
import defineStore  from "pinia";
export const basicStore = defineStore({
  id: 'basicState', // id必填，且需要唯一
  state: () => ({
    operationTypeList: [],
    name: "1"
  }),
  getters: {

  },
  actions: {
    getList () {
      // getGroupDictApi({ parentGroupId: 0 }).then(({ data }) => {
      //   this.operationTypeList = data
      // })
    },
  }
})

export function headerTypeFilter(res) {
  let flag = Number(res)
  let text = "-"
  switch (flag) {
    case 1:
      text = "企业";
      break;
    case 2:
      text = "个人";
      break;
    case 3:
      text = "组织";
      break;
  }
  return text
}
export function colorFilter (res) {
  let flag = Number(res)
  let text = "-"
  switch (flag) {
    case 1:
      text = "蓝色";
      break;
    case 2:
      text = "黄色";
      break;
    case 3:
      text = "绿色";
      break;
  }
  return text
}
export function orderStatusFilter (res) {
  let flag = Number(res)
  let text = "-"
  switch (flag) {
    case 1:
      text = "未缴费";
      break;
    case 2:
      text = "已缴费";
      break;
    case 3:
      text = "已到期";
      break;
    case 4:
      text = "已退费";
      break;
    case 5:
      text = "退费中";
      break;
  }
  return text
}
export function terminalStatusFilter (res) {
  let flag = Number(res)
  let text = "-"
  switch (flag) {
    case 1:
      text = "未激活";
      break;
    case 2:
      text = "已激活";
      break;
  }
  return text
}
export function dateFilter (res) {
  let startDate = res.validDateStart ? res.validDateStart : "-"
  let endDate = res.validDateEnd ? res.validDateEnd : "-"
  let text = startDate + "——" + endDate
  return text
}
export function toDecimal2 (num) {
  let numFloat = parseFloat(num);
  if (isNaN(numFloat)) {
    return "0.00";
  }
  let f = Math.round(num*100)/100;
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}
export function payTypeFilter (res) {
  // 类型[1.充值,2.缴费,3.续费,4.退款]
  let flag = Number(res)
  let text = "-"
  switch (flag) {
    case 2:
      text = "在线充值";
      break;
    case 3:
      text = "车辆入网";
      break;
    case 1:
      text = "车辆续费";
      break;
    case 4:
      text = "退款";
      break;
  }
  return text
}
export function videoTypeFilter (res) {
  // 类型 1车辆续费 2音视频 3车辆入网 4盲点监测 5驾驶行为'
  let flag = Number(res)
  let text = "-"
  switch (flag) {
    case 2:
      text = "监控业务开通";
      break;
    case 3:
      text = "车辆入网";
      break;
    case 1:
      text = "车辆续费";
      break;
    case 4:
      text = "监控业务开通";
      break;
    case 5:
      text = "监控业务开通";
      break;
    case 6:
      text = "监控业务退款";
      break;
  }
  return text
} 
export function invoiceFlagFilter (res) {
  // 发票状态 0 待开票 1 待审核 2 已开票 3 开票中 4 已邮寄 5 已驳回
  let flag = Number(res)
  let text = "-"
  switch (flag) {
    case 1:
      text = "待审核";
      break;
    case 2:
      text = "已开票";
      break;
    case 3:
      text = "开票中";
      break;
    case 4:
      text = "已邮寄";
      break;
    case 5:
      text = "已驳回";
      break;
  }
  return text
}

export function businesstype (res) {
  // 业务类型 1 音视频对接服务 2 盲点监(含音视频) 3 开票中 4 已邮寄 5 已驳回
  let flag = Number(res)
  let text = "-"
  switch (flag) {
    case 1:
      text = "音视频对接服务";
      break;
    case 2:
      text = "盲点监(含音视频)";
      break;
    case 3:
      text = "盲点监(含音视频)";
      break;
  }
  return text
}

// 终端在线
export function terminalOnlineStatus (res) {
  let text = "-"
  switch (res) {
    case 'ONLINE':
      text = "在线";
      break;
    case 'OFFLINE':
      text = "下线";
      break;
  }
  return text
}

export function taskStatus (res) {
  let text = "-"
  switch (res) {
    case 0:
      text = "下发中";
      break;
    case 1:
      text = "下发完成";
      break;
  }
  return text
}
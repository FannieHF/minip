/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
var host = 'http://103.211.47.132:9091'
// var host = 'http://10.192.6.17:9090'
// var host = 'https://opscenter.shukun.net'
var api = 'api/v1'

// 下面的地址配合云端 Demo 工作
export const service = {

  // 登录
  // login: `${host}/wx/mp/user/actions/login`,
  wxLogin: `${host}/${api}/minip/actions/login`,
  workwxLogin: `${host}/${api}/comp/actions/login`,

  // 单个目标详情
  getGoal: `${host}/${api}/goals/`,
  // 增加
  addGoal: `${host}/${api}/goals`,
  // 修改
  editGoal: `${host}/${api}/goals/`,
  // 修改状态
  changeStatus: `${host}/${api}/goals/`,

  searchGoal: `${host}/${api}/goals/actions/search`,

  // getAllDept: `${host}/${api}/departments`,
  // getDeptMember: `${host}/${api}/departments/`,
  getAllMembers: `${host}/${api}/users/actions/allmembers`,
  getAllLeaders: `${host}/${api}/users/actions/leaders`,

  // 评价
  getEvaluation: `${host}/${api}/goals/`, // goalEvalutaion

  // 完成度描述
  goalProgressDesc: `${host}/${api}/goals/`, // goalProgressDesc.

  // 主域
  host
}

export default {
  service
}

// 请求接口
let API_BASE_URl = ''

//  项目环境
let APP_ENV_TYPE = __wxConfig.envVersion

if (APP_ENV_TYPE == 'develop') {
  // 开发版
  API_BASE_URl = 'https://mock.yonyoucloud.com/mock/16185'
} else if (APP_ENV_TYPE == 'trial') {
  // 体验版
  API_BASE_URl = 'https://mock.yonyoucloud.com/mock/16185'
} else if (APP_ENV_TYPE == 'release') {
  // 正式版
  API_BASE_URl = 'https://mock.yonyoucloud.com/mock/16185'
}

const ENV_CONFIG = {
  API_BASE_URl,
  APP_ENV_TYPE
}

export default ENV_CONFIG
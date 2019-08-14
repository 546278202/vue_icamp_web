// 配置线上环境
// baseUrl:域名地址
//routerMode:路由模式
//baseImgPath:图片地址
let baseUrl="";
let routerMode="hash";
let baseImgPath;

if(process.env.NODE_ENV=='development'){
  baseUrl="";
  baseImgPath="/img/";
}else{
  baseUrl="https://test.i-camp.com.cn/";
  baseImgPath="/img/";
}


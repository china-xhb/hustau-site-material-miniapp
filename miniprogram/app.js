//app.js
const ContactEmail = "bangongshi_hustag@163.com";
const AppFullName = "HUST社指36号楼场地及物资借用"

App({
  globalData: {
    rule: `\n 1. 请至少提前两天准备好活动策划。在${AppFullName}小程序上申请借用教室，并将策划电子版以“36号楼教室借用+协会名称+日期”的方式命名发送至办公室公邮${ContactEmail}。审批情况可在小程序上查询，审批通过方可使用;

    2.使用教室的当天须将手机上教室借用确认单给阿姨查看，并在二楼值班处在36号楼教室借用登记表上进行借用登记;
    
    3.建议申请前先查询教室是否空闲，查询方式: ${AppFullName}小程序——教室借用查询;
    
    4.房间钥匙请找阿姨取用，教室使用结束后请将门锁好，把钥匙交给阿姨并在36号楼教室借用登记表上签离;
    
    5.普通教室须有活动负责人陪同使用并保证器材设备完好，活动结束后请将教室清理干净、桌椅归位，如发现教室卫生及器材损坏问题将影响未来二次借用，谢谢配合;
    
    6.如有任何疑问，请联系36号楼教室借用负责人董雨奇:13050977519。
    `,
    status: 0,
    appFullName: AppFullName,
    contactEmail: ContactEmail
  },
  globalForm: {},
  onLaunch() {
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
      wx.showToast({
        title: "请升级微信以使用小程序",
        icon: "none",
        duration: 60000
      });
    } else {
      wx.cloud.init({
        traceUser: true,
        // env: "cloud-miniapp-96177b"
        env: "release-824dd3"
      });
    }
  },
  /**
   * _toDateStr()
   * 将Date对象转为"Y-m-d"字符串.
   * @param {Date} date 需要转换的日期对象
   * @param {Boolean} leadingZeros=false 是否有前导0
   * @return {String} "Y-m-d"格式字符串
   */
  _toDateStr(date, leadingZeros = false) {
    const z = function (n, l) {
      n = n.toString();
      while (n.length < l) n = "0" + n;
      return n;
    }
    let str = "";
    if (date instanceof Date) {
      str += date.getFullYear() + "-";
      if (leadingZeros) {
        str += z(date.getMonth() + 1, 2) + "-" + z(date.getDate(), 2);
      } else {
        str += (date.getMonth() + 1) + "-" + date.getDate();
      }
    }
    return str;
  }
})
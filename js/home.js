let config = {
    baseURL: 'https://apis.luboedu.cn/'
}

/**
 * 是否支付成功
 *
 * @date 2019/7/1
 * course_id:  1--->9.9 2--->8.9 3--->49  4--->心理9.9   5---》9元&1元在线支付项目
 * @author nan
 */
function userIsPay(phone, course_id) {
    return $.ajax({
        type: "get",
        url: config.baseURL + 'Marketingcourse/Nineyuan/isPay?course_id=' + course_id + '&phone=15201417937',
        success: function (data, textStatus) {
            return data
        },
        error: function () {
            console.log("userIsPay error");
            //请求出错处理
        }
    });
}

/**
 * 获取验证码
 * GET  参数 phone
 *
 * @date 2019/6/21
 * @author nan
 */
function getBindVerCode(phone, flag) {
    return $.ajax({
        type: "get",
        url: config.baseURL + 'Marketingcourse/Nineyuan/getBindVerCode?phone=' + phone + '&course_id=5&status=' + flag,
        success: function (data, textStatus) {
            return data
        },
        error: function () {
            console.log("userIsPay error");
            //请求出错处理
        }
    });
}


function getPhoneDataNineNew(phone, seaName) {
    return $.ajax({
        type: "get",
        url: 'https://apis.luboedu.cn/1.0/Onlinequestion/tanglang?phone='
            + phone + '&courseName=愈见&buName=信息流事业部(合作)&' +
            'sourceType=信息流事业部合作_心谕者社群军团_心理训练营_今日头条_信息流_asd91new_全国' +
            '&seaName=' + seaName + '&adName=今日头条',
        success: function (data, textStatus) {
            return data
        },
        error: function () {
            console.log("userIsPay error");
            //请求出错处理
        }
    });
}

/**
 * 访问ip地址
 * @returns {AxiosPromise}
 */
function getIP() {
    return $.ajax({
        type: "get",
        url: 'https://user.luboedu.cn/athena/oc/rest/getIP',
        success: function (data, textStatus) {
            return data
        },
        error: function () {
            console.log("userIsPay error");
            //请求出错处理
        }
    });
}

/**
 * 登录/注册
 * 参数  'phone', 'vercode'   方式get
 *
 * @date 2019/6/21
 * @author nan
 */
function loginPhone(phone, code, course_id) {
    return $.ajax({
        type: "get",
        url: config.baseURL + 'Marketingcourse/Nineyuan/bindPhone?course_id=' + course_id + '&phone=' + phone + '&vercode=' + code,
        success: function (data, textStatus) {
            return data
        },
        error: function () {
            console.log("userIsPay error");
            //请求出错处理
        }
    });
}

/**
 * 创建阿里订单
 * GET 是网页端    POST是手机端
 *
 * @date 2019/6/26
 * @author nan
 * @param dataP'price', 'out_trade_no', 'subject', 'quitUrl'
 */
function createAliPay(dataP) {
    console.log('nan createAliPay', dataP)
    return $.ajax({
        type: "post",
        url: config.baseURL + 'Marketingcourse/Nineyuan/createAliPay2',
        data: dataP,
        success: function (data, textStatus) {
            return data
        },
        error: function () {
            console.log("userIsPay error");
            //请求出错处理
        }
    });
}

/**
 * 创建微信支付
 *
 * @date 2019/9/7
 * @author nan
 */
function createWXPay(dataP) {
    return $.ajax({
        type: "post",
        url: config.baseURL + 'Marketingcourse/Nineyuan/wxPay3',
        data: dataP,
        success: function (data, textStatus) {
            return data
        },
        error: function () {
            console.log("userIsPay error");
            //请求出错处理
        }
    });
}



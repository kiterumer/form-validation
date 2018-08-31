// 获取需要验证的元素，验证描述文本，单选框，提交按钮
var userAccount=document.querySelector("#userAccount"),
    userPass=document.querySelector("#userPass"),
    userPsss_=document.querySelector("#userPass_"),
    userName=document.querySelector("#userName"),
    information=document.querySelector("#information"),
    email=document.querySelector("#email"),
    telephone=document.querySelector("#telephone"),
    // 通过 document.querySelectorAll() 获得的为一个类数组，长度为7，下标从0开始
    descriptions=document.querySelectorAll(".description"),
    choose=document.querySelector("#choose"),
    btn=document.querySelector(".handup");
    // 每一验证项设置一个标识，验证通过则为true，不通过则为false，初始值位false
var test1 = false, test2 = false, test3 = false, test4 = false, 
    test5 = false, test6 = false, test7 = false;  

    // 用户名验证
    // 输入框被激活时，底部显示描述文本，颜色为绿色，下同
    userAccount.onfocus = function () {
        descriptions[0].innerHTML = "6-30位字母、数字或'_'";
        descriptions[0].style.color = "#00b8a9";
    };
    // 输入框失去焦点，开始验证，第一部判断输入框内容是否为空，进一步判断是否匹配正则表达式，
    // 运用两层 if 判断，如果正则匹配成功，则标志设为true
    userAccount.onblur = function () {
        // 定义一个用于验证用户名的正则表达式
        var reg = /^\w{6,30}$/;
        if (this.value == "") {
            descriptions[0].innerHTML = "请您务必写入用户名!";
            descriptions[0].style.color = "#ff2e63";
        } else {
            // 运用 exec() 方法来判断
            if (!reg.exec(userAccount.value)) {
                descriptions[0].innerHTML = "请输入6-30位字母、数字或'_'";
                descriptions[0].style.color = "#ff2e63";
            } else {
                descriptions[0].innerHTML = "格式正确";
                descriptions[0].style.color = "#00b8a9";
                test1 = true;
            }
        }
    };
    // 输入密码验证
    userPass.onfocus = function () {
        descriptions[1].innerHTML = "6-20位字母,数字或符号";
        descriptions[1].style.color = "#00b8a9";
    };
    userPass.onblur = function () {
        var reg = /^\w{6,20}$/;
        if (this.value == "") {
            descriptions[1].innerHTML = "请您务必输入密码!";
            descriptions[1].style.color = "#ff2e63";
        } else {
            if (!reg.exec(userPass.value)) {
                descriptions[1].innerHTML = "请输入6-20位字母,数字或符号!";
                descriptions[1].style.color = "#ff2e63";
            } else {
                descriptions[1].innerHTML = "格式正确";
                descriptions[1].style.color = "#00b8a9";
                test2 = true;
            }
        }
    };
    // 输入密码确认，这里无需使用正则  只需判断上下密码输入框的值是否相等
    userPass_.onfocus = function () {
        descriptions[2].innerHTML = "请确认两次密码相同";
        descriptions[2].style.color = "#00b8a9";
    };
    userPass_.onblur = function () {
        if (this.value == "") {
            descriptions[2].innerHTML = "请务必再次确认密码!";
            descriptions[2].style.color = "#ff2e63";
        } else {
            if (this.value != userPass.value) {
                descriptions[2].innerHTML = "两次密码不相同!";
                descriptions[2].style.color = "#ff2e63";
            } else {
                descriptions[2].innerHTML = "格式正确";
                descriptions[2].style.color = "#00b8a9";
                test3 = true;
            }
        }
    };
    // 姓名验证
    userName.onfocus = function () {
        descriptions[3].innerHTML = "请输入您的中文名字";
        descriptions[3].style.color = "#00b8a9";
    };
    userName.onblur = function () {
        var reg = /^[\u4e00-\u9fa5]{2,5}$/;
        if (this.value == "") {
            descriptions[3].innerHTML = "请务必输入您的姓名!";
            descriptions[3].style.color = "#ff2e63";
        } else {
            if (!reg.exec(userName.value)) {
                descriptions[3].innerHTML = "请输入中文名并确认是正确格式!";
                descriptions[3].style.color = "#ff2e63";
            } else {
                descriptions[3].innerHTML = "格式正确";
                descriptions[3].style.color = "#00b8a9";
                test4 = true
            }
        }
    };
    // 身份证验证
    information.onfocus = function () {
        descriptions[4].innerHTML = "请输入您的身份证号码";
        descriptions[4].style.color = "#00b8a9";
    };
    information.onblur = function () {
        var reg = /^\d{17}[0-9x]$/;
        if (this.value == "") {
            descriptions[4].innerHTML = "请您务必输入身份证号码!";
            descriptions[4].style.color = "#ff2e63";
        } else {
            if (!reg.exec(information.value)) {
                descriptions[4].innerHTML = "请输入身份证号码正确格式!";
                descriptions[4].style.color = "#ff2e63";
            } else {
                descriptions[4].innerHTML = "格式正确";
                descriptions[4].style.color = "#00b8a9";
                test5 = true;
            }
        }
    };
    // 邮箱验证
    email.onfocus = function () {
        descriptions[5].innerHTML = "请输入您邮箱的正确格式";
        descriptions[5].style.color = "#00b8a9";
    };
    email.onblur = function () {
        var reg = /^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
        if (this.value == "") {
            descriptions[5].innerHTML = "请您务必输入邮箱!";
            descriptions[5].style.color = "#ff2e63";
        } else {
            if (!reg.exec(email.value)) {
                descriptions[5].innerHTML = "请输入邮箱正确格式!";
                descriptions[5].style.color = "#ff2e63";
            } else {
                descriptions[5].innerHTML = "格式正确";
                descriptions[5].style.color = "#00b8a9";
                test6 = true;
            }
        }
    };
    // 手机号码验证
    telephone.onfocus = function () {
        descriptions[6].innerHTML = "请输入您的手机号码";
        descriptions[6].style.color = "#00b8a9";
    };
    telephone.onblur = function () {
        var reg = /^\d{11}$/;
        if (this.value == "") {
            descriptions[6].innerHTML = "请您输入11位手机号码!";
            descriptions[6].style.color = "#ff2e63";
        } else {
            if (!reg.exec(telephone.value)) {
                descriptions[6].innerHTML = "请您输入11位手机号码！";
                descriptions[6].style.color = "#ff2e63";
            } else {
                descriptions[6].innerHTML = "格式正确";
                descriptions[6].style.color = "#00b8a9";
                test7 = true;
            }
        }
    };
    // 提交按钮点击事件
    btn.onclick = function () {
        if (choose.checked == false || test1 == false || test2 == false || test3 == false || test4 == false || test5 == false
            || test6 == false || test7 == false) {
            alert(" 您 的 信 息 有 误 ")
        } else {
            alert(" 登 记 成 功 ! ")
        }
    };
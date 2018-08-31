var userAccount=document.querySelector("#userAccount"),
    userPass=document.querySelector("#userPass"),
    userPsss_=document.querySelector("#userPass_"),
    userName=document.querySelector("#userName"),
    information=document.querySelector("#information"),
    email=document.querySelector("#email"),
    telephone=document.querySelector("#telephone"),
    descriptions=document.querySelectorAll(".description"),
    choose=document.querySelector("#choose"),
    btn=document.querySelector(".handup");
var test1 = false, test2 = false, test3 = false, test4 = false, test5 = false, test6 = false, test7 = false
    ;    
userAccount.onfocus = function () {
    descriptions[0].innerHTML = "6-30位字母、数字或'_'";
    descriptions[0].style.color = "#00b8a9";
};
userAccount.onblur = function () {
    var reg = /^\w{6,30}$/;
    if (this.value == "") {
        descriptions[0].innerHTML = "请您务必写入用户名";
        descriptions[0].style.color = "#ff2e63";
    } else {
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
//-------------------------------------------------------------账号结束;
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
/*------------------------------------------------------------------密码结束*/
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
/*-----------------------------------------------------------------------确认密码结束*/
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
//---------------------------------------------------------------------------------姓名结束
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
//------------------------------------------------------------------------身份证号码结束
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
//----------------------------------------------------------------------邮箱结束
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
btn.onclick = function () {
    if (choose.checked == false || test1 == false || test2 == false || test3 == false || test4 == false || test5 == false
        || test6 == false || test7 == false) {
        alert(" 您 的 信 息 有 误 ")
    } else {
        alert(" 登 记 成 功 ! ")
    }
};
function test(test){      // 定义函数
            alert(test);
        }

        const p1 = document.createElement("p");    // 创建输出对象
        p1.textContent = "穷逼！！！";    // 设置输出值
        document.body.appendChild(p1);    // 在页面输出

        alert("穷逼！！！");    // 弹窗输出

        var conut = prompt("请输入你的银行账户");
        var keyWord = prompt("请输入你的银行卡密码");

        const p2 = document.createElement("p");
        p2.textContent = "账户：" + conut + "\n" + "密码：" + keyWord;
        document.body.appendChild(p2);

        // prompt可实现弹窗输入
        var x = parseInt(prompt("请输入你的余额"));    // 声明变量  // parseInt将数据类型转换为数字类型如：
        var y = parseInt(prompt("请输入你想要的余额"));    // parseInt,parseFloat
        var sum = x - y;

        const p3 = document.createElement("p");
        p3.textContent = "你的余额为：" + sum;
        document.body.appendChild(p3);

        console.log(sum);    // 日志输出
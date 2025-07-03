const tg = window.Telegram.WebApp;

tg.ready();      // 标记加载完成
tg.expand();     // 尝试展开为全屏
tg.MainButton.setText("点击提交");
tg.MainButton.show();
tg.MainButton.onClick(() => {
  alert("你点击了主按钮！");
});

function sendHello() {
  alert("你好，来自 Telegram 小程序！");
}

// 显示用户信息
const userInfoEl = document.getElementById("user-info");
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
  const user = tg.initDataUnsafe.user;
  userInfoEl.innerText = `👤 你好，${user.first_name}（ID: ${user.id}）`;
} else {
  userInfoEl.innerText = "⚠️ 未获取到用户信息";
}
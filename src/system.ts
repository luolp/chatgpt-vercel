export const setting = {
  continuousDialogue: false,
  archiveSession: true,
  openaiAPIKey: "",
  openaiAPITemperature: 80,
  password: "",
  systemRule: ""
}

// export const message = `Powered by OpenAI Vercel
// - 由 [@ourongxing](https://github.com/ourongxing) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，查看 [源码](https://github.com/ourongxing/chatgpt-vercel)，欢迎自部署。
// - 该网站仅作为演示，不提供长期服务，网站密码为 \`ourongxing\`，请勿滥用。
// - 如果本项目对你有所帮助，可以给小猫 [买点零食](https://cdn.jsdelivr.net/gh/ourongxing/chatgpt-vercel/assets/reward.gif)，但不接受任何付费功能请求。
// - 该预览页面域名由 [@AUDI_GUZZ](https://m.okjike.com/users/4af3cfb4-1291-4a8b-b210-f515c86934a9) 和 [@Airyland](https://m.okjike.com/users/C6C8DE3A-E89D-4978-9E7D-B2E167D835A9) 免费提供，感谢。API Key 由我自己免费提供，注意不要滥用。
// - [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export const message = `
- 请先关注公众号“可阅日刊”，发送“AI”获取网站密码填写到左下角设置中
- 小可AI使用ChatGPT接口，其接口按对话的字数（Token）计费，由 [可阅文学网](https://kepub.net) 提供免费试用，请勿滥用。
- 默认未开启“连续对话”，如需让AI具备上下文理解的能力，请在设置中开启。在单次对话时请关闭。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false

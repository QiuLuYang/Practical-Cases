// 发送验证码模块
const code = document.querySelector('.xtx-form-item .code')
let flag = true
code.addEventListener('click', function () {
  if (flag) {
    flag = false
    let n = 5
    code.innerHTML = `0${n}秒后重新获取`
    let timeout = setInterval(function () {
      n--
      code.innerHTML = `0${n}秒后重新获取`
      if (n === 0) {
        clearInterval(timeout)
        flag = true
        code.innerHTML = '重新获取'
      }
    }, 1000)
  }
})

// 验证用户名模块
const username = document.querySelector('[name=username]')
username.addEventListener('change', verifyName)
// 封装verifyName函数
function verifyName() {
  // 定义规则
  const span = username.nextElementSibling
  const reg = /^[a-zA-Z0-9-_]{6,10}$/
  if (!reg.test(username.value)) {
    span.innerHTML = '输入不合法，请输入6-10位的字母数字或下划线'
    return false
  }
  span.innerHTML = ''
  return true
}

// 验证手机号码模块
const phone = document.querySelector('[name=phone]')
phone.addEventListener('change', verifyPhone)
// 封装verifyName函数
function verifyPhone() {
  // 定义规则
  const span = phone.nextElementSibling
  const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  if (!reg.test(phone.value)) {
    span.innerHTML = '输入不合法，请输入正确的11位手机号码'
    return false
  }
  span.innerHTML = ''
  return true
}

// 验证验证码模块
const codes = document.querySelector('[name=code]')
codes.addEventListener('change', verifyCode)
// 封装verifyName函数
function verifyCode() {
  // 定义规则
  const span = codes.nextElementSibling
  const reg = /^\d{6}$/
  if (!reg.test(codes.value)) {
    span.innerHTML = '输入不合法，请输入正确的验证码'
    return false
  }
  span.innerHTML = ''
  return true
}

// 验证密码模块
const password = document.querySelector('[name=password]')
password.addEventListener('change', verifyPassword)
// 封装verifyName函数
function verifyPassword() {
  // 定义规则
  const span = password.nextElementSibling
  const reg = /^[a-zA-Z0-9-_]{6,20}$/
  if (!reg.test(password.value)) {
    span.innerHTML = '输入不合法，请输入6-20位的字母数字符号组合'
    return false
  }
  span.innerHTML = ''
  return true
}

// 再次验证密码模块
const confirm = document.querySelector('[name=confirm]')
confirm.addEventListener('change', verifyConfirm)
// 封装verifyName函数
function verifyConfirm() {
  // 定义规则
  const span = confirm.nextElementSibling
  if (!(confirm.value === password.value)) {
    span.innerHTML = '两次密码输入不一致'
    return false
  }
  span.innerHTML = ''
  return true
}

// 我同意模块
const queren = document.querySelector('.icon-queren1')
queren.addEventListener('click', function () {
  this.classList.toggle('icon-queren2')
})

// 提交模块
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  if (!queren.classList.contains('icon-queren2')) {
    alert('请勾选协议')
    e.preventDefault()
  }

  // 依次判断表单中有没有输入或者正确输入
  if (!verifyName()) e.preventDefault()
  if (!verifyPhone()) e.preventDefault()
  if (!verifyCode()) e.preventDefault()
  if (!verifyPassword()) e.preventDefault()
  if (!verifyConfirm()) e.preventDefault()
})
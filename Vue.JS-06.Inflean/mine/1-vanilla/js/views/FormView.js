import View from './View.js'

const tag = '[formView]'

const FormView = Object.create(View)

FormView.setup = function(el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}


FormView.bindEvents = function() {
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset())
}

FormView.onKeyup = function(e) {
    const enter = 13
    //  입력한 문자열이 있을 경우만 버튼 show
    this.showResetBtn(this.inputEl.value.length)
    //  지웠을 때도 reset 전달
    if(!this.inputEl.value.length) this.emit('@reset')
    if(e.keyCode !== enter) return
    //  전달
    this.emit('@submit', {input: this.inputEl.value})
}

FormView.onClickReset = function () {
    //  x버튼 클릭시 reset 전달
    this.emit('@reset')
    this.showResetBtn(false)
}
export default FormView
import MainController from './controllers/MainControllers.js'

//  돔이 완성되었을 때 MainContoller 호출
document.addEventListener('DOMContentLoaded', () => {
    MainController.init()
})
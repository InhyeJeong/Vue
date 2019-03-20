import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'

import SearchModel from '../models/SearchModel.js'
const tag = '[MainController]'

export default {
    init() {
        console.log(tag, 'init()')
        //  index.html의 <form></form>태그 부분을 el로 넘겨줌
        FormView.setup(document.querySelector('form'))
        //  FormView에서 emit으로 넘긴 이벤트 받음 
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onResetForm())

        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.onChangeTab(e.detail.tabName))

        ResultView.setup(document.querySelector('#search-result'))

        this.selectedTab = '추천 검색어'
        this.renderView()
        
    },

    //  뷰를 한번에 그려주는 렌더함수
    renderView() {
        console.log(tag, 'renderView()')
        
        TabView.setActiveTab(this.selectedTab)
        ResultView.hide()
    },
    
    search(query) {
        console.log(tag, 'search()', query);
        //  search api
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
        //this.onSearchResult([])
        
    },

    onSubmit(input) {
        console.log(tag, 'onsubmit()', input)
        this.search(input)
    },

    onResetForm() {
        console.log(tag, 'onResetForm()')
        //  검색결과 숨김
        ResultView.hide()
    },

    onSearchResult(data) {
        ResultView.render(data)
    },

    onChangeTab(tabName) {
        debugger
    }
}
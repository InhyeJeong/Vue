import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'
import HistoryView from '../views/HistoryView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'
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

        KeywordView.setup(document.querySelector('#search-keyword'))
            .on('@click', e => this.onClickKeyword(e.detail.keyword))
        
        HistoryView.setup(document.querySelector('#search-history'))
            .on('@click', e => this.onClickHistory(e.detail.keyword)) 
        
            ResultView.setup(document.querySelector('#search-result'))

        this.selectedTab = '최근 검색어'
        this.renderView()
        
    },

    //  뷰를 한번에 그려주는 렌더함수
    renderView() {
        console.log(tag, 'renderView()')
        
        TabView.setActiveTab(this.selectedTab)

        if(this.selectedTab === '추천 검색어') {
            this.fetchSearchKeyword()
        } else {
            this.fetchSearchHistory()
        }
        ResultView.hide()
    },

    fetchSearchKeyword() {
        //  프로미스 반환하므로 then사용가능함, 그 data를 render함수에 반환
        KeywordModel.list().then(data => {
            KeywordView.render(data)
        })
    },

    fetchSearchHistory() {
        HistoryModel.list().then(data => {
            HistoryView.render(data)
        })
    },
    
    search(query) {
        FormView.setValue(query)
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
        this.renderView()
    },

    onSearchResult(data) {
        //  탭뷰와 키워드 뷰를 숨겨야함
        TabView.hide()
        KeywordView.hide()
        ResultView.render(data)
    },

    onChangeTab(tabName) {
        debugger
    },

    onClickKeyword(keyword) {
        this.search(keyword)

    },

    onClickHistory(keyword) {
        this.search(keyword)
    }
}
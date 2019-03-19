import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'
const tag = '[MainController]'

export default {
    init() {
        console.log(tag, 'init()')
        //  index.html의 <form></form>태그 부분을 el로 넘겨줌
        FormView.setup(document.querySelector('form'))
        //  emit으로 넘긴 이벤트 받음 
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))
    },
    
    search(query) {
        console.log(tag, 'search()', query);
        //  search api
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
        this.onSearchResult([])
        
    },

    onSubmit(input) {
        console.log(tag, 'onsubmit()', input)
        this.search(input)
    },

    onResetForm() {
        console.log(tag, 'onResetForm()');
    },

    onSearchResult(data) {
        ResultView.render(data)
    }
}
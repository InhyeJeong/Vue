import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.message = {
    NO_RESULT: '검색 결과가 없습니다.'
}

ResultView.setup = function(el) {
    this.init(el)
}
//  서버에서 받아온 검색결과를 받아서 동적으로 DOM그려줌
ResultView.render = function(data = []) {
    console.log(tag, 'render()', data);
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.message.NO_RESULT
    this.show()
}

ResultView.getSearchResultsHtml = function(data) {
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
    
}

ResultView.getSearchItemHtml = function (item) {
    return `<li>
        <img src="${item.image}"/>
        <p>${item.name}</p>
    </li>`
}
export default ResultView
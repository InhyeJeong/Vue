# Quiz

* 상단 폼에서는 카테고리(동료, 친구, 가족) 선택
* 카테고리는 Select Box, Radio Button 을 이용가능
* 중간 텍스트 입력창에서는 편지 내용을 입력할 수 있습니다. 입력창은 Textarea
* Submit 버튼을 클릭하면 하단에 보낸 시간 역순으로 편지 정렬(하단의 발송 편지 목록은 페이지 새로 고침을 했을 때 사라져도 무방) 
* 카테고리를 선택해 리스트를 필터링

## 1) data-binding
## 2) nexttick
* http://vuejs.kr/jekyll/update/2017/01/19/vuejs-nexttick-example/
## 3) filter
* 반환하는 새 배열을 변수(**textFilterResults**)로 받기
```vue
:
data() {
    return {
      selectLists:[
        {category:'동료'},
        {category:'친구'},
        {category:'가족'}
      ],
      textResults:[],
      textFilterResults:[],
      userInput: '',
      selected: '',
      filterSelected: ''
    }
  }
:
filterCategory: function() {
      var self = this
      this.textFilterResults = this.textResults.filter(function(data) {
          return data.category === self.filterSelected
      })
 }
:
```
## 4) v-if / v-else
* **textResults** **textFilterResults**
```vue
<ul v-if="filterSelected==='All'" class="list-group">
  <li v-for="data in textResults" :key="data" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
</ul>

<ul v-else class="list-group">
  <li v-for="data in textFilterResults" :key="data" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
</ul>
```

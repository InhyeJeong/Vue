# Quiz

* 상단 폼에서는 카테고리(동료, 친구, 가족) 선택
* 카테고리는 Select Box, Radio Button 을 이용가능
* 중간 텍스트 입력창에서는 편지 내용을 입력할 수 있습니다. 입력창은 Textarea
* Submit 버튼을 클릭하면 하단에 보낸 시간 역순으로 편지 정렬(하단의 발송 편지 목록은 페이지 새로 고침을 했을 때 사라져도 무방) 
* 카테고리를 선택해 리스트를 필터링

## 1) data-binding
## 2) nexttick
* nextTick은 DOM 업데이트가 된 후에 콜백으로 선언된 함수가 실행하도록 돕는 메소드
* dom이 그려지기 전의 시점에서도 에러 없이 dom을 핸들링할 수 있다. 
* 공식 API문서 : https://kr.vuejs.org/v2/api/#Vue-nextTick
* https://iam-song.tistory.com/48
* http://vuejs.kr/jekyll/update/2017/01/19/vuejs-nexttick-example/
## 3) filter
* 반환하는 새 배열을 변수(**textFilterResults**)로 받기

```javascript
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
* v-if : **textResults**
* v-else : **textFilterResults**
```vue
<ul v-if="filterSelected==='All'" class="list-group">
  <li v-for="data in textResults" :key="data" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
</ul>

<ul v-else class="list-group">
  <li v-for="data in textFilterResults" :key="data" class="list-group-item">내용 : {{data.label}} | 카테고리 : {{data.category}}</li>
</ul>
```

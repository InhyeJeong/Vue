<template>
	<div>
    dfdfdfdfdfddfsdfdrfad
		<button @click="createPDF">PDF</button>
		<div data-html2canvas-ignore="true">출력하지 않고 싶은 영역은 태그에 'data-html2canvas-ignore' attribute를 넣어주면된다.</div>
	</div>
</template>
<script>
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
export default {
	name: '',
	data () {
		return {
			propTitle: 'mypdf'
		}
	},
	methods: {  
		createPDF () {
			let pdfName = 'test'; 
			var doc = new jsPDF();
			doc.text("Hello World", 10, 10);
			doc.save(pdfName + '.pdf');

			html2canvas(document.body).then(function(canvas) {
				document.body.appendChild(canvas);
			});

		}
	}
}
</script>


import * as Vue from "https://cdn.skypack.dev/vue";

new Vue({
  el: '#app',
  data: {
    name: 'Max',
		elements: []
  },
  methods: {
    changeName: function() {
      this.name = 'Anna';
    },
		addElement: function(){
			this.elements.push(this.elements.length + 1);
		},
		getColor: function(number){
		return number %2==0?'green':'red';
	}
  }
});
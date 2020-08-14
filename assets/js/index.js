
var vue = new Vue({
    el: '.container',
    data: {
        stdio: '<stdio.h>',
        stdlib: '<stdlib.h>',
        nombre: 'Juan',
        ready: false,
    },
    methods: {
        setReady : function(){
            this.ready = true
        },
        top: function(){
            scrollBy({top:-10000,left:0,behaviour:'smooth'})
        }
    },
})
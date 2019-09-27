(function () {
    'use strict';

    var likeComponent = Vue.extend({
        data: function () {
            return {
                count: 0
            }
        },
        props: {
            name: {
                type: String,
                default: 'Like',
            }
        },
        template: '<button @click="countUp">{{ name }} {{ count }}</button>',
        methods: {
            countUp: function () {
                this.count++;
                this.$emit('increment');
            }
        },
    });

    var app = new Vue({
        el: '#app-component',
        components: {
            'button-component': likeComponent
        },
        data: {
            total: 0,
        },
        methods: {
            incrementTotal: function () {
                this.total++;
            }
        }
    });
})();

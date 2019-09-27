(function () {
    'use strict';

    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: [
                {
                    title: 'task1',
                    isDone: false,
                },
                {
                    title: 'task2',
                    isDone: false,
                },
                {
                    title: 'task3',
                    isDone: true,
                },
            ],
            isError: false,
        },
        watch: {
            todos: {
                handler: function () {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                },
                deep: true,
            }
        },
        methods: {
            addItem: function() {
                if (this.newItem) {
                    var item = {
                        title: this.newItem,
                        idDone: false
                    };
                    this.todos.push(item);
                    this.newItem = '';
                } else {
                    this.isError = true;
                }
            },
            deleteItem: function (index) {
                if (confirm('削除してもよろしいでしょうか？')) {
                    this.todos.splice(index, 1)
                }
            },
            onInput: function () {
                this.isError = false;
            },
            purge: function () {
                if (confirm('delete finished ?')) {
                    this.todos = this.remaining;
                }
            },
        },
        computed: {
            remaining: function () {
                return this.todos.filter(function (todo) {
                    return ! todo.isDone;
                });
            }
        },
    });
})();

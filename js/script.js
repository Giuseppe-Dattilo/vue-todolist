console.log('JS OK');
console.log('Vue OK', Vue);


const app = Vue.createApp({
    nome: 'Todolist',
    data(){
        return {
           
           tasks: [
            {
                text: 'Fare i compiti',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Fare il bucato',
                done: false,
            },
            {
                text: 'Sistemare la stanza',
                done: false,
            },
            {
                text: 'Riparare il tavolo',
                done: false,
            },
           ],

           addedTask: '',
           lineThrough: 'text-decoration-line-through'

        }
    }, 

    computed: {
        newTask() {
            return newTaskElement = {text: this.addedTask, done: false}
        },
       
    }, 

    methods: {
        addTask(){
            if(this.addedTask){
                this.tasks.push(this.newTask);
                this.clearInput();
            }
           
        },

        removeTask(i){
            this.tasks.splice(i, 1);
        },

        clearInput(){
            this.addedTask = '';
        },

        deleteTasks(){
            this.tasks =[];
        },

        toggleInput(task){
            task.done = !task.done;
        }
    },
});

app.mount('#root');
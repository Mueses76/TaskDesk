<template>
    <div>
        <nav class="navbar navbar-ligth bg-litgh">
        <a class="navbar-brand" href="/" >Task Desk</a>
        </nav>

        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="addTask">
                                <div class="form-group">
                                    <input type="text"
                                    v-model="task.title" 
                                    placeholder="Insert A Task"
                                    class="form-control">
                                </div>
                                <div class="form-group">
                                    <textarea v-model="task.description" 
                                    cols="30" rows="10"
                                    class="form-control"
                                    placeholder="Insert A Description"></textarea>
                                </div>
                                <button class="btn btn-primary
                                btn-block">Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                task: {
                    title:'',
                    description: ''
                }
            }
        },
        methods: {
            addTask() {
                console.log(this.task)
            }
        }
    }

</script>

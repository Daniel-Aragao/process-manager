<template>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">
            <img src="/assets/user.png" width="50" height="50" class="d-inline-block align-top" alt="">
        </a>
        <!-- <a class="navbar-brand" href="#">GP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item btn btn-danger dropdown">
                <router-link class="nav-link" to="/">Início</router-link>
            </li>
            <li class="nav-item btn btn-danger dropdown">
                <router-link class="nav-link" to="/artefato">Artefatos</router-link>
            </li>
            <li class="nav-item btn btn-danger dropdown">
                <router-link class="nav-link" to="/tarefa">Tarefas</router-link>
            </li>
            <li class="nav-item btn btn-danger dropdown">
                <router-link class="nav-link" to="/ferramenta">Ferramentas</router-link>
            </li>
            <li class="nav-item btn btn-danger dropdown">
                <router-link class="nav-link" to="/guia">Guias e Orientações</router-link>
            </li>
            <!-- <li class="nav-item btn btn-danger dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCategorias" data-toggle="dropdown">Categorias</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownCategorias">
                    <router-link class="dropdown-item" to="/artefato">Artefatos</router-link>
                    <router-link class="dropdown-item" to="/tarefa">Tarefas</router-link>
                    <router-link class="dropdown-item" to="/ferramenta">Ferramentas</router-link>
                    <router-link class="dropdown-item" to="/guia">Guias e Orientações</router-link>
                </div>
            </li> -->
            <li class="nav-item btn btn-danger">
                <router-link class="nav-link" to="/flux">Fluxos</router-link>
            </li>
            <li class="nav-item btn btn-danger float-right">
                <a class="nav-link" @click="processosSelection">Processos</a>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar-superior',
//   props: {
//     msg: String
//   }
methods: {
    processosSelection(){
        this.$emit("processosSelection")
    }
}

    
}
</script>

<style>
/* #nav{
    background-color: #e3f2fd;
} */
#nav .nav-item.btn.btn-danger{
    margin-right: 10px;
}

#nav.navbar-light .nav-link{
    color: white;
    font-weight: 600px;
}

#navbarNavDropdown .dropdown-item:hover{
    background-color: #f36767;
    color: white;
}

#nav ul.navbar-nav{
    position: relative;
    width: 100%;
}

#nav ul.navbar-nav > li.float-right{
    position: absolute;
    right: 0;
}
</style>

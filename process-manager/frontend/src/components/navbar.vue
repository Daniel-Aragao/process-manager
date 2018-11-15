<template>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">
            <img src="/assets/LogoL.png" width="50" height="50" class="d-inline-block align-top" alt="">
        </a>
        <!-- <a class="navbar-brand" href="#">GP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item btn btn-danger dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownFramework" data-toggle="dropdown">Framework</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownFramework">
                    <a class="dropdown-item" href="#">Introdução</a>
                </div>
            </li>
            <li class="nav-item btn btn-danger dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCategorias" data-toggle="dropdown">Categorias</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownCategorias">
                    <a class="dropdown-item" href="#">Artefatos</a>
                    <a class="dropdown-item" href="#">Tarefas</a>
                    <a class="dropdown-item" href="#">Ferramentas</a>
                    <a class="dropdown-item" href="#">Guias e Orientações</a>
                </div>
            </li>
            <li class="nav-item btn btn-danger">
                <a class="nav-link" href="#">Fluxos</a>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar-superior'
//   props: {
//     msg: String
//   }
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

#navbarNavDropdown .dropdown-item{
    background-color: #c9cfd8;
    margin-bottom: 5px;
}
#navbarNavDropdown .dropdown-item:hover{
    background-color: #d6d6d6;
}
</style>

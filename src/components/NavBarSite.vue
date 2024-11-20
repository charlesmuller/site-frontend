<template>
    <div class="main-nav-menu">
        <div class="nav-item">
            <a href=""><img src="/src/assets/icon-home.svg" alt="home icon"></a>
        </div>
        <div class="nav-item">
            <a href="">Work</a>
        </div>
        <div class="nav-item">
            <a href="">About</a>
        </div>
        <div class="nav-item">
            <a href="">Contatc</a>
        </div>
    </div>
</template>

<script>
</script>

<style>
.main-nav-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 75px;
    padding: 15px;
    background-color: #E8E8E3;
    border-radius: 15px;
    transition: background-color 0.3s;
    width: 80%;
    max-width: 800px;
    margin: 30px auto;
    align-items: center;
}

.nav-item a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    text-decoration: none;
    color: inherit;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.3s;
    padding: 8px 16px;
    box-sizing: content-box;
}

.nav-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0;
    transition: transform 0.3s, box-shadow 0.3s;
}

.nav-item a:hover img {
    transform: scale(1.1);
}

.nav-item a:hover {
    background-color: #E8E8E3;
    color: #212320;
    transform: scale(1.1);
}

.main-nav-menu:hover {
    background-color: transparent;
}

.main-nav-menu:hover .nav-item a {
    background-color: transparent;
}

.main-nav-menu:hover .nav-item a:hover {
    background-color: #E8E8E3;
}

@media (max-width: 430px) {
    .main-nav-menu {
        flex-direction: row;
        gap: 15px;
        width: 90%;
    }

    .nav-item a {
        font-size: 14px;
        padding: 8px 10px;
    }

    .nav-item a:hover {
        background-color: #E8E8E3;
        color: #212320;
    }

    .nav-item img {
        width: 20px;
        height: 20px;
    }

    .main-nav-menu:hover {
        background-color: transparent;
    }

    .main-nav-menu:hover .nav-item a {
        background-color: transparent;
    }

    .main-nav-menu:hover .nav-item a:hover {
        background-color: #E8E8E3;
    }
}
</style>
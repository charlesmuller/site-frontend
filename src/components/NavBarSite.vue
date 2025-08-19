<template>
    <div class="main-nav-menu">
        <div class="nav-item">
            <router-link to="/"><img src="/src/assets/icon-home.svg" alt="home icon"></router-link>
        </div>
        <div class="nav-item">
            <router-link to="/about">About</router-link>
        </div>
        <div class="nav-item">
            <a href="mailto:charlesmuller@rede.ulbra.br">Contact</a>
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
    width: 78%;
    max-width: 1080px;
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

@media (max-width: 768px) {
    .main-nav-menu {
        gap: 30px;
        width: 90%;
        padding: 12px;
    }

    .nav-item a {
        font-size: 0.9rem;
        padding: 8px 12px;
    }

    .nav-item img {
        width: 22px;
        height: 22px;
    }
}

@media (max-width: 480px) {
    .main-nav-menu {
        flex-direction: row;
        gap: 20px;
        width: 95%;
        padding: 10px;
    }

    .nav-item a {
        font-size: 0.85rem;
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

@media (max-width: 360px) {
    .main-nav-menu {
        gap: 15px;
        width: 98%;
        padding: 8px;
    }

    .nav-item a {
        font-size: 0.8rem;
        padding: 6px 8px;
    }

    .nav-item img {
        width: 18px;
        height: 18px;
    }
}
</style>
<template>
    <div class="main-nav-menu">
        <div class="nav-item">
            <router-link to="/"><img src="/src/assets/icon-home.svg" alt="home icon"></router-link>
        </div>
        <div class="nav-item">
            <a href="#about-section" @click="scrollToAbout">About</a>
        </div>
        <div class="nav-item">
            <a href="mailto:charlesmuller@rede.ulbra.br">Contact</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBarSite',
    methods: {
        scrollToAbout(event) {
            // Previne o comportamento padrão do link
            event.preventDefault();
            
            // Verifica se estamos na página principal
            if (this.$route.path !== '/') {
                // Se não estivermos na home, navega para lá primeiro
                this.$router.push('/').then(() => {
                    // Aguarda um pouco para a página carregar e então faz o scroll
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.performScroll();
                        }, 100);
                    });
                });
            } else {
                // Se já estivermos na home, faz o scroll diretamente
                this.performScroll();
            }
        },
        
        performScroll() {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
}
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
    transition: all 0.3s ease;
    padding: 8px 16px;
    box-sizing: content-box;
    background-color: transparent;
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
    background-color: #4a90e2;
    color: #ffffff;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

.main-nav-menu:hover {
    background-color: transparent;
}

.main-nav-menu:hover .nav-item a {
    background-color: transparent;
}

.main-nav-menu:hover .nav-item a:hover {
    background-color: #4a90e2;
    color: #ffffff;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
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
        background-color: #4a90e2;
        color: #ffffff;
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
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
        background-color: #4a90e2;
        color: #ffffff;
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
    }
}

@media (max-width: 360px) {
    .main-nav-menu {
        gap: 10px;
        width: 98%;
        padding: 8px 5px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav-item {
        flex: 0 1 auto;
        min-width: 70px;
    }

    .nav-item a {
        font-size: 0.75rem;
        padding: 8px 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .nav-item img {
        width: 16px;
        height: 16px;
    }
}

@media (max-width: 320px) {
    .main-nav-menu {
        gap: 8px;
        padding: 6px 3px;
    }

    .nav-item a {
        font-size: 0.7rem;
        padding: 6px 4px;
    }

    .nav-item img {
        width: 14px;
        height: 14px;
    }
}
</style>
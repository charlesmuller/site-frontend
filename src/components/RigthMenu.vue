<template>
    <div class="content-header-right">
    <div class="main-list">
        <ul>
            <li>
                <router-link to="/things-about-me">
                    <img src="/src/assets/profile.svg">
                    <p>Things about me</p>
                </router-link>
            </li>
            <li>
                <router-link to="/work-history">
                    <img src="/src/assets/book.svg">
                    <p>Work history</p>
                </router-link>
            </li>
            <li>
                <router-link to="/my-blog">
                    <img src="/src/assets/pencil.svg">
                    <p>My blog (in progress)</p>
                </router-link>
            </li>
        </ul>
    </div>
    </div>
</template>

<style>
.main-list {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-header-right img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    border: 0.01rem solid #312e2e;
    border-radius: 5px;
}

.content-header-right a:hover img {
    transform: scale(1.1);
}

.content-header-right a {
    transition: background-color 0.5s ease, color 0.5s ease, transform 0.2s ease;
}

.content-header-right a:hover {
    background-color: #E8E8E3;
    border-radius: 5px;
    color: #212320;
    transform: scale(1.1);
    cursor: pointer;
    width: 100%;
}
</style>
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

/* Responsividade para mobile */
@media (max-width: 768px) {
  .content-header-right {
    width: 100%;
    margin: 0;
  }

  .main-list ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .main-list ul li {
    flex: 1;
    min-width: 140px;
    max-width: 180px;
  }

  .content-header-right a {
    padding: 10px 8px;
    font-size: 0.85rem;
    text-align: center;
  }

  .content-header-right img {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .main-list ul {
    flex-direction: column;
    gap: 8px;
  }

  .main-list ul li {
    width: 100%;
    max-width: none;
  }

  .content-header-right a {
    padding: 12px;
    font-size: 0.9rem;
  }
}
</style>
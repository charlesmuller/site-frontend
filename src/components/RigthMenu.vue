<template>
    <div class="content-header-right">
    <div class="main-list">
        <ul>
            <li>
                <router-link to="/my-projects">
                    <img src="/src/assets/library.svg">
                    <p>My projects</p>
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
    transition: all 0.3s ease;
    border-radius: 5px;
    padding: 8px 12px;
}

.content-header-right a:hover {
    background-color: #4a90e2;
    border-radius: 5px;
    color: #ffffff;
    transform: translateY(-2px) scale(1.05);
    cursor: pointer;
    width: 100%;
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
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
    padding: 10px 8px;
    font-size: 0.85rem;
  }

  .content-header-right img {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 360px) {
  .content-header-right {
    width: 100%;
    margin: 0;
  }

  .main-list ul {
    gap: 6px;
  }

  .content-header-right a {
    padding: 8px 6px;
    font-size: 0.8rem;
  }

  .content-header-right img {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 320px) {
  .main-list ul {
    gap: 5px;
  }

  .content-header-right a {
    padding: 6px 4px;
    font-size: 0.75rem;
  }

  .content-header-right img {
    width: 14px;
    height: 14px;
  }
}
</style>
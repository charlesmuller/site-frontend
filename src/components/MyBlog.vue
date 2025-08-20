<template>
  <div class="blog-container">
    <div class="blog-header">
      <h1>My Blog</h1>
      <p class="blog-subtitle">Compartilhando conhecimento e experiências</p>
    </div>
    
    <div class="blog-content">
      <div class="coming-soon">
        <h2>🚧 Em Construção</h2>
        <p>
          Esta seção está sendo desenvolvida. Em breve você encontrará aqui artigos sobre:
        </p>
        <ul class="topics-list">
          <li>🔧 Desenvolvimento Web</li>
          <li>🚀 Vue.js e tecnologias frontend</li>
          <li>🐳 Docker e DevOps</li>
          <li>💡 Dicas e tutoriais</li>
          <li>📚 Experiências como desenvolvedor</li>
        </ul>
        <p class="coming-soon-note">
          Fique ligado! Novos conteúdos serão publicados em breve.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyBlog'
};
</script>

<style scoped>
.blog-container {
  width: 78%;
  max-width: 1080px;
  margin: 40px auto;
  padding: 20px;
}

.blog-header {
  text-align: center;
  margin-bottom: 40px;
}

.blog-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.blog-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.blog-content {
  display: flex;
  justify-content: center;
}

.coming-soon {
  background: #f8f9fa;
  border: 2px dashed #ddd;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  max-width: 600px;
}

.coming-soon h2 {
  color: #555;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.coming-soon p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.topics-list {
  list-style: none;
  padding: 0;
  margin: 30px 0;
}

.topics-list li {
  background: white;
  margin: 10px 0;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-weight: 500;
  color: #444;
}

.coming-soon-note {
  font-weight: 600;
  color: #2c5aa0;
  margin-top: 30px;
}

/* Responsividade */
@media (max-width: 768px) {
  .blog-container {
    width: 95%;
    margin: 20px auto;
    padding: 15px;
  }

  .blog-header h1 {
    font-size: 2rem;
  }

  .blog-subtitle {
    font-size: 1rem;
  }

  .coming-soon {
    padding: 25px 20px;
  }

  .coming-soon h2 {
    font-size: 1.5rem;
  }

  .topics-list li {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .blog-container {
    width: 98%;
    padding: 10px;
  }

  .blog-header h1 {
    font-size: 1.8rem;
  }

  .coming-soon {
    padding: 20px 15px;
  }

  .coming-soon h2 {
    font-size: 1.3rem;
  }
}
</style>
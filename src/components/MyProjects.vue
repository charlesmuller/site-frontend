<template>
    <div class="my-projects-container">
        <div class="construction-content">
            <div class="construction-icon">
                🚧
            </div>
            <h1 class="construction-title">My Projects</h1>
            <p class="construction-subtitle">This section is under construction</p>
            <div class="construction-description">
                <p>Coming soon, you will be able to see here:</p>
                <ul class="features-list">
                    <li>🎯 Personal and professional projects</li>
                    <li>💻 Technologies used</li>
                    <li>🔗 Repository links</li>
                    <li>📱 Interactive demos</li>
                    <li>📊 Metrics and results</li>
                </ul>
            </div>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <p class="progress-text">Progress: 25%</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyProjects'
}
</script>

<style scoped>
.my-projects-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    padding: 40px 20px;
    font-family: var(--font-primary);
}

.construction-content {
    text-align: center;
    max-width: 600px;
    background-color: #FFFCF5;
    border: 2px solid #E8E8E3;
    border-radius: 16px;
    padding: 40px 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.construction-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.construction-title {
    font-size: 2.5rem;
    color: #212320;
    margin-bottom: 10px;
    font-weight: 100;
}

.construction-subtitle {
    font-size: 1.2rem;
    color: #666666;
    margin-bottom: 30px;
    font-style: italic;
}

.construction-description {
    text-align: left;
    margin-bottom: 30px;
}

.construction-description p {
    font-size: 1.1rem;
    color: #212320;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 500;
}

.features-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.features-list li {
    font-size: 1rem;
    color: #555555;
    margin-bottom: 10px;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s ease;
}

.features-list li:hover {
    color: #4a90e2;
    transform: translateX(5px);
}

.features-list li:last-child {
    border-bottom: none;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background-color: #E8E8E3;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress-fill {
    width: 25%;
    height: 100%;
    background: linear-gradient(90deg, #4a90e2, #5ba3f5);
    border-radius: 4px;
    animation: progressPulse 2s ease-in-out infinite;
}

@keyframes progressPulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
}

.progress-text {
    font-size: 0.9rem;
    color: #666666;
    margin: 0;
}

/* Responsividade */
@media (max-width: 768px) {
    .my-projects-container {
        padding: 20px 15px;
        min-height: 60vh;
    }
    
    .construction-content {
        padding: 30px 20px;
    }
    
    .construction-title {
        font-size: 2rem;
    }
    
    .construction-icon {
        font-size: 3rem;
    }
}

@media (max-width: 480px) {
    .my-projects-container {
        padding: 15px 10px;
        min-height: 50vh;
    }
    
    .construction-content {
        padding: 20px 12px;
    }
    
    .construction-title {
        font-size: 1.6rem;
    }
    
    .construction-subtitle {
        font-size: 0.95rem;
    }
    
    .construction-description p {
        font-size: 1rem;
    }
    
    .features-list li {
        font-size: 0.85rem;
        padding: 6px 0;
    }
}

@media (max-width: 360px) {
    .my-projects-container {
        padding: 10px 8px;
    }
    
    .construction-content {
        padding: 15px 10px;
    }
    
    .construction-title {
        font-size: 1.4rem;
    }
    
    .construction-subtitle {
        font-size: 0.9rem;
    }
    
    .construction-icon {
        font-size: 2.5rem;
    }
    
    .construction-description p {
        font-size: 0.95rem;
    }
    
    .features-list li {
        font-size: 0.8rem;
    }
}

@media (max-width: 320px) {
    .my-projects-container {
        padding: 8px 5px;
    }
    
    .construction-content {
        padding: 12px 8px;
    }
    
    .construction-title {
        font-size: 1.2rem;
    }
    
    .construction-subtitle {
        font-size: 0.85rem;
    }
    
    .construction-icon {
        font-size: 2rem;
        margin-bottom: 15px;
    }
    
    .construction-description p {
        font-size: 0.9rem;
    }
    
    .features-list li {
        font-size: 0.75rem;
        padding: 5px 0;
    }
    
    .progress-text {
        font-size: 0.8rem;
    }
}
</style>

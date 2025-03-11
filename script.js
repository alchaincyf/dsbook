// 推荐语区域的交互效果
document.addEventListener('DOMContentLoaded', function() {
    const endorsementCards = document.querySelectorAll('.endorsement-card');
    
    endorsementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f7ff';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--bg-color)';
        });
    });
    
    // 资源模态框
    const resourceLinks = document.querySelectorAll('.resource-link');
    const resourceModal = document.getElementById('resource-modal');
    const closeModal = document.querySelector('.close-modal');
    
    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            resourceModal.style.display = 'flex';
        });
    });
    
    closeModal.addEventListener('click', function() {
        resourceModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === resourceModal) {
            resourceModal.style.display = 'none';
        }
    });
    
    // 移动端菜单
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // 评论轮播
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const reviewsSlider = document.querySelector('.reviews-slider');
    
    nextBtn.addEventListener('click', function() {
        reviewsSlider.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    });
    
    prevBtn.addEventListener('click', function() {
        reviewsSlider.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    });
    
    // 使用花生的实际信息替换占位符
    // 作者头像 - 使用花生的个人网站头像
    document.querySelector('.author-image img').src = 'https://www.huasheng.ai/assets/img/avatar.jpg';
    
    // 更新作者简介
    const authorBio = document.querySelector('.author-bio');
    if (authorBio) {
        const bioHTML = `
            <h3>陈云飞（@花生）</h3>
            <p>AI Native Coder｜第一代不会写代码的独立开发者</p>
            <p>AppStore 付费榜 Top1「小猫补光灯」开发者</p>
            <p>10万+粉AI博主，B站/YouTube 频道：AI进化论-花生</p>
            <p>微软｜LinkedIn AI课程讲师</p>
            <p>最受DeepSeek推荐的AI编程up主</p>
            <div class="social-links">
                <a href="https://www.youtube.com/@huashengai" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://space.bilibili.com/3493270982634888" target="_blank"><i class="fab fa-bilibili"></i></a>
                <a href="https://www.xiaohongshu.com/user/profile/63f5c1c1000000001f00d2b8" target="_blank"><i class="fas fa-heart"></i></a>
                <a href="https://twitter.com/huashengai" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://weixin.qq.com/r/mDrUwXTEMqrGrXEQ92mO" target="_blank"><i class="fab fa-weixin"></i></a>
            </div>
        `;
        authorBio.innerHTML = bioHTML;
    }
    
    // 读者头像
    const reviewerAvatars = document.querySelectorAll('.reviewer-avatar img');
    reviewerAvatars[0].src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
    reviewerAvatars[1].src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
    reviewerAvatars[2].src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
    
    // 商店图标
    const storeIcons = document.querySelectorAll('.store-card img');
    storeIcons[0].src = 'https://img.icons8.com/color/96/000000/jd.png';
    storeIcons[1].src = 'https://img.icons8.com/color/96/000000/tmall.png';
    storeIcons[2].src = 'https://img.icons8.com/color/96/000000/dangdang.png';
    storeIcons[3].src = 'https://img.icons8.com/color/96/000000/amazon.png';
    
    // 更新页脚信息
    const footerLinks = document.querySelector('.footer-column:nth-child(3) ul');
    if (footerLinks) {
        footerLinks.innerHTML = `
            <li><a href="https://weixin.qq.com/r/mDrUwXTEMqrGrXEQ92mO" target="_blank">微信公众号：花叔</a></li>
            <li><a href="https://space.bilibili.com/3493270982634888" target="_blank">B站：AI进化论-花生</a></li>
            <li><a href="https://www.youtube.com/@huashengai" target="_blank">YouTube：AI进化论-花生</a></li>
            <li><a href="mailto:contact@huasheng.ai">contact@huasheng.ai</a></li>
        `;
    }
}); 
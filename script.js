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
                <a href="https://www.youtube.com/@Alchain" target="_blank" title="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="https://space.bilibili.com/14097567" target="_blank" title="Bilibili"><i class="fab fa-bilibili"></i></a>
                <a href="https://www.xiaohongshu.com/user/profile/5abc6f17e8ac2b109179dfdf" target="_blank" title="小红书"><i class="fas fa-heart"></i></a>
                <a href="https://x.com/AlchainHust" target="_blank" title="X"><i class="fab fa-twitter"></i></a>
                <a href="#" class="wechat-link" title="微信"><i class="fab fa-weixin"></i></a>
            </div>
            <div class="wechat-qrcode">
                <img src="/images/微信.jpg" alt="微信二维码" width="180" height="180">
            </div>
        `;
        authorBio.innerHTML = bioHTML;
        
        // 添加微信二维码悬停效果
        const wechatLink = document.querySelector('.wechat-link');
        const wechatQrcode = document.querySelector('.wechat-qrcode');
        
        if (wechatLink && wechatQrcode) {
            wechatLink.addEventListener('mouseenter', function() {
                wechatQrcode.style.display = 'block';
            });
            
            wechatLink.addEventListener('mouseleave', function() {
                wechatQrcode.style.display = 'none';
            });
            
            // 点击复制微信号
            wechatLink.addEventListener('click', function(e) {
                e.preventDefault();
                navigator.clipboard.writeText('alchain')
                    .then(() => {
                        showToast('微信号已复制到剪贴板');
                    })
                    .catch(err => {
                        console.error('无法复制微信号: ', err);
                    });
            });
        }
    }
    
    // 读者头像
    const reviewerAvatars = document.querySelectorAll('.reviewer-avatar img');
    reviewerAvatars[0].src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
    reviewerAvatars[1].src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
    reviewerAvatars[2].src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
    
    // 商店图标
    const storeGrid = document.querySelector('.store-grid');
    if (storeGrid) {
        storeGrid.innerHTML = `
            <div class="store-card">
                <a href="https://item.jd.com/商品ID.html" target="_blank">
                    <i class="fab fa-jedi-order"></i>
                    <h3>京东商城</h3>
                    <p>¥59.80</p>
                </a>
            </div>
            <div class="store-card">
                <a href="https://detail.tmall.com/商品ID.htm" target="_blank">
                    <i class="fas fa-shopping-bag"></i>
                    <h3>天猫商城</h3>
                    <p>¥59.80</p>
                </a>
            </div>
            <div class="store-card">
                <a href="http://product.dangdang.com/商品ID.html" target="_blank">
                    <i class="fas fa-book"></i>
                    <h3>当当网</h3>
                    <p>¥59.80</p>
                </a>
            </div>
            <div class="store-card">
                <a href="https://www.amazon.cn/dp/商品ID" target="_blank">
                    <i class="fab fa-amazon"></i>
                    <h3>亚马逊</h3>
                    <p>¥59.80</p>
                </a>
            </div>
        `;
    }
    
    // 更新页脚信息
    const footerLinks = document.querySelector('.footer-column:nth-child(3) ul');
    if (footerLinks) {
        footerLinks.innerHTML = `
            <li><a href="#" class="footer-wechat">微信公众号：花叔</a></li>
            <li><a href="https://space.bilibili.com/14097567" target="_blank">B站：AI进化论-花生</a></li>
            <li><a href="https://www.youtube.com/@Alchain" target="_blank">YouTube：AI进化论-花生</a></li>
            <li><a href="mailto:contact@huasheng.ai">contact@huasheng.ai</a></li>
        `;
        
        // 添加点击复制微信公众号功能
        const footerWechat = document.querySelector('.footer-wechat');
        if (footerWechat) {
            footerWechat.addEventListener('click', function(e) {
                e.preventDefault();
                navigator.clipboard.writeText('花叔')
                    .then(() => {
                        showToast('微信公众号已复制到剪贴板');
                    })
                    .catch(err => {
                        console.error('无法复制微信公众号: ', err);
                    });
            });
        }
    }
});

// 添加提示消息功能
function showToast(message) {
    // 检查是否已存在toast元素
    let toast = document.querySelector('.toast');
    
    if (!toast) {
        // 创建toast元素
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    
    // 设置消息并显示
    toast.textContent = message;
    toast.classList.add('show');
    
    // 3秒后隐藏
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
} 
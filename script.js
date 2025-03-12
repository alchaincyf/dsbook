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
    
    // 检查是否已验证
    const isVerified = localStorage.getItem('deepseekBookVerified') === 'true';
    
    // 如果已验证，移除链接的验证弹窗
    if (isVerified) {
        resourceLinks.forEach(link => {
            // 移除原有的点击事件
            const originalHref = link.getAttribute('href');
            link.addEventListener('click', function(e) {
                e.stopPropagation(); // 阻止事件冒泡
                window.open(originalHref, '_blank');
            });
        });
    } else {
        // 未验证时，点击资源链接弹出验证框
        resourceLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                resourceModal.style.display = 'flex';
            });
        });
    }
    
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
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
    });
    
    // 评论轮播
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const reviewsSlider = document.querySelector('.reviews-slider');
    
    if (prevBtn && nextBtn && reviewsSlider) {
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
    }
    
    // 使用花生的实际信息替换占位符
    // 作者头像 - 使用提供的icon.jpg
    const authorImage = document.querySelector('.author-image img');
    if (authorImage) {
        authorImage.src = 'icon.jpg';
    }
    
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
                wechatQrcode.classList.remove('hidden');
            });
            
            wechatLink.addEventListener('mouseleave', function() {
                wechatQrcode.classList.add('hidden');
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
    if (reviewerAvatars.length > 0) {
        reviewerAvatars[0].src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
        if (reviewerAvatars.length > 1) {
            reviewerAvatars[1].src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
        }
        if (reviewerAvatars.length > 2) {
            reviewerAvatars[2].src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80';
        }
    }
    
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
            <li><a href="mailto:alchaincyf@gmail.com">alchaincyf@gmail.com</a></li>
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
    
    // 视频切换功能
    const videoTabs = document.querySelectorAll('.video-tab');
    
    videoTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有标签的active类
            videoTabs.forEach(t => t.classList.remove('active'));
            // 为当前标签添加active类
            this.classList.add('active');
            
            // 获取视频ID
            const videoId = this.getAttribute('data-video');
            
            // 隐藏所有视频
            document.querySelectorAll('.video-player').forEach(player => {
                player.classList.remove('current');
            });
            
            // 显示选中的视频
            document.getElementById(`player-${videoId}`).classList.add('current');
        });
    });
    
    // 点击缩略图直接跳转到B站
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoPreview = this.closest('.video-preview');
            const videoLink = videoPreview.querySelector('.video-info a');
            if (videoLink) {
                window.open(videoLink.href, '_blank');
            }
        });
    });
    
    // 添加滚动动画
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in-element');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };
    
    // 初始化需要动画的元素
    const sectionsToAnimate = document.querySelectorAll('section');
    sectionsToAnimate.forEach(section => {
        if (!section.classList.contains('hero')) {
            section.classList.add('fade-in-element');
        }
    });
    
    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    
    // 初始检查
    animateOnScroll();
    
    // 模拟AI打字效果
    setTimeout(() => {
        const typingMessage = document.querySelector('.message.ai.typing');
        if (typingMessage) {
            typingMessage.classList.remove('typing');
        }
    }, 3000);
    
    // 添加粒子效果
    const particlesContainer = document.querySelector('.ai-particles');
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // 随机位置和大小
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // 随机动画延迟
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // 资源获取按钮点击事件
    const getResourcesBtn = document.getElementById('get-resources');
    const successModal = document.getElementById('success-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    
    if (getResourcesBtn) {
        getResourcesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (resourceModal) {
                resourceModal.style.display = 'flex';
            }
        });
    }
    
    // 关闭模态框
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            resourceModal.style.display = 'none';
            successModal.style.display = 'none';
        });
    });
    
    // 验证方式切换
    const verificationTabs = document.querySelectorAll('.verification-tab');
    const verificationMethods = document.querySelectorAll('.verification-method');
    
    verificationTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有标签的active类
            verificationTabs.forEach(t => t.classList.remove('active'));
            // 为当前标签添加active类
            this.classList.add('active');
            
            // 获取验证方式
            const method = this.getAttribute('data-method');
            
            // 隐藏所有验证方式
            verificationMethods.forEach(m => m.classList.remove('active'));
            
            // 显示选中的验证方式
            document.getElementById(`${method}-method`).classList.add('active');
        });
    });
    
    // 扫描条形码功能
    const startScanBtn = document.getElementById('start-scan');
    const barcodeScanner = document.getElementById('barcode-scanner');
    
    if (startScanBtn && barcodeScanner) {
        startScanBtn.addEventListener('click', function() {
            // 显示验证状态
            document.querySelector('.verification-status').style.display = 'block';
            document.querySelector('.status-message').textContent = '正在初始化摄像头...';
            document.querySelector('.progress').style.width = '20%';
            
            // 初始化QuaggaJS
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: barcodeScanner,
                    constraints: {
                        width: 300,
                        height: 200,
                        facingMode: "environment"
                    },
                },
                locator: {
                    patchSize: "medium",
                    halfSample: true
                },
                numOfWorkers: 2,
                decoder: {
                    readers: ["ean_reader", "ean_8_reader"]
                },
                locate: true
            }, function(err) {
                if (err) {
                    console.error(err);
                    document.querySelector('.status-message').textContent = '摄像头初始化失败，请检查权限';
                    document.querySelector('.status-icon i').classList.remove('fa-spinner', 'fa-spin');
                    document.querySelector('.status-icon i').classList.add('fa-times-circle');
                    document.querySelector('.status-icon i').style.color = '#e74c3c';
                    return;
                }
                
                document.querySelector('.progress').style.width = '40%';
                document.querySelector('.status-message').textContent = '正在扫描条形码...';
                Quagga.start();
            });
            
            // 监听扫描结果
            Quagga.onDetected(function(result) {
                const code = result.codeResult.code;
                console.log("检测到条形码:", code);
                
                document.querySelector('.progress').style.width = '70%';
                document.querySelector('.status-message').textContent = '正在验证ISBN...';
                
                // 验证ISBN
                setTimeout(() => {
                    if (code === "9787115667151") {
                        // 停止扫描
                        Quagga.stop();
                        
                        document.querySelector('.progress').style.width = '100%';
                        document.querySelector('.status-icon i').classList.remove('fa-spinner', 'fa-spin');
                        document.querySelector('.status-icon i').classList.add('fa-check-circle');
                        document.querySelector('.status-message').textContent = '验证成功！';
                        
                        // 显示成功模态框
                        setTimeout(() => {
                            resourceModal.style.display = 'none';
                            successModal.style.display = 'flex';
                            
                            // 设置验证状态到localStorage
                            localStorage.setItem('deepseekBookVerified', 'true');
                        }, 1000);
                    }
                }, 500);
            });
        });
    }
    
    // 上传条形码图片功能
    const uploadArea = document.getElementById('upload-area');
    const barcodeUpload = document.getElementById('barcode-upload');
    const uploadPreview = document.getElementById('upload-preview');
    const previewImage = document.getElementById('preview-image');
    const processImageBtn = document.getElementById('process-image');
    
    if (uploadArea && barcodeUpload) {
        uploadArea.addEventListener('click', function() {
            barcodeUpload.click();
        });
        
        barcodeUpload.addEventListener('change', function(e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                    uploadArea.style.display = 'none';
                    uploadPreview.style.display = 'block';
                }
                
                reader.readAsDataURL(e.target.files[0]);
            }
        });
        
        processImageBtn.addEventListener('click', function() {
            // 显示验证状态
            document.querySelector('.verification-status').style.display = 'block';
            document.querySelector('.status-message').textContent = '正在处理图片...';
            
            // 模拟处理过程
            setTimeout(() => {
                document.querySelector('.status-message').textContent = '正在识别条形码...';
                document.querySelector('.progress').style.width = '40%';
                
                setTimeout(() => {
                    document.querySelector('.progress').style.width = '70%';
                    document.querySelector('.status-message').textContent = '正在验证ISBN...';
                    
                    setTimeout(() => {
                        document.querySelector('.progress').style.width = '100%';
                        document.querySelector('.status-icon i').classList.remove('fa-spinner', 'fa-spin');
                        document.querySelector('.status-icon i').classList.add('fa-check-circle');
                        document.querySelector('.status-message').textContent = '验证成功！';
                        
                        // 显示成功模态框
                        setTimeout(() => {
                            resourceModal.style.display = 'none';
                            successModal.style.display = 'flex';
                        }, 1000);
                    }, 1000);
                }, 1500);
            }, 1000);
        });
    }
    
    // 手动输入ISBN功能
    const isbnInput = document.getElementById('isbn-input');
    const verifyIsbnBtn = document.getElementById('verify-isbn');
    
    if (isbnInput && verifyIsbnBtn) {
        // 自动格式化ISBN输入
        isbnInput.addEventListener('input', function() {
            let value = this.value.replace(/[^0-9]/g, '');
            if (value.length > 13) {
                value = value.substr(0, 13);
            }
            
            // 添加连字符
            if (value.length > 0) {
                let formattedValue = '';
                for (let i = 0; i < value.length; i++) {
                    if (i === 3 || i === 4 || i === 9 || i === 12) {
                        formattedValue += '-';
                    }
                    formattedValue += value[i];
                }
                this.value = formattedValue;
            }
        });
        
        verifyIsbnBtn.addEventListener('click', function() {
            const isbn = isbnInput.value.replace(/[^0-9]/g, '');
            
            // 显示验证状态
            document.querySelector('.verification-status').style.display = 'block';
            document.querySelector('.status-message').textContent = '正在验证ISBN...';
            document.querySelector('.progress').style.width = '50%';
            
            // 验证ISBN
            setTimeout(() => {
                if (isbn === '9787115667151') {
                    document.querySelector('.progress').style.width = '100%';
                    document.querySelector('.status-icon i').classList.remove('fa-spinner', 'fa-spin');
                    document.querySelector('.status-icon i').classList.add('fa-check-circle');
                    document.querySelector('.status-message').textContent = '验证成功！';
                    
                    // 显示成功模态框
                    setTimeout(() => {
                        resourceModal.style.display = 'none';
                        successModal.style.display = 'flex';
                    }, 1000);
                } else {
                    document.querySelector('.progress').style.width = '100%';
                    document.querySelector('.status-icon i').classList.remove('fa-spinner', 'fa-spin');
                    document.querySelector('.status-icon i').classList.add('fa-times-circle');
                    document.querySelector('.status-icon i').style.color = '#e74c3c';
                    document.querySelector('.status-message').textContent = 'ISBN无效，请重新输入';
                    
                    setTimeout(() => {
                        document.querySelector('.verification-status').style.display = 'none';
                        document.querySelector('.progress').style.width = '0';
                        document.querySelector('.status-icon i').classList.remove('fa-times-circle');
                        document.querySelector('.status-icon i').classList.add('fa-spinner', 'fa-spin');
                        document.querySelector('.status-icon i').style.color = 'var(--primary-color)';
                    }, 2000);
                }
            }, 1500);
        });
    }
    
    // 成功模态框按钮事件
    const accessResourcesBtn = document.getElementById('access-resources');
    const joinCommunityBtn = document.getElementById('join-community');
    
    if (accessResourcesBtn) {
        accessResourcesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            successModal.style.display = 'none';
            
            // 设置验证状态
            localStorage.setItem('deepseekBookVerified', 'true');
            
            // 刷新页面以应用新的验证状态
            window.location.reload();
        });
    }
    
    if (joinCommunityBtn) {
        joinCommunityBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 这里可以跳转到社区页面或者打开社区链接
            window.open('https://ds.huasheng.ai/', '_blank');
        });
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

// 添加CSS样式
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        background-color: rgba(0, 119, 204, 0.2);
        border-radius: 50%;
        pointer-events: none;
        animation: float 15s infinite linear;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .fade-in-element {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .fade-in-element.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 
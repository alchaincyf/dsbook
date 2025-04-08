/**
 * 不合时宜播客劳资争议事件调查 - 主JavaScript文件
 */

// 页面加载完成处理
document.addEventListener('DOMContentLoaded', function() {
    // 标记页面已加载，触发CSS过渡效果
    document.body.classList.add('loaded');
    
    // 初始化导航菜单
    initNavigation();
    
    // 初始化Tab切换
    initTabs();
    
    // 初始化模态框
    initModal();
    
    // 初始化证据标签点击
    initEvidenceTags();
    
    // 初始化迷你播放器
    initMiniPlayer();
    
    // 平滑滚动处理
    initSmoothScroll();
    
    // 如果存在图表则初始化图表
    if (typeof Chart !== 'undefined') {
        initCharts();
    }
    
    // 为所有的外部链接添加新标签打开
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

/**
 * 初始化导航菜单
 */
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            // 切换展开状态
            navLinks.classList.toggle('active');
            
            // 更新ARIA属性
            const expanded = navLinks.classList.contains('active');
            navToggle.setAttribute('aria-expanded', expanded);
        });
        
        // 点击链接后关闭菜单
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // 添加当前页面活动标记
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.href === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

/**
 * 初始化Tab切换功能
 */
function initTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabList = this.closest('.tabs');
            const tabContents = document.querySelectorAll('.tab-content');
            
            // 移除所有tab的活动状态
            tabList.querySelectorAll('.tab').forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            
            // 隐藏所有面板
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // 设置当前tab为活动状态
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            // 显示对应的面板
            const panelId = this.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            if (panel) {
                panel.classList.add('active');
            }
        });
        
        // 添加键盘导航支持
        tab.addEventListener('keydown', function(e) {
            const tabs = Array.from(this.closest('.tabs').querySelectorAll('.tab'));
            const index = tabs.indexOf(this);
            
            // 左右箭头导航
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                
                let newIndex;
                if (e.key === 'ArrowRight') {
                    newIndex = index === tabs.length - 1 ? 0 : index + 1;
                } else {
                    newIndex = index === 0 ? tabs.length - 1 : index - 1;
                }
                
                tabs[newIndex].focus();
                tabs[newIndex].click();
            }
        });
    });
}

/**
 * 初始化模态框功能
 */
function initModal() {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal .close');
    
    if (!modal) return;
    
    // 点击图片时打开模态框
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            openModal(this);
        });
        
        // 添加键盘访问支持
        img.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(this);
            }
        });
        
        // 使图片可通过键盘聚焦
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', '查看大图: ' + (img.alt || '图片'));
    });
    
    // 打开模态框
    function openModal(img) {
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        
        const caption = img.closest('.gallery-item').querySelector('.gallery-caption');
        if (caption) {
            modalCaption.textContent = caption.textContent;
        } else {
            modalCaption.textContent = img.alt;
        }
        
        // 焦点陷阱
        setTimeout(() => closeBtn.focus(), 100);
        
        // 打开时禁止背景滚动
        document.body.style.overflow = 'hidden';
        
        // 通知屏幕阅读器
        modal.setAttribute('aria-hidden', 'false');
    }
    
    // 关闭模态框
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // 点击背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // 按ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        modal.setAttribute('aria-hidden', 'true');
        
        // 返回焦点
        const activeElement = document.activeElement;
        if (activeElement === closeBtn) {
            setTimeout(() => {
                document.querySelector('.gallery-item img[tabindex="0"]')?.focus();
            }, 100);
        }
    }
}

/**
 * 初始化证据标签点击事件
 */
function initEvidenceTags() {
    document.querySelectorAll('.evidence-tag').forEach(btn => {
        btn.addEventListener('click', function() {
            const evidenceId = this.getAttribute('data-evidence');
            const evidenceSection = document.getElementById('evidence');
            
            if (evidenceSection) {
                // 滚动到证据区
                evidenceSection.scrollIntoView({ behavior: 'smooth' });
                
                // 如果有多个证据ID (例如 "1,2")，处理第一个
                const firstId = evidenceId.split(',')[0];
                
                // 高亮对应的证据项
                setTimeout(() => {
                    const evidenceItem = document.querySelector(`.gallery-item:nth-child(${firstId})`);
                    if (evidenceItem) {
                        evidenceItem.classList.add('highlight');
                        setTimeout(() => {
                            evidenceItem.classList.remove('highlight');
                        }, 2000);
                    }
                }, 500);
            }
        });
    });
}

/**
 * 初始化迷你播放器
 */
function initMiniPlayer() {
    const podcastDecoration = document.querySelector('.podcast-decoration');
    const miniPlayer = document.querySelector('.mini-player');
    const closeBtn = document.querySelector('.mini-player .close-btn');
    
    if (podcastDecoration && miniPlayer) {
        // 点击播客图标显示播放器
        podcastDecoration.addEventListener('click', function() {
            miniPlayer.style.bottom = '0';
            setTimeout(() => {
                closeBtn.focus();
            }, 300);
        });
        
        // 关闭播放器
        closeBtn.addEventListener('click', function() {
            miniPlayer.style.bottom = '-70px';
            setTimeout(() => {
                podcastDecoration.focus();
            }, 300);
        });
    }
}

/**
 * 初始化平滑滚动
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 确保是页面内锚点链接
            if (href.length > 1) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // 为target元素设置焦点，以支持屏幕阅读器
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();
                    
                    // 更新URL但不触发滚动
                    history.pushState(null, null, href);
                }
            }
        });
    });
}

/**
 * 初始化图表(如果需要的话)
 */
function initCharts() {
    // 这里可以添加使用Chart.js的代码
    // 例如绘制案例数量统计、媒体曝光度等图表
}

/**
 * 检测元素是否进入视口
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * 监听滚动事件，用于动画效果
 */
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('fadeIn');
        }
    });
}

// 添加滚动监听
window.addEventListener('scroll', handleScrollAnimations); 
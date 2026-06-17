document.addEventListener('DOMContentLoaded', function() {
    const digBtn = document.getElementById('dig-btn');
    const gaugeFill = document.getElementById('gauge-fill');
    const escapePercent = document.getElementById('escape-percent');
    const ground = document.querySelector('.ground');
    const cage = document.querySelector('.cage');
    
    // 요소 확인
    if (!digBtn || !gaugeFill || !escapePercent) {
        console.error('필요한 요소를 찾을 수 없습니다');
        return;
    }
    
    const MAX_DIGS = 20;
    let currentDigs = 0;
    let isCompleted = false;
    
    digBtn.addEventListener('click', function() {
        if (isCompleted) return;
        
        currentDigs++;
        const percentage = (currentDigs / MAX_DIGS) * 100;
        
        // 게이지 업데이트
        gaugeFill.style.width = percentage + '%';
        escapePercent.textContent = Math.round(percentage) + '%';
        
        // 버튼 애니메이션
        digBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            digBtn.style.transform = 'scale(1)';
        }, 100);
        
        // 완성
        if (currentDigs >= MAX_DIGS) {
            isCompleted = true;
            digBtn.disabled = true;
            digBtn.textContent = '성공! 늑구가 탈출했습니다';
            digBtn.style.background = '#7a8f7d';
            digBtn.style.color = '#fff';
            digBtn.style.cursor = 'default';
            
            if (ground) ground.classList.add('digging');
            if (cage) cage.classList.add('escaped');
        }
    });
});
document.addEventListener('keydown', (e) => {
  // 슬라이드 파일 경로 매칭 (slide/slide-01.html 또는 slide-01.html 형식 모두 지원)
  const match = location.pathname.match(/(?:slide\/)?slide-(\d+)\.html/);
  const current = match ? parseInt(match[1], 10) : null;
  const totalSlides = 10;
  const isInSlideFolder = location.pathname.includes('/slide/');

  // 슬라이드 페이지에서만 동작
  if (match) {
    const slidePath = isInSlideFolder ? '' : 'slide/';
    
    if (e.key === 'ArrowRight' || e.key === ' ') {
      // 다음 슬라이드 (마지막 슬라이드가 아니면)
      if (current < totalSlides) {
        e.preventDefault();
        location.href = `${slidePath}slide-${String(current + 1).padStart(2, '0')}.html`;
      }
    }

    if (e.key === 'ArrowLeft') {
      // 이전 슬라이드
      if (current > 1) {
        e.preventDefault();
        location.href = `${slidePath}slide-${String(current - 1).padStart(2, '0')}.html`;
      }
    }

    if (e.key === 'Home') {
      // 첫 슬라이드로 이동
      e.preventDefault();
      location.href = `${slidePath}slide-01.html`;
    }

    if (e.key === 'End') {
      // 마지막 슬라이드로 이동
      e.preventDefault();
      location.href = `${slidePath}slide-${String(totalSlides).padStart(2, '0')}.html`;
    }

    if (e.key === 'h' || e.key === 'H') {
      // 홈으로 이동
      e.preventDefault();
      if (isInSlideFolder) {
        location.href = '../index.html';
      } else {
        location.href = 'index.html';
      }
    }
  }
});
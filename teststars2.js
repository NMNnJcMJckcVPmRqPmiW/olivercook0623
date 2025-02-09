(function() {
  // 创建星星容器
  const starContainer = document.createElement('div');
  starContainer.style.position = 'absolute';
  starContainer.style.top = '0';
  starContainer.style.left = '0';
  starContainer.style.width = '100%';
  starContainer.style.height = '100%';
  starContainer.style.pointerEvents = 'none'; // 防止影响页面其他元素
  document.body.appendChild(starContainer);

  // 创建星星
  function createStar() {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.backgroundColor = 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = '0.8';
    star.style.pointerEvents = 'none';

    // 随机设置星星的大小
    const size = Math.random() * 3 + 1; // 星星大小在 1px 到 4px 之间
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // 随机设置星星的初始位置
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    // 随机设置星星的飘动速度
    const duration = Math.random() * 10 + 15; // 星星漂浮的时间在 15s 到 25s 之间
    star.style.animation = `drift ${duration}s linear infinite, blink 1.5s ease-in-out infinite`;

    // 给星星添加闪烁动画
    const styleSheet = document.styleSheets[0] || document.createElement('style');
    if (!document.styleSheets.length) {
      document.head.appendChild(styleSheet);
    }
    styleSheet.insertRule(`
      @keyframes drift {
        0% {
          transform: translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh);
        }
        50% {
          transform: translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh);
        }
        100% {
          transform: translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh);
        }
      }
    `, styleSheet.cssRules.length);

    styleSheet.insertRule(`
      @keyframes blink {
        0%, 100% {
          opacity: 0.6;
        }
        50% {
          opacity: 1;
        }
      }
    `, styleSheet.cssRules.length);

    // 添加到容器中
    starContainer.appendChild(star);

    // 星星飘完后从 DOM 中移除
    setTimeout(() => {
      star.remove();
    }, duration * 1000);
  }

  // 每隔 150 毫秒创建一颗星星
  setInterval(createStar, 150);
})();

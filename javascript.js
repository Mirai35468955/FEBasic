// JavaScriptファイル (scripts.js) 内

const imageContainer = document.querySelector('.image-scroll');
const scrollDistance = 300; // スクロール量（ピクセル単位）

document.querySelector('.next-button').addEventListener('click', () => {
    // 右にスクロール
    imageContainer.scrollLeft += scrollDistance;
});

document.querySelector('.prev-button').addEventListener('click', () => {
    // 左にスクロール
    imageContainer.scrollLeft -= scrollDistance;
});

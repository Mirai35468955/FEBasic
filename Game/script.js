document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const images = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🍍', '🍑'];
    let tiles = createTiles(images); // タイル作成関数を呼び出し
    displayTiles(tiles, gameBoard); // タイル表示関数を呼び出し

    const clickedImages = []; // クリックされたタイルの画像を保存する配列

    let messageDisplayed = false;

    gameBoard.addEventListener('click', event => {
        if (messageDisplayed) {
            // メッセージが表示されている場合はリセット
            resetGame(gameBoard, images);
            messageDisplayed = false;
            clickedImages.length = 0;
            return;
        }

        const clickedTile = event.target;
        if (clickedTile.classList.contains('tile')) {
            // Show image
            clickedTile.textContent = clickedTile.dataset.image;

            // Check if the clicked image was already clicked before
            if (clickedImages.includes(clickedTile.dataset.image)) {
                console.log("含まれてます");
                // If the image was clicked before, show the message
                showCongratulations();
                messageDisplayed = true;
            } else {
                // If not, add the image to the array of clicked images
                clickedImages.push(clickedTile.dataset.image);
            }
        }
    });
});

function createTiles(images) {
    // 画像を2倍にしてシャッフル
    return [...images, ...images].sort(() => 0.5 - Math.random());
}

function displayTiles(tiles, gameBoard) {
    // ゲームボードにタイルを表示
    gameBoard.innerHTML = '';
    tiles.forEach(image => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        tileElement.dataset.image = image;
        gameBoard.appendChild(tileElement);
    });
}

function showCongratulations() {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = 'Congratulations!';
    document.body.appendChild(messageDiv);
    messageDiv.style.display = 'block';
}

function resetGame(gameBoard, images) {
    // メッセージを削除
    document.querySelector('.message')?.remove();

    // 新しいタイルセットを作成して表示
    let tiles = createTiles(images);
    displayTiles(tiles, gameBoard);
}

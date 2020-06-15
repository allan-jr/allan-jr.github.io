var GameBlock = function () {

    /**
     *   0 0 0
     *     0
     */
    var entityOne = function () {
        var blockArray = [
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.one.type, GameParams.blockType.one.type, GameParams.blockType.one.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.one.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
        ];
        return {blockType: GameParams.blockType.one, blockArray: blockArray, location: {x: -2, y: 3}, isFrozen: false};
    };

    /**
     *   0 0
     *     0
     *     0
     */
    var entityTwo = function () {
        var blockArray = [
            [GameParams.blockType.two.type, GameParams.blockType.two.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.two.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.two.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
        ];
        return {blockType: GameParams.blockType.two, blockArray: blockArray, location: {x: -2, y: 3}, isFrozen: false};
    };

    /**
     *     0 0
     *     0
     *     0
     */
    var entityThree = function () {
        var blockArray = [
            [GameParams.blockType.zero.type, GameParams.blockType.three.type, GameParams.blockType.three.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.three.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.three.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
        ];
        return {
            blockType: GameParams.blockType.three,
            blockArray: blockArray,
            location: {x: -2, y: 3},
            isFrozen: false
        };
    };

    /**
     *     0 0
     *   0 0
     */
    var entityFour = function () {
        var blockArray = [
            [GameParams.blockType.zero.type, GameParams.blockType.four.type, GameParams.blockType.four.type, GameParams.blockType.zero.type],
            [GameParams.blockType.four.type, GameParams.blockType.four.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
        ];
        return {blockType: GameParams.blockType.four, blockArray: blockArray, location: {x: -1, y: 3}, isFrozen: false};
    };

    /**
     *   0 0
     *     0 0
     */
    var entityFive = function () {
        var blockArray = [
            [GameParams.blockType.five.type, GameParams.blockType.five.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.five.type, GameParams.blockType.five.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
        ];
        return {blockType: GameParams.blockType.five, blockArray: blockArray, location: {x: -1, y: 3}, isFrozen: false};
    };

    /**
     *   0 0 0 0
     */
    var entitySix = function () {
        var blockArray = [
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.six.type, GameParams.blockType.six.type, GameParams.blockType.six.type, GameParams.blockType.six.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
        ];
        return {blockType: GameParams.blockType.six, blockArray: blockArray, location: {x: -1, y: 3}, isFrozen: false};
    };

    /**
     *   0 0
     *   0 0
     */
    var entitySeven = function () {
        var blockArray = [
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.seven.type, GameParams.blockType.seven.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.seven.type, GameParams.blockType.seven.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
        ];
        return {
            blockType: GameParams.blockType.seven,
            blockArray: blockArray,
            location: {x: -2, y: 3},
            isFrozen: false
        };
    };

    var entityList = [entityOne(), entityTwo(), entityThree(), entityFour(), entityFive(), entitySix(), entitySeven()];

    /**
     * 鍒濆鍖栨父鎴忔柟鍧�
     */
    this.initEntityBlock = function () {
        return entityList[Math.round(Math.random() * (entityList.length - 1))];
    };

};

var GameMap = function () {

    // 瀹� 10涓柟鍧�
    this.widthAmount = 10;

    // 楂� 20涓柟鍧�
    this.heightAmount = 20;

    // 鍦板浘鐨勬柟鍧楁暟鎹�
    this.gameMapBlocks = [];

    /**
     * 鍦板浘灏忔柟鍧楃殑dom鑺傜偣
     */
    var gameMapBlockDoms = [];

    /**
     * 娓告垙鍦板浘鑺傜偣
     */
    var gameMap = document.getElementById("game-map");

    /**
     * 鍒濆鍖栨父鎴忓湴鍥�
     * @returns 娓告垙鍦板浘鏁版嵁
     */
    this.initGameMapView = function () {
        gameMap.innerHTML = '';
        for (var i = 0; i < this.heightAmount; i++) {
            this.gameMapBlocks[i] = [];
            gameMapBlockDoms[i] = [];
            for (var j = 0; j < this.widthAmount; j++) {
                var blockDom = document.createElement("div");
                var blockType = GameParams.blockType.zero;
                var blockSize = GameParams.blockSize;
                GameUtil.generateBlockStyle(blockDom, blockType.style, blockSize, i * blockSize, j * blockSize);
                gameMap.appendChild(blockDom);
                this.gameMapBlocks[i][j] = blockType;
                gameMapBlockDoms[i][j] = blockDom;
            }
        }
    };

    /**
     * 鍒锋柊娓告垙鍦板浘
     */
    this.refreshGameMap = function () {
        for (var i = 0; i < this.gameMapBlocks.length; i++) {
            for (var j = 0; j < this.gameMapBlocks[i].length; j++) {
                gameMapBlockDoms[i][j].className = this.gameMapBlocks[i][j].style;
            }
        }
    };
};

var GameProperties = function () {

    /**
     * 褰撳墠绛夌骇鐨勮妭鐐�
     */
    this.currentLevelDom = document.getElementById('current-level');

    /**
     * 褰撳墠鍒嗘暟鐨勮妭鐐�
     */
    this.currentScoreDom = document.getElementById('current-score');

    /**
     * 褰撳墠娑堣鐨勮妭鐐�
     */
    this.currentLineDom = document.getElementById('current-line');

    /**
     * 鏆傚仠瑙嗗浘鑺傜偣
     */
    this.pauseDom = document.getElementById('game-pause');

    /**
     * 涓嬩竴涓父鎴忓疄浣撹妭鐐�
     */
    this.nextDom = document.getElementById("next");

    /**
     * 寮€濮嬫父鎴忔寜閽妭鐐�
     */
    this.startButton = document.getElementById('button-start');

    /**
     * 娓告垙璁℃椂鑺傜偣
     */
    this.gameTimeDom = document.getElementById('game-time');

    /**
     * 涓嬩竴绛夌骇杩涘害鑺傜偣
     */
    this.nextLevelProgress = document.getElementById('next-score-progress');

    /**
     * 闃村奖鑺傜偣
     */
    this.gameShadow = document.getElementById('game-shadow');

    /**
     * 娓告垙缁撴潫闈㈡澘鑺傜偣
     */
    this.gameOverPanel = document.getElementById('game-over-panel');

    /**
     * 椤甸潰閬僵鑺傜偣
     */
    this.pageShadow = document.getElementById('page-shadow');

    /**
     * 鐢ㄦ埛寰楀垎鑺傜偣
     */
    this.userScore = document.getElementById('user-score');

    /**
     * 鐢ㄦ埛娑堣鏁伴噺鑺傜偣
     */
    this.userLine = document.getElementById('user-line');

    /**
     * 鐢ㄦ埛鑰楁椂鑺傜偣
     */
    this.userTime = document.getElementById('user-time');

    /**
     * 鐢ㄦ埛绛夌骇鑺傜偣
     */
    this.userLevel = document.getElementById('user-level');

    /**
     * 鏈湴璁板綍鑺傜偣
     */
    this.localRecord = document.getElementById('local-record');

    /**
     * 娓告垙鍦板浘瀵硅薄
     */
    this.gameMap = null;

    /**
     * 娓告垙瀹炰綋瀵硅薄
     */
    this.gameEntity = null;

    /**
     * 涓嬩竴涓父鎴忓疄浣撳璞�
     */
    this.nextGameEntity = null;

    /**
     * 娓告垙缁撴潫鏍囪
     */
    this.isGameOver = false;

    /**
     * 娓告垙鏆傚仠鏍囪
     */
    this.isGamePause = false;

    /**
     * 鏄惁鏄剧ず闃村奖
     */
    this.isShowShadow = false;

    /**
     * 涓嬭惤浠诲姟
     */
    this.downTimer = null;

    /**
     * 璁℃椂浠诲姟
     */
    this.timeTimer = null;

    /**
     * 娓告垙绛夌骇 [1 - 15]
     */
    this.gameLevel = 1;

    /**
     * 娓告垙鍒嗘暟
     */
    this.gameScore = 0;

    /**
     * 娑堥櫎鐨勮鏁�
     */
    this.gameLine = 0;

    /**
     * 娓告垙鏃堕棿 鍗曚綅 s
     */
    this.gameTime = 0;

    /**
     * 娓告垙閫熷害
     */
    this.gameSpeed = 0;
};

var GameControl = function () {

    /**
     * 娓告垙灞炴€�
     */
    var gameProperties = new GameProperties();

    /**
     * 寮€濮嬫父鎴�
     */
    this.startGame = function () {

        // 闅愯棌娓告垙缁撴潫鐨勯潰鏉�
        hideGameOverPanel();

        // 閲嶇疆娓告垙鏁版嵁
        resetGameData();

        // 鏀瑰彉寮€濮嬫父鎴忕殑鎸夐挳鐘舵€�
        changeStartButton();

        // 鍒濆鍖栨父鎴忓湴鍥惧璞�
        gameProperties.gameMap = new GameMap();

        // 鍒濆鍖栨父鎴忓湴鍥�
        gameProperties.gameMap.initGameMapView();

        // 鍒濆鍖栨父鎴忓疄浣�
        initGameEntity();

        // 鍒锋柊娓告垙瀹炰綋鐨勭姸鎬�
        gameEntityActive(0, 0);

        // 鏀瑰彉娓告垙鏁版嵁瑙嗗浘
        changeDataView();

        // 缁戝畾閿洏浜嬩欢
        bindKeyEvent();

        // 鏀瑰彉娓告垙瀹炰綋涓嬭惤鐨勯€熷害
        changeGameEntityDownSpeed();

        // 鏀瑰彉娓告垙鏃堕棿
        changeGameTime();
    };

    /**
     * 鑾峰彇娓告垙鍒嗘暟
     */
    this.getGameScore = function () {
        return gameProperties.gameScore;
    };

    /**
     * 娓告垙鏆傚仠
     */
    var gamePause = function () {
        gameProperties.isGamePause = !gameProperties.isGamePause;
        if (gameProperties.isGamePause) {
            GameUtil.clearTimer(gameProperties.timeTimer);
            GameUtil.clearTimer(gameProperties.downTimer);
            gameProperties.pauseDom.style.display = 'block';
        } else {
            gameEntityAutoDown(gameProperties.gameSpeed);
            changeGameTime();
            gameProperties.pauseDom.style.display = 'none';
        }
    };

    /**
     * 娓告垙缁撴潫
     */
    var gameOver = function () {
        changeStartButton();
        document.onkeydown = null;
        GameUtil.clearTimer(gameProperties.downTimer);
        GameUtil.clearTimer(gameProperties.timeTimer);

        // 鏄剧ず娓告垙缁撴潫闈㈡澘
        showGameOverPanel();
    };

    /**
     * 鏄剧ず娓告垙缁撴潫闈㈡澘
     */
    var showGameOverPanel = function () {
        gameProperties.userScore.innerText = gameProperties.gameScore;
        gameProperties.userLine.innerText = gameProperties.gameLine;
        gameProperties.userTime.innerText = gameProperties.gameTime;
        gameProperties.userLevel.innerText = gameProperties.gameLevel;

        gameProperties.pageShadow.style.display = 'block';
        gameProperties.gameOverPanel.style.display = 'block';
    };

    /**
     * 闅愯棌娓告垙缁撴潫闈㈡澘
     */
    var hideGameOverPanel = function () {

        gameProperties.pageShadow.style.display = 'none';

        gameProperties.gameOverPanel.style.display = 'none';
    };

    /**
     * 鏀瑰彉鏁版嵁瑙嗗浘
     */
    var changeDataView = function () {
        gameProperties.currentLevelDom.innerText = gameProperties.gameLevel;
        gameProperties.currentScoreDom.innerText = gameProperties.gameScore;
        gameProperties.currentLineDom.innerText = gameProperties.gameLine;
    };

    /**
     * 闅忔満鏃嬭浆褰撳墠娓告垙瀹炰綋鍜屼笅涓€涓父鎴忓疄浣� 锛堢敤浜庡垰鍒濆鍖栨父鎴忓疄浣撶殑鏃跺€欙級
     */
    var randomRotateGameEntity = function (entity) {

        var rotateCountArray = [0, 1, 2, 3];

        for (var i = 0; i < Math.round(Math.random() * (rotateCountArray.length - 1)); i++) {
            entity.blockArray = rotateGameEntityArray(entity);
        }

    };

    /**
     * 鍒濆鍖栨父鎴忓疄浣�
     */
    var initGameEntity = function () {
        if (gameProperties.gameEntity && gameProperties.nextGameEntity) {
            gameProperties.gameEntity = gameProperties.nextGameEntity;
            gameProperties.nextGameEntity = new GameBlock().initEntityBlock();
            randomRotateGameEntity(gameProperties.nextGameEntity);
        } else {
            gameProperties.gameEntity = new GameBlock().initEntityBlock();
            gameProperties.nextGameEntity = new GameBlock().initEntityBlock();
            randomRotateGameEntity(gameProperties.gameEntity);
            randomRotateGameEntity(gameProperties.nextGameEntity);
        }

        // 鏄剧ず涓嬩竴涓父鎴忓疄浣�
        gameProperties.nextDom.innerHTML = '';
        for (var i = 0; i < gameProperties.nextGameEntity.blockArray.length; i++) {
            for (var j = 0; j < gameProperties.nextGameEntity.blockArray[i].length; j++) {
                var blockDom = document.createElement("div");
                var style = null;
                if (gameProperties.nextGameEntity.blockArray[i][j] === GameParams.blockType.zero.type) {
                    style = GameParams.blockType.zero.style;
                } else {
                    style = gameProperties.nextGameEntity.blockType.style
                }
                GameUtil.generateBlockStyle(blockDom, style, 25, i * 25, j * 25);
                gameProperties.nextDom.appendChild(blockDom);
            }
        }

    };

    /**
     * 鏀瑰彉寮€濮嬫寜閽殑鐘舵€�
     */
    var changeStartButton = function () {
        if (gameProperties.isGameOver) {
            gameProperties.startButton.removeAttribute('disabled');
            gameProperties.startButton.setAttribute('class', 'active');
        } else {
            gameProperties.startButton.setAttribute('disabled', 'disabled');
            gameProperties.startButton.setAttribute('class', 'inactive');
        }
    };

    /**
     * 娓告垙瀹炰綋鑷姩涓嬭惤
     */
    var gameEntityAutoDown = function (speed) {
        GameUtil.clearTimer(gameProperties.downTimer);
        gameProperties.downTimer = setInterval(function () {
            gameEntityActive(1, 0)
        }, speed);
    };

    /**
     * 鏀瑰彉涓嬭惤鐨勯€熷害
     */
    var changeGameEntityDownSpeed = function () {
        var speed = GameUtil.changeGameSpeed(gameProperties.gameTime, GameParams.timeSpeedParams);
        if (gameProperties.gameSpeed !== speed) {
            gameProperties.gameSpeed = speed;
            gameEntityAutoDown(gameProperties.gameSpeed);
        }
    };

    /**
     * 鏇存敼娓告垙鏃堕棿瑙嗗浘
     */
    var changeTimerView = function () {
        gameProperties.gameTime++;
        gameProperties.gameTimeDom.innerText = gameProperties.gameTime;
        changeGameEntityDownSpeed();
    };

    /**
     * 鏀瑰彉娓告垙鏃堕棿
     */
    var changeGameTime = function () {
        GameUtil.clearTimer(gameProperties.timeTimer);
        gameProperties.timeTimer = setInterval(changeTimerView, 1000);
    };

    /**
     * 鏇存柊鍦板浘鏁版嵁
     */
    var updateGameMapBlocksByGameEntity = function (typeEnum) {
        for (var i = 0; i < gameProperties.gameEntity.blockArray.length; i++) {
            for (var j = 0; j < gameProperties.gameEntity.blockArray[i].length; j++) {

                if (gameProperties.gameEntity.blockArray[i][j] !== GameParams.blockType.zero.type) {

                    var x = gameProperties.gameEntity.location.x + i, y = gameProperties.gameEntity.location.y + j;

                    if (GameParams.OperationTypeEnum.Active === typeEnum) {
                        if (isInGamePanel(x, y)) {
                            gameProperties.gameMap.gameMapBlocks[x][y] = gameProperties.gameEntity.blockType;
                        }
                    } else if (GameParams.OperationTypeEnum.Clear === typeEnum) {
                        if (isInGamePanel(x, y)) {
                            gameProperties.gameMap.gameMapBlocks[x][y] = GameParams.blockType.zero;
                        }
                    } else if (GameParams.OperationTypeEnum.Frozen === typeEnum) {
                        if (isInGamePanel(x, y)) {
                            gameProperties.gameMap.gameMapBlocks[x][y] = GameParams.blockType.eight;
                        }
                    }
                }
            }
        }
    };

    /**
     * 鏄惁鍦ㄦ父鎴忛潰鏉块噷闈�
     */
    var isInGamePanel = function (x, y) {
        return (x >= 0 && x < gameProperties.gameMap.heightAmount) && (y >= 0 && y < gameProperties.gameMap.widthAmount);
    };

    /**
     * 鏄惁涓庡喕缁撶殑鏂瑰潡閲嶅彔
     */
    var isOverlapWithFrozen = function (x, y) {
        if (isInGamePanel(x, y)) {
            return gameProperties.gameMap.gameMapBlocks[x][y] === GameParams.blockType.eight
        }
        return false;
    };

    /**
     * 娓告垙瀹炰綋鏄惁鍙互绉诲姩
     */
    var canGameEntityMove = function (moveX, moveY) {
        var canMove = true;
        for (var i = 0; i < gameProperties.gameEntity.blockArray.length; i++) {
            for (var j = 0; j < gameProperties.gameEntity.blockArray[i].length; j++) {
                if (gameProperties.gameEntity.blockArray[i][j] !== GameParams.blockType.zero.type) {
                    var x = gameProperties.gameEntity.location.x + i + moveX,
                        y = gameProperties.gameEntity.location.y + j + moveY;
                    if (isOverlapWithFrozen(x, y) || (y < 0 || y > (gameProperties.gameMap.widthAmount - 1)) || (x > gameProperties.gameMap.heightAmount - 1)) {
                        canMove = false;
                        break;
                    }
                }
            }

            if (!canMove) {
                break;
            }
        }
        return canMove;
    };

    /**
     * 閲嶆柊璁＄畻浣嶇疆
     */
    var locationRecalculation = function (moveX, moveY) {
        gameProperties.gameEntity.location.x = gameProperties.gameEntity.location.x + moveX;
        gameProperties.gameEntity.location.y = gameProperties.gameEntity.location.y + moveY;
    };

    /**
     * 鍒锋柊娓告垙鏁版嵁
     */
    var refreshGameData = function (removeLineCount) {
        if (removeLineCount !== 0) {
            gameProperties.gameLine += removeLineCount;
            gameProperties.gameScore += GameParams.scoreGradient[removeLineCount - 1];

            // 涓嬩竴绾ц繘搴︽潯澶勭悊
            var levelScore = GameParams.levelGradient[gameProperties.gameLevel - 1];
            if (gameProperties.gameScore >= levelScore) {
                gameProperties.gameLevel = GameUtil.increaseGameLevel(gameProperties.gameLevel, GameParams.levelGradient);
            }
            var percentage = GameUtil.calculateNextLevelPercent(gameProperties.gameScore, gameProperties.gameLevel, GameParams.levelGradient);
            gameProperties.nextLevelProgress.style.width = percentage + '%';

            for (var i = 0; i < gameProperties.localRecord.children.length; i++) {

                var localName = gameProperties.localRecord.children[i].firstChild.textContent;

                var localSore = gameProperties.localRecord.children[i].firstChild.nextSibling.textContent;

                if (localName === 'none' && localSore === '0') {
                    continue;
                }

                var label = gameProperties.localRecord.children[i].lastChild;

                var localPercentage = (gameProperties.gameScore / localSore).toFixed(2) * 100;

                if (localPercentage > 100) {
                    localPercentage = 100;
                }
                label.style.width = localPercentage + '%';
            }

        }
    };

    /**
     * 閲嶇疆娓告垙鏁版嵁
     */
    var resetGameData = function () {
        gameProperties.nextLevelProgress.style.width = '0';
        gameProperties.gameShadow.style.width = '0';
        gameProperties.gameShadow.style.left = '0';

        for (var i = 0; i < gameProperties.localRecord.children.length; i++) {
            var label = gameProperties.localRecord.children[i].lastChild;
            label.style.width = '0';
        }
    };

    /**
     * 娑堣鎿嶄綔
     */
    var removeLine = function () {
        var removeLineCount = 0;
        for (var i = 0; i < gameProperties.gameMap.gameMapBlocks.length; i++) {
            var canRemoveLine = true;
            for (var j = 0; j < gameProperties.gameMap.gameMapBlocks[i].length; j++) {
                if (gameProperties.gameMap.gameMapBlocks[i][j].type !== GameParams.blockType.eight.type) {
                    canRemoveLine = false;
                    break;
                }
            }
            if (canRemoveLine) {
                removeLineCount++;
                for (var k = 0; k < gameProperties.gameMap.gameMapBlocks[i].length; k++) {
                    gameProperties.gameMap.gameMapBlocks[i][k] = GameParams.blockType.zero;
                }
                for (var m = i; m > 0; m--) {
                    for (var n = 0; n < gameProperties.gameMap.gameMapBlocks[m].length; n++) {
                        gameProperties.gameMap.gameMapBlocks[m][n] = gameProperties.gameMap.gameMapBlocks[m - 1][n];
                    }
                }
            }
        }

        refreshGameData(removeLineCount);

    };

    /**
     * 鏄剧ず娓告垙闃村奖
     */
    var showGameShadow = function () {
        if (gameProperties.isShowShadow) {
            var blockLocations = [];
            for (var i = 0; i < gameProperties.gameEntity.blockArray.length; i++) {
                for (var j = 0; j < gameProperties.gameEntity.blockArray[i].length; j++) {
                    if (gameProperties.gameEntity.blockArray[i][j] !== GameParams.blockType.zero.type) {
                        blockLocations.push(j);
                    }
                }
            }
            GameUtil.sortArray(blockLocations);
            gameProperties.gameShadow.style.width = (blockLocations[blockLocations.length - 1] - blockLocations[0] + 1) * GameParams.blockSize + 'px';
            gameProperties.gameShadow.style.left = (gameProperties.gameEntity.location.y + blockLocations[0]) * GameParams.blockSize + 'px';
        }
    };

    /**
     * 娓告垙瀹炰綋绉诲姩鎴栨棆杞�
     */
    var gameEntityActive = function (moveX, moveY) {

        // 娓告垙鏆傚仠鐘舵€�
        if (gameProperties.isGamePause) {
            return;
        }

        // 娓告垙缁撴潫鐘舵€�
        if (gameProperties.isGameOver) {
            gameOver();
            return;
        }

        // 娓呴櫎涓婁竴娆＄殑娓告垙瀹炰綋鐘舵€�
        if (moveX !== 0 || moveY !== 0) {
            updateGameMapBlocksByGameEntity(GameParams.OperationTypeEnum.Clear);
        }

        if (canGameEntityMove(moveX, moveY)) {
            // 閲嶆柊璁＄畻娓告垙瀹炰綋鐨勪綅缃�
            locationRecalculation(moveX, moveY);
        } else {
            if (moveX === 1) {  // 鍚戜笅绉诲姩鐨勬儏鍐�

                // 鍐荤粨娓告垙瀹炰綋
                updateGameMapBlocksByGameEntity(GameParams.OperationTypeEnum.Frozen);

                // 娑堣鎿嶄綔
                removeLine();

                // 鏀瑰彉娓告垙鏁版嵁瑙嗗浘
                changeDataView();

                // 閲嶆柊鍒濆鍖栨父鎴忓疄浣�
                initGameEntity();

                if (!canGameEntityMove(1, 0)) {
                    gameProperties.isGameOver = true;
                }
            }
        }

        // 娓告垙瀹炰綋琛屼负
        updateGameMapBlocksByGameEntity(GameParams.OperationTypeEnum.Active);

        showGameShadow();

        // 鍒锋柊娓告垙鍦板浘
        gameProperties.gameMap.refreshGameMap();

    };

    /**
     * 娓告垙瀹炰綋閫嗘椂閽堟棆杞�
     */
    /*
    var gameEntityAntiClockwiseAround = function () {

        var rows = gameProperties.gameEntity.blockArray.length;

        var column = gameProperties.gameEntity.blockArray[0].length;

        var newGameBlockArray = [];

        for (var i = column - 1; i >= 0; i--) {
            var tempArray = [];
            for (var j = 0; j < rows; j++) {
                tempArray.push(gameProperties.gameEntity.blockArray[j][i]);
            }
            newGameBlockArray.push(tempArray);
        }

        gameProperties.gameEntity.blockArray = newGameBlockArray;
    };
    */

    /**
     * 娓告垙瀹炰綋椤烘椂閽堟棆杞�
     */
    /*
    var gameEntityClockwiseAround = function () {

        var rows = gameProperties.gameEntity.blockArray.length;

        var column = gameProperties.gameEntity.blockArray[0].length;

        var newGameBlockArray = [];

        for (var i = 0; i < column; i++) {
            var tempArray = [];
            for (var j = rows - 1; j >= 0; j--) {
                tempArray.push(gameProperties.gameEntity.blockArray[j][i]);
            }
            newGameBlockArray.push(tempArray);
        }

        gameProperties.gameEntity.blockArray = newGameBlockArray;

    };
    */

    /**
     * 鑾峰緱鏂瑰潡鏃嬭浆鍚庣殑鏁版嵁
     * Ax = Oy + Ox - By
     * Ay = Oy - Ox + Bx
     * 杩欎釜鍏紡涓嶅お濂�
     */
    var rotateGameEntityArray = function (entity) {

        var newGameEntityArray = [
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
            [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
        ];

        // 闄や簡闀挎潯璺熸柟鍧楃殑鏃嬭浆鏂瑰紡
        if (entity.blockType.type !== GameParams.blockType.six.type && entity.blockType.type !== GameParams.blockType.seven.type) {
            for (var i = 0; i < entity.blockArray.length; i++) {
                for (var j = 0; j < entity.blockArray[i].length; j++) {
                    if (entity.blockArray[i][j] !== GameParams.blockType.zero.type) {
                        var newX = 1 + 1 - j;
                        var newY = 1 - 1 + i;
                        newGameEntityArray[newX][newY] = entity.blockArray[i][j];
                    }
                }
            }
        } else if (entity.blockType.type === GameParams.blockType.six.type) { // 闀挎潯鐨勬棆杞柟寮�
            if (entity.blockArray[1][0] === GameParams.blockType.six.type) {
                newGameEntityArray = [
                    [GameParams.blockType.zero.type, GameParams.blockType.six.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
                    [GameParams.blockType.zero.type, GameParams.blockType.six.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
                    [GameParams.blockType.zero.type, GameParams.blockType.six.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
                    [GameParams.blockType.zero.type, GameParams.blockType.six.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
                ];
            } else {
                newGameEntityArray = [
                    [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
                    [GameParams.blockType.six.type, GameParams.blockType.six.type, GameParams.blockType.six.type, GameParams.blockType.six.type],
                    [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type],
                    [GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type, GameParams.blockType.zero.type]
                ];
            }
        } else if (entity.blockType.type === GameParams.blockType.seven.type) { // 鏂瑰潡涓嶇敤鏃嬭浆
            return entity.blockArray;
        }

        return newGameEntityArray;
    };

    /**
     * 娓告垙瀹炰綋鏃嬭浆
     */
    var gameEntityRotate = function () {

        if (gameProperties.isGamePause) {
            return;
        }

        var tempGameEntityArray = rotateGameEntityArray(gameProperties.gameEntity);

        var canRotate = true;

        for (var i = 0; i < tempGameEntityArray.length; i++) {
            for (var j = 0; j < tempGameEntityArray[i].length; j++) {
                if (tempGameEntityArray[i][j] !== GameParams.blockType.zero.type) {
                    var x = gameProperties.gameEntity.location.x + i, y = gameProperties.gameEntity.location.y + j;

                    if (isOverlapWithFrozen(x, y) || y < 0 || y > (gameProperties.gameMap.widthAmount - 1) || (x > gameProperties.gameMap.heightAmount - 1)) {

                        // TODO 鐗规畩澶勭悊 闀挎潯 鍙�+1 鏈夐殰纰嶆椂鏃犳硶鏃嬭浆 鐨勯棶棰�
                        // if (gameProperties.gameEntity.blockType.type === GameParams.blockType.six) {}

                        canRotate = false;
                        break;
                    }
                }
            }

            if (!canRotate) {
                break;
            }
        }

        if (canRotate) {

            // 娓呴櫎涓婁竴娆＄殑娓告垙瀹炰綋鐘舵€�
            updateGameMapBlocksByGameEntity(GameParams.OperationTypeEnum.Clear);

            gameProperties.gameEntity.blockArray = tempGameEntityArray;

            // 娓告垙瀹炰綋琛屼负
            updateGameMapBlocksByGameEntity(GameParams.OperationTypeEnum.Active);

            showGameShadow();

            // 鍒锋柊娓告垙鍦板浘
            gameProperties.gameMap.refreshGameMap();
        }
    };

    /**
     * 娓告垙瀹炰綋蹇€熶笅钀�
     */
    var gameEntityQuickDown = function () {

        if (gameProperties.isGamePause) {
            return;
        }

        while (canGameEntityMove(1, 0)) {
            gameEntityActive(1, 0);
        }
        gameEntityActive(1, 0);
    };

    /**
     * 娓告垙闃村奖鎿嶄綔
     */
    var gameShadowOperation = function () {
        if (gameProperties.isGamePause || gameProperties.isGameOver) {
            return;
        }
        gameProperties.isShowShadow = !gameProperties.isShowShadow;
        if (gameProperties.isShowShadow) {
            gameProperties.gameShadow.style.display = 'block';
        } else {
            gameProperties.gameShadow.style.display = 'none';
        }
    };

    /**
     * 缁戝畾閿洏浜嬩欢
     */
    var bindKeyEvent = function () {
        document.onkeydown = function (event) {
            if (event.key === 'ArrowDown' || event.key === 'Down') {
                gameEntityActive(1, 0);
            } else if (event.key === 'ArrowUp' || event.key === 'Up') {
                gameEntityRotate();
            } else if (event.key === 'ArrowLeft' || event.key === 'Left') {
                gameEntityActive(0, -1);
            } else if (event.key === 'ArrowRight' || event.key === 'Right') {
                gameEntityActive(0, 1);
            } else if (event.key === 'ControlRight' || event.key === 'Control') {
                gameEntityQuickDown();
            } else if (event.key === 'Enter' || event.key === 'Enter') {
                gamePause();
            } else if (event.key === ' ' || event.key === 'Spacebar') {
                gameShadowOperation();
            }
        }
    };

};

var GameParams = {
    blockSize: 30,
    blockType: {
        zero: {
            type: 0,
            style: 'block-zero'
        },
        one: {
            type: 1,
            style: 'block-one'
        },
        two: {
            type: 2,
            style: 'block-two'
        },
        three: {
            type: 3,
            style: 'block-three'
        },
        four: {
            type: 4,
            style: 'block-four'
        },
        five: {
            type: 5,
            style: 'block-five'
        },
        six: {
            type: 6,
            style: 'block-six'
        },
        seven: {
            type: 7,
            style: 'block-seven'
        },
        eight: {
            type: 8,
            style: 'block-eight'
        },
    },
    OperationTypeEnum: {
        Active: 0,
        Clear: 1,
        Frozen: 2
    },
    timeSpeedParams: [
        {time: 30, speed: 800},
        {time: 70, speed: 700},
        {time: 120, speed: 600},
        {time: 180, speed: 500},
        {time: 250, speed: 400},
        {time: 330, speed: 300},
        {time: 420, speed: 200},
        {time: 520, speed: 100},
        {time: 630, speed: 70},
        {time: 750, speed: 50}
    ],
    levelGradient: [150, 350, 650, 1050, 1600, 2300, 3100, 4000, 5000, 6200, 7600, 9200, 11000, 13000, 20000],
    scoreGradient: [10, 27, 45, 63]
};


var GameUtil = {
    generateBlockStyle: function (dom, className, size, top, left) {
        dom.className = className;
        dom.style.width = size + 'px';
        dom.style.height = size + 'px';
        dom.style.top = top + 'px';
        dom.style.left = left + 'px';
    },

    clearTimer: function (timer) {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    },

    changeGameSpeed: function (gameTime, timeSpeedParams) {
        for (var i = 0; i < timeSpeedParams.length; i++) {
            if (gameTime < timeSpeedParams[i].time) {
                return timeSpeedParams[i].speed;
            }
        }
    },

    increaseGameLevel: function (gameLevel, levelGradient) {
        gameLevel = gameLevel + 1;
        if (gameLevel > levelGradient.length) {
            return levelGradient.length;
        }
        return gameLevel;
    },

    calculateNextLevelPercent: function (gameScore, gameLevel, levelGradient) {
        if (gameLevel === 1) {
            return (gameScore / levelGradient[gameLevel - 1]).toFixed(2) * 100;
        }
        if (gameLevel === levelGradient.length) {
            return 100;
        }

        var lastLevelScore = levelGradient[gameLevel - 2];

        return ((gameScore - lastLevelScore) / (levelGradient[gameLevel - 1] - lastLevelScore)).toFixed(2) * 100;
    },

    sortArray: function (blockLocations) {
        for (var i = 0, len = blockLocations.length; i < len - 1; i++) {
            for (var j = i + 1; j < len; j++) {
                if (blockLocations[j] < blockLocations[i]) {
                    var temp = blockLocations[i];
                    blockLocations[i] = blockLocations[j];
                    blockLocations[j] = temp;
                }
            }
        }
    },
    saveGameScore: function (userName, gameScore) {

        var tetrisObject = JSON.parse(localStorage.getItem('tetris'));

        if (!tetrisObject) {
            tetrisObject = [];
        } else {
            var deleteIndex = 0;
            var isDuplicate = false;
            var isDuplicateAndLessThan = false;
            for (var j = 0; j < tetrisObject.length; j++) {
                if (tetrisObject[j].name === userName) {
                    isDuplicate = true;
                    if (tetrisObject[j].score >= gameScore) {
                        isDuplicateAndLessThan = true;
                        break;
                    } else {
                        deleteIndex = j;
                    }
                }
            }

            // 鍚嶅瓧涓€鏍峰苟涓斿綋鍓嶅垎鏁板皬浜庡巻鍙插垎鏁�
            if (isDuplicateAndLessThan) {
                return;
            }

            if (isDuplicate && !isDuplicateAndLessThan) {
                tetrisObject.splice(deleteIndex, 1);
            }
        }

        if (tetrisObject.length === 0) {
            tetrisObject.push({name: userName, score: gameScore});
        } else if (tetrisObject.length === 1) {
            if (tetrisObject[0].score >= gameScore) {
                tetrisObject.push({name: userName, score: gameScore});
            } else {
                var tempElement = tetrisObject[0];
                tetrisObject[0] = {name: userName, score: gameScore};
                tetrisObject.push(tempElement);
            }
        } else {
            var index = 0;
            var findIndex = false;
            for (var i = 0, len = tetrisObject.length; i < len; i++) {
                if (tetrisObject[i].score < gameScore) {
                    index = i;
                    findIndex = true;
                    break;
                }
            }
            if (!findIndex) {
                tetrisObject.push({name: userName, score: gameScore});
            } else {
                tetrisObject.splice(index, 0, {name: userName, score: gameScore});
            }
        }

        if (tetrisObject.length > 5) {
            tetrisObject.splice(5, tetrisObject.length - 5);
        }

        localStorage.setItem('tetris', JSON.stringify(tetrisObject));
    }
};

var GameBoot = function () {

    var gameControl = null;

    this.localRecord = function () {

        var localRecordDom = document.getElementById('local-record');

        var tetrisObject = JSON.parse(localStorage.getItem('tetris'));

        if (!tetrisObject) {
            tetrisObject = [
                {name: 'none', score: 0},
                {name: 'none', score: 0},
                {name: 'none', score: 0},
                {name: 'none', score: 0},
                {name: 'none', score: 0}
            ];
        } else if (tetrisObject.length < 5) {
            for (var i = tetrisObject.length - 1; i < 5; i++) {
                tetrisObject.push({name: 'none', score: 0});
            }
        }

        localRecordDom.innerHTML = '';

        for (var x = 0; x < 5; x++) {
            var li = document.createElement("li");
            var nameSpan = document.createElement("span");
            nameSpan.className = 'name';
            nameSpan.innerText = tetrisObject[x].name;
            var scoreSpan = document.createElement("span");
            scoreSpan.className = 'score';
            scoreSpan.innerText = tetrisObject[x].score;
            var label = document.createElement("label");
            li.appendChild(nameSpan);
            li.appendChild(scoreSpan);
            li.appendChild(label);
            localRecordDom.appendChild(li);
        }
    };

    this.gameStart = function () {
        gameControl = new GameControl();
        gameControl.startGame();
    };

    this.saveGameScore = function () {
        if (!gameControl) {
            return;
        }
        var scoreInput = document.getElementById('score-input');

        var tempValue = scoreInput.value;

        if (!tempValue || tempValue.replace(/\s+/g, '') === '') {
            document.getElementById('tips-text').innerText = '濮撳悕涓嶈兘涓虹┖';
            return;
        }

        var userName = tempValue.replace(/\s+/g, '');

        var gameScore = gameControl.getGameScore();

        GameUtil.saveGameScore(userName, gameScore);

        document.getElementById('game-over-panel').style.display = 'none';
        document.getElementById('page-shadow').style.display = 'none';
    };
};



















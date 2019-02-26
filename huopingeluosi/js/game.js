var Game = function(){
    var gameDiv;
    var nextDiv;
    //游戏矩阵
    var gameData = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    //當前方塊
    var cur;
    //下一個方塊
    var next;
    // divs
    var gameDivs = [];
    var nextDivs = [];
    // 初始化div
    var initDiv = function(container,data,divs){
        for(var i=0; i<data.length; i++){
            var div = [];
            for(var j=0; j<data[0].length;j++){
                var newNode = document.createElement('div'); 
                newNode.className ='none';
                newNode.style.top = (i*20) +'px';
                newNode.style.left =(j*20) +'px';
                container.appendChild(newNode);
                div.push(newNode);
            }
        divs.push(div);
        }
    }
    //刷新div
    var refreshDiv = function(data,divs){
        for(var i=0; i<data.length; i++){
            for(var j=0; j<data[0].length; j++) {
                if(data[i][j] == 0){
                    divs[i][j].className = 'none';
                }
                else if(data[i][j] == 1){
                    divs[i][j].className = 'done';
                }
                else if(data[i][j] == 2){
                    divs[i][j].className = 'current';
                }
            }
        }
    }
    //清除数据
    var clearData = function(){
        for (let i = 0; i < cur.data.length; i++) {
            for (let j = 0; j < cur.data.length; j++) { 
                gameData[cur.origin.x + i][cur.origin.y + j] = 0;
            }
        }
    }
    //设置数据
    var setData = function(){
        for (let i = 0; i < cur.data.length; i++) {
            for (let j = 0; j < cur.data.length; j++) { 
                gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
            }
        }
    }
    //下移
    var down = function(){
        clearData();
        cur.origin.x = cur.origin.x + 1;
        setData();
        refreshDiv(gameData, gameDivs);
    }
    //初始化
    var init = function(doms){
        gameDiv = doms.gameDiv;
        nextDiv = doms.nextDiv;
        cur = new Square();
        next = new Square();
        initDiv(gameDiv,gameData,gameDivs);
        initDiv(nextDiv,next.data,nextDivs);
        cur.origin.x = 10;
        cur.origin.y = 5;
        setData();
        refreshDiv(gameData,gameDivs);
        refreshDiv(next.data,nextDivs);
    }
    //导出API
    this.init = init;
    this.down = down;
}

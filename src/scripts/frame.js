export default class Frame {
    constructor(game){
        // this.width = width;
        // this.height = height;
        // this.ctx = ctx;
        this.game = game
        this.background = document.getElementById("board");
        this.topLeft = [];
        this.topMid = [];
        this.topRight = [];
        this.botLeft = [];
        this.botMid = [];
        this.botRight = [];
        this.draw();
        this.hover_check();
        this.click();
    }

    draw(){
        // const background = document.getElementById("board")
        // background.src = '../../assets/image/background.jpg';
        // background.onload = function(){
            // const width = 1000;
            // const height = 500;

        // this.game.ctx.drawImage(this.background, 0, 0, this.game.width, this.game.height);
        const x = this.game.width/3;
        const y = this.game.height/2;

        const xPts = []
        const yPts = []

        for (let row = 0; row <= this.game.width; row += x){
            xPts.push(row);
        }

        for (let col = 0; col <= this.game.height; col += y){
            yPts.push(col);
        }

        this.topLeft = [xPts[0], xPts[1], yPts[0], yPts[1]];
        this.topMid = [xPts[1], xPts[2], yPts[0], yPts[1]];
        this.topRight = [xPts[2], xPts[3], yPts[0], yPts[1]];
        this.botLeft = [xPts[0], xPts[1], yPts[1], yPts[2]];
        this.botMid = [xPts[1], xPts[2], yPts[1], yPts[2]];
        this.botRight = [xPts[2], xPts[3], yPts[1], yPts[2]];

        for (let row = 0; row <= this.game.width; row += x){
            for (let col = 0; col <= this.game.height; col += y){
                this.game.ctx.strokeStyle = "lightgray";
                this.game.ctx.strokeRect(row, col, x, y);
                // (row,col), (row+x,col), (row, col+y), (row+x, col+y)
                // (row,col,row+x,col+y)
                this.game.ctx.stroke();
            }
            // }
        }
    }

    hover_check(){
        this.game.canvas.addEventListener("mousemove", e => {
            // e.preventDefault();
            // e.stopPropagation();
            const x = this.game.width/3;
            const y = this.game.height/2;

            //checking if mouse is on:

            //top left frame
            if (
                (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
                (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.topLeft[0], this.topLeft[2], x, y);
                this.game.ctx.stroke();
            }

            //top mid frame
            if (
                (e.offsetX > this.topMid[0] && e.offsetX < this.topMid[1]) &&
                (e.offsetY > this.topMid[2] && e.offsetY < this.topMid[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.topMid[0], this.topMid[2], x, y);
                this.game.ctx.stroke();
            }

            //top right frame
            if (
                (e.offsetX > this.topRight[0] && e.offsetX < this.topRight[1]) &&
                (e.offsetY > this.topRight[2] && e.offsetY < this.topRight[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.topRight[0], this.topRight[2], x, y);
                this.game.ctx.stroke();
            }

            //bot left frame
            if (
                (e.offsetX > this.botLeft[0] && e.offsetX < this.botLeft[1]) &&
                (e.offsetY > this.botLeft[2] && e.offsetY < this.botLeft[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.botLeft[0], this.botLeft[2], x, y);
                this.game.ctx.stroke();
            }
            
            //bot mid frame
            if (
                (e.offsetX > this.botMid[0] && e.offsetX < this.botMid[1]) &&
                (e.offsetY > this.botMid[2] && e.offsetY < this.botMid[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.botMid[0], this.botMid[2], x, y);
                this.game.ctx.stroke();
            }

            //bot right frame
            if (
                (e.offsetX > this.botRight[0] && e.offsetX < this.botRight[1]) &&
                (e.offsetY > this.botRight[2] && e.offsetY < this.botRight[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.botRight[0], this.botRight[2], x, y);
                this.game.ctx.stroke();
            }
        })

        

        // this.game.canvas.addEventListener("mouseup", el => {
        //     console.log("mouseup");
        //     console.log(el);
        // })
    }
    click(){
        this.game.canvas.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            const x = this.game.width/3;
            const y = this.game.height/2;

            if (
                (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
                (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
            ){ 
                this.game.ctx.strokeStyle = "black";
                this.game.ctx.strokeRect(this.topLeft[0], this.topLeft[2], x, y);
                this.game.ctx.stroke();
            }
        })
    }
}
// export default class Swap{
//     constructor(game){
//         this.game = game;
//         this.topLeft = [];
//         this.topMid = [];
//         this.topRight = [];
//         this.botLeft = [];
//         this.botMid = [];
//         this.botRight = [];
//         this.selectFrame = 0;
//         this.box1 = {};
//         this.box2 = {};
//         this.box1Frame = "";
//         this.box2Frame = "";
//         this.x = this.game.canvas.width/3;
//         this.y = this.game.canvas.height/2;
//         this.click();
//         // this.checkStatus();
//     }

//     _checkStatus(box, box1Frame, box2Frame){
//         const frameWidth = this.game.width/3;
//         const frameHeight = this.game.height/2;
//         for (const key in box){
//             if (box1Frame === "topLeft"){
//                 if (key === "gary"){
//                     if (box2Frame === "topMid"){
//                         this.game.gary.x += frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.gary.x += (2 * frameWidth);
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.gary.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.gary.x += frameWidth;
//                         this.game.gary.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.gary.x += (2 * frameWidth);
//                         this.game.gary.y += frameHeight;
//                     }
//                 }

//                 if (key === "rock"){
//                     if (box2Frame === "topMid"){
//                         this.game.rock.x += frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock.x += (2 * frameWidth);
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock.x += frameWidth;
//                         this.game.rock.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock.x += (2 * frameWidth);
//                         this.game.rock.y += frameHeight;
//                     }
//                 }

//                 if (key === "jellyfish"){
//                     if (box2Frame === "topMid"){
//                         this.game.jellyfish.x += frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.jellyfish.x += (2 * frameWidth);
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.jellyfish.x += frameWidth;
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.jellyfish.x += (2 * frameWidth);
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                 }

//                 if (key === "goal"){
//                     if (box2Frame === "topMid"){
//                         this.game.goal.x += frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.goal.x += (2 * frameWidth);
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.goal.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.goal.x += frameWidth;
//                         this.game.goal.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.goal.x += (2 * frameWidth);
//                         this.game.goal.y += frameHeight;
//                     }
//                 }

//                 if (key === "rock2"){
//                     if (box2Frame === "topMid"){
//                         this.game.rock2.x += frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock2.x += (2 * frameWidth);
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock2.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock2.x += frameWidth;
//                         this.game.rock2.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock2.x += (2 * frameWidth);
//                         this.game.rock2.y += frameHeight;
//                     }
//                 }
//             }

//             if (this.box1Frame === "topMid"){
//                 if (key === "gary"){
//                     if (box2Frame === "topLeft"){
//                         this.game.gary.x -= frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.gary.x += frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.gary.x -= frameWidth;
//                         this.game.gary.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.gary.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.gary.x += frameWidth;
//                         this.game.gary.y += frameHeight;
//                     }
//                 }

//                 if (key === "rock"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock.x -= frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock.x += frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock.x -= frameWidth;
//                         this.game.rock.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock.x += frameWidth;
//                         this.game.rock.y += frameHeight;
//                     }
//                 }

//                 if (key === "jellyfish"){
//                     if (box2Frame === "topLeft"){
//                         this.game.jellyfish.x -= frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.jellyfish.x += frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.jellyfish.x -= frameWidth;
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.jellyfish.x += frameWidth;
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                 }

//                 if (key === "goal"){
//                     if (box2Frame === "topLeft"){
//                         this.game.goal.x -= frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.goal.x += frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.goal.x -= frameWidth;
//                         this.game.goal.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.goal.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.goal.x += frameWidth;
//                         this.game.goal.y += frameHeight;
//                     }
//                 }

//                 if (key === "rock2"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock2.x -= frameWidth;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock2.x += frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock2.x -= frameWidth;
//                         this.game.rock2.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock2.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock2.x += frameWidth;
//                         this.game.rock2.y += frameHeight;
//                     }
//                 }
//             }

//             if (this.box1Frame === "topRight"){
//                 if (key === "gary"){
//                     if (box2Frame === "topLeft"){
//                         this.game.gary.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.gary.x -= frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.gary.x -= (2 * frameWidth);
//                         this.game.gary.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.gary.x -= frameWidth;
//                         this.game.gary.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.gary.y += frameHeight;
//                     }
//                 }

//                 if (key === "rock"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.rock.x -= frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock.x -= (2 * frameWidth);
//                         this.game.rock.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock.x -= frameWidth;
//                         this.game.rock.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock.y += frameHeight;
//                     }
//                 }

//                 if (key === "jellyfish"){
//                     if (box2Frame === "topLeft"){
//                         this.game.jellyfish.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.jellyfish.x -= frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.jellyfish.x -= (2 * frameWidth);
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.jellyfish.x -= frameWidth;
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.jellyfish.y += frameHeight;
//                     }
//                 }

//                 if (key === "goal"){
//                     if (box2Frame === "topLeft"){
//                         this.game.goal.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.goal.x -= frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.goal.x -= (2 * frameWidth);
//                         this.game.goal.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.goal.x -= frameWidth;
//                         this.game.goal.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.goal.y += frameHeight;
//                     }
//                 }

//                 if (key === "rock2"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock2.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.rock2.x -= frameWidth;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock2.x -= (2 * frameWidth);
//                         this.game.rock2.y += frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock2.x -= frameWidth;
//                         this.game.rock2.y += frameHeight;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock2.y += frameHeight;
//                     }
//                 }
//             }

//             if (this.box1Frame === "botLeft"){
//                 if (key === "gary"){
//                     if (box2Frame === "topLeft"){
//                         this.game.gary.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.gary.x += frameWidth;
//                         this.game.gary.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.gary.x += (2 * frameWidth);
//                         this.game.gary.y -= frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.gary.x += frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.gary.x += (2 * frameWidth);
//                     }
//                 }

//                 if (key === "rock"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.rock.x += frameWidth;
//                         this.game.rock.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock.x += (2 * frameWidth);
//                         this.game.rock.y -= frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock.x += frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock.x += (2 * frameWidth);
//                     }
//                 }

//                 if (key === "jellyfish"){
//                     if (box2Frame === "topLeft"){
//                         this.game.jellyfish.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.jellyfish.x += frameWidth;
//                         this.game.jellyfish.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.jellyfish.x += (2 * frameWidth);
//                         this.game.jellyfish.y -= frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.jellyfish.x += frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.jellyfish.x += (2 * frameWidth);
//                     }
//                 }

//                 if (key === "goal"){
//                     if (box2Frame === "topLeft"){
//                         this.game.goal.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.goal.x += frameWidth;
//                         this.game.goal.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.goal.x += (2 * frameWidth);
//                         this.game.goal.y -= frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.goal.x += frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.goal.x += (2 * frameWidth);
//                     }
//                 }

//                 if (key === "rock2"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock2.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.rock2.x += frameWidth;
//                         this.game.rock2.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock2.x += (2 * frameWidth);
//                         this.game.rock2.y -= frameHeight;
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock2.x += frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock2.x += (2 * frameWidth);
//                     }
//                 }
//             }

//             if (this.box1Frame === "botMid"){
//                 console.log(this.box1)
//                 if (key === "gary"){
//                     if (box2Frame === "topLeft"){
//                         this.game.gary.x -= frameWidth
//                         this.game.gary.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.gary.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.gary.x += frameWidth;
//                         this.game.gary.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.gary.x -= frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.gary.x += frameWidth;
//                     }
//                 }

//                 if (key === "rock"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock.x -= frameWidth
//                         this.game.rock.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.rock.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock.x += frameWidth;
//                         this.game.rock.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock.x -= frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock.x += frameWidth;
//                     }
//                 }

//                 if (key === "jellyfish"){
//                     if (box2Frame === "topLeft"){
//                         this.game.jellyfish.x -= frameWidth
//                         this.game.jellyfish.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.jellyfish.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.jellyfish.x += frameWidth;
//                         this.game.jellyfish.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.jellyfish.x -= frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.jellyfish.x += frameWidth;
//                     }
//                 }

//                 if (key === "goal"){
//                     if (box2Frame === "topLeft"){
//                         this.game.goal.x -= frameWidth
//                         this.game.goal.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.goal.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.goal.x += frameWidth;
//                         this.game.goal.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.goal.x -= frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.goal.x += frameWidth;
//                     }
//                 }

//                 if (key === "rock2"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock2.x -= frameWidth
//                         this.game.rock2.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.rock2.y -= frameHeight
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock2.x += frameWidth;
//                         this.game.rock2.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock2.x -= frameWidth;
//                     }
//                     if (box2Frame === "botRight"){
//                         this.game.rock2.x += frameWidth;
//                     }
//                 }
//             }

//             if (this.box1Frame === "botRight"){
//                 if (key === "gary"){
//                     if (box2Frame === "topLeft"){
//                         this.game.gary.x -= (2 * frameWidth);
//                         this.game.gary.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.gary.x -= frameWidth;
//                         this.game.gary.y -= frameHeight;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.gary.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.gary.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.gary.x -= frameWidth;
//                     }
//                 }

//                 if (key === "rock"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock.x -= (2 * frameWidth);
//                         this.game.rock.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.rock.x -= frameWidth;
//                         this.game.rock.y -= frameHeight;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock.x -= frameWidth;
//                     }
//                 }

//                 if (key === "jellyfish"){
//                     if (box2Frame === "topLeft"){
//                         this.game.jellyfish.x -= (2 * frameWidth);
//                         this.game.jellyfish.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.jellyfish.x -= frameWidth;
//                         this.game.jellyfish.y -= frameHeight;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.jellyfish.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.jellyfish.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.jellyfish.x -= frameWidth;
//                     }
//                 }

//                 if (key === "goal"){
//                     if (box2Frame === "topLeft"){
//                         this.game.goal.x -= (2 * frameWidth);
//                         this.game.goal.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.goal.x -= frameWidth;
//                         this.game.goal.y -= frameHeight;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.goal.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.goal.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.goal.x -= frameWidth;
//                     }
//                 }

//                 if (key === "rock2"){
//                     if (box2Frame === "topLeft"){
//                         this.game.rock2.x -= (2 * frameWidth);
//                         this.game.rock2.y -= frameHeight;
//                     }
//                     if (box2Frame === "topMid"){
//                         this.game.rock2.x -= frameWidth;
//                         this.game.rock2.y -= frameHeight;
//                     }
//                     if (box2Frame === "topRight"){
//                         this.game.rock2.y -= frameHeight;
//                     }
//                     if (box2Frame === "botLeft"){
//                         this.game.rock2.x -= (2 * frameWidth);
//                     }
//                     if (box2Frame === "botMid"){
//                         this.game.rock2.x -= frameWidth;
//                     }
//                 }
//             }
//         }
//     }

//     checkStatus(){
//         if (this.selectFrame === 2) {
//             this._checkStatus(this.box1, this.box1Frame, this.box2Frame);
//             this._checkStatus(this.box2, this.box2Frame, this.box1Frame)
//             this.box1 = {};
//             this.box2 = {};
//             this.selectFrame = 0;
//         }
//         // requestAnimationFrame(this.checkStatus.bind(this));
//     }

//     _clickTop(left, right, bot){
//         if (
//             (this.game.gary.x > left && this.game.gary.x < right && this.game.gary.y < bot)
//         ){
//             this.box1.gary = this.game.gary.x;
//         }

//         if (
//             (this.game.rock.x > left && this.game.rock.x < right && this.game.rock.y < bot)
//         ){
//             this.box1.rock = this.game.rock.x;
//         }

//         if (this.game.level >= 2){
//             if (
//                 (this.game.jellyfish.x > left && this.game.jellyfish.x < right && this.game.jellyfish.y < bot)
//             ){
//                 this.box1.jellyfish = this.game.jellyfish.x;
//             }
//         }

//         if (
//             (this.game.goal.x > left && this.game.goal.x < right && this.game.goal.y < bot)
//         ){
//             this.box1.goal = this.game.goal.x;
//         }

//         if (this.game.level >= 3){
//             if (
//                 (this.game.rock2.x > left && this.game.rock2.x < right && this.game.rock2.y < bot)
//             ){
//                 this.box1.rock2 = this.game.rock2.x;
//             }
//         }
//     }

//     _clickBot(left, right, top){
//         if (
//             (this.game.gary.x > left && this.game.gary.x < right && this.game.gary.y > top)
//         ){
//             this.box2.gary = this.game.gary.x;
//         }

//         if (
//             (this.game.rock.x > left && this.game.rock.x < right && this.game.rock.y > top)
//         ){
//             this.box2.rock = this.game.rock.x;
//         }

//         if (this.game.level >= 2){
//             if (
//                 (this.game.jellyfish.x > left && this.game.jellyfish.x < right && this.game.jellyfish.y > top)
//             ){
//                 this.box2.jellyfish = this.game.jellyfish.x;
//             }
//         }

//         if (
//             (this.game.goal.x > left && this.game.goal.x < right && this.game.goal.y > top)
//         ){
//             this.box2.goal = this.game.goal.x;
//         }

//         if (this.game.level >= 3){
//             if (
//                 (this.game.rock2.x > left && this.game.rock2.x < right && this.game.rock2.y > top)
//             ){
//                 this.box2.rock2 = this.game.rock2.x;
//             }
//         }
//     }

//     click(){
//         const xPts = []
//         const yPts = []

//         for (let row = 0; row <= this.game.canvas.width; row += this.x){
//             xPts.push(row);
//         }

//         for (let col = 0; col <= this.game.canvas.height; col += this.y){
//             yPts.push(col);
//         }

//         this.topLeft = [xPts[0], xPts[1], yPts[0], yPts[1]];
//         this.topMid = [xPts[1], xPts[2], yPts[0], yPts[1]];
//         this.topRight = [xPts[2], xPts[3], yPts[0], yPts[1]];
//         this.botLeft = [xPts[0], xPts[1], yPts[1], yPts[2]];
//         this.botMid = [xPts[1], xPts[2], yPts[1], yPts[2]];
//         this.botRight = [xPts[2], xPts[3], yPts[1], yPts[2]];

//         addEventListener("click", e => {
//             if (
//                 (e.offsetX > this.topLeft[0] && e.offsetX < this.topLeft[1]) &&
//                 (e.offsetY > this.topLeft[2] && e.offsetY < this.topLeft[3])
//             ){ 
//                 // console.log("hi");
//                 this.selectFrame += 1;
//                 if (this.selectFrame === 1){
//                     this.box1Frame = "topLeft";
//                     this._clickTop(this.topLeft[0], this.topLeft[1], this.topLeft[3]);
//                 }

//                 if (this.selectFrame === 2){
//                     this.box2Frame = "topLeft";
//                     this._clickTop(this.topLeft[0], this.topLeft[1], this.topLeft[3]);
//                 }
//             } 
    
//             //top mid frame
//             if (
//                 (e.offsetX > this.topMid[0] && e.offsetX < this.topMid[1]) &&
//                 (e.offsetY > this.topMid[2] && e.offsetY < this.topMid[3])
//             ){ 
//                 this.selectFrame += 1;

//                 if (this.selectFrame === 1){
//                     this.box1Frame = "topMid";
//                     this._clickTop(this.topMid[0], this.topMid[1], this.topMid[3]);
//                 }

//                 if (this.selectFrame === 2){
//                     this.box2Frame = "topMid";
//                     this._clickTop(this.topMid[0], this.topMid[1], this.topMid[3]);
//                 }
//             }
    
//             //top right frame
//             if (
//                 (e.offsetX > this.topRight[0] && e.offsetX < this.topRight[1]) &&
//                 (e.offsetY > this.topRight[2] && e.offsetY < this.topRight[3])
//             ){ 
//                 this.selectFrame += 1;

//                 if (this.selectFrame === 1){
//                     this.box1Frame = "topRight";
//                     this._clickTop(this.topRight[0], this.topRight[1], this.topRight[3]);
//                 }

//                 if (this.selectFrame === 2){
//                     this.box2Frame = "topRight";
//                     this._clickTop(this.topRight[0], this.topRight[1], this.topRight[3]);
//                 }
//             }
    
//             //bot left frame
//             if (
//                 (e.offsetX > this.botLeft[0] && e.offsetX < this.botLeft[1]) &&
//                 (e.offsetY > this.botLeft[2] && e.offsetY < this.botLeft[3])
//             ){ 
//                 this.selectFrame += 1;

//                 if (this.selectFrame === 1){
//                     this.box1Frame = "botLeft";
//                     this._clickBot(this.botLeft[0], this.botLeft[1], this.topLeft[3])
//                 }

//                 if (this.selectFrame === 2){
//                     this.box2Frame = "botLeft";
//                     this._clickBot(this.botLeft[0], this.botLeft[1], this.topLeft[3])
//                 }
//             }
            
//             //bot mid frame
//             if (
//                 (e.offsetX > this.botMid[0] && e.offsetX < this.botMid[1]) &&
//                 (e.offsetY > this.botMid[2] && e.offsetY < this.botMid[3])
//             ){ 
//                 this.selectFrame += 1;

//                 if (this.selectFrame === 1){
//                     this.box1Frame = "botMid";
//                     this._clickBot(this.botMid[0], this.botMid[1], this.topLeft[3])
//                 }

//                 if (this.selectFrame === 2){
//                     this.box2Frame = "botMid";
//                     this._clickBot(this.botMid[0], this.botMid[1], this.topLeft[3])
//                 }
//             }
    
//             //bot right frame
//             if (
//                 (e.offsetX > this.botRight[0] && e.offsetX < this.botRight[1]) &&
//                 (e.offsetY > this.botRight[2] && e.offsetY < this.botRight[3])
//             ){ 
//                 this.selectFrame += 1;

//                 if (this.selectFrame === 1){
//                     this.box1Frame = "botRight";
//                     this._clickBot(this.botRight[0], this.botRight[1], this.topLeft[3])
//                 }

//                 if (this.selectFrame === 2){
//                     this.box2Frame = "botRight";
//                     this._clickBot(this.botRight[0], this.botRight[1], this.topLeft[3])
//                 }
//             }
//         })
//     }
// }
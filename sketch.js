// creates variables for  creating sprites .

var level = 0;
var gameState = "play";


var block1,block2,block3;
var block4,block5,block6;
var block7,block8,block9,block10 ;

var block11,block12,block13;
var block14,block15,block16;
var block17,block18,block19,block20;

var block21,block22,block23;
var block24,block25,block26;
var block27,block28,block29,block30;

var block31,block32,block33;
var block34,block35;
var magic = 0;
var blocks ;
var player ;
var nimbus2000; 
var broomdown,broomleft,broomright;

var q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9 , q10 , q11 ;
var  deathlyhallows , scroll ;
var edges , symbols ;
var op1 , op2 , op3  , answers ;
var potion , wand ;

function preload()
{
nimbus2000 = loadImage("images/nimbusup.png");
broomdown = loadImage("images/nimbusdown.png");
broomleft = loadImage("images/nimbusleft.png");
broomright = loadImage("images/nimbusright.png");
deathlyhallows = loadImage("images/deathly hallows sign.png");
scroll = loadImage("images/old ancient scroll.png");
potion = loadImage("images/potion.png");
wand = loadImage("images/wand.png");
hg = loadImage("images/hg.png");
}

function setup()
{
createCanvas (1400,600);
// creates sprites .


player = createSprite(150,130,20,20);
player.addImage(broomright);
player.scale =  0.24;
player.setCollider("rectangle",0,0,530,30);

edges = createEdgeSprites();
symbols = createGroup();
answers = createGroup();



op1 = createSprite(400,400,10,10);
op1.addImage(potion);
op1.scale = 0.2;
op2 = createSprite(700,400,10,10);
op2.addImage(potion);
op2.scale = 0.2;
op3 = createSprite(1000,400,10,10);
op3.addImage(potion);
op3.scale = 0.2;


answers.add(op1)
answers.add(op2);
answers.add(op3);
answers.setVisibleEach(false);

answers.setVisibleEach(false);
q1 = createSprite(700,335,10,10);
q1.addImage(deathlyhallows);
q1.scale = 0.23 ;

q2 = createSprite(150,400,10,10);
q2.addImage(deathlyhallows);
q2.scale = 0.24; 

q3 = createSprite(30,520,10,10);
q3.addImage(deathlyhallows);
q3.scale = 0.24 ;

q4 = createSprite(900,50,10,10);
q4.addImage(deathlyhallows);
q4.scale = 0.24 ;

q5 = createSprite(850,500,10,10);
q5.addImage(deathlyhallows);
q5.scale = 0.24 ;

q6 = createSprite(1195,140,10,10);
q6.addImage(deathlyhallows);
q6.scale = 0.24 ;

q7 = createSprite(1250,450,10,10);
q7.addImage(deathlyhallows);
q7.scale = 0.24 ;

q8 = createSprite(500,260,10,10);
q8.addImage(deathlyhallows);
q8.scale = 0.24 ;

q9 = createSprite(400,50,10,10);
q9.addImage(deathlyhallows);
q9.scale = 0.24 ;

q10 = createSprite(350,520,10,10);
q10.addImage(deathlyhallows);
q10.scale = 0.24 ;

q11 = createSprite(1100,160,10,10);
q11.addImage(deathlyhallows);
q11.scale = 0.24 ;

//player.debug = true;

symbols.add(q1);
symbols.add(q2);
symbols.add(q3);
symbols.add(q4);
symbols.add(q5);
symbols.add(q6);
symbols.add(q7);
symbols.add(q8);
symbols.add(q9);
symbols.add(q10);
symbols.add(q11);

symbols.setVisibleEach(false);

blocks = createGroup();
block1 = createSprite(1100,590,700,10);

block2 = createSprite(100,590,750,10);

block3 = createSprite(1000,520,10,150);

block4 = createSprite(755,450,500,10);

block5 = createSprite(100,500,10,150);

block6 = createSprite(200,450,200,10);

block7 = createSprite(400,390,10,400);

block8 = createSprite(300,350,200,10);

block9 = createSprite(880,300,10,300);

block10 = createSprite(1300,410,200,10);

block11 = createSprite(1200,455,10,100);

block12 = createSprite(1150,500,100,10);

block13 = createSprite(100,400,10,500);

block14 = createSprite(200,250,200,10);

block15 = createSprite(650,380,10,150);

block16 = createSprite(650,300,200,10);

block17 = createSprite(555,250,10,100);

block18 = createSprite(1400,100,500,10);

block19 = createSprite(1155,200,10,200);

block20 = createSprite(1225,200,150,10);

block21 = createSprite(745,250,10,100);

block22 = createSprite(1100,200,100,10);

block23 = createSprite(1050,200,10,150);

block24 = createSprite(1000,130,100,10);

block25 = createSprite(1000,270,100,10);

block26 = createSprite(700,370,100,10);

block27 = createSprite(50,10,900,10);

block28 = createSprite(1400,10,1400,10);

block29 = createSprite(790,495,10,80);

block30 = createSprite(300,50,10,90);

block31 = createSprite(850,50,10,80);

block32 = createSprite(810,85,80,10);

block33 = createSprite(890,85,80,10);

blocks.add(block1);
blocks.add(block2);
blocks.add(block3);
blocks.add(block4);
blocks.add(block5);
blocks.add(block6);
blocks.add(block7);
blocks.add(block8);
blocks.add(block9);
blocks.add(block10);
blocks.add(block11);
blocks.add(block12);
blocks.add(block13);
blocks.add(block14);
blocks.add(block15);
blocks.add(block16);
blocks.add(block17);
blocks.add(block18);
blocks.add(block19);
blocks.add(block20);
blocks.add(block21);
blocks.add(block22);
blocks.add(block23);
blocks.add(block24);
blocks.add(block25);
blocks.add(block26);
blocks.add(block27);
blocks.add(block28);
blocks.add(block29);
blocks.add(block30);
blocks.add(block31);
blocks.add(block32);
blocks.add(block33);

blocks.setColorEach ("#359fe0");
blocks.setVisibleEach(false);

symbols.setColliderEach("rectangle",0,0,200,200);


}

function draw()
{

background(0);

textSize(15);
fill(255);
text("Magical Potion Earned : "+magic,1050,70);

if(level ===0 )
{

    background(0);
    fill("white");
    textSize(20);
    text("You must be a big Harry Potter fan. It's called being a 'POTTERHEAD' " ,300,50);  
    text("but  until and unless you answer the questions given in the maze you can't call yourself a verified potterhead ", 140,100);
    textSize(18);
    text("In the maze their will be symbols placed at different positions. You have to reach those symbols and answer the questions hidden in them but it's not that easy",20,250);
    text("You will also have to face VOLDEMORT, who is chasing you around to catch you, and if it reaches you immediately DIE .",140,300);
    textSize(20);
    text("Once you are done with answering the questions and have reached the end of the maze, you will become a ' CERTIFIED POTTERHEAD'...",40,380);
    textSize(22);
    fill("yellow");
    text("After this you will get a quiz which will sort you into your ideal house, press 'RIGHT ARROW' to continue", 120,480);
    if(keyDown("RIGHT_ARROW"))
    {
        player.velocityX = 15;
        
    }
    if(player.x > 600)
    {
        
        level = 1;
    }

}

if(gameState === "play")
{

console.log(gameState + level);

if(level === 1)
{
    player.velocityX = 0;
    
    blocks.setVisibleEach(true);
    symbols.setVisibleEach(true);
    if(keyDown(UP_ARROW))
    {
        player.y  -= 5 ;
        player.addImage(nimbus2000);
        player.scale = 0.24 ;
        player.setCollider("rectangle",0,0,150,500);
    }
    if(keyDown(DOWN_ARROW))
    {
        player.y  += 5 ;
        player.addImage(broomdown);
        player.scale = 0.24 ;
        player.setCollider("rectangle",0,0,150,500);
    }
    
    if(keyDown(LEFT_ARROW))
    {
        player.x  -= 5 ;
        player.addImage(broomleft);
        player.scale = 0.24
        player.setCollider("rectangle",0,0,500,150);
    }
    
    if(keyDown(RIGHT_ARROW)) 
    {
        player.x  += 5 ;
        player.addImage(broomright);
        player.scale = 0.24 ;
        player.setCollider("rectangle",0,0,500,150);
    }

    if(player.isTouching(q1))
    {
    
   level = 2;

   }
   if(player.isTouching(q2))
    {
    
   level = 3;

   }
   if(player.isTouching(q3))
    {
    
   level = 4;

   }
   if(player.isTouching(q4))
    {
    
   level = 5;

   }
   if(player.isTouching(q5))
    {
    
   level = 6;

   }
   if(player.isTouching(q6))
    {
    
   level = 7;

   }
   if(player.isTouching(q7))
    {
    
   level = 8;

   }
   if(player.isTouching(q8))
    {
    
   level = 9;

   }
   if(player.isTouching(q9))
    {
    
   level = 10;

   }
   if(player.isTouching(q10))
    {
    
   level = 11;

   }
   if(player.isTouching(q11))
   {
    
   level = 12;

   }
   


player.bounce(blocks);
player.collide(edges);

}

if(level === 2)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What is the key ingredient in Polyjuice potion ? ", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Tincture of Demiguise",320,320);
    text("Lacewing flies",640,320);
    text("Pearl Dust",950,320);

    if(mousePressedOver(op1) || mousePressedOver(op3))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);
        gameState = "over";
    }

    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q1.destroy();
        magic++;
    }
}

if(level === 3)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What is the key ingredient in Amortentia (love potion) ?", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Pearl Dust",320,320);
    text("Knotgrass",610,320);
    text("Shredded Boomslang Skin",900,320);

    if(mousePressedOver(op2) || mousePressedOver(op3))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);
        gameState = "over";
    }

    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q2.destroy();
        magic++;
    }
}
if(level === 4)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("Which row in prophecy hall has the prophecy about Harry and Voldemort ?", 270, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("87",370,320);
    text("46",680,320);
    text("97",980,320);

    if(mousePressedOver(op2) || mousePressedOver(op1))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);
        gameState = "over";
    }

    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q3.destroy();
        magic++;
    }
}

if(level === 5)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What was the name of Ginny's pet pygmy puff ?", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Hedwig",370,320);
    text("Arnold",680,320);
    text("Crookshanks",980,320);

    if(mousePressedOver(op3) || mousePressedOver(op1))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);
        gameState = "over";
    }

    if(mousePressedOver(op2))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q4.destroy();
        magic++;
    }
}

if(level === 6)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What was the name of Ron's pet owl (personal) ?", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text(" Errol ",370,320);
    text("Hedwig ",680,320);
    text("Pigwidgeon ",980,320);

    if(mousePressedOver(op2) || mousePressedOver(op1))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);
        gameState = "over";
    }

    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q5.destroy();
        magic++;
    }
}

if(level === 7)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("Which Harry Potter character existed in real life ?", 470, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Nicholas Flamel ",370,320);
    text("Glideroy Lockhart ",680,320);
    text("Pomona Sprout ",980,320);

    if(mousePressedOver(op2) || mousePressedOver(op3))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);
        gameState = "over";
    }

    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q6.destroy();
        magic++;
    }
}

if(level === 8)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What was the hair colour of Teddy Lupin when he was born and they changed into which colour ? ", 180, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Black-Ginger ",370,320);
    text("Pink-Blue ",680,320);
    text("Blue-Green ",980,320);

    if(mousePressedOver(op2) || mousePressedOver(op3))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);
        gameState = "over";
    }

    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q7.destroy();
        magic++;
    }
}


if(level === 9)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What was the name of second Pevrell bother , who owned the Ressurection Stone ? ", 250, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Antioch Pevrell",320,320);
    text("Ignnotus Pevrell",640,320);
    text("Cadmus Pevrell",950,320);
    
    if(mousePressedOver(op1) || mousePressedOver(op2))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);
        gameState = "over";
    }

    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q8.destroy();
        magic++;
    }
}


if(level === 10)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("Where do Harry and Ginny have their first kiss ?", 410, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Common room ",350,320);
    text("Room of Requirement",630,320);
    text("Quidditch pitch",940,320);

    if(mousePressedOver(op2) || mousePressedOver(op3))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        answers.setVisibleEach(false);    
        gameState = "over";
    }

    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q9.destroy();
        magic++;
    }
}

if(level === 11)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("Who tried to slip Harry into a love potion ? ", 480, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    
    textSize(20);
    fill("black");
    text("Cho Chang ",370,320);
    text("Hermione Granger ",670,320);
    text("Romilda Vane",980,320);

    if(mousePressedOver(op2) || mousePressedOver(op1))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        gameState = "over";
        answers.setVisibleEach(false);

    }

    if(mousePressedOver(op3))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q10.destroy();
        magic++;
    }
}


if(level === 12)
{
    blocks.setVisibleEach(false);
    symbols.setVisibleEach(false);
    answers.setVisibleEach(true);
    background(scroll);
    
    
    
    textSize(25);
    stroke("brown");
    fill("black");
    text("What is the name of plant that Neville got from his grandmother on his birthday? ", 280, 200);
    player.addImage(wand);
    player.x = mouseX;
    player.y = mouseY;
    
    textSize(20);
    fill("black");
    text("Mimbulus Mimbletonia ",300,320);
    text("Devil's Snare  ",670,320);
    text("Gillyweed right",980,320);

    if(mousePressedOver(op2) || mousePressedOver(op3))
    {

        text(" TRY AGAIN", 500,500);
        level = 0;
        gameState = "over";
        answers.setVisibleEach(false);

    }

    if(mousePressedOver(op1))
    {
        text("WELL DONE", 500,500);
        level = 1;
        answers.setVisibleEach(false);
        q11.destroy();
        magic++;
    }
}
if(magic === 11)
{
    gameState = "end";
}

}


if(gameState === "over")
{
    level = 0;
    textSize(35);
    stroke("yellow");
    text("CLICK ON CTRL+R",500,200);
    strokeWeight(7);
    line(500,210,820,210);
} 








drawSprites();

if(gameState === "end")
{
    blocks.destroyEach();
    symbols.destroyEach();
    background(hg);
    textSize(35);
    fill("orange");
    text("WELCOME TO HOGWARTS", 490,40);
    gameState = "play";
}



}
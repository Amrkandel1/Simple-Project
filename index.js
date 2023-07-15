var p1=document.getElementById("ParaG");
var p2=document.getElementById("PARAG");




var allQuotes=[
    {par1:`“Be yourself; everyone else is already taken.”`,
    par2:`― Oscar Wilde`} ,
    {par1:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    par2:`― Marilyn Monroe`} ,
    {par1:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    par2:`― Albert Einstein`} ,
    {par1:`“So many books, so little time.”`,
    par2:`― Frank Zappa`} ,
    {par1:`“A room without books is like a body without a soul.”`,
    par2:`― Marcus Tullius Cicero`} ,
    {par1:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    par2:`― Bernard M. Baruch`} ,
    {par1:`“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
    par2:`― William W. Purkey`} ,
    {par1:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    par2:`― Dr. Seuss`} ,
    {par1:`“You only live once, but if you do it right, once is enough.”`,
    par2:`― Mae West`} ,
    {par1:`“Be the change that you wish to see in the world.”`,
    par2:`― Mahatma Gandhi`} 
];




function displayQuotes(){
    document.getElementById("btn11").classList.replace("bg-primary" , "bg-success");
    var randomQuote=Math.floor(Math.random()*(allQuotes.length));
    p1.innerHTML=allQuotes[randomQuote].par1;
    p2.innerHTML=allQuotes[randomQuote].par2;  
}

function del1(){
    document.getElementById("btn11").classList.replace("bg-success" , "bg-primary");
}
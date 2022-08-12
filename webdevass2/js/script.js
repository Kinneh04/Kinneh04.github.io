document.getElementById("funfactbutton").addEventListener("click", randomfact);
document.getElementById("iconbutt").addEventListener("click", navbaronclick);

function clicker()
{
    count = count + 1;
    if(count != 69)
    document.getElementById('clicker').innerHTML = 'times clicked: ' + count
    else document.getElementById('clicker').innerHTML = 'times clicked: ' + count + ' (nice)'
}
let drop1 = false
let drop2 = false
let drop3 = false
let drop4 = false
let drop5 = false
let drop6 = false
let drop7 = false

function navbaronclick() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


function addingredient(){
    playaudio('placesfx')
    console.log(this.id)
    if(this.id == "but1")
    {
        onclickshow()
        let str = "Correct! good, fresh Avocados are the key ingredient in a good guacamole. First, slice 3 ripe avocados in half, remove the pits, and mash them in a bowl until they are as smooth as you like! This recipe serves 4 people and you can keep it for up to 4 days!";
        document.getElementById("commontxt").innerHTML = str
        drop1 = true
        document.getElementById("ing1").style.display='none';
    }
    if(this.id == "but2")
    {
        onclickshow()
        let str = "Correct! Finely chop the fresh cilantro leaves and add 3 tablespoons to the mashed avocado. This gives the guacamole an earthy fresh taste while adding some extra nutrients in there! Also did you know that The Vitamin C and E quotient in guacamole keeps your skin, hair, blood vessels, tendons, ligaments and other connective tissues healthy? ";
        document.getElementById("commontxt").innerHTML = str
        drop2 = true
        document.getElementById("ing2").style.display='none';
    }
    if(this.id == "but3")
    {
        onclickshow()
        let str = "Correct! The best tomatoes used for guacamole are Roma tomatoes, also known as the italian tomato. With a very low water content compared to other tomatoes and an almost chewy texture, it is perfect for sauces, like guac! Dont worry if you dont have roma tomatoes though, you can always use regular plum tomatoes! ";
        document.getElementById("commontxt").innerHTML = str
        drop3 = true
        document.getElementById("ing3").style.display='none';
    }
    if(this.id == "but4")
    {
        onclickshow()
        let str = "Correct! Hey! Did you know that this step is optional? Turns out, Authentic Guac doesnt contain any garlic! So why do so many recipes use them anyway? Well, to taste of course! Garlic brings your guac up a notch by giving it a pungent kick of flavours! Usually 2 cloves of finely minced garlic is more than enough to spice up your guac!";
        document.getElementById("commontxt").innerHTML = str
        drop4 = true
        document.getElementById("ing4").style.display='none';
    }
    if(this.id == "but5")
    {
        onclickshow()
        let str = "Correct! Do you like spice in your guac? Well it doesnt matter! To add some more spice into your guac, simply leave the jalepeno seeds in the chili as you finely dice them up! The seeds contain the capsacin that brings out all the heat anywyay! And likewise, if you dont like it, just remove the seeds! 2 chilies is enough for this recipe.";
        document.getElementById("commontxt").innerHTML = str
        drop5 = true
        document.getElementById("ing5").style.display='none';
    }
    if(this.id == "but6")
    {
        onclickshow()
        let str = "Correct! The best onion used for guac is the White Onion. Big, round and sweet, they help add a dash of sweetness and pungency to your guac! To prepare them, just finely dice half an onion. Oh and if you want the sweetness without the aftertaste, just soak the onion in water for a couple minutes to remove the pungency! ";
        document.getElementById("commontxt").innerHTML = str
        drop6 = true
        document.getElementById("ing6").style.display='none';
    }
    if(this.id == "but7")
    {
        onclickshow()
        let str = "Correct! Finally, the lime. You can use a lemon if you dont have a lime. All this is doing is just adding a spritz of tartness to the whole mixture to really bring out all the flavours and combine them into something that you can enjoy! Just squeeze half a lemons juice or a whole limes juice inside and that should be enough! Oh and dont forget the salt!";
        document.getElementById("commontxt").innerHTML = str
        drop7 = true
        document.getElementById("ing7").style.display='none';
    }
    if(this.id == "but8")
    {
        onclickshow()
        let str = "Oops! Turns out you dont need mayonaise inside guacamole! The avocados provide enough of a creamy texture already!";
        document.getElementById("commontxt").innerHTML = str
        return;
    }
    if(this.id == "but9")
    {
        onclickshow()
        let str = "Oops! While peanut butter may be great on bread, unfortunately its not suitable to be on guacamole, try again.";
        document.getElementById("commontxt").innerHTML = str
        return;
    }
    if(this.id == "but10")
    {
        onclickshow()
        let str = "Oops! Usually cooking wine is best suited for frying foods, where the alcohol will be cooked off. Unless you want to get drunk eating your guacamole, you shouldnt have it in there! Try again!";
        document.getElementById("commontxt").innerHTML = str
        return;
    }
    if(this.id == "but11")
    {
        onclickshow()
        let str = "Oops! Radish is actually a little contriversial in the guacamole making community! Some people do it with but most authentic recipes dont use radishes. Try again!";
        document.getElementById("commontxt").innerHTML = str
        return;
    }
}

function randomfact()
{

    console.log()
    let num = Math.floor(Math.random() * (10- 1)) + 1;
    if(num == 1)
    {
        document.getElementById('funfacttxt').innerHTML = "Avocados are in the same family as cinnamon. Seriously!"
    }  
    else if(num == 2)
    {
        document.getElementById('funfacttxt').innerHTML = "Half of an average-sized avocado has 4.6 grams of fiber, the most of any fruit!"
    }
    else if(num == 3)
    {
        document.getElementById('funfacttxt').innerHTML = "An avocado has more potassium than a banana. Honestly!"
    }
    else if(num == 4)
    {
        document.getElementById('funfacttxt').innerHTML = "California produces 90% of the U.S. avocado crop!"
    }
    else if(num == 5)
    {
        document.getElementById('funfacttxt').innerHTML = "In the summer of 2017, more than 3,000,000 photos of avocado toast were uploaded to Instagram every day!"
    }
    else if(num == 6)
    {
        document.getElementById('funfacttxt').innerHTML = "Guacamole literally means 'avocado soup'!"
    }
    else if(num == 7)
    {
        document.getElementById('funfacttxt').innerHTML = "Don't toss the peels and pits. Instead, use them to make a delicate pink blue natural dye!"
    }
    else if(num == 8)
    {
        document.getElementById('funfacttxt').innerHTML = "there's some evidence that avocado oil helps prevent gum disease!"
    }
    else if(num == 9)
    {
        document.getElementById('funfacttxt').innerHTML = "More avocados are consumed on Super Bowl Sunday than any other day of the year!"
    }
    else if(num == 10)
    {
        document.getElementById('funfacttxt').innerHTML = "the National Avocado Day is July 31, and the National Guacamole Day is September 16!"
    }
}

let droppedid = ""

function cook()
{
    playaudio('cooksfx')
    document.getElementById('revealcook').style.display = "block";
    document.getElementById('revealbutton').style.display = "none";
    setTimeout(guac, 10000);   
    
}
function guac()
{
    document.getElementById('revealcook').style.display = "none";
    document.getElementById('revealtext').style.display = "block";
    document.getElementById('bowl').src="../images/FinishedGuac.png";
}
function playaudio(audioid) {
    console.log(audioid)
var audio = document.getElementById(String(audioid));
audio.play();
}

function onclickshow()
{
    document.getElementById('revealimage').style.display = "block";
}


function closeavoreveal()
{
    document.getElementById('revealimage').style.display='none';
    if (drop1 == true && drop2 == true && drop3 == true && drop4 == true && drop5 == true && drop6 == true && drop7 == true)
    {
        document.getElementById('bowl').src="../images/Ingredients/fullbowl.png";
        document.getElementById('revealbutton').style.display = "block";
        
    }
}


let opened1 = false
let opened2 = false
let opened3 = false
let opened4 = false
function openavo()
{
    var idno = this.id
    document.getElementById(idno).childNodes[1].src="../images/OpenAvo.png";
    // document.getElementById('revealimage').style.display = "none";
    onclickshow()
    if (String(idno) == "avo1")
    {
        let str = "Avocados are a healthy source of vitamins C, E, K, and B6, as well as riboflavin, niacin, folate, pantothenic acid, magnesium, and potassium. They also provide lutein, beta carotene, and omega-3 fatty acids. Thats alot of vitamins and minerals! (click the avocado slice to close)";
        document.getElementById("commontxt").innerHTML = str
        if (opened1 == false)
        {
            playaudio('crunchsfx')
            opened1 = true
        }
    }
    else if (String(idno) == "avo2")
    {
        let str = "Studies have not yet assessed a direct link between avocado consumption and a reduction in cancer risk. However, avocados do contain compounds that may help prevent the onset of some cancers, like colon, stomach, pancreatic and even cervical cancers!";
        document.getElementById("commontxt").innerHTML = str
        if (opened2 == false)
        {
            playaudio('crunchsfx')
            opened2 = true
        }
    }
    else if (String(idno) == "avo3")
    {
        let str = "Avocados are high in fiber, containing approximately 6-7g per half fruit. Adequate fiber promotes regular bowel movements, which are crucial for the excretion of toxins through the bile and stool. Dietary fiber also promotes good gut health and microbial diversity!";
        document.getElementById("commontxt").innerHTML = str
        if (opened3 == false)
        {
            playaudio('crunchsfx')
            opened3 = true
        }
    }
    else if (String(idno) == "avo4")
    {
        let str = "Half an avocado provides 18% of the daily value of vitamin K. This nutrient is often overlooked but is essential for bone health. Taking in enough vitamin K can support bone health by increasing calcium absorption and reducing the urinary excretion of calcium.";
        document.getElementById("commontxt").innerHTML = str
        if (opened4 == false)
        {
            playaudio('crunchsfx')
            opened4 = true
        }
    }
    
}
function closeavo()
{
    document.getElementById('revealimage').style.display = "none";
    hopen = false;
}


var hopen = false;
function history()
{
    num++;
    if(num > 6){num = 0}
    if(num == 0)
    {
        var str = "Ready to begin your avocado journey through time again?"
        document.getElementById(String("historyavo")).src="../images/growing/grow1.png";
    }
    if(num == 1)
    {
        var str = "Avocados were a popular snack food long before humans hit the scene. In the Cenozoic era, prehistoric megafauna like mammoths and giant ground sloths would gobble the fruit whole and then travel long distances, before pooping out the seed and thus dispersing the treess!";
        document.getElementById(String("historyavo")).src="../images/growing/grow2.png";
    }
    if(num == 2)
    {
        var str = "By 500 B.C. humans were cultivating what they called ahuacatl in Mexico and Central America, breeding the fruit to have more and more of the delicious flesh they loved in the process. In 1926, California postman Rudolph Hass brought some avocado seedlings home to grow. "
        document.getElementById(String("historyavo")).src="../images/growing/grow3.png";
    }
    if(num == 3)
    {
        var str = "It was the Hass children, according to the story, who discovered that the tree had produced a fruit that they liked far better than the others: one with a rich, nutty, slightly oily taste. Hass Sr. apparently concurred. 'As I've heard the story, the kids brought the fruit in to him and he said, 'wow this isn't bad,''"
        document.getElementById(String("historyavo")).src="../images/growing/grow4.png";
    }
    if(num == 4)
    {
        var str = "So while his name and fame spread widely with the tree, Hass and his family didn't really cash in on the craze that began in their backyard, son Charles Hass once explained to The Los Angeles Times. 'For coming up with the greatest avocado in the world, my father's royalties totaled 4,800 bucks over the life of the patent,' the younger Hass told the newspaper. "
        document.getElementById(String("historyavo")).src="../images/growing/grow5.png";
    }
    if(num == 5)
    {
        var str = "Hass Sr. passed away in 1952, but his creation far outlived him. The roots of this humble collaboration eventually populated the globe with millions of avocado trees, all genetically descended from that single mother tree that lived on at the old Hass place until claimed by root rot disease in 2002. "
        document.getElementById(String("historyavo")).src="../images/growing/grow6.png";
    }
    if(num == 6)
    {
        var str = "Now that you learnt about the history of the Hass Avocado, you can revisit it again by clicking the plant!"
        document.getElementById(String("historyavo")).src="../images/growing/grow6.png";
    }
    document.getElementById("commontxt").innerHTML = str
    if (hopen == false)
    {
        document.getElementById('revealimage').style.display = "block";
        playaudio('placesfx')
        hopen = true
    }
}
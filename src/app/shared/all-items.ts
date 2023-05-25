import { MainModel } from "./main-model";

// *** ID LEGEND *** //
// 1-99 = mice
// 100-199 = mousepads
// 200-299 = keyboards
// 300-399 = audio
// 400-499 = monitors
// 700-799 = watches
// 500-599 = edc
// 600-699 = other

export const AllItems: MainModel[] = [
//////////********** Mice **********//////////
{
  id: '93',
  type: 'Mouse',
  name: 'Lamzu Atlantis Mini',
  description: 'Claw / Small',
  imgSrc: './assets/images/atlantismini.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br> Sensor: 3395 <br> Switches: Huano Pinks with Blue Dots <br> Weight: 49g <br> Battery: <br>
      <br> <br>
      <strong>Shape:</strong> <br> An XM1 clone? It's very similar to the aggressive claw shape of the XM1. The hump is more towards the center of the mouse and the sides are not flared out as much. This makes it a little more versatile. Relaxed claw, palm claw, and knuckle claw is much more comfortable because of these differences. The shape is small, so if you have larger hands, fingertip works well. The sides are slightly angled and wide, so it's not the most comfortable to fingertip. The shape works well for me when I want a stable grip.
      <br> <br>
      <strong>Buttons:</strong> <br> The M1 and M2 buttons feel premium. They have a soft thuddy sound with a heavy tactile feedback. On the return, the mouse clicks feel like they are going to bounce out of the mouse. Maybe that's because the springs are long and the mouse is very light, I'm not sure. It does feel good though. The side buttons are similar to the M1 and M2, very good. The scroll wheel is surprisingly good. The rubber material is comfortable and grippy. There are very defined bumps and the button is heavy. The button press down is heavy, which is fine, but the return is light and barely noticable. I'm not a fan of it because it doesn't give me the tactile feedback that the button has returned, which makes it hard to spam. The buttons in general feel like quality heavy switches.
      <br> <br>
      <strong>Value:</strong> <br> This mouse retails around $90. I have the limited time Rose Gold version, which was a little more expensive. ($99) It's an incredible deal. The mouse itself is end game worthy. You get replacement PTFE feet and grip tape for free. The unboxing experience feels premium. An end game mouse with little QC issues for $90 seems like good value.
      <br> <br>
      <strong>Conclusions:</strong> <br> This is a small, claw grip mouse that has most features and little QC issues. The coating on my version is extremely grippy. Combined with the claw shape, I feel very confident with it in hand. This mouse does force me to claw the mouse though. I am not really able switch grips quickly. Depending on the game and situation, I like to switch to different grips to adjust to the situation. An example would be switching to fingertip for quick micromovements. My hand wants to stay claw and not move when holding this mouse. All in all, this mouse has everything you'd want from a gaming mouse, except Razer's technology. For a small, claw mouse, this is as good as it's going to get.
      <br> <br>
      <strong>Score:</strong> <br> 9/10
      `
    }
  ],
},
{
  id: '94',
  type: 'Mouse',
  name: 'Razer Orochi v2',
  description: 'Claw / Small',
  imgSrc: './assets/images/orochiv2.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br> Sensor: 3365 <br> Switches: Razer Optical <br> Weight: 55g <br> Wireless: 2.4hz or Bluetooth <br> Battery: AA or AAA
      <br> <br>
      <strong>Shape:</strong> <br> This small ergo egg shape is weird. It is small so fingertip makes sense, but the side grooves make it hard to fingertip. The ergo shape makes you want to palm or claw the mouse. It is small, but wide with a small/thin back hump. Finding a comfortable grip on this mouse is difficult. Adding grip tape to it helps fill out the ergo shape. I prefer to claw this mouse over fingertip because of its wide body. Despite its small size, this mouse is for medium hands.
      <br> <br>
      <strong>Buttons:</strong> <br> The M1 and M2 buttons feel good and are very tactile. They are on the heavier side. I prefer light clicks, but these are not bad. The side buttons are very good. The scroll wheel is loud, heavy, and has well defined bumps. The scroll wheel broke on me. It stopped scrolling. I sent it to Razer and they replaced the mouse for free.
      <br> <br>
      <strong>Value:</strong> <br> This mouse is not worth it for the retail price of $80. I would buy it again at the sale price (~$40).
      <br> <br>
      <strong>Conclusions:</strong> <br> This is a budget travel mouse that can be used for gaming. The bluetooth mode, AA/AAA battery, small size makes it perfect for traveling or using it with a laptop. For gaming, it is alright. It has Razer's technology (responsive sensor and optical switches). It feels like a budget mouse. The buttons are loud. The shape and coating is not comfortable and feels slippery. The removable top shell makes the mouse creak. <br> This is Razer's version of the Logitech G305. <br> Razer > Logitech therefore Orochi v2 > G305
      <br> <br>
      <strong>Score:</strong> <br> 7/10
      `
    }
  ],
},
{
  id: '95',
  type: 'Mouse',
  name: 'Razer Viper Mini',
  description: 'Hybrid / Small',
  imgSrc: './assets/images/vipermini.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br>
      <br> <br>
      <strong>Shape:</strong> <br> This is the god shape. For small hands, every grip feels comfortable. The mouse is very narrow. I like this, but someone with larger hands may not. For fingertip, this mouse shape is perfect.
      <br> <br>
      <strong>Buttons:</strong> <br> The M1 and M2 buttons feel good, but will side to side creak after a long time. The side buttons are a little mushy. The scroll wheel is light with lightly defined bumps. My scroll wheel is showing its age. The scrolling and button is no longer consistent. It randomly scrolls, scrolls in opposite directions sometimes, and button press doesn't always work.
      <br> <br>
      <strong>Value:</strong> <br> This is the best bang for your buck. This mouse goes on sale for ~$20. It is a lot of people's end game. I have been using it for years with heavy use and it only has minor issues.
      <br> <br>
      <strong>Conclusions:</strong> <br> This is the most recommended and popular mouse in the mouse community. It is very cheap, has a great shape, has good qc, and sold everywhere. The problem with this mouse is that it is wired and has a high lift off distance. This is the most responsive 1000hz mouse in the market right now. Compared to every other mouse, this is consistently faster. It also will never double click because of the optical switches. This is my main mouse for everything except FPS games, because of its wire.
      <br> <br>
      <strong>Score:</strong> <br> 9/10
      `
    }
  ],
},
{
  id: '96',
  type: 'Mouse',
  name: 'Finalmouse Air58',
  description: 'Palm / Large',
  imgSrc: './assets/images/air58.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br>
      <br> <br>
      <strong>Shape:</strong> <br> Same shape as the Finalmouse Sunset, except the Air58 has holes on the sides. It is a great shape for large hands. Difficult to claw, but easy to palm and fingertip because of its flat sides and low back hump.
      <br> <br>
      <strong>Buttons:</strong> <br> Buttons feel the same as the Finalmouse Sunset, decent buttons. The scroll wheel is not textured and feels too smooth.
      <br> <br>
      <strong>Value:</strong> <br> Finalmouse value is a joke. For its market price, it is barely worth it. This version is definitely not worth it because this is the Ninja version. Never buy Finalmouse aftermarket.
      <br> <br>
      <strong>Conclusions:</strong> <br> An outdated large mouse with Ninja's touch. Aesthetically, it looks cool. The holes on the sides make the mouse feel worse than the Finalmouse Sunset, despite being the same shape. The timing of this release makes this mouse much worse. Not technically better than anything else on the market at the time. A wired, 500hz, large, "lightweight" mouse for a premium price. <br> Summit1G (Sunset) > Ninja (Air58)
      <br> <br>
      <strong>Score:</strong> <br> 5/10
      `
    }
  ],
},
{
  id: '97',
  type: 'Mouse',
  name: 'Logitech G203',
  description: 'Claw / Small',
  imgSrc: './assets/images/g203.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br>
      <br> <br>
      <strong>Shape:</strong> <br> This is the classic egg shape. The sides are sloped inwards, which I do not like. It makes fingertipping this mouse hard.
      <br> <br>
      <strong>Buttons:</strong> <br> The buttons are very satisfying. They are clicky, light, and tactile. The scroll wheel has defined bumps, but a heavy tactile button press.
      <br> <br>
      <strong>Value:</strong> <br> This mouse is very cheap, but it is too old to even consider buying. It might be worth it if you can find it for ~$10.
      <br> <br>
      <strong>Conclusions:</strong> <br> A wired, heavy, egg shaped Logitech mouse. There is nothing particularly wrong with this mouse except that it is just outdated. The wire is awful. It's heavy and does not bend well. It weighs a lot for its small size. The G305 is the wireless version of this mouse. It solves the wire issue, but it still is heavy.
      <br> <br>
      <strong>Score:</strong> <br> 4/10
      `
    }
  ],
},
{
  id: '98',
  type: 'Mouse',
  name: 'Finalmouse Sunset',
  description: 'Palm / Large',
  imgSrc: './assets/images/sunset.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br>
      <br> <br>
      <strong>Shape:</strong> <br> Great shape for large hands. It's large size makes playing any sensitivity very easy because it's easy to be stable. Slight horizontal grooves on flat vertical sides makes this easy to palm and fingertip. Clawing this mouse is difficult unless you have very large hands. Having no holes on the sides makes this mouse very comfortable.
      <br> <br>
      <strong>Buttons:</strong> <br> Decent M1 and M2, mushy feeling, but clicky sound side buttons. Scroll wheel has light bumps and a light tactile button press.
      <br> <br>
      <strong>Value:</strong> <br> Finalmouse is not the value company. They are about innovation and uniqueness. I got this mouse for $90. It was worth it at the time. There were very few mice that were light and big. Nowadays, the technology is just too old. It's wired, 500hz, and not that light.
      <br> <br>
      <strong>Conclusions:</strong> <br> Surprisingly, I liked this mouse despite it's large size. The flat sides allowed me to fingertip this mouse somehow on high sensitivity. The lower back hump allowed me to palm the mouse for low sensitivity. Finalmouse will never be worth the aftermarket price. Even the market price is barely worth it because the technology gets adopted by other companies within a year or two.
      <br> <br>
      <strong>Score:</strong> <br> 6/10
      `
    }
  ],
},
{
  id: '99',
  type: 'Mouse',
  name: 'Logitech G502',
  description: 'Palm / Large',
  imgSrc: './assets/images/g502.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br>
      <br> <br>
      <strong>Shape:</strong> <br> This ergo shape is loved for productivity. Despite its large size, it feels comfortable with small hands.
      <br> <br>
      <strong>Buttons:</strong> <br> Clicky, light, and tactile buttons. There are lots of additional buttons that could be used for productivity. I did not use any of the additional buttons and they did not feel in the way. The infinite scroll wheel is amazing.
      <br> <br>
      <strong>Value:</strong> <br> There are many different versions of this mouse. They are leaning more on the expensive side. There are better options for productivity and for gaming.
      <br> <br>
      <strong>Conclusions:</strong> <br> The grandfather of productive gaming mice. This mouse was very good for its time, but there are better options nowadays. The shape is god tier though. I thought I preferred large mice because I liked the G502. The reality was that the shape could fit any hand size comfortably.
      <br> <br>
      <strong>Score:</strong> <br> 7/10
      `
    }
  ],
},
//////////********** Mousepads **********//////////
{
  id: '195',
  type: 'Mousepad',
  name: 'LGG Saturn',
  description: 'Control / Cloth',
  imgSrc: './assets/images/saturn.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br>
      <br> <br>
      <strong>Texture:</strong> <br> Smooth
      <br> <br>
      <strong>Performance:</strong> <br> Medium static dynamic friction. Works with all games and sensitivities.
      <br> <br>
      <strong>Quality:</strong> <br> Lays flat, good stitching, good consistency, thick rubber base.
      <br> <br>
      <strong>Conclusions:</strong> <br> An all around mousepad. Slightly more on the control side. Nothing wrong with this mousepad.
      <br> <br>
      <strong>Score:</strong> <br> 9/10
      `
    }
  ],
},
{
  id: '196',
  type: 'Mousepad',
  name: 'Aqua Control Plus',
  description: 'Control / Hybrid',
  imgSrc: './assets/images/aquacontrol.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br>
      <br> <br>
      <strong>Texture:</strong> <br> Rough
      <br> <br>
      <strong>Performance:</strong> <br> Low static and medium dynamic friction. Works with most games and sensitivities. Slower paced games like tac shooters are harder to make this mousepad work. Good mouse control is important with this mousepad. The micro movements are effortless because of the low static friction. This may cause instability and inconsistency if your mouse control is not good.
      <br> <br>
      <strong>Quality:</strong> <br> Lays flat after a few weeks, decent stitching, decent consistency, bad rubber base. Surface slows down eventually, even with wash. The base does not stick very well. It slides around very easily, but not while gaming.
      <br> <br>
      <strong>Conclusions:</strong> <br> The rubber base is the only problem with this mousepad. It's thin and slides around. My mousepad edge is starting to curl where my arm lays because my arm's heat is breaking down the rubber base. The actual performance of the mousepad is amazing.
      <br> <br>
      <strong>Score:</strong> <br> 8/10
      `
    }
  ],
},
{
  id: '197',
  type: 'Mousepad',
  name: 'PFERDEKI',
  description: 'Speed / Hybrid',
  imgSrc: './assets/images/pferdeki.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br>
      <br> <br>
      <strong>Texture:</strong> <br> Rough? Not rough, but not smooth. Will not iritate skin, but not smooth like cloth.
      <br> <br>
      <strong>Performance:</strong> <br> Extremely low static and dynamic friction. For accurate tracking/flicking, this mousepad is not it. It just zooms.
      <br> <br>
      <strong>Quality:</strong> <br> For a ~$10 mousepad, the value and quality is insane. This is basically a Glide38 clone. The silicone base is good, but takes a long time to lay flat. It is not stitched, so it does fray.
      <br> <br>
      <strong>Conclusions:</strong> <br> It zooms. It's too fast for my usage. It feels like you are using a hardpad without the hardness. The quality is great for the price. It's worth a try if you can find it in stock.
      <br> <br>
      <strong>Score:</strong> <br> 6/10
      `
    }
  ],
},
{
  id: '198',
  type: 'Mousepad',
  name: 'Cooler Master MP510',
  description: 'Hybrid / Codura',
  imgSrc: './assets/images/mp510.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br> Codura
      <br> <br>
      <strong>Texture:</strong> <br> Very rough
      <br> <br>
      <strong>Performance:</strong> <br> Low static and medium dynamic friction. Works well with most games. Low static friction requires good mouse control especially with higher sensitivity. The dynamic friction makes the mousepad perform more like a slower pad.
      <br> <br>
      <strong>Quality:</strong> <br> Lays flat, decent stitching, decent consistency, decent rubber base. Surface slows down after washes. Hard to wash because water and soap likes to stay in the pad, like a sponge. It comes in a few sizes, a deskpad size and a normal size. The normal size is smaller than other gaming pads. There is not enough depth for me, as I rest my arm on my desk/mousepad.
      <br> <br>
      <strong>Conclusions:</strong> <br> My preference combination of low static and medium dynamic friction. Mouse control is not an issue for me, and I prefer having the ability to micro-correct instantly. Higher dynamic friction makes it so when I 180 flick, it doesn't feel like I'm throwing my mouse across the room. This is definitely a great mousepad performance wise, but it just lacks in a few other areas. It's hard to wash, the size is small, and very rough.
      <br> <br>
      <strong>Score:</strong> <br> 8/10
      `
    }
  ],
},
{
  id: '199',
  type: 'Mousepad',
  name: 'SteelSeries QCK+',
  description: 'Control / Cloth',
  imgSrc: './assets/images/qck.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br> Cloth
      <br> <br>
      <strong>Texture:</strong> <br> Smooth
      <br> <br>
      <strong>Performance:</strong> <br> High static and dynamic friction. Slow pad that gets even slower after water just looks at it. It feels great to use until humidity touches it. Humidity causes slow spots in this pad.
      <br> <br>
      <strong>Quality:</strong> <br> One of the lowest quality mousepads on the market. Humidity kills it. It gets dirty very quickly. It is not stitched, so the edges fray. The rubber base is decent.
      <br> <br>
      <strong>Conclusions:</strong> <br> This pad is very popular for no reason. It was widely available and pro gamers used this mousepad because of sponsorships, which popularized the mousepad. This mousepad is horrible if there is any humidity where you live. It instantly soaks up the water and slows down the pad. It makes the pad inconsistent and muddy. The actual performance is okay, if water never looked at it. There are much better options if you want a slow pad.
      <br> <br>
      <strong>Score:</strong> <br> 3/10
      `
    }
  ],
},
//////////********** Keyboards **********//////////
{
  id: '296',
  type: 'Keyboard',
  name: 'IV Works AV4',
  description: 'KTT Roses / NicePBT Beach Day',
  imgSrc: './assets/images/av4.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Keyboard:</strong> <br> IV Works AV4 Claymore
      <br> <br>
      <strong>Switches:</strong> <br> KTT Roses (Stock)
      <br> <br>
      <strong>Keycaps:</strong> <br> NicePBT Beach Day
      <br> <br>
      <strong>Sound Profile:</strong> <br> Loud, Clacky, Poppy
      <br> <br>
      <strong>Conclusions:</strong> <br> A premium stacked acrylic alice style keyboard with a long pole sound profile. It has a great underglow and skeleton plate aesthetic. The alice layout was easy to get used to since I touch type with most of my fingers. I did have problems with the B and Y keys. I use both hands to type B and Y, depending on the word. It has some getting used to, but not much. My WPM is about the same no matter the layout.
      `
    }
  ],
},
{
  id: '297',
  type: 'Keyboard',
  name: 'WindX65',
  description: 'Gateron Box Pinks / NicePBT Classic Beige',
  imgSrc: './assets/images/windx65.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Keyboard:</strong> <br> WindX65 (Tape mod)
      <br> <br>
      <strong>Switches:</strong> <br> Gateron Box Pinks (Lubed and Filmed)
      <br> <br>
      <strong>Keycaps:</strong> <br> NicePBT Classic Beige
      <br> <br>
      <strong>Sound Profile:</strong> <br> Quiet, Poppy, Marbly
      <br> <br>
      <strong>Conclusions:</strong> <br> A premium 65% with a poppy sound profile. This board does not need to be tape modded. It is not hollow or metallic sounding at all. I tape modded this because this is a prototype keyboard with third party gaskets that do not fit well. The PCB shorts when pressed down hard enough. The tape mod prevents the shorting. It still sounds good with the tape mod. It gives it more of a marbly, PE foam sound.
      `
    }
  ],
},
{
  id: '298',
  type: 'Keyboard',
  name: 'WS Ikki68 Aurora R2',
  description: 'WS Silent Linears / DMK Ghost',
  imgSrc: './assets/images/ikki68.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Keyboard:</strong> <br> Wuque Studios Ikki Aurora Round 2
      <br> <br>
      <strong>Switches:</strong> <br> Wuque Studios Silent Linears (Stock)
      <br> <br>
      <strong>Keycaps:</strong> <br> Domikey Ghost
      <br> <br>
      <strong>Sound Profile:</strong> <br> Silent, Silicone, Raindrops
      <br> <br>
      <strong>Conclusions:</strong> <br> An entry level 65% with silent switches. The board itself is flexy and has a silicone sound signature. The silent switches emphasizes the silicone sound. The slight pop of the silent switches sounds like light raindrops hitting the windowsill. It's a very satisfying and relaxing sound. It feels like typing on clouds. It's smooth but has a slight heaviness to it that ends with a soft cushion.
      `
    }
  ],
},
{
  id: '299',
  type: 'Keyboard',
  name: 'GMMK PRO',
  description: 'Cherry MX Browns / PBTFans WoB',
  imgSrc: './assets/images/gmmkpro.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Keyboard:</strong> <br> Glorious GMMK PRO
      <br> <br>
      <strong>Switches:</strong> <br> Broken-In Cherry MX Hyperglide Browns (Lubed and Filmed)
      <br> <br>
      <strong>Keycaps:</strong> <br> PBTFans White on Black
      <br> <br>
      <strong>Sound Profile:</strong> <br> Empty, Thock, Scratch
      <br> <br>
      <strong>Conclusions:</strong> <br> An entry level 75% with the signature Cherry scratch. This board lacks character. No matter what switches you put in, it'll sound very similar. The typing feel is very firm as there is no flex or space in the keyboard. The Broken-In Browns are a very smooth light tactile with a scratchy sound. I would like to use these switches in another aluminum plate keyboard to get better feel of these switches.
      `
    }
  ],
},
{
  id: '210',
  type: 'Keyboard',
  name: '0xC.pad',
  description: 'Macropad',
  imgSrc: './assets/images/0xCpad.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Not a review, just some thoughts:</strong><br>
      I use it as a media player. It's only programmable through QMK, which is okay. I wish it could be programmed through VIA. The RGB is very nice. It's very bright and has a lot of different modes. I'd use it if I liked RGB. The keycaps and layout feel nice. I don't have a use for half the buttons. It is nice having dedicated buttons for media keys, especially because I switch keyboards with different layouts so often. I won this from a giveaway. I would not purchase this on my own. $80 for media keys? If I used macros or streamed, then it might be worth it. But then there are products like the Elgado Stream Deck, which looks better and has more functionality.
      `
    }
  ],
},
//////////********** Audio **********//////////
{
  id: '308',
  type: 'Audio',
  name: 'Audio Technica ATH-AD900x',
  description: 'Warm / Open',
  imgSrc: './assets/images/ad900x.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Curve:</strong> <br> Warm
      <br> <br>
      <strong>Sound Quality:</strong> <br> The highs and mids are very clear. The low end is lacking. The bass is very tight and does not slap. The soundstage is huge and airy. The imaging and depth is the best I've heard on any headphone. Clairity and timber is above average.
      <br> <br>
      <strong>Comfort:</strong> <br> This headphone is for large heads. The "air wings" does not have enough tension to sit on my head. I rubberband modded this part to fit my head better. The earcups are very large and can fit anyone's head. It may be too big for smaller heads, but it's comfortable. The earpads are also a bit thin, which makes it even more difficult to fit my small head.
      <br> <br>
      <strong>Conclusions:</strong> <br> A comfortable headphone for large heads that is good for competitive gaming. For music, it is decent overall. Depending on the genre, these could shine. They work well with songs that focus on clarity around the mids with tight bass. It lacks in the low end, so hip-hop and bass edm feel a little empty. The extremely big and open soundstage with great imaging and depth makes this perfect for competitive gaming. It also is extremely light and comfortable to wear for long hours.
      <br> <br>
      `
    }
  ],
},
{
  id: '309',
  type: 'Audio',
  name: 'Koss Porta Pro',
  description: 'Warm / Open',
  imgSrc: './assets/images/portapros.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Curve:</strong> <br> Neutral, leaning warm
      <br> <br>
      <strong>Sound Quality:</strong> <br> Great detail. Bass is impressive for its size. The mids and highs can be drowned out by the bass in specific situations. Surprisingly airy with lots of detail. Sound quality is competing with upper mid-fi headphones.
      <br> <br>
      <strong>Comfort:</strong> <br> Very light and comfortable. The band has a firm and tight option. Personally the firm feels more comfortable and stays on my head for the most part. The stock pads are soft and light, but they are thin and get worn down easily. The Yaxi pads are bigger, thicker, and more comfortable.
      <br> <br>
      <strong>Conclusions:</strong> <br> The fun brother of the KSC75. This is basically a KSC75, but with more bass and less mids. It also comes with a surprisingly good band. Replacing the stock pads with Yaxi pads really does balance out the sound signature. It's also much more comfortable with the bigger and thicker pads. The Koss Porta Pro and KSC75 are the go to recommendation because of their cheap price and mid-fi level sound quality.
      <br> <br>
      `
    }
  ],
},
{
  id: '318',
  type: 'Audio',
  name: 'Apple Airpods Pro 2',
  description: 'V-Shape / Wireless IEM',
  imgSrc: './assets/images/airpodspro2-1.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Curve:</strong> <br> Mild V-Shape
      <br> <br>
      <strong>Sound Quality:</strong> <br> It sounds good everywhere. Nothing is lacking. It's not bloated or piercing. Clarity or separation is surprisingly good for an IEM.
      <br> <br>
      <strong>Comfort:</strong> <br> They are very comfortable for me. Sometimes, I forget they are in my ears. They do fall out when I am chewing or moving my jaw a lot.
      <br> <br>
      <strong>Features:</strong> <br> This is where the Airpods Pro 2 shine. The transparency mode and active noise cancelation are implemented very well.
      <br> <br>
      <strong>Conclusions:</strong> <br> The perfect true wireless earphones. There is a reason they are so popular. It does everything well. They sound great and are feature packed. (if you use an iPhone)
      <br> <br>
      `
    }
  ],
},
{
  id: '319',
  type: 'Audio',
  name: 'KZ ZS10 Pro',
  description: 'V-Shape / IEM',
  imgSrc: './assets/images/zs10pro.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Not a review, just some thoughts:</strong><br>
      It has decent quality for an IEM. The soundstage is small. The clarity is not there. The lows are not there. The highs are a bit piercing. The mids are fine. Overall, it is a decent sounding IEM. The problem with IEMs are that they just sound a little smushed, like all frequencies come from the same plane. It's hard to listen to when there are lots of sounds going on at once. These are very sensitive. Which means if there is a little bit of interference, you'll hear some static.
      `
    }
  ],
},
{
  id: '329',
  type: 'Audio',
  name: 'Samson Q2U',
  description: 'Dynamic',
  imgSrc: './assets/images/q2u.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Microphone:</strong> <br> Dynamic
      <br> <br>
      <strong>Quality:</strong> <br> The actual microphone itself feels heavy and premium. The tri-pod stand it comes with feels cheap. The sound quality is extremely good for its price. It has a slightly above mid tone compared to other microphones.
      <br> <br>
      <strong>Conclusions:</strong> <br> I have the microphone attached to a microphone arm. I keep the microphone about 3-6 inches away from my mouth. It supresses most background noise without sacrificing quality. Using a XLR cable slightly improves this microphone by balancing out extreme frequences. It does not cut out at low volumes or clip at high volume. It's a great microphone for discord, podcasting, or streaming if you don't mind having the microphone close to your mouth.
      <br> <br>
      `
    }
  ],
},
{
  id: '339',
  type: 'Audio',
  name: 'BEHRINGER U-Phoria UM2',
  description: 'Audio Interface',
  imgSrc: './assets/images/um2.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Not a review, just some thoughts:</strong><br>
      Microphone quality is ever so slightly better. The ability to control volumes is the best part of having an audio interface. It is so conveinent having volume knobs right at my fingertips. For ~$20, it was worth it.
      `
    }
  ],
},
//////////********** Monitors **********//////////
{
  id: '498',
  type: 'Monitor',
  name: 'Lenovo Legion Y25-25',
  description: '1080p / 240hz',
  imgSrc: './assets/images/y25.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br>
      <br> <br>
      <strong>Performance:</strong> <br> 240hz in comparison to 144hz is noticable. It feels like a 50% increase in smoothness. For reference, 144hz to 60hz feels like a 200% increase in smoothness. This is assuming you are getting enough frames to make use of the hertz. The colors on this IPS monitor are very vibrant. It gets very bright.
      <br> <br>
      <strong>Quality:</strong> <br> My monitor has a burn in issue. On certain applications or webpages, the monitor starts to LCD burn in. Lines start to burn into the display. A fix is to play a video for a few minutes to get rid of the burn in. This happens more often the brighter the monitor is. The monitor stand is sturdy and very adjustable.
      <br> <br>
      <strong>Conclusion:</strong> <br> Good specs, bad monitor. It has all the features of a great monitor; IPS, 240hz, and a good stand. The burn in issue is pretty annoying. It doesn't happen all the time, but when it does, it makes me want to buy a new monitor. The colors and brightness is too much for me. I prefer my Dell monitor's colors and brightness levels. The brightness of this monitor caused headaches for me. It would strain my eyes so much that I would get headaches every time I used it. I had to lower the brightness to ~20% and contrast to ~30%. I basically made this IPS look like a TN panel.
      `
    }
  ],
},
{
  id: '499',
  type: 'Monitor',
  name: 'Dell S2716DG',
  description: '1440p / 144hz',
  imgSrc: './assets/images/S2716DG.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br>
      <br> <br>
      <strong>Performance:</strong> <br> 1440p is so nice. You may think 1080p is enough, but that is because you haven't experienced 1440p. 1080p feels like you're using your Grandma's computer. 1440p gives so much room for productivity and media consumption. 144hz is good enough for most people.
      <br> <br>
      <strong>Quality:</strong> <br> My first monitor's LCD started to peel from the top after about 2 years. Dell sent a replacement and it has been working flawlessly for ~4+ years. The stand is solid with great adustability.
      <br> <br>
      <strong>Conclusion:</strong> <br> This is probably my favorite purchase in all my gear. I spent $500 for this monitor and I'd do it again. (You can get this monitor for a lot less nowadays) I went from 1080p 60hz to 1440p 144hz. The upgrade was huge. I have a 1080p 240hz monitor, and the lower resolution feels bad. 240hz compared to 144hz is not that big of a deal for me, despite playing mostly competitive games. My PC does not maintain 240 fps on all games, so I do not get 240hz all the time anyways. Dell has great colors and quality. This is a TN panel, but I like this monitor better than an IPS. I'd recommend this monitor or something with similar specs and quality to anyone.
      `
    }
  ],
},
//////////********** Watches **********//////////
{
  id: '797',
  type: 'Watches',
  name: 'Orient Kamasu',
  description: 'Automatic / Dive',
  imgSrc: '/assets/images/kamasu.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br> Model: <br>Case Diameter: <br>Lug to Lug: <br>Lug Width: <br>Material:
      <br> <br>
      <strong>Movement:</strong> <br> Automatic
      <br> <br>
      <strong>Dial:</strong> <br> Beautiful dark green sunburst dial. Indoors the watch basically looks black. In bright lighting or when the sun is shining, the green starts to show and it plays with the light. The combination of baton numbers and arrow hands looks okay. The red arrow on the seconds hand is a nice touch. The day-date feature is nice to have and looks fine. The bezel is curved in a way where it is a bit hard to grip and turn. The bezel design makes this watch wear smaller than a normal diver.
      <br> <br>
      <strong>Band:</strong> <br> Simple metal band. Not particularly good. Mine is squeaky and catches on my arm hair. Switching the band is highly recommended. I am currently using a grey NATO strap.
      <br> <br>
      <strong>Conclusions:</strong> <br> An incredible value dive watch. It has all the features you'd want for a pretty low price. A solid automatic movement, sapphire crystal, great water resistance, and interesting dial. It wears small because of it's lug to lug size and the curved bezel and case design. The band feels like the only thing Orient did not put time into, but that is easily fixable. The Orient Kamasu is a feature heavy diver with incredible value.
      `
    }
  ],
},
{
  id: '798',
  type: 'Watches',
  name: 'Seiko "Urushi"',
  description: 'Automatic / Dress',
  imgSrc: '/assets/images/sarx029.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br> Model: SARX029<br>Case Diameter: 40.5mm<br>Lug to Lug: 47mm<br>Lug Width: 20mm<br>Material: Stainless steel case with sapphire crystal
      <br> <br>
      <strong>Movement:</strong> <br> Automatic
      <br> <br>
      <strong>Dial:</strong> <br> Black urushi lacquer with date window. Silver roman numerals with gold leaf hands and cresent moon counterweight.
      <br> <br>
      <strong>Band:</strong> <br> Genuine Crocodile skin
      <br> <br>
      <strong>Conclusions:</strong> <br> My grail. The moment I saw this watch, I knew I wanted it. When I saw this watch, I was very new to watches. I did not think I would spend this much (~$1000) on a watch. The watch has a classy elegance to it. This watch is handmade by Japanese artisans using a tree sap from an urushi tree. The dark, glossy, liquid-like dial is the star of the show. The roman numerals and gold hands contrast with the black to emphasize its unbelievably deep black dial. The cresent moon counterweight on the seconds hand gives it an elegant and refined look. It is such a beautiful watch. I knew that no matter what other watches I would own, I had to have this one. The Seiko "Urushi" is my first automatic watch and my endgame watch.
      `
    }
  ],
},
{
  id: '799',
  type: 'Watches',
  name: 'Daniel Wellington',
  description: 'Quartz / Minimal',
  imgSrc: '/assets/images/dw.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br> Case Diameter: <br>Lug to Lug: <br>Lug Width: <br>Material:
      <br> <br>
      <strong>Movement:</strong> <br> Quartz
      <br> <br>
      <strong>Dial:</strong> <br> Minimal white dial. It's a plain dial with not much going for it. My version has silver hands which match the silver case. It does not stand out at all.
      <br> <br>
      <strong>Band:</strong> <br> The leather band shows its age. It wears down easily. The black leather starts to appear grey and creases show where the clasps connect.
      <br> <br>
      <strong>Conclusions:</strong> <br> This watch is plain. There isn't anything that stands out. It's on the expensive side for a minimal quartz watch. I would not recommend anyone purchase this watch as there are way more, better options in its price range.
      `
    }
  ],
},
{
  id: '750',
  type: 'Watches',
  name: 'KAMIER Watch Display',
  description: 'Acrylic / Wood',
  imgSrc: './assets/images/kamier.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Not a review, just some thoughts:</strong><br>
      A watch display with a drawer that holds 6 watches. The drawer has a section that can hold jewlery and an open section. The inside of the drawer is lined with felt. The watch pillows are faux leather. The watches fit snug so they don't move around much. They are separated enough to fit larger watches without them touching. This doesn't have any hinges, so you don't have to worry about it breaking. You have to take off the entire acrylic to get to your watches, which is a fingerprint magnet. I love how it is more of a display than your typical watch box. It looks a lot better than it actually feels. You can tell the materials and build are cheap. It has good value for a watch display.
      `
    }
  ],
},
//////////********** EDC **********//////////
{
  id: '509',
  type: 'EDC',
  name: 'CJRB Pyrite',
  description: 'Button Lock',
  imgSrc: './assets/images/pyrite.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br> Stainless Steel
      <br> <br>
      <strong>Size:</strong> <br> 3.2 inch blade / x inch open / x inch closed
      <br> <br>
      <strong>Locking Action:</strong> <br> Button Lock
      <br> <br>
      <strong>Conclusions:</strong> <br> An entry level pocket knife with a satisfying action. The action has a smooth flick with a satisfying sound when fully open or closed. It feels premium in hand. The comfort grooves are all in the right spots. The only small problem I have with mine is that sometimes the button needs to be pressed harder to get the smooth action. It gets caught on the lock if the button is not pressed all the way. This could be that I am weak. Also, I can't thumb flick to open the knife. It's either too hard, or I suck at it. I'm pretty sure it's that I suck.
      <br> <br>
      `
    }
  ],
},
{
  id: '519',
  type: 'EDC',
  name: 'Nitecore TINI 2',
  description: '500 Lumens',
  imgSrc: './assets/images/tini2.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br> Titanium
      <br> <br>
      <strong>Size:</strong> <br> TINY
      <br> <br>
      <strong>Features:</strong> <br> OLED screen that displays Lumens and battery. It has a locking mechanism. Turbo mode that can get as bright as 500 Lumens. USB-C charging
      <br> <br>
      <strong>Conclusions:</strong> <br> A bright and compact flashlight with an OLED screen for information. This flashlight is feature heavy and looks great. I don't have any problems with it turning on in my pocket. It gets bright enough to light up an entire room. It does what I need it to do. It's a little on the expensive side at ~$45, but you are paying for the size, brightness, and aesthetic.
      `
    }
  ],
},
{
  id: '529',
  type: 'EDC',
  name: 'Nomad Card Wallet',
  description: 'Brown Horween Leather',
  imgSrc: './assets/images/nomadwallet.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br> Horween leather lined with felt
      <br> <br>
      <strong>Size:</strong> <br> Fits ~8 cards. It can fit more, but might get thick and tight.
      <br> <br>
      <strong>Conclusions:</strong> <br> A premium, minimal, leather card wallet. It feels great in hand. The leather is pre-stretched, which means its durability is higher than some other leather wallets. The Horween leather will patina and look unique. What can I say? It's a leather wallet.
      <br> <br>
      `
    }
  ],
},
{
  id: '539',
  type: 'EDC',
  name: 'Nomad Phone Case',
  description: 'Brown Horween Leather',
  imgSrc: './assets/images/nomadphone.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br> Horween leather with rubber edges
      <br> <br>
      <strong>Protection:</strong> <br> It might protect the sides from light drops, but I would not limit test this thing. It will not protect your phone from drops.
      <br> <br>
      <strong>Conclusions:</strong> <br> A premium, leather phone case. It feels good in hand. Where the leather and rubber edges meet, it is not flush. You don't really notice it unless you are feeling around for it. The grippy sides are very nice. The leather is soft and will patina nicely. What can I say? It's a leather phone case.
      <br> <br>
      `
    }
  ],
},
{
  id: '549',
  type: 'EDC',
  name: 'Refyne EP1',
  description: 'Stainless Steel / Bolt Action',
  imgSrc: './assets/images/refyne.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br> Stainless Steel
      <br> <br>
      <strong>Refills:</strong> <br>
      <br> <br>
      <strong>Action:</strong> <br> Bolt Action. It's very satisfying. It's placed perfectly for your right hand.
      <br> <br>
      <strong>Conclusions:</strong> <br> A bolt action, stainless steel, premium pocket pen. It has a removable deep carry clip, which is how like to carry it. It writes well. The weight of the pen gives it a nice, heavy, swinging feeling when signing your signature. For ~$40, it is expensive for a pen, but compared to other bolt actions, this is worth it.
      <br> <br>
      `
    }
  ],
},
{
  id: '318',
  type: 'EDC',
  name: 'Apple Airpods Pro 2',
  description: 'V-Shaped / Wireless IEM',
  imgSrc: './assets/images/airpodspro2-2.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
//////////********** Other **********//////////
{
  id: '600',
  type: 'Other',
  name: 'Microsoft LifeCam HD-3000',
  description: '720p / 30 fps',
  imgSrc: './assets/images/lifecamhd3000.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Not a review, just some thoughts:</strong><br>
      This thing sucks, but it hasn't broke on me yet and I don't need a webcam. It is low resolution and blurry. It needs a lot of light to still look bad. It has a low frame rate. It sucks, but it has been working for almost 10 years now. I have been looking for an excuse to buy a new one, but I just don't use a webcam for anything.
      `
    }
  ],
},
{
  id: '602',
  type: 'Other',
  name: 'Herman Miller Aeron',
  description: 'Size C',
  imgSrc: './assets/images/aeron.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Comfort:</strong> <br> Size C is too large for me, but when sitting properly, it is comfortable. It's not a cushiony comfortable, but your body just fits well into the mesh.
      <br> <br>
      <strong>Features:</strong> <br> Lots of adjustability. Height adjust. Locking mechanism for leaning back. Varying weight for the lean back. Arms adjust every way except forward and back. Lumbar support can be adjusted.
      <br> <br>
      <strong>Conclusions:</strong> <br> A comfortable, premium, office chair best used for productivity. This chair almost forces you to sit properly. Because of this, it's best used for productivity. It keeps you comfortable while you are working. This is not a lounge chair. It not comfortable when sitting in improper positions. There are better chairs for lounging. (Ex: Secret Lab) This chair is not cushioned, has no headrest, and forces your legs and back in a proper seating position. This is an amazing productivity chair.
      <br> <br>
      `
    }
  ],
},
{
  id: '603',
  type: 'Other',
  name: 'Mazda 3',
  description: '2022 / Carbon Edition',
  imgSrc: './assets/images/mazda3.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Exterior:</strong> <br> The polymer gray has different hues depending on lighting. It's gray with a blue-green undertone. Chrome trim around the front grill and windows and blacked out 18 inch wheels. The design is beautiful. There aren't many sharp lines. It is smooth and refined.
      <br> <br>
      <strong>Interior:</strong> <br> The red leather seats was a huge selling point for me. There are premium materials all over the interior, lots of soft leather.
        <br> Lots of safety features. Tactile satisfying knobs for HVAC and volume. Heated front seats.
        <br> Infotainment system is controlled by a knob by the center console. It's actually very nice and comfortable to use. It has wired Android Auto and Apple Car Play.
        <br> The Bose speaker system is amazing. The clarity is the best I've heard in any audio system. It is lacking in the low end (bass) because it is a compact car with a small subwoofer. The bass is very tight, but doesn't slap. It's very clearly a neutral sound signature.
      <br> <br>
      <strong>Drive:</strong> <br> It's a tight driving experience. The cabin is very quiet, even when on the highway. This car does not take bumps well. You can feel most bumps, but it's very comfortable on smooth roads. This is because of the 18 inch wheels and tight suspension. The automatic gear shift sometimes misses. It'll be very early or very late on the shifts, but there is a manual shift up/down mode. It zooms compared to other cars in it's category.
      <br> <br>
      <strong>Reliability:</strong> <br> It is a Mazda, so it is just below Toyota and Honda in terms of reliability. I get ~20 MPG with city driving. This is with the HVAC and speakers going at full blast. Maintienance is on the cheaper side. Maintains decent value over the years compared to most manufacturers.
      <br> <br>
      <strong>Conclusions:</strong> <br> A driver's car with a luxury design. The materials, design, and features makes it feel luxurious. The tight driving experience and lack of some driving features makes this a driver's car. This car is for a single person or a couple. It is a compact car at the end of the day. There is not enough space for a family. This is a great everyday sedan for a young person that loves premium materials and a premium driving experience.
      <br> <br>
      `
    }
  ],
},
{
  id: '699',
  type: 'Other',
  name: 'Computer',
  description: 'PC',
  imgSrc: './assets/images/pc.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Case:</strong> <br> NZXT H440
      <br> <br>
      <strong>Power Supply:</strong> <br> Corsair Gold AX850
      <br> <br>
      <strong>Motherboard:</strong> <br> ASUS Z170-A
      <br> <br>
      <strong>Storage:</strong> <br> Samsung EVO 850 500GB <br> Crucial 1TB m.2 NVME 3rd gen
      <br> <br>
      <strong>RAM:</strong> <br> Crucial Ballistix 16GB
      <br> <br>
      <strong>CPU:</strong> <br> Intel i7 6700K
      <br> <br>
      <strong>CPU Cooler:</strong> <br> Cryorig H7
      <br> <br>
      <strong>GPU:</strong> <br> NVIDIA GTX 980 Ti
      <br> <br>
      `
    }
  ],
},
];

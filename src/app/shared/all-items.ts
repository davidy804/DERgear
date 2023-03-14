import { MainModel } from "./main-model";

// *** ID LEGEND *** //
// 1-99 = mice
// 100-199 = mousepads
// 200-299 = keyboards
// 300-399 = audio
// 400-499 = monitors
// 500-599 = edc
// 600-699 = other

export const AllItems: MainModel[] = [
//////// Mice ////////
{
  id: '94',
  type: 'Mouse',
  name: 'Razer Orochi v2',
  description: 'Claw / Small',
  imgSrc: './assets/images/test.png',
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
      <strong>Conclusions:</strong> <br> This is a budget travel mouse that can be used for gaming. The bluetooth mode, AA/AAA battery, small size makes it perfect for traveling or using it with a laptop. For gaming, it is alright. It has Razer's technology (responsive sensor and optical switches). It feels like a budget mouse. The buttons are loud. The shape and coating is not comfortable and feels slippery. The removable top shell makes the mouse creak. This is my current main for FPS games because it is wireless.
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
  description: 'Claw / Small',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Specs:</strong> <br>
      <br> <br>
      <strong>Shape:</strong> <br> This is the god shape. For small hands, every grip feels comfortable. I only have one problem with the shape. It is a little too long. When I claw the mouse, the back hump is not present enough in my palm unless I angle the mouse. I've gotten used to an angle sensor, but I can see someone else having issues with this. The mouse is also very narrow. I like this, but someone with larger hands may not. For fingertip, this mouse shape is perfect.
      <br> <br>
      <strong>Buttons:</strong> <br> The M1 and M2 buttons feel good, but will side to side creak after a long time. The side buttons are a little mushy. The scroll wheel is light with lightly defined bumps. My scroll wheel is showing its age. The scrolling and button is no longer consistent. It randomly scrolls, scrolls in opposite directions sometimes, and button press doesn't always work.
      <br> <br>
      <strong>Value:</strong> <br> This is the best bang for your buck. This mouse goes on sale for ~$20. It is a lot of people's end game. I have been using it for years with heavy use and it only has minor issues.
      <br> <br>
      <strong>Conclusions:</strong> <br> This is the most recommended and popular mouse in the mouse community. It is very cheap, has a great shape, has good qc, and sold everywhere. The problem with this mouse is that it is wired and has a high lift off distance. This is my main mouse for everything except FPS games, because of its wire.
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
  imgSrc: './assets/images/test.png',
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
  imgSrc: './assets/images/test.png',
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
  imgSrc: './assets/images/test.png',
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
  imgSrc: './assets/images/test.png',
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
//////// Mousepads ////////
{
  id: '195',
  type: 'Mousepad',
  name: 'LGG Saturn',
  description: 'Control / Hybrid',
  imgSrc: './assets/images/test.png',
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
  imgSrc: './assets/images/test.png',
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
  imgSrc: './assets/images/test.png',
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
  imgSrc: './assets/images/test.png',
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
  imgSrc: './assets/images/test.png',
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
//////// Keyboards ////////
{
  id: '296',
  type: 'Keyboard',
  name: 'IV Works AV4',
  description: 'KTT Roses / NicePBT Beach Day',
  imgSrc: './assets/images/test.png',
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
      <strong>Conclusions:</strong> <br> A high premium stacked acrylic alice style keyboard with a long pole sound profile. It has a great underglow and skeleton plate aesthetic.
      `
    }
  ],
},
{
  id: '297',
  type: 'Keyboard',
  name: 'WindX65',
  description: 'Gateron Box Pinks / NicePBT Classic Beige',
  imgSrc: './assets/images/test.png',
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
      <strong>Conclusions:</strong> <br> A high premium 65% with a poppy sound profile. This board does not need to be tape modded. It is not hollow or metallic sounding at all. I tape modded this because this is a prototype keyboard with third party gaskets that do not fit well. The PCB shorts when pressed down hard enough. The tape mod prevents the shorting. It still sounds good with the tape mod. It gives it more of a marbly, PE foam sound.
      `
    }
  ],
},
{
  id: '298',
  type: 'Keyboard',
  name: 'WS Ikki Aurora R2',
  description: 'WS Silent Linears / DMK Ghost',
  imgSrc: './assets/images/test.png',
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
  imgSrc: './assets/images/test.png',
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
      <strong>Conclusions:</strong> <br> An entry level 75% with the signature Cherry scratch. This board lacks any character. No matter what switches you put in, it'll sound very similar. The typing feel is very firm as there is no flex or space in the keyboard. The Broken-In Browns are a very smooth light tactile with a scratchy sound. I would like to use these switches in another aluminum plate keyboard to get better feel of these switches.
      `
    }
  ],
},
//////// Audio ////////
{
  id: '309',
  type: 'Audio',
  name: 'Audio Technica ATH-AD900x',
  description: 'Balanced / Open',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '318',
  type: 'Audio',
  name: 'Apple Airpods Pro 2',
  description: 'V-Shape / Wireless IEM',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '319',
  type: 'Audio',
  name: 'KZ ZS10 Pro',
  description: 'Neutral / IEM',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '329',
  type: 'Audio',
  name: 'Samson Q2U',
  description: 'Dynamic',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '339',
  type: 'Audio',
  name: 'BEHRINGER U-Phoria UM2',
  description: 'Audio Interface',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
//////// Monitors ////////
{
  id: '498',
  type: 'Monitor',
  name: 'Legion (Model #)',
  description: '1080p / 240hz',
  imgSrc: './assets/images/test.png',
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
  name: 'Dell (Model #)',
  description: '1440p / 144hz',
  imgSrc: './assets/images/test.png',
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
//////// EDC ////////
{
  id: '509',
  type: 'EDC',
  name: 'CJRB Pyrite',
  description: 'Button Lock',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: `
      <strong>Material:</strong> <br> Stainless Steel
      <br> <br>
      <strong>Locking Action:</strong> <br> Button Lock
      <br> <br>
      <strong></strong> <br>
      <br> <br>
      <strong>Conclusions:</strong> <br>
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
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '529',
  type: 'EDC',
  name: 'Nomad Card Wallet',
  description: 'Brown Horween Leather',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '539',
  type: 'EDC',
  name: 'Nomad Phone Case',
  description: 'Brown Horween Leather',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '549',
  type: 'EDC',
  name: 'Refyne EP1',
  description: 'Stainless Steel / Bolt Action',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '559',
  type: 'EDC',
  name: 'Apple Airpods Pro 2',
  description: 'V-Shaped / Wireless IEM',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
//// Other ////
{
  id: '600',
  type: 'Other',
  name: 'Herman Miller Aeron',
  description: 'Size C',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
{
  id: '601',
  type: 'Other',
  name: 'Mazda 3',
  description: '2022 / Carbon Edition',
  imgSrc: './assets/images/test.png',
  details: [
    {
      imgSrc: '',
      caption: ''
    }
  ],
},
];
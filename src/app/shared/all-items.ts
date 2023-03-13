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
      <strong>Performance:</strong> <br> Medium static and medium dynamic friction. Works with all games and sensitivities.
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
      <strong>Quality:</strong> <br> Lays flat, decent stitching, decent consistency, bad rubber base. Surface slows down eventually, even with wash. The base does not stick very well. It slides around very easily, but not while gaming.
      <br> <br>
      <strong>Conclusion:</strong> <br> The rubber base is the only problem with this mousepad. It's thin and slides around. My mousepad edge is starting to curl where my arm lays because my arm's heat is breaking down the rubber base. The actual performance of the mousepad is amazing.
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
      caption: ''
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
      caption: ''
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
      caption: ''
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
      caption: ''
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
      caption: ''
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
      caption: ''
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
      caption: ''
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
      caption: ''
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
      caption: ''
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
      caption: ''
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

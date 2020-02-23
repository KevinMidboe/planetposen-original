// Created by iWeb 3.0.2 local-build-20181121

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.planetposen.no/Planetposen/Kjp_na_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.planetposen.no/Planetposen',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.planetposen.no/Planetposen',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(188,188),new IWSize(188,48),new IWSize(229,251),27,27,0,new IWSize(6,12)),new IWPhotoFrame([IWCreateImage('Kjp_na_files/Scrapbook2_01.png'),IWCreateImage('Kjp_na_files/Scrapbook2_02.png'),IWCreateImage('Kjp_na_files/Scrapbook2_03.png'),IWCreateImage('Kjp_na_files/Scrapbook2_06.png'),IWCreateImage('Kjp_na_files/Scrapbook2_09.png'),IWCreateImage('Kjp_na_files/Scrapbook2_08.png'),IWCreateImage('Kjp_na_files/Scrapbook2_07.png'),IWCreateImage('Kjp_na_files/Scrapbook2_04.png')],null,2,0.228571,31.000000,2.000000,25.000000,2.000000,45.000000,19.000000,38.000000,35.000000,282.000000,320.000000,282.000000,320.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,64),url:'Kjp_na_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Kjp_na_files/stroke_1.png'},{rect:new IWRect(1,-1,279,2),url:'Kjp_na_files/stroke_2.png'},{rect:new IWRect(280,-1,3,2),url:'Kjp_na_files/stroke_3.png'},{rect:new IWRect(280,1,3,64),url:'Kjp_na_files/stroke_4.png'},{rect:new IWRect(280,65,3,2),url:'Kjp_na_files/stroke_5.png'},{rect:new IWRect(1,65,279,2),url:'Kjp_na_files/stroke_6.png'},{rect:new IWRect(-1,65,2,2),url:'Kjp_na_files/stroke_7.png'}],new IWSize(282,66)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_1:new IWPhotoFrame([IWCreateImage('Kjp_na_files/Scrapbook2_01_1.png'),IWCreateImage('Kjp_na_files/Scrapbook2_02_1.png'),IWCreateImage('Kjp_na_files/Scrapbook2_03_1.png'),IWCreateImage('Kjp_na_files/Scrapbook2_06_1.png'),IWCreateImage('Kjp_na_files/Scrapbook2_09_1.png'),IWCreateImage('Kjp_na_files/Scrapbook2_08_1.png'),IWCreateImage('Kjp_na_files/Scrapbook2_07_1.png'),IWCreateImage('Kjp_na_files/Scrapbook2_04_1.png')],null,2,0.400000,31.000000,2.000000,25.000000,2.000000,45.000000,19.000000,38.000000,35.000000,282.000000,320.000000,282.000000,320.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Kjp_na_files/Kjp_naMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');detectBrowser();adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');adjustLineHeightIfTooBig('id13');adjustFontSizeIfTooBig('id13');adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}

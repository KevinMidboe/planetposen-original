// Created by iWeb 3.0.2 local-build-20181121

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.planetposen.no/en/Buy_now_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.planetposen.no/en',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.planetposen.no/en',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,48),new IWSize(229,254),27,27,0,new IWSize(12,18)),new IWPhotoFrame([IWCreateImage('Buy_now_files/FormalShadow_01.png'),IWCreateImage('Buy_now_files/FormalShadow_02.png'),IWCreateImage('Buy_now_files/FormalShadow_03.png'),IWCreateImage('Buy_now_files/FormalShadow_06.png'),IWCreateImage('Buy_now_files/FormalShadow_12.png'),IWCreateImage('Buy_now_files/FormalShadow_11.png'),IWCreateImage('Buy_now_files/FormalShadow_10.png'),IWCreateImage('Buy_now_files/FormalShadow_04.png')],null,2,0.400000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_1:new IWPhotoFrame([IWCreateImage('Buy_now_files/Scrapbook2_01.png'),IWCreateImage('Buy_now_files/Scrapbook2_02.png'),IWCreateImage('Buy_now_files/Scrapbook2_03.png'),IWCreateImage('Buy_now_files/Scrapbook2_06.png'),IWCreateImage('Buy_now_files/Scrapbook2_09.png'),IWCreateImage('Buy_now_files/Scrapbook2_08.png'),IWCreateImage('Buy_now_files/Scrapbook2_07.png'),IWCreateImage('Buy_now_files/Scrapbook2_04.png')],null,2,0.400000,31.000000,2.000000,25.000000,2.000000,45.000000,19.000000,38.000000,35.000000,282.000000,320.000000,282.000000,320.000000,null,null,null,0.100000),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,64),url:'Buy_now_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Buy_now_files/stroke_1.png'},{rect:new IWRect(1,-1,279,2),url:'Buy_now_files/stroke_2.png'},{rect:new IWRect(280,-1,3,2),url:'Buy_now_files/stroke_3.png'},{rect:new IWRect(280,1,3,64),url:'Buy_now_files/stroke_4.png'},{rect:new IWRect(280,65,3,2),url:'Buy_now_files/stroke_5.png'},{rect:new IWRect(1,65,279,2),url:'Buy_now_files/stroke_6.png'},{rect:new IWRect(-1,65,2,2),url:'Buy_now_files/stroke_7.png'}],new IWSize(282,66))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Buy_now_files/Buy_nowMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');detectBrowser();adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');adjustLineHeightIfTooBig('id13');adjustFontSizeIfTooBig('id13');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}

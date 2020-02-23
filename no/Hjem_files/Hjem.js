// Created by iWeb 3.0.2 local-build-20151130

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,112),url:'Hjem_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Hjem_files/stroke_1.png'},{rect:new IWRect(1,-1,484,2),url:'Hjem_files/stroke_2.png'},{rect:new IWRect(485,-1,3,2),url:'Hjem_files/stroke_3.png'},{rect:new IWRect(485,1,3,112),url:'Hjem_files/stroke_4.png'},{rect:new IWRect(485,113,3,2),url:'Hjem_files/stroke_5.png'},{rect:new IWRect(1,113,484,2),url:'Hjem_files/stroke_6.png'},{rect:new IWRect(-1,113,2,2),url:'Hjem_files/stroke_7.png'}],new IWSize(486,114)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Hjem_files/HjemMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');detectBrowser();adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}

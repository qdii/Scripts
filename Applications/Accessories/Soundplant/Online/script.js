include(["Engines", "Wine", "QuickScript", "OnlineInstallerScript"]);

new OnlineInstallerScript()
    .name("Soundplant")                       
    .editor("Marcel Blum")                               
    .applicationHomepage("http://soundplant.org/")  
    .author("ImperatorS79")                     
    .url("http://soundplant.org/downloads/Soundplant45_Win_setup.exe")                       
    .checksum("df17f942189618219cd504beee1be0712f4e4e4e")                       
    .category("Accessories")                           
    .executable("Soundplant45.exe")
    .preInstall(function (wine, wizard) {
        wine.windowsVersion("win7");
    })
    .go(); 

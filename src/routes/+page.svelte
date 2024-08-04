<script lang="ts">
    import { CupNames, CupImages, CupMaps, CustomMaps } from '../stores';
    // import pixeled from '../lib/fonts/pixeled.ttf';
    import left from '$lib/assets/svgs/caret-left-fill.svg';
    import right from '$lib/assets/svgs/caret-right-fill.svg';
    import logo from '$lib/images/dodoloader.webp';

    // debug
    function log(...args) {
        console.log(...args);
    }
    // function LocalList(name) {return JSON.parse(localStorage.getItem(name))}
    let name = "";
    let maps = "";
    let image;

    let cupNames = [];
    CupNames.subscribe(value => {
        // console.log(typeof value, value.length !== 0);
        if (value.length !== 0) {
            cupNames = JSON.parse(value);
        }
    });

    let cupMaps = [];
    CupMaps.subscribe(value => {
        if (value.length !== 0) {
            cupMaps = JSON.parse(value);
        }
    });

    let cupImages = [];
    CupImages.subscribe(value => {
        if (value.length !== 0) {
            cupImages = JSON.parse(value);
        }
    });

    let customMaps = [];
    CustomMaps.subscribe(value => {
        if (value.length !== 0) {
            customMaps = JSON.parse(value);
        }
    });

    function SaveConfig(){
        cupNames.push(name);
        CupNames.set(JSON.stringify(cupNames));

        cupMaps.push(maps.replace(/\s/g, ""));
        CupMaps.set(JSON.stringify(cupMaps));
        if (image) {
            const reader = new FileReader();
            reader.onload = function(){
                const base64 = reader.result;
                console.log(base64);
                cupImages.push(base64);
                CupImages.set(JSON.stringify(cupImages));
            };
            reader.readAsDataURL(image);
            console.log(image);
            console.log(reader.readAsDataURL(image));
            
        }
        // window.location.reload();
    }

    // rewrite with {#each} later
    // const Cupmenu = document.getElementById("0");
    // function GetCustomCups(){
    //     for (let i = 0; i < LocalList("CupNames").length; i++){ {
    //         Cupmenu.innerHTML += "<div style='padding:5px;border: 2px solid #1e1e1e;border-radius: 5px;width:10vw;height:10vw; background-image: url("+LocalList("CupImages")[i]+");background-size: cover;'><p style='padding:2px;border:2px solid #bbbbbb;background: #8A0468;border-radius: 5px;position:relative;top:20%;width-min:50%;font-size:70%;width:fit-content;overflow-wrap: break-word;'>"+LocalList("CupNames")[i]+"</p></div>";
    //     }}
    // }

    // GetCustomCups();
    let ExportImport = "";
    let CupExport = 0;
    function exportCup() {
        let CupMaps = 0;
        let ExportName = JSON.parse(cupNames)[CupMaps];
        let ExportMaps = JSON.parse(cupMaps)[CupMaps];
        let ExportImage = JSON.parse(cupImages)[CupMaps];
        // console.log(document.getElementById('exportimport').value = "['"+ExportName+"'"+","+ExportMaps+","+"'"+ExportImage+"']");
        let Export = [ExportName, ExportMaps, ExportImage];

        ExportImport = JSON.stringify([Export]);
    }
    function importCup() {
        let Import = JSON.parse(ExportImport);
        console.log(Import);
        let ImportName = Import[0][0];
        let ImportMaps = Import[0][1];
        let ImportImage = Import[0][2];
        console.log(ImportName, ImportMaps, ImportImage);

        cupNames.push(ImportName);
        CupNames.set(JSON.stringify(cupNames));

        cupMaps.push(ImportMaps);
        CupMaps.set(JSON.stringify(cupMaps));

        cupImages.push(ImportImage);
        CupImages.set(JSON.stringify(cupImages));

        // window.location.reload();
    }
    const MaxIndex = 2;
    let currentIndex = 0;
    // later
    // function cycleRight() {
    //     if (currentIndex < MaxIndex) {
    //         currentIndex++;
    //         document.getElementById((currentIndex-1).toString()).style.display = "none";
    //         document.getElementById(currentIndex.toString()).style.display = "block";
    //     }
    //     else {
    //         currentIndex = 0;
    //         document.getElementById(MaxIndex.toString()).style.display = "none";
    //         document.getElementById(currentIndex.toString()).style.display = "block";
    //     }
    // }
    // function cycleLeft() {
    //     if (currentIndex > 0) {
    //         currentIndex--;
    //         document.getElementById((currentIndex+1).toString()).style.display = "none";
    //         document.getElementById(currentIndex.toString()).style.display = "block";
    //     }
    //     else {
    //         currentIndex = MaxIndex;
    //         document.getElementById("0").style.display = "none";
    //         document.getElementById(currentIndex.toString()).style.display = "block";
    //     }
    // }
    let ImportCustomMap = "";
    let ImportMapId = "";
    function ImportMap() {
        let CustomMaps = customMaps;
        CustomMaps.push({id: ImportMapId, map: ImportCustomMap});
        console.log(CustomMaps)
        CustomMaps.set(JSON.stringify(CustomMaps));
    }

    let update = false;
    $: update = !update;
    function clearAll() {
        CustomMaps.set([]);
        CupNames.set([]);
        CupMaps.set([]);
        CupImages.set([]);
    }
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Ice Dodo - UnOfficial Site</title>
    <link rel="icon" href={logo}>
    <meta name="description" content="Modded Ice Dodo by Onionfist.com & Guy">
    <!-- <link rel="preload" href={pixeled} as="font" crossorigin="anonymous" /> -->
    <style type="text/css" media="screen">
        @font-face {
            font-family: "pixeled";
            /* src: url("$lib/assets/fonts/pixeled.ttf") format("truetype"); */
            src: local(''), url('/fonts/pixeled.ttf') format('truetype');
        }
        * {
            box-sizing: border-box;
            font-family: "pixeled";
            /* font-size: small; */
            color:#bbbbbb;
        }
        html {
            background-color: black;
            height: 100%;
            overflow: hidden;
        }
        body {
            height: 100%;
        }
        #Menu {
            display:inline-block;
            overflow-y: auto;
            width: 50vw;
            margin-top: 35px;
            height: calc(100vh - 15px);
            background-color: #151515;
            box-shadow: 0px 30px 40px gray;
            /* margin: 15px; */
            border: 5px solid #bbbbbb;
            border-radius: 10px;
            -ms-overflow-style: none;
            scrollbar-width: none;
            overflow-x: hidden;
        }
        button {
            margin-bottom:10px;
            border: 4px solid #bbbbbb;
            border-radius: 10px;
            background-color: transparent;
            color:white;
            cursor: pointer;
        }
        button:hover {
            background: #8A0468;
        }
        input {
            color: black;
            background-color: white;
        }
        p {
            margin: 5px;
        }
        .arrow {
            scale:300%;
            cursor: pointer;
            transition: all 0.3s;
        }
        .arrow:hover {
            scale: 325%;
        }
        .arrow:active {
            scale: 275%;
        }
    </style>
</svelte:head>
<center>
<div id="Menu">
    <div style="background-color: #151515;border-bottom: 2px inset #202020;">
        <h1 style="margin-top:15px;margin-bottom: 2px;">DodoLoader</h1>
        <p style="margin: 2px;">Original Ice Dodo by <a href="https://onionfist.com">Onionfist/Jason</a></p>
        <p style="font-size:xx-small;margin:2px;">-</p>
        <p style="margin: 2px;">Dodoloader by Guy</p>
        <a style="width:45%;" href="/singleplayer">Play Now</a>
        <br>
        <button on:click={clearAll}>Clear All Custom</button>
        <!-- <img src="{left}" alt="left" id="rightArrow" class="arrow" style="float:right;margin-right:50px;" onclick="cycleRight()">
        <img src="{right}" alt="right" id="leftArrow" class="arrow" style="float:left;margin-left:50px;" onclick="cycleLeft()"> -->
        <p style="font-size:xx-small;padding-bottom: 10px;">if game does not load you messed up the cups, clear them</p>
    </div>
    <div id="0">
        <form id="Cupadder">
            <h3>Add Cup</h3>
            <input bind:value={name} type="text" id="name">
            <p style="font-size: small;">Name of cup</p>
            <br>
            <input bind:value={maps} style="width:90%;margin-left:5%;margin-right:5%;font-family:arial;" type="text" id="maps">
            <p style="font-size:small;font-family:arial;">Maps for cup<br>make sure you type it like this example:<br>{'[{diff:1,id:"glass_walkway",name:"Glass Walkway"},{diff:1,id:"lucid_dreams",name:"Lucid Dreams"}]'}<br>the diff is the difficulty that map will show as</p>
            <br>
            <input on:change={e => image = e.target.files[0]} type="file" accept="image/png" id="image">
            <p style="font-size: small;">Image for cup (PNG only)</p>
        </form>
        <button on:click={SaveConfig}>Add Cup</button>
        <br>
        <p>Export/Import</p>
        <input bind:value={CupExport} id="cupExport" type="number">
        <p style="font-size: small;">Number of cup you made</p>
        <button id="export" style="margin-right:5px" on:click={exportCup}>Export</button>
        <button id="import" on:click={importCup}>Import</button>
        <br>
        <textarea style="color:black;font-size: xx-small;font-family: arial;" bind:value={ExportImport} id="exportimport"></textarea>
        <p>Custom Cups Added</p>
    </div>
    <div id="1" style="display:none;">
        <h3>Custom Maps</h3>
        <p style="font-size: small;">Name Of Map</p>
        <input id="ImportMapId" bind:value={ImportMapId} type="text">
        <p style="font-size: small;">Map Script</p>
        <textarea style="color:black;font-size: xx-small;font-family: arial;" id="ImportCustomMap" bind:value={ImportCustomMap}></textarea>
        <button id="importMap" on:click={ImportMap}>Import</button>
    </div>
    <div id="2" style="display:none;">
        <h2>Tutorial</h2>
        <h3>Mod Menu</h3>
        <p>Click on the collapsible elements of the menu to see them</p>
        <h3>Cheats</h3>
        <p>All cheats exept god mode have to be toggled before you enter the level or if you die and restart</p>
        <h3>Dodo Cinematics</h3>
        <p>This is a tool for viewing maps and making freecam videos</p>
        <p>Freecam: frees camera from player</p>
        <p>Freeze Dodo: freezes dodo in place (must go menu and back to disable)</p>
        <p>Follow Player: looks at the player at all times automatically</p>
        <p>You can use the buttons or use ijkl controls to move + p; to move up and down</p>
        <p>You can use the bottons or hold shift with ijkl to rotate camera</p>
        <a href="https://discord.gg/hQvKAdEH5Q">Any questions?</a>
    </div>
    <p style="visibility:hidden;margin-bottom: 5%;">spacer</p>

    <!-- <script src="./singleplayer/index.js"></script> -->
</div>
</center>

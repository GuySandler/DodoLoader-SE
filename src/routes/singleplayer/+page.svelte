<script lang="ts">
    import { onMount } from 'svelte';
    import * as BABYLON from 'babylonjs';
    import validation from '$lib/assets/icons/validation.svg';
    import logo from '$lib/images/dodoloader.webp';

    import '$lib/assets/index.css';
    import '$lib/assets/VSingleplayer.css';

    // import "$lib/scripts/decorations.js";
    // import "$lib/scripts/fov.js";
    // import "$lib/scripts/change_state.js";
    // import "$lib/scripts/maker.js";
    // import "$lib/scripts/alias.js";
    // import "$lib/scripts/const_controller.js";
    // import "$lib/scripts/cleanup.js";
    // import "$lib/scripts/start.js";
    // import "$lib/scripts/update.js";
    // import "$lib/scripts/flyjump.js";
    // import "$lib/scripts/boot.js";

    // import "$lib/dodoCup.js";

    import { index } from "$lib/assets/index.js";

    // let test
    // onMount(() => {
        // importAll()
        // import '$lib/assets/VSingleplayer.js';
        // test = "hi"
    // });
    // function butti() {console.log(test)};
    let [ALL_CUP_IDS,MapPropertyUtils,CupIdEnum,DeploymentUtils,toDisplayString,FStorage,normalizeClass,Fragment,renderList,createVNode,resolveComponent,LATEST_MAP_CODE_VERSION,MapUtils,NewcomerUtils,normalizeStyle,PageIdEnum,RecentMapUtils,RouteEnum,StorageKeyEnum,withDirectives,ULTRAHARD_UNLOCK_AT_OVERALL_PERCENT,vModelText,WEBSITE_URL,withKeys,QueryKeyEnum,_export_sfc,FINDER_MAX_RESULTS,ALL_DIFFICULTIES,ALL_SKIN_IDS,SkinIdEnum,CupUtils,UrlUtils,API_SERVER_URL,MiscUtils,CLOSE_BUTTON_TEXT,LinkEnum,StorageValueEnum,NEWCOMER_GRADUATE_AT_MAP_COMPLETION_COUNT,ColorEnum,SoundFileEnum,ALL_SOUND_FILE_PATHS,SettingsUtils,ArrayUtils,FGlobalManager,defineComponent,createElementBlock,createBaseVNode,createCommentVNode,createStaticVNode,openBlock,pushScopeId,popScopeId];
    onMount(() => {
        let [ALL_CUP_IDS,MapPropertyUtils,CupIdEnum,DeploymentUtils,toDisplayString,FStorage,normalizeClass,Fragment,renderList,createVNode,resolveComponent,LATEST_MAP_CODE_VERSION,MapUtils,NewcomerUtils,normalizeStyle,PageIdEnum,RecentMapUtils,RouteEnum,StorageKeyEnum,withDirectives,ULTRAHARD_UNLOCK_AT_OVERALL_PERCENT,vModelText,WEBSITE_URL,withKeys,QueryKeyEnum,_export_sfc,FINDER_MAX_RESULTS,ALL_DIFFICULTIES,ALL_SKIN_IDS,SkinIdEnum,CupUtils,UrlUtils,API_SERVER_URL,MiscUtils,CLOSE_BUTTON_TEXT,LinkEnum,StorageValueEnum,NEWCOMER_GRADUATE_AT_MAP_COMPLETION_COUNT,ColorEnum,SoundFileEnum,ALL_SOUND_FILE_PATHS,SettingsUtils,ArrayUtils,FGlobalManager,defineComponent,createElementBlock,createBaseVNode,createCommentVNode,createStaticVNode,openBlock,pushScopeId,popScopeId,] = index();
    })

    let modmenu = false;
    let LevelEditor = false;
    let LevelEditorObjects = false;
    let LevelEditorControl = false;
    let LevelEditorAdd = false;
    let cheats = false;
    let gravitytoggle = false;
    let speedtoggle = false;
    let dodocontrols = false;

    // on click
    // function testbutton() {
    //     let sphere = BABYLON.MeshBuilder.CreateIcoSphere("icosphere", options = {radius: 3, subdivisions: 4}, scene);
    //     sphere.position = new BABYLON.Vector3(0, 2, -50);
    //     // player.scale = new BABYLON.Vector3(0.1, 0.1, 0.1);
    //     player.scaling = new BABYLON.Vector3(2, 2, 2);
    //     physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1, friction: 0.1}, scene)
    // }

    let lasthighlight;
    // on input change
    // function highlightObject() {
    //     try{meshes[lasthighlight].showBoundingBox = false;}catch{}
    //     lasthighlight = // $(this).val(); // needs a var
    //     meshes[// $(this).val()].showBoundingBox = true;
    // });

    let meshes;
    let platforms;
    let cones;
    let spheres;
    let ends;
    let cylinders;
    let TextureName = [];
    let TextureColor = [];
    // on click from GetAllObjects
    function GetAllObjects() {
        meshes = null;
        platforms = null;
        cones = null;
        spheres = null;
        ends = null;
        cylinders = null;
        TextureName = [];
        TextureColor = [];
        // document.getElementById("ObjectSelector").innerHTML = "<option> </option>"; // needs to be each
        meshes = scene.getMeshesByTags("mesh")
        platforms = scene.getMeshesByTags("platform")
        cones = scene.getMeshesByTags("cone")
        spheres = scene.getMeshesByTags("sphere")
        ends = scene.getMeshesByTags("end")
        cylinders = scene.getMeshesByTags("cylinder")
        for(let i = 0;i < meshes.length;i++) {
            // document.getElementById("ObjectSelector").innerHTML += "<option value="+i+">"+meshes[i].name+"</option>" // needs to be each
        }
        for (let i = 0;i<meshes.length;i++){
            TextureName.push(meshes[i].material.name);
            TextureColor.push(meshes[i].material.diffuseColor);
        }
        TextureName = JSON.stringify(TextureName)
        TextureColor = JSON.stringify(TextureColor)
    }
    // on click from DeleteAllMadeObjects
    function DeleteAllMadeObjects(){
        for(let i = 0;i < boxnum;i++) {
            scene.getMeshByName("box"+i).dispose()
        }
        for(let i = 0;i < cylindernum;i++) {
            scene.getMeshByName("cylinder"+i).dispose()
        }
        boxnum = 0;
        cylindernum = 0;
        GetAllObjects()
    }
    // on click from DeleteSelectedMadeObjects
    function DeleteSelectedMadeObjects(){
        // meshes[$("#ObjectSelector").val()].dispose();
        GetAllObjects()
    }
    let boxnum = 0
    let cylindernum = 0
    // on click from addBox
    function addBox() {
        // texture
        let mat = new BABYLON.StandardMaterial("mat", scene);
        mat.diffuseTexture = new BABYLON.Texture("assets/textures/bright.png", scene);
        mat.diffuseTexture.uScale = mat.diffuseTexture.vScale = 1.0;
        mat.backFaceCulling = false;
        mat.freeze();

        let box = BABYLON.MeshBuilder.CreateBox("box"+boxnum, options={size:2}, scene);
        BABYLON.Tags.AddTagsTo(box, "mesh");
        box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene)
        box.material = mat;
        
        boxnum++
        GetAllObjects()
    }
    // on click from addcylinder
    function addcylinder() {
        // texture
        let mat = new BABYLON.StandardMaterial("mat", scene);
        mat.diffuseTexture = new BABYLON.Texture("assets/textures/bright.png", scene);
        mat.diffuseTexture.uScale = mat.diffuseTexture.vScale = 1.0;
        mat.backFaceCulling = false;
        mat.freeze();

        let cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder"+cylindernum, options={height:2}, scene);
        cylinder.checkCollisions = true;
        cylinder.applyGravity = false;
        cylinder.isPickable = false;
        scene.collisionsEnabled = true;
        camera.checkCollisions = true;
        BABYLON.Tags.AddTagsTo(cylinder, "mesh");
        cylinder.physicsImpostor = new BABYLON.PhysicsImpostor(cylinder, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene)
        cylinder.material = mat;
        
        cylindernum++
        GetAllObjects()
    }
    // needs a var
    // function Transform(x=meshes[$("#ObjectSelector").val()].position.x,y=meshes[$("#ObjectSelector").val()].position.y,z=meshes[$("#ObjectSelector").val()].position.z,
    //                     xs=meshes[$("#ObjectSelector").val()].scaling.x,ys=meshes[$("#ObjectSelector").val()].scaling.y,zs=meshes[$("#ObjectSelector").val()].scaling.z,
    //                     xr,yr,zr) {
    //     try{meshes[$("#ObjectSelector").val()].position = new BABYLON.Vector3(x,y,z)} catch{}
    //     if (xr != undefined && yr != undefined && zr != undefined) {
    //         try{
    //             var rotationX = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, BABYLON.Tools.ToRadians(xr));
    //             var rotationY = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(yr));
    //             var rotationZ = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Z, BABYLON.Tools.ToRadians(zr));
    //             var combinedRotation = rotationZ.multiply(rotationY).multiply(rotationX);
    //             meshes[$("#ObjectSelector").val()].rotationQuaternion = combinedRotation;
    //         } catch{}
    //     }
    //     try{meshes[$("#ObjectSelector").val()].scaling = new BABYLON.Vector3(xs,ys,zs)} catch{}
    //     if ($("#TextureSelector").val() == ''){}
    //     else if ($("#TextureSelector").val() == 'bright.png'){meshes[$("#ObjectSelector").val()].material = decorations.bright}
    //     else if ($("#TextureSelector").val() == 'dark.png'){meshes[$("#ObjectSelector").val()].material = decorations.dark}
    //     else if ($("#TextureSelector").val() == 'flare.png'){meshes[$("#ObjectSelector").val()].material = decorations.flare}
    //     else if ($("#TextureSelector").val() == 'icedd.png'){meshes[$("#ObjectSelector").val()].material = decorations.icedd}
    //     else if ($("#TextureSelector").val() == 'pm1.png'){meshes[$("#ObjectSelector").val()].material = decorations.pm1}
    //     else if ($("#TextureSelector").val() == 'pm2.png'){meshes[$("#ObjectSelector").val()].material = decorations.pm2}
    // }
    // on click for ControlButton + vars
    function ControlButton() {
        // Transform(
        //     $("#x").val() !== "" ? $("#x").val() : undefined,$("#y").val() !== "" ? $("#y").val() : undefined,$("#z").val() !== "" ? $("#z").val() : undefined,
        //     $("#xs").val() !== "" ? $("#xs").val() : undefined,$("#ys").val() !== "" ? $("#ys").val() : undefined,$("#zs").val() !== "" ? $("#zs").val() : undefined,
        //     $("#xr").val() !== "" ? $("#xr").val() : undefined,$("#yr").val() !== "" ? $("#yr").val() : undefined,$("#zr").val() !== "" ? $("#zr").val() : undefined)
    }
    let MapInit = '';
    function Distance3D(x1, y1, z1, x2, y2, z2) {
        return Math.sqrt(
            Math.abs(Math.pow(x2 - x1, 2)) + 
            Math.abs(Math.pow(y2 - y1, 2)) + 
            Math.abs(Math.pow(z2 - z1, 2))
        );
    }
    let MapScript1;
    let MapScirpt2;
    let MapScirpt3;
    let MapScirpt4;
    // let debugmesh = BABYLON.MeshBuilder.CreateBox("box", options={size: 0.1}, scene);
    // debugmesh.position = new BABYLON.Vector3(vertices[0].x, vertices[0].y, vertices[0].z)
    // debugmesh = BABYLON.MeshBuilder.CreateBox("box", options={size: 0.1}, scene);
    // debugmesh.position = new BABYLON.Vector3(vertices[4].x, vertices[4].y, vertices[4].z)
    function ExportMap() {
        GetAllObjects();
        MapScript1 = 'var map = {title: "EngineV9Level",song: "env2",maker: "Someone",spawn: [0, 0.5, 0],init: function() {let box;';
        MapScirpt2 = `let meshes = scene.getMeshesByTags("mesh");let platforms = scene.getMeshesByTags("platform");let cones = scene.getMeshesByTags("cone");let ends = scene.getMeshesByTags("end");decorations.decorateCustomLevel(meshes, platforms, cones, ends, ${TextureName}, ${TextureColor})},`
        MapScirpt3 = 'post: function() {},section_id: 0,section_update: function() {},reset: function() {},'
        MapScirpt4 = 'player_move: function() {},physics_update: function() {},render_update: function() {},}'
        for (let i = 0; i < platforms.length; i++) {
            platforms[i].computeWorldMatrix(true);
            let worldMatrix = platforms[i].getWorldMatrix();

            let rotationQuaternion = platforms[i].rotationQuaternion;
            if (!rotationQuaternion) {
                rotationQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(platforms[i].rotation.y, platforms[i].rotation.x, platforms[i].rotation.z);
            }
            let rotation = rotationQuaternion.toEulerAngles();

            let data = BABYLON.VertexData.ExtractFromMesh(platforms[i]);
            data.transform(worldMatrix);
            // 0 1 corners
            // 0 2 width
            // 0 3 height
            // 0 4 depth
            let boundingBox = platforms[i].getBoundingInfo().boundingBox;
            let center = boundingBox.center;
            let vertices = boundingBox.vectorsWorld
            let width = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[2].x, vertices[2].y, vertices[2].z);
            let height = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[3].x, vertices[3].y, vertices[3].z);
            let depth = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[4].x, vertices[4].y, vertices[4].z);

            MapInit += `box = BABYLON.MeshBuilder.CreateBox('${platforms[i].name}', {size: 1}, scene);
                        box.scaling = new BABYLON.Vector3(${width}, ${height}, ${depth});
                        box.position = new BABYLON.Vector3(${center.x}, ${center.y}, ${center.z});
                        box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
                        box.rotation = new BABYLON.Vector3(${rotation.x}, ${rotation.y}, ${rotation.z});
                        BABYLON.Tags.AddTagsTo(box, 'mesh platform');`;
        }
        for (let i = 0; i < cones.length; i++) {
            cones[i].computeWorldMatrix(true);
            let worldMatrix = cones[i].getWorldMatrix();

            let rotationQuaternion = cones[i].rotationQuaternion;
            if (!rotationQuaternion) {
                rotationQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(cones[i].rotation.y, cones[i].rotation.x, cones[i].rotation.z);
            }
            let rotation = rotationQuaternion.toEulerAngles();

            let data = BABYLON.VertexData.ExtractFromMesh(cones[i]);
            data.transform(worldMatrix);
            // 0 1 corners
            // 0 2 width
            // 0 3 height
            // 0 4 depth
            let boundingBox = cones[i].getBoundingInfo().boundingBox;
            let center = boundingBox.center;
            let vertices = boundingBox.vectorsWorld
            let width = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[2].x, vertices[2].y, vertices[2].z);
            let height = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[3].x, vertices[3].y, vertices[3].z);
            let depth = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[4].x, vertices[4].y, vertices[4].z);
            MapInit += `cone = BABYLON.MeshBuilder.CreateCylinder('${cones[i].name}', {diameterTop: 0, diameterBottom:${width}, height:${height-0.1}}, scene);
                                cone.scaling = new BABYLON.Vector3(${width}, ${height-0.05}, ${depth});
                                cone.position = new BABYLON.Vector3(${center.x-0.05}, ${center.y}, ${center.z});
                                cone.rotation = new BABYLON.Vector3(${rotation.x}, ${rotation.y}, ${rotation.z});
                                cone.physicsImpostor = new BABYLON.PhysicsImpostor(cone, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
                                cone.physicsImpostor.registerOnPhysicsCollide(player.physicsImpostor, function(main, collided) {
                                    window.change_state.die("Died From Cone");
                                });
                                BABYLON.Tags.AddTagsTo(cone, 'mesh cone');`;
        }
        for (let i = 0; i < ends.length; i++) {
            ends[i].computeWorldMatrix(true);
            let worldMatrix = ends[i].getWorldMatrix();

            let rotationQuaternion = ends[i].rotationQuaternion;
            if (!rotationQuaternion) {
                rotationQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(ends[i].rotation.y, ends[i].rotation.x, ends[i].rotation.z);
            }
            let rotation = rotationQuaternion.toEulerAngles();

            let data = BABYLON.VertexData.ExtractFromMesh(ends[i]);
            data.transform(worldMatrix);
            // 0 1 corners
            // 0 2 width
            // 0 3 height
            // 0 4 depth
            let boundingBox = ends[i].getBoundingInfo().boundingBox;
            let center = boundingBox.center;
            let vertices = boundingBox.vectorsWorld
            let width = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[2].x, vertices[2].y, vertices[2].z);
            let height = Distance3D(vertices[0].x, vertices[0].y, vertices[0].z, vertices[3].x, vertices[3].y, vertices[3].z);
            MapInit += `end = BABYLON.MeshBuilder.CreateCylinder('${ends[i].name}', {diameterTop: ${width}, diameterBottom:${width}, height:${height}}, scene);
                                end.position = new BABYLON.Vector3(${center.x-0.05}, ${center.y}, ${center.z});
                                end.rotation = new BABYLON.Vector3(${rotation.x}, ${rotation.y}, ${rotation.z});
                                end.physicsImpostor = new BABYLON.PhysicsImpostor(end, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
                                end.physicsImpostor.registerOnPhysicsCollide(player.physicsImpostor, function(main, collided) {
                                    window.change_state.win();
                                });
                                BABYLON.Tags.AddTagsTo(end, 'mesh end');`;
        }
        // eval(MapInit)
        return MapScript1+MapInit+MapScirpt2+MapScirpt3+MapScirpt4
    }
    // on click for Export + var
    function Export(){
        const script = ExportMap();
        // $("#ExportMap").val(script);
    }

    // // $('#PracticeX').val('0');
    let PracticeX = 0;
    // // $('#PracticeY').val('1');
    let PracticeY = 1;
    // // $('#PracticeZ').val('0');
    let PracticeZ = 0;
    // // $('#PracticeR').val('0');
    let PracticeR = 0;
    // // $('#gravity').val('-9');
    let gravity = -9;
    // // $('#speed').val('0.28');
    let speed = 0.28;
    // // $("#speedindicator").text(// $("#speed").val()); // change text to speed
    // // $("#gravityindicator").text(// $("#gravity").val()); // change text to gravity

    // hide shows
    // on click for togglemenu
    function togglemenu() {
        // $(".modmenuOption").toggle();
    };
    // on click for toggleLevelEditor
    function toggleLevelEditor() {
        // $(".LevelEditorOption").toggle();
    };
    // on click for toggleLevelEditorObjects
    function toggleLevelEditorObjects() {
        // $(".LevelEditorObjects").toggle();
    };
    // on click for toggleLevelEditorControl
    function toggleLevelEditorControl() {
        // $(".LevelEditorControl").toggle();
    };
    // on click for toggleLevelEditorAdd
    function toggleLevelEditorAdd() {
        // $(".LevelEditorAdd").toggle();
    };
    // on click for toggledodocontrols
    function toggledodocontrols() {
        // $("#dodocontrols").toggle();
    };
    // on click for togglecheats
    function togglecheats() {
        // $("#cheats").toggle();
    };
    // on click for gravityoverwrite
    function gravityoverwrite() {
        // $("#gravitytoggle").toggle();
    };
    // on click for speedoverwrite
    function speedoverwrite() {
        // $("#speedtoggle").toggle();
    };

    // on input change for gravity
    function gravityFunc() {
        // $("#gravityindicator").text(// $(this).val());
    };
    // on input change for speed
    function speedFunc() {
        // $("#speedindicator").text(// $(this).val());
    };

    // on click for home
    function home() {
        camera.position = new BABYLON.Vector3(0,0,0);
    };
    // on click for up
    function up() {
        camera.position.y += 1;
    };
    // on click for left
    function left() {
        camera.position.x += 1;
    };
    // on click for right
    function right() {
        camera.position.x -= 1;
    };
    // on click for down
    function down() {
        camera.position.y -= 1;
    };
    // on click for foreward
    function foreward() {
        camera.position.z -= 1;
    };
    // on click for backward
    function backward() {
        camera.position.z += 1;
    };

    // rotation same name
    function Chome() {
        camera.rotation = new BABYLON.Vector3(0,0,0);
    };
    function Cup() {
        camera.rotation.x -= .25;
    };
    function Cright() {
        camera.rotation.y -= .25;
    };
    function Cleft() {
        camera.rotation.y += .25;
    };
    function Cdown() {
        camera.rotation.x += .25;
    };

    // // $(document).keypress(function(event) {
    //     // move
    //     if (event.key === "j") {
    //         camera.position.x += 1;
    //     }
    //     if (event.key === "l") {
    //         camera.position.x -= 1;
    //     }
    //     if (event.key === "k") {
    //         camera.position.z += 1;
    //     }
    //     if (event.key === "i") {
    //         camera.position.z -= 1;
    //     }
    //     if (event.key === "p") {
    //         camera.position.y += 1;
    //     }
    //     if (event.key === ";") {
    //         camera.position.y -= 1;
    //     }
    //     // rotation
    //     if (event.key === "J") {
    //         camera.rotation.y -= .25;
    //     }
    //     if (event.key === "L") {
    //         camera.rotation.y += .25;
    //     }
    //     if (event.key === "K") {
    //         camera.rotation.x += .25;
    //     }
    //     if (event.key === "I") {
    //         camera.rotation.x -= .25;
    //     }
    // }); Keypess might be irrelavent
</script>
<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Ice Dodo - UnOfficial Site</title>
    <link rel="icon" href={logo}>
    <meta name="description" content="Play hundreds of 3D Ice dodo levels. Do not fall off or touch spikes.">

    <!-- <link rel="stylesheet" href="/assets/index.css"> -->
    <style>
        .button {
            margin-bottom:5px;
            margin-top:5px;
            border: 4px solid #bbbbbb;
            border-radius: 10px;
            background-color: transparent;
            color:white;
            cursor: pointer;
        }
        .button:hover {
            background: #8A0468;
        }
        input[type=text] {
            width:2vw;
        } 
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }
        p {
            margin: 2px;
        }
    </style>
</svelte:head>
<div id="appContainer">
    <div id="app"></div>
</div>
<img id="validation" src={validation} alt="validation" style="position:absolute;right:-15px;bottom:50px;width:20vh">
<div id="preroll"></div>
<div id="ModMenu">
    <div id="ModMenuContent" style="opacity: 75%;position:absolute;top:0;right:5vw;width:17vw;border:rgb(59, 59, 59) 1px solid;background-color: rgb(39, 39, 39);border-radius: 0 0 5px 5px;-index:-1">
        <button id="togglemenu" class="modbutton">ModMenu (click)</button>
        <div class="modmenuOption">
            <a class="button" href="../">Back To Config</a>
            <br>
            <input id="spin" type="checkbox">
            <h5>Turn Off Spin</h5>
            <br>
            <input id="PracticeMode" type="checkbox">
            <h5>Practice Mode</h5>
            <p>Cords + Rotation(0.0-1.0)</p>
            <input type="number" id="PracticeX" style="width:2vw"><input type="number" id="PracticeY" style="width:2vw"><input type="number" id="PracticeZ" style="width:2vw"><input type="number" id="PracticeR" style="width:2vw">
            <br>
            <button id="togglecheats" class="modbutton">Cheats</button>
            <div id="cheats">
                <input id="godmode" type="checkbox">
                <h5>Godmode</h5>
                <br>
                <input id="gravityoverwrite" type="checkbox">
                <h5>Overwrite Gravity?</h5>
                <br>
                <!-- <input id="gravity" type="number" > -->
                <div id="gravitytoggle">
                    <input type="range" min="-18" max="0" id="gravity" step="1">
                    <p style="display:block;margin:0;" id="gravityindicator">0</p>
                </div>

                <input id="speedoverwrite" type="checkbox">
                <h5>Overwrite speed?</h5>
                <br>
                <!-- <input id="speed" type="number" > -->
                <div id="speedtoggle">
                    <input type="range" min="0" max="1" id="speed" step=".02">
                    <p style="display:block;margin:0;" id="speedindicator">0.28</p>
                </div>
                <botton class="button" onclick="window.tsTriggers.onWin()">Instant Win</botton>
            </div>
            <button id="toggledodocontrols" class="modbutton">Dodo Cinematics</button>
            <!-- <button id="testbutton" class="modbutton">Dodo rotation</button> -->
            <div id="dodocontrols">
                <input id="freecam" type="checkbox">
                <h5>FreeCam</h5>
                <br>
                <input id="freeze" type="checkbox" >
                <h5 >Freeze Dodo</h5>
                <br >
                <input id="follow" type="checkbox" >
                <h5 >Follow Player</h5>
                <br >
                <p style="margin: 0;">Movement</p>
                <div class="container">
                    <div class="home"><button id="home" class="dodocontrolButton">Home</button></div>
                    <div class="up"><button id="up" class="dodocontrolButton">Up</button></div>
                    <div class="left"><button id="left" class="dodocontrolButton">Left</button></div>
                    <div class="right"><button id="right" class="dodocontrolButton">Right</button></div>
                    <div class="down"><button id="down" class="dodocontrolButton">Down</button></div>
                    <div class="foreward"><button id="foreward" class="dodocontrolButton">forewards</button></div>
                    <div class="backward"><button id="backward" class="dodocontrolButton">backwards</button></div>
                </div>
                <p style="margin: 0;">Rotation</p>
                <div class="container">
                    <div class="home"><button id="Chome" class="dodocontrolButton">Home</button></div>
                    <div class="up"><button id="Cup" class="dodocontrolButton">Up</button></div>
                    <div class="left"><button id="Cleft" class="dodocontrolButton">Left</button></div>
                    <div class="right"><button id="Cright" class="dodocontrolButton">Right</button></div>
                    <div class="down"><button id="Cdown" class="dodocontrolButton">Down</button></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="LevelEditor">
    <div id="LevelEditorContent" style="opacity: 100%;position:absolute;top:0;left:10vw;width:15vw;border:rgb(59, 59, 59) 1px solid;background-color: rgb(39, 39, 39);border-radius: 0 0 5px 5px;-index:-1">
        <button id="toggleLevelEditor" class="modbutton">LevelEditor (click)</button>
        <div class="LevelEditorOption">
            <button id="toggleLevelEditorObjects" class="modbutton">LevelEditor Objects</button>
            <div class="LevelEditorObjects" style="max-height:25vh;overflow-y: auto;">
                <button class="button" id="GetAllObjects">get All Objects (emergency)</button>
                <button class="button" id="DeleteAllMadeObjects">Delete All (made) Objects</button>
                <button class="button" id="DeleteSelectedMadeObjects">Delete Selected Object</button>
                <br>
                <select id="ObjectSelector"><option> </option></select>
            </div>
            <button id="toggleLevelEditorAdd" class="modbutton">LevelEditor Add</button>
            <div class="LevelEditorAdd">
                <button id="addBox" class="button">add box</button><br>
                <button id="addcylinder" class="button">add cylinder</button>
            </div>
            <button id="toggleLevelEditorControl" class="modbutton">LevelEditor Control</button>
            <div class="LevelEditorControl">
                <p>Position</p>
                <input type="text" id="x"><input type="text" id="y"><input type="text" id="z">
                <p>Rotation</p>
                <input type="text" id="xr"><input type="text" id="yr"><input type="text" id="zr">
                <p>Scale</p>
                <input type="text" id="xs"><input type="text" id="ys"><input type="text" id="zs">
                <br>
                <p>Texture</p>
                    <select id="TextureSelector">
                        <option value=""></option>
                        <option value="bright.png">Bright</option>
                        <option value="dark.png">Dark</option>
                        <option value="flare.png">Flare</option>
                        <option value="icedd.png">Icedd</option>
                        <option value="pm1.png">PM1</option>
                        <option value="pm2.png">PM2</option>
                    </select>
                <br>
                <button class="button" id="ControlButton">Set</button>
                <br>
                <button class="button" id="Export">Export Level</button>
                <textarea style="color:black;font-size: xx-small;font-family: arial;" id="ExportMap"></textarea>
            </div>
        </div>
    </div>
</div>
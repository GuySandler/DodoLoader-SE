var map={title:"The Golden Brick",song:"env2",maker:"David Ye",spawn:[0,0.5,0],init:function(){a.c([-20.999789999999997,-3.33979,-64.99979],"c0c0c0");a.c([-24.999720000000003,-3.33972,-69.99972],"c0c0c0");a.c([-20.999650000000003,-3.33965,-74.99965],"c0c0c0");a.c([-24.99958,-3.33958,-79.99958],"c0c0c0");a.p([0.00049,0.00049,-52.99951],[0,0,0],[40,10,2],"cd7f32",0,0,0.6,false,false);a.p([4,0,-51],[0,0,0],[2,20,3],"cd7f32",0,0,0.6,false,false);a.p([-1.99993,0.00007000000000000001,-34.99993],[0,0,0],[2,20,30],"cd7f32",0,0,0.6,false,false);a.p([0.00014000000000000001,0.00014000000000000001,-12.999860000000002],[0,0,0],[2,2,40],"cd7f32",0,0,0.6,false,false);a.p([0.00021,0.00021,-52.999790000000004],[0,0,0],[40,10,2],"cd7f32",0,0,0.6,false,false);a.p([-19.99972,0.00028000000000000003,-99.99972],[0,0,0],[2,20,6],"cd7f32",0,0,0.6,false,false);a.p([-25.999650000000003,0.00035000000000000005,-99.99965],[0,0,0],[2,20,6],"cd7f32",0,0,0.6,false,false);a.p([-22.99958,0.00042,-101.99958000000001],[0,0,0],[6,20,2],"cd7f32",0,0,0.6,false,false);a.p([-9.99951,-4.99951,-42.99951],[0,0,0],[20,2,20],"cd7f32",0,0,0.6,false,false);a.p([-23,-5,-73],[0,0,0],[6,2,80],"cd7f32",0,0,0.6,false,false);a.p([7.000069999999999,-4.99993,-50.999930000000006],[-1.57,0,0],[2,2,20],"cd7f32",0,0,0.6,false,false);a.p([-22.999859999999998,-2.99986,-97.99986000000001],[0,0,0],[2,2,2],"ffd700",0,0,0.6,false,false);a.c([-22.999789999999997,-3.33979,-59.999790000000004],"c0c0c0");a.c([-22.999720000000003,-3.33972,-84.99972],"c0c0c0");a.e([17.00035,-2.99965,-50.99965]);},post:function(){a.u('P1');cc.set_monkey("speed",0.2);cc.set_monkey("steer",0.03);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-0.9999299999999991){this.section_id+=1}
break;case 1:if(PZ<-40.99993){this.section_id+=1}
break;case 2:if(PZ<-63.99986){this.section_id+=1}
break;case 3:a.mov('P1','y',3.0);if(PZ<-65.99986){this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('C0',[-20.999789999999997,-3.33979,-64.99979],[0,0,0],[2,2,2]);a.re('C1',[-24.999720000000003,-3.33972,-69.99972],[0,0,0],[2,2,2]);a.re('C2',[-20.999650000000003,-3.33965,-74.99965],[0,0,0],[2,2,2]);a.re('C3',[-24.99958,-3.33958,-79.99958],[0,0,0],[2,2,2]);a.re('P0',[0.00049,0.00049,-52.99951],[0,0,0],[40,10,2]);a.re('P1',[4,0,-51],[0,0,0],[2,20,3]);a.re('P2',[-1.99993,0.00007000000000000001,-34.99993],[0,0,0],[2,20,30]);a.re('P3',[0.00014000000000000001,0.00014000000000000001,-12.999860000000002],[0,0,0],[2,2,40]);a.re('P4',[0.00021,0.00021,-52.999790000000004],[0,0,0],[40,10,2]);a.re('P5',[-19.99972,0.00028000000000000003,-99.99972],[0,0,0],[2,20,6]);a.re('P6',[-25.999650000000003,0.00035000000000000005,-99.99965],[0,0,0],[2,20,6]);a.re('P7',[-22.99958,0.00042,-101.99958000000001],[0,0,0],[6,20,2]);a.re('P8',[-9.99951,-4.99951,-42.99951],[0,0,0],[20,2,20]);a.re('P9',[-23,-5,-73],[0,0,0],[6,2,80]);a.re('P10',[7.000069999999999,-4.99993,-50.999930000000006],[-1.57,0,0],[2,2,20]);a.re('P11',[-22.999859999999998,-2.99986,-97.99986000000001],[0,0,0],[2,2,2]);a.re('C4',[-22.999789999999997,-3.33979,-59.999790000000004],[0,0,0],[2,2,2]);a.re('C5',[-22.999720000000003,-3.33972,-84.99972],[0,0,0],[2,2,2]);a.re('E0',[17.00035,-2.99965,-50.99965],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}
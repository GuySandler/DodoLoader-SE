var map={title:"remote control",song:"env2",maker:"Carrots",spawn:[0,0.5,0],init:function(){a.c([2.78,0.020000000000000018,-29.88],true);a.c([7.09,0.02006999999999992,-48.09],true);a.c([4.62,0.020140000000000047,-62.4],true);a.c([6.15,0.02020999999999995,-78.38],true);a.c([1.52,0.020279999999999965,-110.56],true);a.c([-2.08,0.02034999999999998,-122.03],true);a.c([-5.14,0.020000000000000018,-145.53],true);a.c([-5.94,0.02006999999999992,-160.48],true);a.p([0,-0.9998600000000001,-9],[0,0,0],[5,1,18],1,0,0,0.6,false);a.p([2.94,-1.00979,-25.53],[-0.35,0,0],[5,1,18],1,0,0,0.6,false);a.p([5.89,-0.9997199999999999,-47.15],[0,0,0],[5,1,28],1,0,0,0.6,false);a.p([5.92,-1.00965,-75.12],[0,0,0],[5,1,28],1,0,0,0.6,false);a.p([2.94,-1,-96.59],[0.35,0,0],[5,1,18],1,0,0,0.6,false);a.p([0,-1.00993,-113.47],[0,0,0],[5,1,18],1,0,0,0.6,false);a.p([-2.96,-0.9998600000000001,-130.05],[0.35,0,0],[5,1,18],1,0,0,0.6,false);a.p([-5.88,-1.00979,-151.65],[0,0,0],[5,1,28],1,0,0,0.6,false);a.p([-3.03,-0.9997199999999999,-173.31],[-0.35,0,0],[4,1,18],1,0,0,0.6,false);a.p([1.64,-1.00965,-189.93],[-0.17,0,0],[3,1,18],1,0,0,0.6,false);a.p([3.18,-1,-207.46],[0,0,0],[2,1,18],1,0,0,0.6,false);a.p([-2.3,-1.00993,-222.53],[0.7,0,0],[2,1,18],1,0,0,0.6,false);a.p([-9.35,-0.9998600000000001,-237.72],[0.17,0,0],[2,1,18],1,0,0,0.6,false);a.p([-3.48,-1.00979,-249.95],[-1.05,0,0],[2,1,18],1,0,0,0.6,false);a.p([4.78,-0.9997199999999999,-248.36],[0,0,0],[2,1,14],1,0,0,0.6,false);a.e([4.78,-0.5,-242.14]);},post:function(){cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-8.14){this.section_id+=1}
break;case 1:if(PZ<-28.14){this.section_id+=1}
break;case 2:if(PZ<-29){a.msg_set("Establishing Dodo Link. ");this.section_id+=1}
break;case 3:if(PZ<-49){a.msg_del();this.section_id+=1}
break;case 4:if(PZ<-69){a.msg_set("Establishing Dodo Link.. ");this.section_id+=1}
break;case 5:if(PZ<-89){a.msg_del();this.section_id+=1}
break;case 6:if(PZ<-96.51){rotation=30.0*Math.PI/180;this.section_id+=1}
break;case 7:if(PZ<-98.51){this.section_id+=1}
break;case 8:if(PZ<-109){a.msg_set("Establishing Dodo Link... ");this.section_id+=1}
break;case 9:if(PZ<-129){a.msg_del();this.section_id+=1}
break;case 10:if(PZ<-134.92000000000002){rotation=-10.0*Math.PI/180;this.section_id+=1}
break;case 11:if(PZ<-135.32){this.section_id+=1}
break;case 12:if(PZ<-135.81){rotation=15.0*Math.PI/180;this.section_id+=1}
break;case 13:if(PZ<-137.81){this.section_id+=1}
break;case 14:if(PZ<-149){a.msg_set("Establishing Dodo Link. ");this.section_id+=1}
break;case 15:if(PZ<-169){a.msg_del();this.section_id+=1}
break;case 16:if(PZ<-173.73){rotation=-5.0*Math.PI/180;this.section_id+=1}
break;case 17:if(PZ<-175.73){this.section_id+=1}
break;case 18:if(PZ<-176.17){rotation=-10.0*Math.PI/180;this.section_id+=1}
break;case 19:if(PZ<-178.17){this.section_id+=1}
break;case 20:if(PZ<-178.75){rotation=-15.0*Math.PI/180;this.section_id+=1}
break;case 21:if(PZ<-180.75){this.section_id+=1}
break;case 22:if(PZ<-188.32000000000002){rotation=-10.0*Math.PI/180;this.section_id+=1}
break;case 23:if(PZ<-188.72){this.section_id+=1}
break;case 24:if(PZ<-189){a.msg_set("Establishing Dodo Link.. ");this.section_id+=1}
break;case 25:if(PZ<-201){a.msg_del();this.section_id+=1}
break;case 26:if(PZ<-201.15){a.msg_set("Dodo Link Established! ");rotation=0.0*Math.PI/180;steer=default_steer*0.0;this.section_id+=1}
break;case 27:if(PZ<-216.15){a.msg_del();steer=cc.get("steer",null);this.section_id+=1}
break;case 28:if(PZ<-216.4){a.msg_set("Dodo Link Established! ");rotation=40.0*Math.PI/180;steer=default_steer*0.0;this.section_id+=1}
break;case 29:if(PZ<-228.6){a.msg_del();steer=cc.get("steer",null);this.section_id+=1}
break;case 30:if(PZ<-228.84){a.msg_set("Dodo Link Established! ");rotation=10.0*Math.PI/180;steer=default_steer*0.0;this.section_id+=1}
break;case 31:if(PZ<-245.84){a.msg_del();steer=cc.get("steer",null);this.section_id+=1}
break;case 32:if(PZ<-245.95){a.msg_set("Dodo Link Established! ");rotation=-60.0*Math.PI/180;steer=default_steer*0.0;this.section_id+=1}
break;case 33:if(PZ<-254.95){a.msg_del();steer=cc.get("steer",null);this.section_id+=1}
break;case 34:if(PZ<-255.13){a.msg_set("Dodo Link Established! ");rotation=180.0*Math.PI/180;steer=default_steer*0.0;this.section_id+=1}
break;case 35:if(PZ<-261.13){a.msg_del();steer=cc.get("steer",null);this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('C0',[2.78,0.020000000000000018,-29.88],[0,0,0],[2,2,2]);a.re('C1',[7.09,0.02006999999999992,-48.09],[0,0,0],[2,2,2]);a.re('C2',[4.62,0.020140000000000047,-62.4],[0,0,0],[2,2,2]);a.re('C3',[6.15,0.02020999999999995,-78.38],[0,0,0],[2,2,2]);a.re('C4',[1.52,0.020279999999999965,-110.56],[0,0,0],[2,2,2]);a.re('C5',[-2.08,0.02034999999999998,-122.03],[0,0,0],[2,2,2]);a.re('C6',[-5.14,0.020000000000000018,-145.53],[0,0,0],[2,2,2]);a.re('C7',[-5.94,0.02006999999999992,-160.48],[0,0,0],[2,2,2]);a.re('P0',[0,-0.9998600000000001,-9],[0,0,0],[5,1,18]);a.re('P1',[2.94,-1.00979,-25.53],[-0.35,0,0],[5,1,18]);a.re('P2',[5.89,-0.9997199999999999,-47.15],[0,0,0],[5,1,28]);a.re('P3',[5.92,-1.00965,-75.12],[0,0,0],[5,1,28]);a.re('P4',[2.94,-1,-96.59],[0.35,0,0],[5,1,18]);a.re('P5',[0,-1.00993,-113.47],[0,0,0],[5,1,18]);a.re('P6',[-2.96,-0.9998600000000001,-130.05],[0.35,0,0],[5,1,18]);a.re('P7',[-5.88,-1.00979,-151.65],[0,0,0],[5,1,28]);a.re('P8',[-3.03,-0.9997199999999999,-173.31],[-0.35,0,0],[4,1,18]);a.re('P9',[1.64,-1.00965,-189.93],[-0.17,0,0],[3,1,18]);a.re('P10',[3.18,-1,-207.46],[0,0,0],[2,1,18]);a.re('P11',[-2.3,-1.00993,-222.53],[0.7,0,0],[2,1,18]);a.re('P12',[-9.35,-0.9998600000000001,-237.72],[0.17,0,0],[2,1,18]);a.re('P13',[-3.48,-1.00979,-249.95],[-1.05,0,0],[2,1,18]);a.re('P14',[4.78,-0.9997199999999999,-248.36],[0,0,0],[2,1,14]);a.re('E0',[4.78,-0.5,-242.14],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}
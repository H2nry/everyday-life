
function saveIt(lang, gmname,lssn_cd,org_sect,isu_code,isu_sect,hakjm,subjt_no,emp_no,grade,mlt_mjr,len,o_org_sect,no){
  var object = document.myform;
  var url;
  var jea_su;
  var sun_su;
  
  if ( lang == "KOR" ) {
    if(!confirm("[" + gmname + "] 과목을 수강신청 하시겠습니까?")){
      return;
    }
  } else {
    if(!confirm("Do you wish to register for ("+gmname+")?")){
      return;
    }
  }
  
  if ( len == "1"){
    if (object.jea_su.checked == 1){
      jea_su = "1";
    }else{
      jea_su = "0";
    }
    object.jea_su.checked = 0;
    
    if ((o_org_sect != 'U') && (o_org_sect != 'L') && (o_org_sect != 'H') && (o_org_sect != 'C') && (o_org_sect != 'D') && (o_org_sect != 'G') && (o_org_sect != 'J') && (o_org_sect != 'I')) {
      if (object.sun_su.checked == 1){
        sun_su = "1";
      }else{
        sun_su = "0";
      }
    }else{
      sun_su = "0";
    }
    
    //alert("jea_su1 : " + jea_su);
  }else{
    if (object.jea_su[no].checked == 1){
      jea_su = "1";
    }else{
      jea_su = "0";
    }
    object.jea_su[no].checked = 0;
    
    if ((o_org_sect != 'U') && (o_org_sect != 'L') && (o_org_sect != 'H') &&(o_org_sect != 'C') && (o_org_sect != 'D') && (o_org_sect != 'G')&& (o_org_sect != 'J') && (o_org_sect != 'I')) {
      if (object.sun_su[no].checked == 1){
        sun_su = "1";
      }else{
        sun_su = "0";
      }
    }else{
      sun_su = "0";
    }
    
  }
  
  
  if (mlt_mjr == "1" && jea_su == "1"){
    alert("복수전공 이수자는 재수강을 할 수 없습니다.");
    return;
  }
  
  if (hakjm == 'P') hakjm = '0';
  
  // 선수체크 시 -> 이수구분 : 20 , 학점 : P
  url	= "d_Sugang_SaveDel.jsp?";
  url	= url + "flag=save";
  url	= url + "&lssn_cd=" + lssn_cd ;
  url	= url + "&org_sect=" + org_sect ;
  url	= url + "&isu_code=" + isu_code ;
  url	= url + "&isu_sect=" + isu_sect ;
  url	= url + "&jea_su=" + jea_su ;
  url	= url + "&hakjm=" + hakjm ;
  url	= url + "&subjt_no=" + subjt_no ;
  url	= url + "&emp_no=" + emp_no ;
  url	= url + "&grade=" + grade ;
  url	= url + "&sun_su=" + sun_su ;
  
  // NetFunnel 자원사용 요청 함수(2017.06.14)
  NetFunnel_Action({service_id:'service_1', action_id:'submitB',popup_target:top.fra2.fra2_2,frame_block_list:[{win:top.fra1},{win:top.fra2.fra2_1},{win:top.fra2.fra2_3}]},function(ev,ret){
    parent.fra2_4.location.href	= url;
  });
  
}


function clickit(lang, o_org_sect){
  var msg;
  
  if (o_org_sect == 'B'){
    if ( lang == "KOR" ) {
      msg =	"1. 재수강 대상\n"+
      "    기 취득한 교과목의 성적이 “C＋” 이하인 경우에 한하여 동일과목을 재수강할 수 있다.\n"+
      "    (단, 2017 및 이전 학년도 취득성적은 “C0”이하 일 경우 동일과목을 재수강할수 있다.)\n\n"+
      "2. 재수강 신청\n"+
      "    (1) 온라인 수강신청시 해당 재수강 과목에 (V) 표시를 하여야 함.\n"+
      "    (2) 신청기간 : 수강신청 기간.\n"
      ;
    } else {
      msg =	"1. Courses available for Retaking\n"+
      "    Retaking courses is available if you previously got C+ or below on the same course.\n"+
      "    (Course grade earned before 2017 can only be retaken if the grade is C0 or below.)\n\n"+
      "2. How to retake courses\n"+
      "    (1) When : Course Registration period\n"+
      "    (2) How : Click ‘Course Retaking’(재수강) box while registering courses online.\n"
      ;
    }
    alert(msg);
  }
  
  
  if ((o_org_sect == 'C')||(o_org_sect == 'F')){
    if ( lang == "KOR" ) {
      msg =	"1. 재수강 대상\n"+
      "    기 취득한 교과목의 성적이 C+ 이하인 경우에 한하여 재수강할 수 있다.\n"+
      "2. 재수강 신청\n"+
      "    (1) 온라인 수강신청시 해당 재수강 과목에 (V) 표시를 하여야 함.\n"
      ;
    } else {
      msg =	"1. Courses available for Retaking\n"+
      "    The class grade previously earned must be C+ or below.\n"+
      "2.Registration for retaking\n"+
      "    (1) Retake box should be ticked (v) on online course registration menu.\n"
      ;
    }
    alert(msg);
  } 
  
  
  if (o_org_sect == 'D'){
    if ( lang == "KOR" ) {
      msg =	"1. 재수강 대상\n"+
      "    기 취득한 교과목의 성적이 D+ 이하인 경우에 한하여 재수강할 수 있다.\n"+
      "2. 재수강 신청\n"+
      "    (1) 온라인 수강신청시 해당 재수강 과목에 (V) 표시를 하여야 함.\n"
      ;
    } else {
      msg =	"1. Courses available for Retaking\n"+
      "    The class grade previously earned must be D+ or below.\n"+
      "2.Registration for retaking\n"+
      "    (1) Retake box should be ticked (v) on online course registration menu.\n"
      ;
    }
    alert(msg);
  }
  
  
  if (o_org_sect == 'H' ){
    if ( lang == "KOR" ) {
      msg =	"1. 재수강 대상\n"+
      "    기 취득한 교과목의 성적이 B0 이하인 경우에 한하여 재수강할 수 있다.\n"+
      "2. 재수강 신청\n"+
      "    (1) 온라인 수강신청시 해당 재수강 과목에 (V) 표시를 하여야 함.\n"
      ;
    } else {
      msg =	"1. Courses available for Retaking\n"+
      "    The class grade previously earned must be B0 or below.\n"+
      "2.Registration for retaking\n"+
      "    (1) Retake box should be ticked (v) on online course registration menu.\n"
      ;
    }
    alert(msg);
  } 
}



function clickit2(lang){
  var msg;
  
  if ( lang == "KOR" ) {
    msg = "이수학점에 포함되지 않음.\n"
  } else {
    msg = "This course does not count for the course work requirement. \n"
  }
  
  /*msg = "1. 재수강 대상\n   기 취득한 과목의 성적이 C+ 이하인 교과목으로서 이전과목과 재수강 과목이 \n"
  + "   동일과목이거나 대체과목인 경우에 한하여 재수강할 수 있음. \n"
  + "2. 재수강 신청\n (1) 온라인 수강신청시 해당 재수강 과목에 (V) 표시를 하여야 함. \n"
  + " (2) 교과과정 변천으로 재수강대상 신.구 교과목명이 상이하면서 대체과목 또는 \n"
  + "      동일과목에 해당되는 경우에는 온라인 재수강 신청 후 반드시 '재수강 신청서'를 학업성적증명서와 \n"
  + "      함께 소속대학 교학과에 제출하여야 함.\n" */
  
  alert(msg);
}

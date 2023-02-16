let baseUrl = "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang";



function makeUrl(lang, gmname,lssn_cd,org_sect,isu_code,isu_sect,hakjm,subjt_no,emp_no,grade,mlt_mjr,len,o_org_sect,no) {
  var jea_su = 0;
  var sun_su;

  if (len == "1"){
    if ((o_org_sect != 'U') && (o_org_sect != 'L') && (o_org_sect != 'H') && (o_org_sect != 'C') && (o_org_sect != 'D') && (o_org_sect != 'G') && (o_org_sect != 'J') && (o_org_sect != 'I')) {
      if (object.sun_su.checked == 1){
        sun_su = "1";
      }else{
        sun_su = "0";
      }
    }else{
      sun_su = "0";
    }
    
  }else{
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

  let url	= baseUrl + "/d_Sugang_SaveDel.jsp?";
  url	+= "flag=save";
  url	+= "&lssn_cd=" + lssn_cd ;
  url	+= "&org_sect=" + org_sect ;
  url	+= "&isu_code=" + isu_code ;
  url	+= "&isu_sect=" + isu_sect ;
  url	+= "&jea_su=" + jea_su ;
  url	+= "&hakjm=" + hakjm ;
  url	+= "&subjt_no=" + subjt_no ;
  url	+= "&emp_no=" + emp_no ;
  url	+= "&grade=" + grade ;
  url	+= "&sun_su=" + sun_su ;

  return url;
}


// javascript:saveIt(
//   'KOR',            // lang => 언어. 신경 안써도됨.
//   '한->영 일반번역 ',  // gmname => 과목명.
//   '12506106',       // ** lssn_cd => 학수코드
//   'D',              // ** org_sect => 뭔지는 모르겠지만, D로 고정하면 될듯
//   '10',             // ** isu_code => 10 = 전공, 40 = 교양
//   '12',             /* ** isu_sect => 전필,선/교필,선 구분
//                           11: 전필
//                           12: 전선
//                           31: 공필
//                           32: 공선
//                     */
//   '2',              // ** hakjm => 학점
//   '1',              // ** subjt_no => 뭔지는 모르겠으나, 1으로 고정
//   '',               // ** emp_no => 안쓰는듯. 비어있음. 
//   '1',              // ** grade => 학년
//   '0',              // mlt_mjr => 뭔지는 모르겠으나, 0으로 고정
//   '85',             /* len => 과번호인듯.
//                           85: 한영과
//                           34: 공통
//                     */
//   'D',              // o_org_sect => 뭔지 모르겠으나, D 고정
//   '77'              // no => 테이블 번호 
// );

console.log(
  makeUrl(
    'KOR',
    '',
    '11906202','D',
    '10','11','2',
    '1','','1',
    '0','85','D','5'
  )
);

console.log(
  makeUrl(
    'KOR',
    '',
    '11906204','D',
    '10','11','2',
    '1','','1',
    '0','85','D','5'
  )
)
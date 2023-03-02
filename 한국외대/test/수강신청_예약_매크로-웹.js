let TARGETS = {
  // "11906204": "TASK_1", // 순차통역 한->영 I. 월1-2
  "12206202": "TASK_2", // 영->한 일반번역. 수5-6
  "11806203": "TASK_3", // 순차통역 영->한 I. 월3-4
}
let TASKS = {
  // "TASK_1": [
  //   "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=del&lssn_cd=11906203&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0",
  //   "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=save&lssn_cd=11906204&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0",
  //   "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=save&lssn_cd=11906203&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0"
  // ],
  "TASK_2": [
    "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=del&lssn_cd=12206204&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0",
    "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=save&lssn_cd=12206202&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0",
    "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=save&lssn_cd=12206204&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0"
  ],
  "TASK_3": [
    "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=del&lssn_cd=11806204&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0",
    "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=save&lssn_cd=11806203&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0",
    "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp?flag=save&lssn_cd=11806204&org_sect=D&isu_code=10&isu_sect=11&jea_su=0&hakjm=2&subjt_no=1&emp_no=&grade=1&sun_su=0"
  ],
}
let time = 0.3; // 초

async function beep() { 
  const snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
  snd.play();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function apiFetch(uri) {
  let result = await fetch(uri);
  let response = await result.text();

  if (response.includes("저장완료")) {
    console.log(`수강 신청 "${uri}" 성공`);
  } else if (response.includes("삭제완료")) {
    console.log(`수강 철회 "${uri}" 성공`);
  } else {
    console.error(`알수없는 에러: ${uri}`)
  }
}

let rootFrame = frames['fra2']
let topMenu = rootFrame?.frames['fra2_1'];
let lectureList = rootFrame?.frames['fra2_2'];
let scripts = lectureList.document.querySelectorAll("a") ?? [];
let successList = [];

let cnt = 0;
let successLoopCnt = 0;
let flag = true;

do {
  if (cnt++ % 10 == 0) console.log(`매크로 ${cnt} 회차 도는 중..`);

  for (const target of Object.keys(TARGETS)) {
    let task = TARGETS[target];

    for (let _idx = 0; flag && _idx < scripts.length; _idx++) {
      let script = scripts[_idx];
      if (script.href.includes(target)) {
        let uris = TASKS[task];

        for (const uri of uris) {
          await apiFetch(uri);
        }

        successList.push(target);
        delete TARGETS[target];
        await beep();
        break;
      }
    }

    if (Object.keys(TARGETS) <= 0) {
      flag = false;
      break;
    }
  }

  if (successList.length > 0) {
    console.log(successList);

    if (successLoopCnt++ % 10 == 0) {
      successList = []
      successLoopCnt = 0;
    }
  }

  topMenu.submitIt('KOR');
  await sleep(time * 1000);
} while(flag)
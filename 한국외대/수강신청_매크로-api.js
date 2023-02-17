const BASE_URL = "http://vsugang4.hufs.ac.kr:8080/sugang/jsp/d_sugang/d_Sugang_SaveDel.jsp";
const TASK_TYPE = Object.freeze({
    SAVE: "save",   // 수강신청
    DEL: "del"      // 수강철회
});
const CLASS_TYPE = Object.freeze({
    MAJOR: "10",    // 전공
    COMMON: "40"    // 공통
});
const CLASS_DETAIL_TYPE = Object.freeze({
    REQUIRED_MAJOR: "11",   // 전필
    ELECTIVE_MAJOR: "12",   // 전선
    REQUIRED_COMMON: "31",  // 공필
    ELECTIVE_COMMON: "31",  // 공선
});
const DEPARTMENT = Object.freeze({
    KOR_ENG: "85",  // 한영과
    COMMON: "공통"   // 공통
});
const YES_OR_NO = Object.freeze({
    YES: "1",
    NO: "0"
})

const TASKS = [
    {
        // 수강 신청
        TYPE: TASK_TYPE.SAVE,
        // 학수코드입력
        CODE: "학수코드_입력",
        // 전공/공통 선택
        CLASS_TYPE: CLASS_TYPE.MAJOR,
        // 전필/전선/공필/공선 선택
        CLASS_DETAIL_TYPE: CLASS_DETAIL_TYPE.ELECTIVE_MAJOR,
        // 재수강 여부
        RETRY: YES_OR_NO.NO,
        // 학점
        CREDIT: "학점_입력",
        // 학년
        GRADE: "학년_입력",
        // 선수 여부
        PREREQUISITE: YES_OR_NO.NO,
    },
    {
        // 수강 철회
        TYPE: TASK_TYPE.DEL,
        // 학수코드입력
        CODE: "학수코드_입력",
    }
]


function makeRequest(task) {
    const params = {
        org_sect: "D",
        subjt_no: "1",
        emp_no: "",
    }
    if (task.TYPE) params.flag = task.TYPE;
    if (task.CODE) params.lssn_cd = task.CODE;
    if (task.CLASS_TYPE) params.isu_code = task.CLASS_TYPE;
    if (task.CLASS_DETAIL_TYPE) params.isu_sect = task.CLASS_DETAIL_TYPE;
    if (task.RETRY) params.jea_su = task.RETRY;
    if (task.CREDIT) params.hakjm = task.CREDIT;
    if (task.GRADE) params.grade = task.GRADE;
    if (task.PREREQUISITE) params.sun_su = task.PREREQUISITE;

    return `${BASE_URL}?${new URLSearchParams(params)}`;
}

async function mock(uri) {
    console.log(uri);
}

async function main() {
    const results = await Promise.all(
        TASKS.map(
            _task => fetch(makeRequest(_task))
        )
    );

    for (let _idx = 0; _idx < results.length; _idx++) {
        const _result = results[_idx];
        const _task = TASKS[_idx];

        const response = await _result.text();

        let message = `${_task.CODE}의 `
        if (_task.TYPE == TASK_TYPE.SAVE) {
            message += `수강 신청을 ${response.includes("저장완료") ? "성공" : "실패"} 했습니다.`
        } else if (_task.TYPE == TASK_TYPE.DEL) {
            message += `수강 철회를 ${response.includes("삭제완료") ? "성공" : "실패"} 했습니다.`
        } else {
            message += "알 수 없는 에러 발생 !"
            console.error(response);
        }

        console.log(message);
        console.log("===============================================")  
    }
}

main();
// Angular
// 추가적인 *ngIf의 존재를 알고 있어야 한다.
<div *ngIf="condition">condition 값이 true일 때 렌더링할 컨텐츠</div>

// 리액트
// 자바스크립트 문법 친화적이며, null이 아무것도 렌더링하지 않는다는 점,
// 자바스크립트 문법을 {}로 감싸야 한다는 사실만 알면 된다.
// 무엇보다 JSX는 리액트 외에서도 사용할 수 있다.
{condition ? <div>condition 값이 true일 때 렌더링할 컨텐츠</div> : null}
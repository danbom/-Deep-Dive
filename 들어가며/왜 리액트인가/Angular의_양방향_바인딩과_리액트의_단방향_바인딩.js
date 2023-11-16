// Angular의 경우 input의 입력으로 name이 변경되거나,
// AppComponent 클래스 내부에서 직접 name을 변경할 수 있다.
// name이 변경된 이유를 알고 싶다면 template이나 클래스 내부에서
// name을 변경하는 곳을 다 찾아봐야 한다.
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: ` <input type="text" [(ngModel)]="name" />`,
})
export class AppComponent {
    name = '';
}
// 리액트의 경우 name이 변경되는 경우는 setName이 호출될 때뿐이다.
// name이 변경된 이유를 찾고 싶다면 setName을 호출하는 곳을 찾으면 된다.
function App() {
    const [name, setName] = useState('');

    function onChange(e) {
        setName(e.target.value);
    }

    return <input type="text" value={name} onChange={onChange} />;
}
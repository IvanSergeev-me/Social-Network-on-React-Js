Изучение React JS.

1. Create React App - что нужно сделать чтобы создать приложение на Реакте?
	npx create-react-app my-app
	cd my-app
	npm start
2. npm install - установит модули, которые прописаны в depencies (зависимостях) файла package.json
3. npm start - запустит сервер
4. Вся html - разметка возвращается функцией App, которая находится в файле App.js. Такая функция, которая возвращает разметку
называется компонентой.
5. Синтаксис: Все приложение должно быть обернуто одним тегом, то есть необходимо заключить все
приложение в один тег в функции App.
Следует учесть что существуют множества зарезервированных слов. Пример: так как class - зарезервированное слово,
нужно использовать className, так же нельзя в именах классов писать дефис "-"
6. Важен модульный подход! Надо импортировать модули разметки и css модули.
Чтобы разбить код на модули надо создать .jsx  файл, экспортирующий разметку с помощью export и в него подвязать(импортировать)
сам реакт и .module.css файл, как объект. Например: import s from 'Header.module.css'. Тогда, чтобы применить класс из css,
надо использовать следующую конструкцию: {s.ImyaClassa}
7. Чтобы создать переход по ссылкам внутри приложения (маршрутизацию) необходимо сначала импортировать библиотеку
react-router-dom с помощью npm install с флагом -save, чтобы изменения записались в package.json. Затем сделать
import {BrowserRouter} from "react-router-dom"; и обернуть в тег <BrowserRouter/> все приложение. Так же надо
импортировать{Route} from "react-router-dom" и использовать следующую конструкицю для маршрутизации:
<Route path="/Profile" component={Profile}/>. То есть, когда адрес страницы будет включать в себя /Profile, <Route/> отобразит
компонент с именем Profile (Не забыть импортировать и его тоже!)
Чтобы страница не обновлялась при нажатии на ссылки надо использовать тег <NavLink to="">, который надо импортировать.
8. Необходимо передавать информацию через компоненту, для этого существует props - Это объект, содержащий информацию. Он передается
по умолчанию, но он пустой. Чтобы передать информацию через проп надо использовать конструкцию вида, например:
 <Post name='' time='' avatar='' picture='' content=''/>
 Чтобы получить информацию надо обратиться к объекту: 
 const Post = (props) =>{
	 return(
		<div className={s.post_content}>
           {props.content}
        </div>
	 );
 };
9. Надо разделять BLL(business logic layer) и UI. Массивы данных для пропсов можно хранить в массивах
BLL - прослойка, в которой хранятся данные. Пример реализации BLL - Redux
10. Для больших массивов данных можно использовать функцию map, чтобы преобразовать данные в компоненты.
Пример: 
let postContent = [
        {name:"Канеки Кен",time:"20 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"",content:"Я- Гуль"},
        {name:"Канеки Кен",time:"21 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"",content:"Лелелелт ми дай"},
        {name:"Канеки Кен",time:"22 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"",content:"Айм э пойсон рейн ви вонт вулд сурвайв"},
    ];
    let posts_arr = postContent.map(
        post_object =>  <Post name={post_object.name} time={post_object.time} avatar={post_object.avatar} picture={post_object.picture} content={post_object.content}/>
    );
11. Получить ссылку на элемент можно с помощью тега ref, установленного на искомом элементе. В ref передаем переменную , которой
приравниваем значение React.createRef(); Получить значение с элемента можно вызвав метод current у заданной переменной. current вернет сам элемент, поэтому
надо вызвать current.value
12. REDUX - реализация архитектуры FLUX .

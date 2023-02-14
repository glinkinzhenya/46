// Вверху страницы находится инпут и кнопка.Пользователь может ввести туда username любого пользователя гитхаб.
// Когда пользователь ввел логин, он может нажать на кнопку "Найти".В этот момент приложение должно отправить
// запрос на API Github и получить информацию о пользователе

// Данные для пользователя берем из запроса https://api.github.com/users/{{login}} , где логин - это логин выбраного
// пользователя.
//     Н - р для пользователя vladimirkr url будет https://api.github.com/users/vladimirkr
// После получения данных нужно показать аватар пользователя(свойство avatar_url), количество репозиториев
//     (свойство public_repos), количество фоловеров(свойство followers) и количество наблюдаемых(свойство following)

// Если такого юзернейма не существует гитхаб вернет ошибку(404).Попробуйте обработать ее в.catch


const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", (e) => {
    e.preventDefault();
    controller(`https://api.github.com/users/${input.value}`);
})

async function controller(action) {
    try {
        const response = await fetch(action);
		if(response.ok) {
			const data = await response.json();
            console.log(data.avatar_url);
            console.log(data.public_repos);
            console.log(data.followers);
            console.log(data.following);
		} else {
            throw new Error(response.status)
		}
    } catch (err) {
        console.log(err);
    }
}
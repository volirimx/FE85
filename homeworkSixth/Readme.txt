Данные нужно получить с этого эндпоинта:
https://studapi.teachmeskills.by/blog/posts/1/

вместо единицы можно вставить 2 и 3.
Вам не нужно делать запрос, так как мы еще это не проходили. 
Вы просто должны вставить эту ссылку в браузер и он выдаст вам объект. Вы копируете его и вставляйте в массив(константу, которую вы захардкодили)

пример:
const posts = [
    {
        "id": 1,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
        "text": "фыв",
        "date": "2021-10-06",
        "lesson_num": 123,
        "title": "фывфывфыв",
        "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
        "author": 7
    }
]

и так с тремя объектами
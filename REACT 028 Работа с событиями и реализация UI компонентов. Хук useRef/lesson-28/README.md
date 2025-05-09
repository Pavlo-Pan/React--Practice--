### Lesson 28

**useRef**

**Хук useRef - это инструмент в React, который позволяет создавать "ссылки" на DOM-элементы или другие значения в функциональных компонентах.**

Основные концепции:
1. Создание ссылки: При помощи хука useRef можно создать переменную, которая будет содержать ссылку на DOM-элемент.
2. Доступ к DOM-элементам: После создания ссылки можно обращаться к DOM-элементам напрямую без использования селекторов или обхода компонентов.
3. Сохранение мутируемых значений: В дополнение к DOM-элементам, useRef можно использовать для сохранения мутируемых значений, которые должны сохраняться между рендерами компонента.
4. Не вызывает повторных рендеров: Изменение значения ref.current не вызывает повторный рендер компонента, в отличие от изменения состояния с помощью useState.
5. Применение в побочных эффектах: Часто useRef используется вместе с хуками useEffect для сохранения ссылок на элементы и работы с ними внутри побочных эффектов.


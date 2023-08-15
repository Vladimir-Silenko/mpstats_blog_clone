<template>
    <ul class="dropdown">
        <li class="dropdown_list-item">Обучение</li>
        <li class="dropdown_list-item">Заказать SEO</li>
        <li class="dropdown_list-item">Бонусы от партнеров</li>
        <li class="dropdown_list-item">Сообщество</li>
        <li class="dropdown_list-item">Партнерство</li>
        <li class="dropdown_list-item">Вакансии</li>
    </ul>
</template>

<script>
export default {
    name: 'my-dropdown',
}
</script>

<style>
.dropdown {
    display: none;
    position: absolute;
    top: 33px;
    background-color: #fff;
    border-radius: 4px;
    min-width: 210px;
    z-index: 1;
    padding: 12px;
    -webkit-box-shadow: -4px 0px 17px 0px rgba(11, 11, 11, 0.1);
    -moz-box-shadow: -4px 0px 17px 0px rgba(11, 11, 11, 0.1);
    box-shadow: -4px 0px 17px 0px rgba(11, 11, 11, 0.1);
    list-style-type: none;
}
.dropdown::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 12px;
    top: -10px;
    right: 33%;
    background: #fff;
    -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    -webkit-box-shadow: -4px 0px 17px 0px rgba(11, 11, 11, 0.1);
    -moz-box-shadow: -4px 0px 17px 0px rgba(11, 11, 11, 0.1);
    box-shadow: -4px 0px 17px 0px rgba(11, 11, 11, 0.1);
}
.dropdown_list-item {
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3f4651;
    cursor: pointer;
}
.dropdown_list-item:hover {
    opacity: 0.5;
}
</style>

<template>
    <footer>
        <div class="upper">
            <div class="left">
                <div class="logo">
                    <a href="">
                        <img
                            class="mp_logo"
                            src="https://blog.mpstats.io/wp-content/themes/mp/img/logo-green-white.svg"
                            alt=""
                    /></a>
                    <a href="">
                        <img
                            class="sk_logo"
                            src="https://blog.mpstats.io/wp-content/themes/mp/img/sk.png"
                            alt="" />
                    </a>
                </div>
                <p>
                    Система мониторинга цен, продавцов и товаров на российских маркетплейсах. Всегда
                    свежие и полные данные на расстоянии одного клика
                </p>
                <div class="title">Контакты</div>
                <div class="adress grey">
                    195257, г. Санкт-Петербург, Гражданский пр., д. 100 стр. 1, пом. 8 +7 (969)
                    999-17-28 info@mpstats.io pr@mpstats.io
                </div>
                <div class="socials">
                    <a
                        v-for="social in socials"
                        :key="social.alt"
                        :href="social.linkTo"
                        class="social-link">
                        <img :src="social.src" :alt="social.alt"
                    /></a>
                </div>
                <div class="title">Безналичный расчет для Юрлиц и ИП</div>
                <div class="payments">
                    <div v-for="method in payments" :key="method.alt" class="">
                        <img :src="method.src" :alt="method.alt" />
                    </div>
                </div>
                <p style="color: rgb(114, 120, 128)">
                    ПО распространяется в виде интернет-сервиса, специальные действия по установке
                    ПО на стороне пользователя не требуются
                </p>
            </div>
            <div class="right">
                <div class="bottom-menu">
                    <div class="title">Инструменты</div>

                    <ul>
                        <li>
                            <a href="https://mpstats.io/wb/top-sellers">Рейтинг продавцов</a>
                        </li>
                        <li>
                            <a href="https://mpstats.io/wb/top-brands">Рейтинг брендов</a>
                        </li>
                        <li>
                            <a href="https://mpstats.io/integrations">API документация</a>
                        </li>
                        <li>
                            <a href="https://mpstats.io/chrome-plugin">Плагин для Google Chrome</a>
                        </li>
                        <li>
                            <a href="https://mpstats.io/calculation">Калькуляторы</a>
                        </li>
                        <li>
                            <a href="https://wiki.mpstats.io/">База знаний</a>
                        </li>
                    </ul>
                </div>
                <div class="bottom-menu">
                    <div class="title">Компания</div>

                    <ul>
                        <li>
                            <a href="https://mpstats.io/partner">Партнерская программа</a>
                        </li>
                        <li>
                            <a href="https://mpstats.io/tarif">Тарифы</a>
                        </li>
                        <li>
                            <a href="https://mpstats.io/bots">Роботы MPSTATS</a>
                        </li>
                        <li>
                            <a href="https://mpstats.io/vacancy">Вакансии</a>
                        </li>
                        <li>
                            <a href="https://mpstats.io/sout">СОУТ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="lower">
            <div class="lower__wrapper">
                <div class="lower__links">
                    <a href="https://mpstats.io/legal">Пользовательское соглашение</a>
                    <a href="https://mpstats.io/policy">Политика оплаты и возврата</a>
                    <a href="https://mpstats.io/privacy">Политика конфиденциальности</a>
                </div>

                <div class="lower__copyright">
                    C <span class="text-red">❤</span> из Санкт-Петербурга
                    <span class="text-mp">© 2023 ООО «МПСТАТС»</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            socials: [
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/youtube_f.png',
                    alt: 'youtube',
                    linkTo: '',
                },
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/tg_f.png',
                    alt: 'tg',
                    linkTo: '',
                },
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/vk_f.png',
                    alt: 'vk',
                    linkTo: '',
                },
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/dzen_f.png',
                    alt: 'dzen',
                    linkTo: '',
                },
            ],
            payments: [
                { src: 'https://blog.mpstats.io/wp-content/themes/mp/img/visa.svg', alt: 'visa' },
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/mastercard.svg',
                    alt: 'mastercard',
                },
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/sberbank.svg',
                    alt: 'sber',
                },
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/iomoney.svg',
                    alt: 'u-money',
                },
                { src: 'https://blog.mpstats.io/wp-content/themes/mp/img/mir.svg', alt: 'mir' },
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/google-pay.svg',
                    alt: 'g-pay',
                },
                {
                    src: 'https://blog.mpstats.io/wp-content/themes/mp/img/samsung-pay.svg',
                    alt: 'samsung-pay',
                },
            ],
        }
    },
}
</script>

<style scoped lang="scss">
@mixin backLine {
    position: absolute;
    z-index: 10;
    width: 80%;
    height: 1px;
    background: #606a7a;
}
footer {
    color: white;

    position: relative;
    background: #3f4651;
    overflow: hidden;
    width: 100%;
    z-index: 1;
}
.upper {
    padding: 64px 80px;
    display: flex;
    align-items: flex-start;
    position: relative;
    width: 100%;
    clear: both;
    z-index: 2;
    .title {
        color: #fff;
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
    }
    .left {
        grid-column: 1;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p,
        .logo {
            margin-bottom: 16px;
        }
        .adress {
            margin-bottom: 16px;
        }
        .socials {
            display: flex;
            column-gap: 16px;
            margin-bottom: 32px;
        }
        .payments {
            display: flex;
            column-gap: 16px;
            margin-bottom: 16px;
        }
        .sk_logo {
            height: 32px;
            margin-left: 32px;
        }
    }
    .grey {
        color: #c3c7cb;
    }
    .right {
        display: flex;
        justify-content: space-evenly;
        align-items: stretch;
        padding-left: 32px;
        width: 50%;
        ul {
            list-style-type: none;
            line-height: 180%;
            li {
                margin: 0;
            }
            a {
                color: #c3c7cb;
            }
        }
    }
}
.lower {
    width: 100%;
    background: #2d3440;
    color: #8b9097;
    padding: 24px 0;
    font-family: Fira Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.0025em;
    &__wrapper {
        padding: 0 80px;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    &__links {
        display: flex;
        column-gap: 16px;
        a {
            color: #8b9097;
            font-size: 12px;
        }
    }
    &__copyright {
        display: flex;
        justify-content: space-between;
        .text-red {
            color: red;
            margin: 0 5px;
        }
        .text-mp {
            margin-left: 40px;
            letter-spacing: 0.0025em;
        }
    }
}
</style>

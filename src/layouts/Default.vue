<template>
    <div>
    <div class="layout">
        <div class="logo">
            <div class="title">
                <g-link class="nav__link" to="/">
                    Турбаза <span class="minutka">"Минутка"</span>
                </g-link>
            </div>
            <!--div class="working">Работаем круглосуточно</div-->
            <div class="russia">Россия, Башкортостан</div>
            <div class="novoabzakovo">с. Новоабзаково</div>
            <div class="hotline">Горячая линия:</div>
            <div class="phone"><a href="tel:+79088288499">8 908 828-84-99</a></div>
            <div class="vk">
                <a href="https://vk.com/abzakovominutka">
                    <img src="~@/assets/vk.svg">
                    <span>/abzakovominutka</span>
                </a>
            </div>
        </div>



        <div id="hamburger" class="hamburglar" :class="{'is-closed': !isMenuOpened, 'is-open': isMenuOpened}" @click="toggle">
            <div class="burger-icon">
                <div class="burger-container">
                    <span class="burger-bun-top"></span>
                    <span class="burger-filling"></span>
                    <span class="burger-bun-bot"></span>
                </div>
            </div>
            <div class="burger-ring">
                <svg class="svg-ring">
                    <path class="path" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4" d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />
                </svg>
            </div>

            <svg width="0" height="0">
                <mask id="mask">
                    <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" stroke-miterlimit="10" stroke-width="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
               </mask>
            </svg>
            <div class="path-burger">
                <div class="animate-path">
                    <div class="path-rotation"></div>
                </div>
            </div>
        </div>



        <header class="header" :class="{'hideMenu': !isMenuOpened}">
            <!--g-link to="/">{{ $static.metadata.siteName }}</g-link-->  
            <nav class="nav" style="white-space: normal;">
                <ul>
                    <li>
                        <g-link class="nav__link" to="/">
                            Начало
                        </g-link>
                    </li>
                    <li>
                        <g-link class="nav__link" to="/contacts/">
                            Контакты
                        </g-link>
                    </li>
                    <li>
                        <g-link class="nav__link" to="/map/">
                            Навигация
                        </g-link>
                    </li>
                    <li>
                        <g-link class="nav__link" to="/price/">
                            Цены и услуги
                        </g-link>
                    </li>
                    <!--li>
                        <g-link class="nav__link" to="/rules/">
                            Правила проживания
                        </g-link>
                    </li-->
                    <li>
                        <g-link class="nav__link" to="/photos/">
                            Фото-галерея
                        </g-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    <slot/>
    </div>
</template>

<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>

<script>
    export default{
        data() {
            return{
                isMenuOpened: false,
            };
        },
        methods: {
            toggle(){
                console.log('test');
                this.isMenuOpened=!this.isMenuOpened;
            }
        }
    }
</script>

<style lang="scss">
    @import '~/assets/burger.scss';
    .hamburglar{
        z-index: 100;
        display: none;
    }
    @media screen and (max-width: 768px) {
        header.header{
            display: block;
            background: #fff;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-image: url(~@/assets/images/background.jpg);
            background-size: cover;
            background-position: top center;
            background-repeat: no-repeat;
            background-attachment: fixed;            
            ul{
                padding-left: 15px;
                margin-left: 0;
                list-style-type: none;
                li{
                    display: block;
                    &:before{
                        content: '—';
                    }
                    a{
                        padding: 10px;
                    }
                }
                .active--exact{
                    border-bottom: none;
                    background: none !important;
                }
            }
        }

        .hideMenu{
            display: none !important;
        }
        .hamburglar{
            display: block;
            position: fixed;
            right: 5px;
            top: 5px;
        }
    }



.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        background: rgba(255,255,255,.85);
        margin-top: 1rem;
    }

    a {
        text-decoration: none;
        display: inline-block;
    }
    ul{
        padding-left: 0;
        margin: 0;
        li {
            display: inline;
            padding: 0;
            &:before{
                content: none;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .header {
        a{
            padding: 16px 6px;            
            transition: background 1.5s ease;
            &:hover{
                color: #0e0e0e;
                background: #a8cefd;
                transition: background 1.5s ease;
            }
        }
        .active--exact {
            /*border-bottom: 3px solid #004679;*/
            background: #c0dcff;
        }
    }
}

@media screen and (max-width: 768px) {
}

</style>
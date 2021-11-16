<template>
         <!-- Header Area Start -->
        <header>
            <!-- Header Top Start -->
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <!-- Header Top left Start -->
                        <div class="col-lg-4 col-md-12 d-center">
                            <div class="header-top-left">
                                <img src="img/icon/call.png" alt=""> +7(9000) - 741-791
                            </div>
                        </div>
                        <!-- Header Top left End -->

                        <!-- Search Box Start -->
                        <div class="col-lg-4 col-md-6 ml-auto mr-auto">
                            <div class="search-box-view">
                                <form action="http://textileshop/shop/search" method="get">
                                    <input type="text" class="email" placeholder="Поиск ..." name="q">
                                    <button type="submit" class="submit"></button>
                                </form>
                            </div>
                        </div>
                        <!-- Search Box End -->

                        <!-- Header Top Right Start -->
                        <div class="col-lg-4 col-md-12">
                            <div class="header-top-right">

                                <!-- Header-list-menu End -->
                            </div>
                        </div>
                        <!-- Header Top Right End -->
                    </div>
                </div>
                <!-- Container End -->
            </div>
            <!-- Header Top End -->
            <!-- Header Bottom Start -->
            <div class="header-bottom header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-2 col-sm-5 col-5">
                            <div class="logo">
                                <a href="/"><img src="/img/logo/logo.png" alt="logo-image"></a>
                            </div>
                        </div>
                        <!-- Primary Vertical-Menu End -->
                        <!-- Search Box Start -->
                        <div class="col-xl-6 col-lg-7 d-none d-lg-block">
                            <div class="middle-menu pull-right">
                                <nav>
                                    <ul class="middle-menu-list">
                                        <li>
                                            
                                            <router-link to="/" class="fa ">Домой</router-link> 

                                        </li>
                                        <li><router-link to="/about">О Нас</router-link></li>
                                        <li><a href="http://textileshop/shop/index">Товары<i class="fa"></i></a></li>


                                        <li><a href="/site/contact">Контакты</a></li>
                                        <li>
                                            <a href="/cabinet">
                                                <i class="fa fa-key" aria-hidden="true"></i> Кабинет <br/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/auth/logout">
                                                <i class="fa fa-sign-out" aria-hidden="true"></i> LogOut <br/>
                                            </a>
                                        </li>


                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Search Box End -->
                        <!-- Cartt Box Start -->
                        <div class="col-lg-3 col-sm-7 col-7">
                            <div class="cart-box text-right">
                                <ul id="cartBox">

                                    <li><a href="/cart/index"><i class="fa fa-shopping-basket"></i><span class="cart-counter">0</span></a>
                                        <ul class="ht-dropdown main-cart-box">
                                            <li>



                                                <!-- Cart Footer Inner Start -->
                                                <div class="cart-footer fix">
                                                    <h5>итого :<span class="f-right">0р.</span></h5>
                                                    <div class="cart-actions">
                                                        <a class="checkout" href="/cart/index">Корзина</a>
                                                    </div>
                                                </div>
                                                <!-- Cart Footer Inner End -->





                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Cartt Box End -->
                        <div class="col-sm-12 d-lg-none">
                            <div class="mobile-menu">
                                <nav>
                                    <ul>
                                        <li><router-link to="/">Home</router-link></li>
                                        <li><a href="/shop/index">Товары</a></li>


                                      
                                        <li><router-link to="/about">О Нас</router-link></li>
                                        <li><a href="contact.html">Контакты</a></li>

                                        <li>

                                            <a href="/auth/logout">
                                                <i class="fa fa-sign-out" aria-hidden="true"></i> LogOut <br/>
                                            </a>

                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Mobile Menu  End -->
                    </div>
                    <!-- Row End -->
                </div>
                <!-- Container End -->
            </div>
            <!-- Header Bottom End -->
        </header>
        <!-- Header Area End -->
</template>

<script>
export default{
    data(){
        return{

        }
    }
}


</script>

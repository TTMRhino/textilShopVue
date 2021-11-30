<template>
  <!-- Shop Page Start -->
  <div class="main-shop-page pb-60">
    <div class="container">
      <!-- Row End -->
      <div class="row">
        <!-- Sidebar Shopping Option Start -->
        <div class="col-lg-3 order-2">
          <div class="sidebar white-bg">
            <div class="single-sidebar">
              <div class="group-title">
                <h2>categories</h2>
              </div>
              <ul>
                <ul class="middle-menu-list menuSideBar">
                  <li>
                    <a href="/shop/1">
                      Розница<i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="ht-dropdown dropdown-style-one"></ul>
                  </li>
                </ul>
              </ul>
              <ul class="middle-menu-list menuSideBar">
                <li>
                  <a href="/shop/2"> Опт<i class="fa fa-angle-down"></i></a>
                  <ul class="ht-dropdown dropdown-style-one"></ul>
                </li>
              </ul>
            </div>

            <!-- Single Banner Start -->
            <div class="single-sidebar single-banner zoom pt-20">
              <a href="#" class="hidden-sm"
                ><img src="/img/banner/8.jpg" alt="slider-banner"
              /></a>
              <a href="#" class="visible-sm"
                ><img src="/img/banner/6.jpg" alt="slider-banner"
              /></a>
            </div>
            <!-- Single Banner End -->
          </div>
        </div>
        <!-- Sidebar Shopping Option End -->
        <!-- Product Categorie List Start -->
        <div class="col-lg-9 order-lg-2">
          <!-- Grid & List View Start -->
          <div class="grid-list-top border-default universal-padding fix mb-30">
            <div class="grid-list-view f-left">
              <ul class="list-inline nav">
                <li>
                  <a data-toggle="tab" href="#grid-view"
                    ><i class="fa fa-th"></i
                  ></a>
                </li>
                <li>
                  <a class="active" data-toggle="tab" href="#list-view"
                    ><i class="fa fa-list-ul"></i
                  ></a>
                </li>
                <li><span class="grid-item-list"> товары 1-12 of 13</span></li>
              </ul>
            </div>
            <!-- Toolbar Short Area Start -->
           <!-- SORT -->
                            <div class="main-toolbar-sorter f-right">
                                
                                <sort-panel></sort-panel>
                            </div>
                            <!-- SORT End -->
            <!-- Toolbar Short Area End -->
          </div>

          <!-- Grid & List View End -->
          <div class="main-categorie">
            <!-- Grid & List Main Area End -->
            <div class="tab-content fix">
              <div id="grid-view" class="tab-pane">
                <div class="row">
                  <!-- START FOREACH  ITEMS -->
                  <!-- Single Product Start -->
                  <div
                    class="col-lg-4 col-sm-6"
                    v-for="item in items"
                    :key="item.id"
                  >
                    <div class="single-product">
                      <!-- Product Image Start -->
                      <div class="pro-img">
                        <router-link
                          :to="{ path: 'detail', params: { id: item.id } }"
                        >
                          <img
                            class="primary-img"
                            :src="'/img/products/l' + item.vendor + '.jpg'"
                            alt="#"
                          />
                        </router-link>
                      </div>
                      <!-- Product Image End -->
                      <!-- Product Content Start -->
                      <div class="pro-content">
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <h4>
                          <a
                            href="<?= Url::to(['product/view', 'vendor' => $item->vendor]) ?>"
                          >
                            {{ item.item }}
                          </a>
                          
                        </h4>
                        <p>
                          <span class="price">{{ item.price }} р.</span>
                          <del
                            class="prev-price"
                            v-if="item.old_price > item.price"
                          >
                            {{ item.old_price }}р.
                          </del>
                        </p>

                        <div class="alert alert-warning" role="alert">
                          Под заказ!
                        </div>

                        <div class="pro-actions">
                          <div class="actions-secondary">
                            <!--<a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>-->
                            <a
                              class="add-cart add-to-cart"
                              href="#"
                              data-id="#"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              @click="addItemToCart(item)"
                              >В корзину</a
                            >
                          </div>
                        </div>
                      </div>
                      <!-- Product Content End -->
                    </div>
                  </div>
                  <!-- Single Product End -->

                  <!-- <div class="col-lg-4 col-sm-6">
                                            <div class="single-product">
                                               
                                                <div class="pro-img">
                                                    <a href="product.html">
                                                        <img class="primary-img" src="img/products/3.jpg" alt="single-product">
                                                        <img class="secondary-img" src="img/products/4.jpg" alt="single-product">
                                                    </a>
                                                </div>
                                               
                                                <div class="pro-content">
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>                                
                                                    <h4><a href="product.html">Products Name Here</a></h4>
                                                    <p><span class="price">$45.00</span><del class="prev-price">$50.00</del></p>
                                                    <div class="pro-actions">
                                                        <div class="actions-secondary">
                                                            <a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>
                                                            <a class="add-cart" href="cart.html" data-toggle="tooltip" title="Add to Cart">Add To Cart</a>
                                                            <a href="compare.html" data-toggle="tooltip" title="Add to Compare"><i class="fa fa-signal"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <span class="sticker-new">-20%</span>
                                            </div>
                                        </div>-->
                </div>
              </div>

              <!-- LIST VIEW  -->
              <!-- #grid view End -->

              <div v-if="loading" class="media">
                <div class="media-body">
                  <HourGlass
                    class="mt-0"
                    style="
                      text-align: center;
                      margin-left: auto;
                      margin-right: auto;
                      color: red;
                    "
                  ></HourGlass>
                </div>
              </div>

              <div id="list-view" class="tab-pane active">
                <div
                  class="single-product"
                  v-for="item in items"
                  :key="item.id"
                >
                  <!-- Product Image Start -->
                  <div class="pro-img">
                    <router-link
                      :to="{
                        name: 'detail',
                        params: { id: item.id },
                        query: {
                          img: '/img/products/l' + item.vendor + '.jpg',
                        },
                      }"
                    >
                      <img
                        class="primary-img"
                        :src="'/img/products/l' + item.vendor + '.jpg'"
                        alt="#"
                      />
                      <!--<img class="secondary-img" src="/img/products/2.jpg" alt="">-->
                    </router-link>
                  </div>
                  <!-- Product Image End -->
                  <!-- Product Content Start -->
                  <div class="pro-content">
                    <div class="product-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <h4>
                      <router-link
                        :to="{
                          name: 'detail',
                          params: { id: item.id },
                          query: {
                            img: '/img/products/l' + item.vendor + '.jpg',
                          },
                        }"
                      >
                        {{ item.item }}
                      </router-link>
                    </h4>
                    <p>
                      <span class="price"> {{ item.price }} р.</span>

                      <del
                        class="prev-price"
                        v-if="item.old_price > item.price"
                      >
                        {{ item.old_price }}р.
                      </del>
                    </p>
                    <p>
                      {{ item.description }}
                    </p>

                    <div
                      class="alert alert-warning"
                      role="alert"
                      style="width: 160px; text-align: center"
                    >
                      Под заказ!
                    </div>

                    <div class="pro-actions">
                      <div class="actions-secondary">
                        <!--<a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>-->
                        <a
                          class="add-cart add-to-cart"
                          href="#"
                          data-id="#"
                          data-toggle="tooltip"
                          title="Add to Cart"
                          @click="addItemToCart(item)"
                        >
                          В корзину</a>
                      </div>
                    </div>
                  </div>
                  <!-- Product Content End -->
                </div>

                <!-- Single Product Start -->

                <!-- Single Product Start -->
                <!--<div class="single-product">
                                        
                                        <div class="pro-img">
                                            <a href="product.html">
                                                <img class="primary-img" src="img/products/3.jpg" alt="single-product">
                                                <img class="secondary-img" src="img/products/4.jpg" alt="single-product">
                                            </a>
                                        </div>
                                        <
                                        <div class="pro-content">
                                            <div class="product-rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>                                
                                            <h4><a href="product.html">Products Name Here</a></h4>
                                            <p><span class="price">$30.00</span><del class="prev-price">$32.00</del></p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati velit, similique voluptas doloribus assumenda quis libero animi cumque dignissimos quisquam, quaerat ea laboriosam incidunt ullam.</p>
                                            <div class="pro-actions">
                                                <div class="actions-secondary">
                                                    <a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>
                                                    <a class="add-cart" href="cart.html" data-toggle="tooltip" title="Add to Cart">Add To Cart</a>
                                                    <a href="compare.html" data-toggle="tooltip" title="Add to Compare"><i class="fa fa-signal"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <span class="sticker-new">-30%</span>
                                    </div>-->
              </div>
              <!-- #list view End -->
            </div>
            <!-- Grid & List Main Area End -->
          </div>

          <!--Breadcrumb and Page Show Start -->
          <div class="pagination-box fix">
            <ul class="blog-pagination">
              <!-- <li><a href="#">1</a></li>
                                <li class="active"><a href="#">2</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i></a></li>-->
            </ul>

            <div class="toolbar-sorter-footer">
              <label>Показать:</label>
              <select class="sorter" name="sorter">
                <option value="Position" selected="selected">12</option>
                <option value="Product Name">15</option>
                <option value="Price">30</option>
              </select>
              <span>страниц</span>
            </div>
          </div>
          <!--Breadcrumb and Page Show End -->
        </div>
        <!-- product Categorie List End -->
      </div>
      <!-- Row End -->
    </div>
    <!-- Container End -->
  </div>
</template>

<script>
import { HourGlass } from "vue-loading-spinner";
import SortPanel from "./components/SortPanel.vue"
export default {
  components:{
    'sort-panel':SortPanel,
     HourGlass
  },
  date() {
    return {};
  },
  methods: {
    addItemToCart(item) {
      this.$store.dispatch("addToCart", { item });
    },
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },

  created() {
    //забираем с сервера группы(все)
    // this.$store.dispatch("asyncGetMenuGroup");

    //обращаемся в store для вытягиваия items через API
    this.$store.dispatch("asyncGetItems");
  },
};
</script>

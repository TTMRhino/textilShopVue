<template>
  <!-- Cart Main Area Start -->
  <div class="cart-main-area pb-80 pb-sm-50">
    <div class="container">
      <h2 class="text-capitalize sub-heading">Корзина</h2>
      <div class="row">
        <div class="col-md-12">
          <!-- Form Start -->
          <form action="#" id="table">
            <!-- Table Content Start -->
            <div class="table-content table-responsive mb-50">
              <div class="cart-table">
                <div class="overlay">
                  <i class="fa fa-refresh fa-spin"></i>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Фото</th>
                      <th class="product-name">Товар</th>
                      <th class="product-price">Цена</th>
                      <th class="product-quantity">Количество</th>
                      <th class="product-subtotal">Итог</th>
                      <th class="product-remove">Удалить</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="product-thumbnail">
                        <a
                          href="/img/products/lsf000001.jpg"
                          data-fancybox="images"
                        >
                          <img
                            src="/img/products/lsf000001.jpg"
                            alt="cart-image"
                          />
                        </a>
                      </td>
                      <td class="product-name">
                        <a href="/product/view?vendor=sf000001">
                          Фатин Kristal Tul белый 1 п/м (1*3м)
                        </a>
                      </td>
                      <td class="product-price">
                        <span class="amount">150р.</span>
                      </td>

                      <!-- Add quantity -->
                      <td class="product-quantity">
                        <div
                          class="alert alert-warning"
                          role="alert"
                          style="text-align: center; padding: 0"
                        >
                          Под заказ!
                        </div>

                        <button
                          type="button"
                          data-qty="-1"
                          data-id="1"
                          class="btn btn-light minus"
                        >
                          -
                        </button>
                        <input
                          id="count1"
                          disabled
                          data-id="1"
                          type="text"
                          value="1"
                        />
                        <button
                          type="button"
                          class="btn btn-light plus"
                          data-qty="1"
                          data-id="1"
                        >
                          +
                        </button>
                      </td>

                      <td class="product-subtotal">150</td>
                      <td class="product-remove">
                        <a href="/cart/del-item?id=1" class="delete" data-id="1"
                          ><i class="fa fa-times" aria-hidden="true"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Table Content Start -->
            <div class="row">
              <!-- Cart Button Start -->
              <div class="col-lg-8 col-md-7"></div>
              <!-- Cart Button Start -->
              <!-- Cart Totals Start -->
              <div class="col-lg-4 col-md-12">
                <div class="cart_totals">
                  <h2>Итого</h2>
                  <br />
                  <table>
                    <tbody>
                      <!-- <tr class="cart-subtotal">
                                                    <th>Подитог:</th>
                                                    <td><span class="amount">$215.00</span></td>
                                                </tr>-->
                      <tr class="order-total">
                        <th>Всего:</th>
                        <td>
                          <strong><span class="amount">150 руб.</span></strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="wc-proceed-to-checkout">
                    <a href="checkout">Оформить заказ</a>
                  </div>
                </div>
              </div>
              <!-- Cart Totals End -->
            </div>
            <!-- Row End -->
          </form>
          <!-- Form End -->
        </div>
      </div>
      <!-- Row End -->
    </div>
  </div>
  <!-- Cart Main Area End -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
    
        <div class="container">
       
        
                <div class="row">
                        <div class="col-lg-12 ">
                                <h1 style="text-align:center;">Личный кабенет</h1>
                        </div>
                </div>

                <div class="row">                        
                        <div class="col-lg-12 ">
                                <ul class="cabinet-list"> 

                                        <li><span>Организация:</span> Рога и копыта </li>
                                        <li><span>Инн:</span> 0000001</li>
                                        <li><span>ОГРН:</span> 3253460099</li>
                                        <li><span>КПП:</span> 34543627</li>
                                        <li><span>Адрес регистрации:</span> аааа 12 вывыв 34</li>
                                        <li><span>Адрес фактически:</span> ппппп 33 аыуваа</li>
                                        <li><span>Расчетный сче:</span> 980001123</li>
                                        <li><span>Корр.счет:</span> 5445000999</li>
                                        <li><span>БИК Банка:</span> 235234623</li>
                                        <li><span>Банк:</span> Альфа Банк Москва</li>                                      
                                
                                </ul>
                        </div>

                        <div class="col-lg-12" style="text-align: center;">

                                                            
                                <a href="#" class="btn btn-lg btn-success" data-toggle="modal" data-target="#cabinetModal">
                                Изменить данные
                                </a>

                                <a href="cabinet/history" class="btn btn-lg btn-secondary" >
                                Исторяи заказов
                                </a>

                                <div class="modal fade" id="cabinetModal" tabindex="-1" role="dialog" aria-labelledby="cabinetModal" aria-hidden="true">
                                        <div class="modal-dialog">
                                                <div class="modal-content">
                                                        <div class="modal-header">
                                                                <h4 class="modal-title" id="myModalLabel">Изменение данных </h4>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                                </button>
                                                        </div>
                                                        <div class="modal-body">
                                                                <!-- Тело модального окна -->                                                                
                                                                <form id="w0" action="/cabinet" method="post">
<input type="hidden" name="_csrf" value="Kl9MDr6hM1MVYJl4LDL9Po4AokQ8449eXf_jkRQ-EYkfPDU49O99OHJS8kxzWcVatlXFdmuh-g8UnpHEVVhfvQ==">                                                                        <div class="container">        
                                                                                <div class="row">
                                                                                        <div class="col-lg-6 ">
                                                                                                <div class="form-group field-organizations-name">
<label class="control-label" for="organizations-name">Огранизация</label>
<input type="text" id="organizations-name" class="form-control" name="Organizations[name]" value="Рога и копыта">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-inn">
<label class="control-label" for="organizations-inn">Инн</label>
<input type="text" id="organizations-inn" class="form-control" name="Organizations[inn]" value="0000001">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-ogrn">
<label class="control-label" for="organizations-ogrn">ОГРН</label>
<input type="text" id="organizations-ogrn" class="form-control" name="Organizations[ogrn]" value="3253460099">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-kpp">
<label class="control-label" for="organizations-kpp">КПП</label>
<input type="text" id="organizations-kpp" class="form-control" name="Organizations[kpp]" value="34543627">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-adres_registr">
<label class="control-label" for="organizations-adres_registr">Адрес регистрации</label>
<input type="text" id="organizations-adres_registr" class="form-control" name="Organizations[adres_registr]" value="аааа 12 вывыв 34">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-adres_fact">
<label class="control-label" for="organizations-adres_fact">Фактический адрес</label>
<input type="text" id="organizations-adres_fact" class="form-control" name="Organizations[adres_fact]" value="ппппп 33 аыуваа">

<p class="help-block help-block-error"></p>
</div>                                                                                        </div>
                                                                                        <div class="col-lg-6 ">
                                                                                                <div class="form-group field-organizations-adres_registr">
<label class="control-label" for="organizations-adres_registr">Адрес регистрации</label>
<input type="text" id="organizations-adres_registr" class="form-control" name="Organizations[adres_registr]" value="аааа 12 вывыв 34">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-pay_account">
<label class="control-label" for="organizations-pay_account">Расчетный счет</label>
<input type="text" id="organizations-pay_account" class="form-control" name="Organizations[pay_account]" value="980001123">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-kor_account">
<label class="control-label" for="organizations-kor_account">Корр.счет</label>
<input type="text" id="organizations-kor_account" class="form-control" name="Organizations[kor_account]" value="5445000999">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-bik_bank">
<label class="control-label" for="organizations-bik_bank">БИК Банка</label>
<input type="text" id="organizations-bik_bank" class="form-control" name="Organizations[bik_bank]" value="235234623">

<p class="help-block help-block-error"></p>
</div>                                                                                                <div class="form-group field-organizations-bank_name">
<label class="control-label" for="organizations-bank_name">Банк</label>
<input type="text" id="organizations-bank_name" class="form-control" name="Organizations[bank_name]" value="Альфа Банк Москва">

<p class="help-block help-block-error"></p>
</div>                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        
                                                                        <div class="modal-footer">
                                                                                <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                                                                                
                                                                                <button type="submit" class="btn btn-primary" name="login-button">Сохранить</button>                                                                        </div>
                                                                        
                                                                </form>                                                        </div>
                                                        
                                                </div>
                                        </div>
                                </div>


                        </div>




                        <div class="col-lg-12" style="text-align: center;">
                                <h1 class="discount">Скидка 5% </h1>
                        </div>
                </div>
        </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
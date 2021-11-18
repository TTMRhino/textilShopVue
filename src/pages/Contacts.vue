<template>
  <div class="container">
    <!-- Contact Email Area Start -->
    <div class="contact-email-area ptb-60">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>Обратная связь</h3>
            <p class="text-capitalize mb-40"></p>

            <form id="w0" class="contact-form"  @submit.prevent="submit">
              <input
                type="hidden"
                name="_csrf"
                value="sLmNH6svTngKews6HBs4Vij14oakCQ_SnjOvHemGzZyI7NQnxB4FJ0MZYkNoU0wlYJij9uc_apnIYJsunPW0-g=="
              />
              <div class="address-wrapper">
                <div class="row">
                  <div class="col-md-12">
                    <div class="address-fname">
                      <div class="form-group field-mailform-name required">
                        <input
                          type="name"
                          id="mailform-name"
                          class="form-control "
                          :class = "{'is-invalid': $v.name.$error}"                         
                          name="MailForm[name]"
                          placeholder="Ваше имя"
                          aria-required="true"
                          v-model="name"
                          @blur="$v.name.$touch()"
                        />
                        <div   v-if = "!$v.name.required"  class="invalid-feedback" >
                          Поле Имя обязательно!
                        </div>
                        <div   v-if = "!$v.name.maxLength"  class="invalid-feedback" >
                          Поле должно быть меньше 25 символов!
                        </div>
                        <div   v-if = "!$v.name.minLength"  class="invalid-feedback" >
                          Поле должно быть болше 3 символов!
                        </div>

                        <div class="help-block"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="address-email">
                      <div class="form-group field-mailform-email required">
                        <input
                          type="email"
                          id="mailform-email"
                          class="form-control"
                          :class = "{'is-invalid': $v.email.$error}"
                          name="MailForm[email]"
                          placeholder="Email"
                          aria-required="true"
                          v-model="email"
                          @blur="$v.email.$touch()"
                        />
                        <div   v-if = "!$v.email.required"  class="invalid-feedback" >
                          Поле email обязательно!
                        </div>
                        <div   v-if = "!$v.email.maxLength"  class="invalid-feedback" >
                          Поле должно быть меньше 25 символов!
                        </div>
                        <div   v-if = "!$v.email.minLength"  class="invalid-feedback" >
                          Поле должно быть болше 5 символов!
                        </div>
                        <div   v-if = "!$v.email.email"  class="invalid-feedback" >
                          Введите корреткный email!
                        </div>

                        <div class="help-block"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="address-web">
                      <div class="form-group field-mailform-phone">
                        <input
                          type="phone"
                          id="mailform-phone"
                          class="form-control"
                          :class = "{'is-invalid': $v.phone.$error}"
                          v-model="phone"
                          @blur="$v.phone.$touch()"
                          name="MailForm[phone]"
                          placeholder="Телефон"
                        />
                        <div   v-if = "!$v.phone.required"  class="invalid-feedback" >
                          Поле обязательно!
                        </div>
                        <div   v-if = "!$v.phone.maxLength"  class="invalid-feedback" >
                          Поле должно быть меньше 15 символов!
                        </div>
                        <div   v-if = "!$v.phone.minLength"  class="invalid-feedback" >
                          Поле должно быть болше 4 символов!
                        </div>

                        <div class="help-block"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="address-subject">
                      <div class="form-group field-mailform-theme required">
                        <input
                          type="theme"
                          id="mailform-theme"
                          class="form-control"
                          :class = "{'is-invalid': $v.subject.$error}"
                          v-model="subject"
                          @blur="$v.subject.$touch()"
                          name="MailForm[theme]"
                          placeholder="Тема"
                          aria-required="true"
                        />
                        <div   v-if = "!$v.subject.required"  class="invalid-feedback" >
                          Поле обязательно!
                        </div>
                        <div   v-if = "!$v.subject.maxLength"  class="invalid-feedback" >
                          Поле должно быть меньше 25 символов!
                        </div>
                        <div   v-if = "!$v.subject.minLength"  class="invalid-feedback" >
                          Поле должно быть болше 3 символов!
                        </div>

                        <div class="help-block"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="address-textarea">
                      <div class="form-group field-mailform-comments required">
                        <textarea
                          id="mailform-comments"
                          class="form-control"
                          :class = "{'is-invalid': $v.comment.$error}"
                          v-model="comment"
                          @blur="$v.comment.$touch()"
                          name="MailForm[comments]"
                          rows="16"
                          placeholder="Ваш коментарий"
                          aria-required="true"
                        ></textarea>                       
                        <div   v-if = "!$v.comment.maxLength"  class="invalid-feedback" >
                          Поле должно быть меньше 500 символов!
                        </div>
                        <div   v-if = "!$v.comment.minLength"  class="invalid-feedback" >
                          Поле должно быть болше 5 символов!
                        </div>

                        <div class="help-block"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="form-message ml-15"></p>
              <div class="col-xs-12 footer-content mail-content">
                <div class="send-email">
                  <button 
                    type="submit" 
                   class="btn"
                    :disabled="$v.$invalid"
                    >
                        Отправить
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Email Area End -->
    <!-- Brand Logo Start -->
    <div class="brand-area pb-60">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
import { required, maxLength, minLength, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: "",
      email:"",
      phone:"",
      subject:"",
      comment:"",
    };
  },
  methods:{
      submit:function() {
          console.log('=====Submited!=====');
          console.log(this);
      }
  },
  validations: {
    name: {
      required,
       maxLength:maxLength(25),
       minLength:minLength(3)
    },
    email:{
        required,
        maxLength:maxLength(25),
        minLength:minLength(5),
        email
    },
    phone:{
        required,
       maxLength:maxLength(15),
       minLength:minLength(4)
    },
    subject:{
        required,
       maxLength:maxLength(25),
       minLength:minLength(3)
    },
    comment:{
        required,
       maxLength:maxLength(500),
       minLength:minLength(5)
    }
  },
};
</script>
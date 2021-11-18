<template>
  <!-- Если регисрация успешна -->

  <div class="wraper-login">
    <div class="login">
      <h2>Регистрация личного кабинета</h2>

      <form id="w0" action="/auth/registration" @submit.prevent="submit">
        <input
          type="hidden"
          name="_csrf"
          value="QI36DaLvtE2GTG3tg1hY-b4i5_06VHhWtpBZiq-PZGN17oM76KH6JuF-BtncM2CdhneAz20WDQf_8Svf7ukqVw=="
        />
        <div class="form-group field-regform-username required">
          <label class="control-label" for="regform-username">Логин</label>
          <input
            type="text"
            id="regform-username"
            class="form-control"
            name="RegForm[username]"
            autofocus
            :class="{ 'is-invalid': $v.login.$error }"
            aria-required="true"
            v-model="login"
            @blur="$v.login.$touch()"
          />
          <div v-if="!$v.login.required" class="invalid-feedback">
            Поле обязательно!
          </div>
          <div v-if="!$v.login.maxLength" class="invalid-feedback">
            Поле должно быть меньше 25 символов!
          </div>
          <div v-if="!$v.login.minLength" class="invalid-feedback">
            Поле должно быть болше 3 символов!
          </div>

          <p class="help-block help-block-error"></p>
        </div>
        <div class="form-group field-regform-password required">
          <label class="control-label" for="regform-password">Пароль</label>
          <input
            type="password"
            id="regform-password"
            class="form-control"
            name="RegForm[password]"
            aria-required="true"
            :class="{ 'is-invalid': $v.password.$error }"
            v-model="password"
            @blur="$v.password.$touch()"
          />
          <div v-if="!$v.password.required" class="invalid-feedback">
            Поле обязательно!
          </div>
          <div v-if="!$v.password.maxLength" class="invalid-feedback">
            Поле должно быть меньше 25 символов!
          </div>
          <div v-if="!$v.password.minLength" class="invalid-feedback">
            Поле должно быть болше 6 символов!
          </div>

          <p class="help-block help-block-error"></p>
        </div>
        <div class="form-group field-regform-password_repeat">
          <label class="control-label" for="regform-password_repeat"
            >Пароль повторно</label
          >
          <input
            type="password"
            id="regform-password_repeat"
            class="form-control"
            name="RegForm[password_repeat]"
            :class="{ 'is-invalid': $v.password_repeat.$error }"
            v-model="password_repeat"
            @blur="$v.password_repeat.$touch()"
          />
          <div v-if="!$v.password_repeat.sameAs"  class="invalid-feedback">
            Пароль не совпадает!
          </div>

          <p class="help-block help-block-error"></p>
        </div>

        <div class="form-group field-regform-email required">
          <label class="control-label" for="regform-email">email</label>
          <input
            type="email"
            id="regform-email"
            class="form-control"
            name="RegForm[email]"
            :class="{ 'is-invalid': $v.email.$error }"
            v-model="email"
            @blur="$v.email.$touch()"
            aria-required="true"
          />
          <div v-if="!$v.email.required" class="invalid-feedback">
            Поле email обязательно!
          </div>
          <div v-if="!$v.email.maxLength" class="invalid-feedback">
            Поле должно быть меньше 25 символов!
          </div>
          <div v-if="!$v.email.minLength" class="invalid-feedback">
            Поле должно быть болше 5 символов!
          </div>
          <div v-if="!$v.email.email" class="invalid-feedback">
            Введите корреткный email!
          </div>

          <p class="help-block help-block-error"></p>
        </div>

        <div class="form-group field-regform-verifycode">
          <label class="control-label" for="regform-verifycode"
            >Verify Code</label
          >

          <div class="row">
            <div class="col-lg-2 col-3">
              <img
                id="regform-verifycode-image"
                src="/site/captcha?v=6195f95fec24a7.10313480"
                alt=""
              />
            </div>
            <div class="col-lg-5 col-3 ml-3">
              <input
                type="text"
                id="regform-verifycode"
                class="form-control"
                name="RegForm[verifyCode]"
              />
            </div>
          </div>

          <p class="help-block help-block-error"></p>
        </div>
        <div class="loginButton">
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="$v.$invalid"
            >
              Зарегестрировать
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      login: "",
      password: "",
      email: "",
      password_repeat:""
    };
  },
  methods: {
    submit: function () {
      console.log("=====Submited!=====");
    },
  },

  validations: {
    login: {
      required,
      maxLength: maxLength(25),
      minLength: minLength(3),
    },
    email: {
      required,
      maxLength: maxLength(25),
      minLength: minLength(5),
      email,
    },
    password: {      
      maxLength: maxLength(25),
      minLength: minLength(6),
    },
    password_repeat:{
        sameAs: sameAs('password')
    }
  },
};
</script>
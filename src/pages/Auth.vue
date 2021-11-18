<template>
  <div class="wraper-login">
    <div class="login">
      <h2>Вход в личный кабинет</h2>

      <form id="w0" action="/auth/login" method="post">
        <input
          type="hidden"
          name="_csrf"
          value="CLs6-TmZPQBc1Jn9dSxFAP8fQHBwGf6oUrd_O7hy9EQw7mPBVqh2XxW28IQBZDFzt3IBADMvm-ME5EsIzQGNIg=="
        />
        <div class="form-group field-loginform-username required">
          <label class="control-label" for="loginform-username">Логин</label>
          <input
            type="text"
            id="loginform-username"
            class="form-control"
            name="LoginForm[username]"
            autofocus
            aria-required="true"
          />

          <p class="help-block help-block-error"></p>
        </div>
        <div class="form-group field-loginform-password required">
          <label class="control-label" for="loginform-password">Пароль</label>
          <input
            type="password"
            id="loginform-password"
            class="form-control"
            name="LoginForm[password]"
            aria-required="true"
          />

          <p class="help-block help-block-error"></p>
        </div>
        <div class="loginButton">          
            <router-link to="/registration">Регистрация</router-link>
          <div class="form-group">
            <div class="col-lg-offset-1 col-lg-11">
              <button type="submit" class="btn btn-primary" name="login-button">
                Вход
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeCreate(){
      console.log("Befor Created!")

       if (localStorage.user && localStorage.pass ) {
            console.log("Redirect to cabinet!")
            this.$router.push('cabinet');
    }
  }
};
</script>
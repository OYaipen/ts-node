<template>
  <!-- Dropdown - Language -->
  <li class="nav-item dropdown no-arrow mx-1">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <fa icon="language" class="fa-fw" />
      <span class="badge badge-danger badge-counter">{{ locales[locale] }}</span>
    </a>
    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in text-center">
      <h6 class="dropdown-header">{{$t('language')}}</h6>
      <a
        v-for="(value, key) in locales"
        :key="key"
        class="dropdown-item align-items-center"
        href="#"
        @click.prevent="setLocale(key)"
      >{{ value }}</a>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
import { loadMessages } from "~/plugins/i18n";

export default {
  computed: mapGetters({
    locale: "lang/locale",
    locales: "lang/locales"
  }),

  methods: {
    setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale);

        this.$store.dispatch("lang/setLocale", { locale });
      }
    }
  }
};
</script>

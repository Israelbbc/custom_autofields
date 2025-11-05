// js/sync_title.js
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.customAutofieldsSync = {
    attach: function (context, settings) {
      if (drupalSettings.custom_autofields && drupalSettings.custom_autofields.syncFields) {
        const sourceSelector = drupalSettings.custom_autofields.syncFields.source;
        const targetSelector = drupalSettings.custom_autofields.syncFields.target;

        $(sourceSelector, context).once('sync-title').on('input keyup', function () {
          $(targetSelector).val($(this).val());
        });
      }
    }
  };
})(jQuery, Drupal, drupalSettings);

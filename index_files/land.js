var LandForm = LandForm || (function () {


    return {
        form: $('#land-form'),
        tag: 'SaleFormSubmit',
        data: {},
        getData: function () {
            return {
                'first_name': $('#land-form input[name="Customers[first_name]"]').val(),
                'last_name': $('#land-form input[name="Customers[last_name]"]').val(),
                'email': $('#land-form input[name="Customers[email]"]').val(),
                'phone': $('#land-form input[name="Customers[phone]"]').val(),
            };
        },
        failValidate: function (errorAttributes) {
            let data = this.getData();

            pAnalytics.tag({
                "tag": 'SaleFormFailSubmit',
                "data": data
            });
        },
        beforeSubmit: function () {
            let data = this.getData();
            for (let i in this.data) {
                data[i] = this.data[i];
            }

            pAnalytics.tag({
                "tag": this.tag,
                "data": data
            });
        }
    }

})();

$(document).ready(function () {
    LandForm.form.on('beforeSubmit', function (e) {
        LandForm.beforeSubmit();
        return true;
    });

    LandForm.form.on('afterValidate', function (event, messages, errorAttributes) {
        if (errorAttributes.length) {
            LandForm.failValidate(errorAttributes);
        }
    });
});


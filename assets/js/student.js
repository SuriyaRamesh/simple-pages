$(document).ready(function(){

    function validate(elename) {
        if(! $(elename).val()) {
            $(elename).css('border-color', 'red');
        }
        else {
            $(elename).css('border-color','grey');
        }
    }

    $('#add_student').click(function () {
        var allele = ['#name', '#reg_no', '#dept', '#sem', '#email']
        $.each(allele, function (index, value) {
            validate(value);
        });

    })


   /* $('#stu_form').validate({
        rules: {
            name: {
                required: true,
                name: true
            },
            reg_no: {
                required: true,
                reg_no: true
            },
            dept: {
                required: true,
                dept: true
            },
            sem: {
                required: true,
                sem: true
            },
            email: {
                required: true,
                email: true
            }

        }
    })*/


})
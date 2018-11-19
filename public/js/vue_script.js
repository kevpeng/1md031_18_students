var vm = new Vue({
    el: '#myID',
    data: {
        burgers: food,
        customer_details: [],
        order: []


    },
    methods: {
        submit: function(id) {
            var name  = document.getElementById("fullname").value;
            var email = document.getElementById("Email").value;
            // var street_num  = document.getElementById("House_number").value;
            // var street_name = document.getElementById("Street_name").value;
            var payment_mthd = document.getElementById("Payment").value;
            var gender = document.querySelector('input[name="gender"]:checked').value;

            var burgers_selected = [];
            for(var burger in this.burgers) {
                if(document.getElementById(this.burgers[burger].name).checked) {
                    burgers_selected.push(this.burgers[burger].name);


                }
            }
            var array = [
                name,
                email,
                // street_num + ' ' +
                // street_name,
                payment_mthd,
                gender
            ]
            this.customer_details = array;
            this.order = burgers_selected;
            var e = document.getElementById(id);
            e.style.display='block';

        }

    }



});





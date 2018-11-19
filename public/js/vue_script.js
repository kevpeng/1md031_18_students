'use strict';
var socket = io();

var vm = new Vue({
    el: '#myID',
    data: {
        burgers: food,
        customer_details: [],
        orders: [],
            x: 0,
            y: 0
    },
    methods: {
        submit: function(id) {
            var name  = document.getElementById("fullname").value;
            var email = document.getElementById("Email").value;
            // var street_num  = document.getElementById("House_number").value;
            // var street_name = document.getElementById("Street_name").value;
            var payment_mthd = document.getElementById("Payment").value;
            var gender = document.querySelector('input[name="gender"]:checked').value;
            var deliver_to = 0;

            var burgers_selected = [];
            for(var burger in this.burgers) {
                if(document.getElementById(this.burgers[burger].name).checked) {
                    burgers_selected.push(this.burgers[burger].name);


                }
            }
            var array = [
                name,
                email,
                deliver_to,
                // street_num + ' ' +
                // street_name,
                payment_mthd,
                gender
            ]
            this.customer_details = array;
            this.orders = burgers_selected;
            var e = document.getElementById(id);
            e.style.display='block';

        },
        displayOrder: function(event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top};
            this.x = event.clientX - 10 - offset.x;
            this.y = event.clientY - 10 - offset.y;
            console.log(offset);
            console.log(this.x + ' ' + this.y);
        },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            socket.emit("addOrder", { orderId: this.getNext(),
                details: { x: event.clientX - 10 - this.x,
                    y: event.clientY - 10 - this.y },
                orderItems: this.orders

            });
        }



    }



});





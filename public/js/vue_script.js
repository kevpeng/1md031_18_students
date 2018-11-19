'use strict';
var socket = io();

var vm = new Vue({
    el: '#myID',
    data: {
        burgers: food,
        customer_details: [],
        delivery_details: [],
        orders:
            [],
            x: 0,
            y: 0
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(id) {
            var name  = document.getElementById("fullname").value;
            var email = document.getElementById("Email").value;
            // var street_num  = document.getElementById("House_number").value;
            // var street_name = document.getElementById("Street_name").value;
            var payment_mthd = document.getElementById("Payment").value;
            var gender = document.querySelector('input[name="gender"]:checked').value;
            this.delivery_details = [this.x, this.y];
            console.log(this.delivery_details);
            var burgers_selected = [];
            for(var burger in this.burgers) {
                if(document.getElementById(this.burgers[burger].name).checked) {
                    burgers_selected.push(this.burgers[burger].name);


                }
            }

            this.customer_details = [
                name,
                email,
                payment_mthd,
                gender
            ];

            this.orders = burgers_selected;
            var e = document.getElementById(id);
            e.style.display='block';


            socket.emit("addOrder", { orderId: this.getNext(),
                details: { x: this.x,
                    y: this.y },
                orderItems: this.orders,
                customer_info: this.customer_details
            });
        },
        displayOrder: function(event) {
            var offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            this.x = event.clientX - 10 - offset.x;
            this.y = event.clientY - 10 - offset.y;
        }
    }



});





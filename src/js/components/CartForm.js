if (document.querySelector('.cart-form')) {
    let productForm = new Vue({
        el:".cart-form",

        data(){
            return{
                

            }
        },
        methods:{
            addToCart(){
                axios.post('/cart/add.js', this.form)
                .then(function(response){
                    // console.log(response);
                    new Noty({
                        type: 'success',
                        timeout: 3000,
                        layout: 'topRight',
                        text: 'Product added to cart!'
                    }).show();

                })
                .catch(function(error){
                    // console.log(error);
                    new Noty({
                        type: 'error',
                        layout: 'topRight',
                        text: 'Some notification text'
                    }).show();
                })
            }
        }
    });
}
 export const Mixin = {
    data() {
        return {
            money:'20000',
            search:'',
            fruits : ['Apple','Mango','Banana','WaterMelon']
        }
    },
    filters : {
        moneyFormat(value) {
             return Intl.NumberFormat('en-US',{
                  style: 'currency',
                currency: 'USD',
            }).format(value);
        }
    },
    computed : {
        filteredFruits() {
           return  this.fruits.filter(fruit => {
                return fruit.toLowerCase().includes(this.search.toLowerCase());
                // return fruit.match(this.search)
            })
        }
    }
};

// export default Mixin;
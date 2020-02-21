// Example of a WORKING PizzUni Class
class PizzUni {
    constructor() {
        this.registeredUsers = [];
        this.availableProducts = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        this.orders = [];
    }

    registerUser(email) {

        const user = this.doesTheUserExist(email);

        if (user) {
            throw new Error(`This email address (${email}) is already being used!`)
        }

        const currentUser = {
            email,
            orderHistory: []
        };

        this.registeredUsers.push(currentUser);

        return currentUser;
    }

    makeAnOrder(email, orderedPizza, orderedDrink) {

        const user = this.doesTheUserExist(email);

        if (!user) {
            throw new Error(`You must be registered to make orders!`);
        }

        const isThereAPizzaOrdered = this.availableProducts.pizzas.includes(orderedPizza);

        if (!isThereAPizzaOrdered) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        }

        let userOrder = {
            orderedPizza
        };

        const isThereADrinkOrdered = this.availableProducts.drinks.includes(orderedDrink);

        if (isThereADrinkOrdered) {
            userOrder.orderedDrink = orderedDrink;
        }

        user.orderHistory.push(userOrder);

        const currentOrder = {
            ...userOrder,
            email,
            status: 'pending'
        };
        this.orders.push(currentOrder);

        return this.orders.length - 1;
    }

    detailsAboutMyOrder(id) {
        if (this.orders[id]) {
            return `Status of your order: ${this.orders[id].status}`;
        }
    }

    doesTheUserExist(email) {
        return this.registeredUsers.filter((user) => user.email === email)[0];
    }

    completeOrder() {
        if (this.orders.length > 0) {
            const index = this.orders.findIndex((o) => o.status === "pending");
            this.orders[index].status = 'completed';

            return this.orders[index];
        }
    }
}
module.exports = PizzUni; // This piece of code exports the PizzUni Class, so it could be accessed in other files.

describe('PizzUni behavior', function () {

    let actualResult;
    let expectedResult;
    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
    });

    describe('Constructor CHECK', function () {
        it('should have empty users collection', function () {
            actualResult = new PizzUni().registeredUsers;
            expectedResult = [];

            assert.deepEqual(actualResult,expectedResult);
        });
        it('should have empty orders collection', function () {
            actualResult = new PizzUni().orders;
            expectedResult = [];

            assert.deepEqual(actualResult,expectedResult);
        });
        it('should have availableProducts object with 2 collections', function () {
            actualResult = new PizzUni().availableProducts;
            expectedResult = { pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']};

            assert.deepEqual(actualResult,expectedResult);
        });
    })

    describe('doesTheUserExist and registerUser CHECK', function () {
        it('should return registered user', function () {
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };
            let anotherUser = {
                email: 'myNewMail',
                orderHistory: []
            };

            let pizzaria = new  PizzUni();
            pizzaria.registeredUsers.push(currentUser);
            expectedResult = pizzaria.registeredUsers[0];

            actualResult = pizzaria.doesTheUserExist('myMail');

            assert.deepEqual(actualResult, expectedResult);
        });

        it('should throw Error when user is already registered', function () {
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };

            let pizzaria = new  PizzUni();
            pizzaria.registeredUsers.push(currentUser);

            expectedResult = `This email address (${currentUser.email}) is already being used!` ;
            expect(() => pizzaria.registerUser('myMail')).to.Throw(expectedResult);
        });

        it('should register new user properly', function () {
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };

            let pizzaria = new  PizzUni();
            expectedResult = pizzaria.registerUser('myMail');
            actualResult = currentUser;

            assert.deepEqual(actualResult, expectedResult);
        });
    } );

    describe('makeAnOrder CHECK', function () {
        it('should throw Error when user is not registered', function () {
            expectedResult = `You must be registered to make orders!`;
            let pizzaria = new  PizzUni();

            expect(() => pizzaria.makeAnOrder('fancymail','Barbeque Classic', 'Fanta')).
                        to.Throw(expectedResult);
        });
        it('should throw Error when no pizza is orderded', function () {
            let pizzaria = new  PizzUni();
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };
            pizzaria.registeredUsers.push(currentUser);
            expect(() => pizzaria.makeAnOrder('myMail', '', 'Fanta')).to.
                Throw('You must order at least 1 Pizza to finish the order.');
        });
        it('should add order to users order history', function () {
            let userOrder = {
                orderedPizza:'Italian Style',
                orderedDrink:'Fanta'
            };
            let pizzaria = new  PizzUni();
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };
            pizzaria.registeredUsers.push(currentUser);
            pizzaria.makeAnOrder('myMail', 'Italian Style', 'Fanta');

            expectedResult = userOrder;
            actualResult = currentUser.orderHistory[0];

            assert.deepEqual(actualResult, expectedResult);
        });
        it('should succesfully create a new order', function () {
            let userOrder = {
                orderedPizza:'Italian Style',
                orderedDrink:'Fanta'
            };
            let pizzaria = new  PizzUni();
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };
            pizzaria.registeredUsers.push(currentUser);

            const currentOrder = {
                ...userOrder,
                email:'myMail',
                status: 'pending'
            };

            expectedResult = currentOrder;
            let index = pizzaria.makeAnOrder('myMail','Italian Style', 'Fanta');
            actualResult = pizzaria.orders[index];
            assert.deepEqual(actualResult, expectedResult);
        });
        it('should return info about order status', function () {
            let userOrder = {
                orderedPizza:'Italian Style',
                orderedDrink:'Fanta'
            };
            let pizzaria = new  PizzUni();
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };
            pizzaria.registeredUsers.push(currentUser);
            const currentOrder = {
                ...userOrder,
                email:'myMail',
                status: 'pending'
            };

            expectedResult = currentOrder.status;
            let index = pizzaria.makeAnOrder('myMail','Italian Style', 'Fanta');
            actualResult = pizzaria.orders[index].status;

            assert.deepEqual(actualResult, expectedResult);
        });
    });
    describe('completeOrder CHECK', function () {
        it('should change status from pending to complete', function () {
            let userOrder = {
                orderedPizza:'Italian Style',
                orderedDrink:'Fanta'
            };
            let pizzaria = new  PizzUni();
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };
            pizzaria.registeredUsers.push(currentUser);
            const currentOrder = {
                ...userOrder,
                email:'myMail',
                status: 'pending'
            };
            let index = pizzaria.makeAnOrder('myMail','Italian Style', 'Fanta');
            expectedResult = 'completed';
            let endOrder = pizzaria.completeOrder();
            actualResult = endOrder.status;

            assert.deepEqual(actualResult, expectedResult);
        });
        it('should successfully complete order', function () {
            let userOrder = {
                orderedPizza:'Italian Style',
                orderedDrink:'Fanta'
            };
            let pizzaria = new  PizzUni();
            let currentUser = {
                email: 'myMail',
                orderHistory: []
            };
            pizzaria.registeredUsers.push(currentUser);
            const currentOrder = {
                ...userOrder,
                email:'myMail',
                status: 'pending'
            };
            let index = pizzaria.makeAnOrder('myMail','Italian Style', 'Fanta');
            currentOrder.status = 'completed';
            expectedResult = currentOrder;
            actualResult = pizzaria.completeOrder();
            assert.deepEqual(actualResult, expectedResult);

        });
    });
});

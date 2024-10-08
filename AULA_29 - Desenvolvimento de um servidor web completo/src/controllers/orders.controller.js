import Order from '../dao/classes/order.dao.js';
import Business from '../dao/classes/business.dao.js';
import User from '../dao/classes/user.dao.js';

const userService = new User();
const businessService = new Business();
const orderService = new Order();

export const getOrders = async (req, res)=>{
    let result = await orderService.getOrders();
    res.send({status:"Success", result});
};

export const getOrderById = async (req, res)=>{
    const {oid} = req.params;
    let order = await orderService.getOrderById(oid);
    res.send({status:"Success", result:order});
};
export const createOrder = async (req, res)=>{
    const {user, business, products} = req.body;
    const resultUser = await userService.getUserById(user);
    const resultBusiness = await businessService.getBusinessById(business);
    let actualOrder = resultBusiness.products.filter(product=>products.includes(product.id));
    let sum = actualOrder.reduce((acc, prev)=>{
        acc+=prev.price;
        return acc;
    },0);
    let orderNumber = Date.now() + Math.floor(Math.random()*10000+1);
    let order = {
        number:orderNumber,
        business,
        user,
        status:"pending",
        products:actualOrder.map(product=>product.id),
        totalPrice:sum
    };
    let orderResult = await orderService.createOrder(order);
    resultUser.orders.push(orderResult._id);
    await userService.updateUser(user, resultUser);
    res.send({status:"Success", orderResult});
};
export const resolveOrder = async (req, res)=>{
    const {resolve} = req.query;
    let order = await orderService.getOrderById(req.params.oid);
    order.status = resolve;
    await orderService.resolveOrder(order._id, order);
    res.send({status:"Success", result:"Order resolved"});
};
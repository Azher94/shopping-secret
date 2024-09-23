import { Order, Product, User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";

export const getOrdersByUsername = async (username) => {
  try {
    const orders = await Order.find({ username }).lean();
    return orders;
  } catch (err) {
    console.error("Error fetching orders by username:", err);
    throw new Error("Error fetching orders");
  }
};
export const getAllOrders = async () => {
  try {
    connectToDb();
    const orders = await Order.find();
    return JSON.parse(JSON.stringify(orders));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch orders!");
  }
};

export const getOrder = async (slug) => {
  try {
    connectToDb();
    const order = await Order.findOne(slug);
    return order;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch order!");
  }
};

export const fetchProducts = async () => {
  try {
    connectToDb();
    const products = await Product.find();

    return JSON.parse(JSON.stringify(products));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch orders!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

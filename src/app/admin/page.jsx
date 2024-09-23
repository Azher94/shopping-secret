import Link from "next/link";

const AdminPage = () => {
  return (
    <div className="min-h-screen flex flex-col p-10 mt-40">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex flex-col gap-6">
        <Link
          href="/admin/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Manage Products
        </Link>

        <Link
          href="/admin/orders"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Manage Orders
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;

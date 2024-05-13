import AdminHeader from "@/app/components/AdminHeader";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { ToastBar } from "react-hot-toast";



const inter = Roboto({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Admin-CraveCrafter : Delivering Delights, One Bite at p Time",
  description: "Delivering Delights, One Bite at p Time",
};

export default function RootLayout({ children }) {
  return (
   <div className={inter.className}>
    <AdminHeader/>
    <main className="flex px-[8%] mt-5">
  <div className="w-1/4 text-[#0A090A] bg-[#ea9a11]  py-4 px-2 rounded-md">
    <div className="flex flex-col space-y-5  ">
      <Link href="/admin">
        <p className="text-lg hover:text-[#ea9a11] hover:p-3 hover:rounded-md hover:bg-[#0A090A] hover:transition-all hover:duration-300">Dashboard</p>
      </Link>
      <Link href="#">
        <p className="text-lg hover:text-[#ea9a11] hover:p-3 hover:rounded-md hover:bg-[#0A090A] hover:transition-all hover:duration-300">Manage Users</p>
      </Link>
      <Link href="/admin/categories">
        <p className="text-lg hover:text-[#ea9a11] hover:p-3 hover:rounded-md hover:bg-[#0A090A] hover:transition-all hover:duration-300">Manage Categories</p>
      </Link>
      <Link href="/admin/foods">
        <p className="text-lg hover:text-[#ea9a11] hover:p-3 hover:rounded-md hover:bg-[#0A090A] hover:transition-all hover:duration-300">Manage Foods</p>
      </Link>
      <Link href="#">
        <p className="text-lg hover:text-[#ea9a11] hover:p-3 hover:rounded-md hover:bg-[#0A090A] hover:transition-all hover:duration-300">Manage Orders</p>
      </Link>
      <Link href="#">
        <p className="text-lg hover:text-[#ea9a11] hover:p-3 hover:rounded-md hover:bg-[#0A090A] hover:transition-all hover:duration-300">Manage Payments</p>
      </Link>
      <Link href="#">
        <p className="text-lg hover:text-[#ea9a11] hover:p-3 hover:rounded-md hover:bg-[#0A090A] hover:transition-all hover:duration-300">Logout</p>
      </Link>
    </div>
  </div>
  <div className="w-3/4 p-4">

    {children}

  </div>
</main>

   
  
   </div>
  );
}

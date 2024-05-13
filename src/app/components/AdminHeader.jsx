import Image from 'next/image';
import Link from 'next/link';

const AdminHeader = () => {
  return (
    <div className="bg-[#0A090A] text-[#ea9a11] flex justify-between items-center px-8 py-2">
      <div className="flex items-center">
        <Link href="/">
          <p className="flex items-center space-x-2 flex-col">
            <Image src="/images/food.png" width={60} height={60} alt="Logo" />
            <span className="text-xl font-bold">CraveCrafter</span>
          </p>
        </Link>
      </div>

      <div className="flex space-x-4">
        <Link href="/">
          <p className="text-gold hover:text-orange-200 transition duration-300">Home</p>
        </Link>
        <Link href="/login">
          <p className="text-gold hover:text-orange-200 transition duration-300">Login</p>
        </Link>
        <Link href="/register">
          <p className="text-gold hover:text-orange-200 transition duration-300">Register</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;


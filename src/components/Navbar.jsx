import Link from "next/link"

function Navbar() {
  return (
<nav className=" bg-gray-500 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <div className=" hidden w-full md:block md:w-auto " id="navbar-default">
      <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href="/" className="block py-2 px-3 text-gray-900  rounded md:bg- md:hover:text-white md:text-black-700 md:p-0 dark:text-gray md:dark:text-blue-500 mr-20 font-bold" aria-current="page">Floreria Flores</Link>
        </li>
        <li>
          <Link href="/categoria" className="block py-2 px-3 text-gray-900 rounded   md:hover:bg- md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg- ml-20">Categorias</Link>
        </li>
        <li>
          <Link href="/cliente" className="block py-2 px-3 text-gray-900 rounded  md:hover:bg- md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-">Clientes</Link>
        </li>
        <li>
          <Link href="/producto" className="block py-2 px-3 text-gray-900 rounded  md:hover:bg- md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-">Productos</Link>
        </li>
        <li>
          <Link href="/usuario" className="block py-2 px-3 text-gray-900 rounded   md:hover:bg- md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-">Usuarios</Link>
        </li>
        <li>
          <Link href="/venta" className="block py-2 px-3 text-gray-900 rounded  md:hover:bg- md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Ventas</Link>
        </li>
        <li>
          <Link href="/upload" className="block py-2 px-3 text-gray-900 rounded  md:hover:bg- md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-">Imagenes</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
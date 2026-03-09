import { Link } from "react-router"

export const Dashboard = () => {
  return (
    <div>

        <div className="px-4">
            <h2 className='text-red-500 viga text-3xl  mt-4 '>Welcome to TWC Admin Dashboard</h2>

        <div className="mt-2 text-blue-900">
            <Link to={"/admin/addsermon"}>
            Upload a sermon
            </Link>
            </div>
        </div>
    </div>
  )
}

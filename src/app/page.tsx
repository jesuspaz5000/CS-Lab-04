export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-md p-6 space-y-4 bg-white border rounded-lg">
        <h1 className="text-2xl font-bold text-black text-center">Login</h1>
        <form autoComplete="off">
          {/* Hidden inputs para prevenir autocompletado */}
          <input type="text" style={{ display: 'none' }} />
          <input type="password" style={{ display: 'none' }} />

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Username" 
              autoComplete="new-email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="Password"
              autoComplete="new-password" 
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer" type="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

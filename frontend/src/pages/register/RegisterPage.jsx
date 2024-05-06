import { useForm } from "react-hook-form"

export const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()


  return (
    <div className="mx-12 pt-6">
      <form 
        onSubmit={
          handleSubmit(values => console.log(values))
        }
        className="bg-[#3f3f46] rounded-xl p-8 flex flex-col gap-4 font-bold"
      >

        <label 
          htmlFor="firstName"
          className="-mb-4 after:content-['*'] after:ml-0.5 after:text-red-500"
        >Nombre</label>
        <input 
          type="text"
          placeholder="Cosme"
          id="firstName"
          {...register(
            "firstName",
            { 
              required: 'Por favor ingresa un nombre',
              maxLength: 20 
            }
          )}
          className="placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-slate-500"
        />

        {
          errors.firstName && 
            <span 
              className="font-semibold text-accent-danger italic -mt-3 text-xxl"
            >
              {errors.firstName.message}
            </span>
        }

        <label 
          htmlFor="lastName"
          className="-mb-4 mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
        >Apellido</label>
        <input 
          type="text"
          placeholder="Apellido"
          id="lastName"
          {...register(
            "lastName",
            {
              required: 'Por favor ingresa un apellido',
              maxLength: 32
            }
          )}
          className="placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-slate-500"
        />

        {
          errors.lastName && 
            <span 
              className="font-semibold text-accent-danger italic -mt-3 text-xxl"
            >
              {errors.lastName.message}
            </span>
        }

        <label 
          htmlFor="handle"
          className="-mb-4 mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
        >Nickname</label>
        <input 
          type="text" 
          placeholder="@nick"
          id="handle"
          {...register(
            "handle",
            {
              required: 'Por favor ingresa un nickname',
              maxLength: 20,
              minLength: 8
            }
          )}
          className="placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-slate-500"
        />

        {
          errors.handle && 
            <span 
              className="font-semibold text-accent-danger italic -mt-3 text-xxl"
            >
              {errors.handle.message}
            </span>
        }

        <label 
          htmlFor="email"
          className="-mb-4 mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
        >Email</label>
        <input 
          type="email" 
          placeholder="ejemplo@ejemplo.com"
          autoComplete="username"
          id="email"
          {...register(
            "email",
            {
              required: 'Por favor ingresa un email valido',
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            }
          )}
          className="placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-slate-500"
        />

        {
          errors.email && 
            <span 
              className="font-semibold text-accent-danger italic -mt-3 text-xxl"
            >
              {errors.email.message}
            </span>
        }

        <label 
          htmlFor="password"
          className="-mb-4 mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
        >Contraseña:</label>
        <input 
          type="password" 
          placeholder="Contraseña"
          autoComplete="new-password"
          id="password"
          {...register(
            "password",
            {
              required: 'Por favor ingresa una contraseña',
              minLength: 8
            }
          )}
          className="placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-slate-500"
        />

        {
          errors.password && 
            <span 
              className="font-semibold text-accent-danger italic -mt-3 text-xxl"
            >
              {errors.password.message}
            </span>
        }

        <label 
          htmlFor="confirmPassword"
          className="-mb-4 mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
        >Confirmar contraseña</label>
        <input 
          type="password" 
          placeholder="Confirmar contraseña"
          autoComplete="new-password"
          id="confirmPassword"
          {...register(
            "confirmPassword",
            {
              required: 'Por favor confirma una contraseña',
              minLength: 8
            }
          )}
          className="placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-slate-500"
        />

        {
          errors.confirmPassword && 
            <span 
              className="font-semibold text-accent-danger italic -mt-3 text-xxl"
            >
              {errors.confirmPassword.message}
            </span>
        }

        <label 
          htmlFor="roles"
          className="-mb-4 mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
          >Rol</label>
        <select 
          name="roles" 
          id="roles"
          defaultValue=""
          {...register(
            "roles",
            {
              required: 'Por favor selecciona un rol'
            }
          )}
          className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        >
          <option 
          value="" 
          disabled
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >Selecciona un rol</option>
          <option value="delivery">Delivery</option>
          <option value="sales">Sales</option>
          <option value="admin">Admin</option>
        </select>

        {
          errors.roles && 
            <span 
              className="font-semibold text-accent-danger italic -mt-3 text-xxl"
            >
              {errors.roles.message}
            </span>
        }

        <button 
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 rounded-full w-52 mx-auto py-2 mt-3 text-white font-semibold"
        >Registrar</button>
      </form>
    </div>
  )
}
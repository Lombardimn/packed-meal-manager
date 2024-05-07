export const CallToActions = ({ href='#', target='_self', rel='', children }) => {
  return (
    <a 
      href={ href } 
      target={ target } 
      rel={ rel }
      className="bg-sky-500 hover:bg-sky-700 rounded-full w-[200px] ml-12 py-2 mt-4 text-center text-white font-semibold"
    >
      {children}
    </a>
  )
}
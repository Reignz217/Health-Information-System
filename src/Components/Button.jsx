
export default function Button(props) {
  return (
    <button className="md:px-5 md:py-3 px-3 py-2 bg-[#227C67] hover:bg-[#549686] text-white text-sm font-bold tracking-widest rounded-2xl cursor-pointer">{props.name}</button>
  )
}

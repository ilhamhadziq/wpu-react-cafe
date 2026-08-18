const Button = ({children = "Button"})=>{
    return (
        <button class="search-button px-4 py-1.5 rounded-md bg-[#008080] text-white hover:bg-[#006666] transition-colors">{children}</button>
    )
}
export default Button;
function Button({ children, className = "", ...props }) {
    return (
        <button className={`bg-blue-100 border-2 border-transparent hover:border-blue-300 text-blue-500 transition-all font-bold py-2 px-4 rounded m-1 ${className}`} {...props}>{children}</button>
    )
}

export default Button

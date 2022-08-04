function Card({ children }) {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            {children}
        </div>
    )
}

Card.WithImg = function CardWithImg({ src, children }) {
    return (
        <Card>
            <img src={src} className="w-full" />
            {children}
        </Card>
    )
}

export default Card
